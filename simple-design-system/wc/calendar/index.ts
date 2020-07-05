import {
  addDays,
  startOfWeek,
  startOfMonth,
  format,
  getYear,
  getMonth,
  isValid,
  isSameDay,
  isToday,
  isSameWeek,
  isSameMonth,
  isBefore,
  isAfter,
  subMonths,
  addMonths,
  closestTo,
} from "date-fns";

import template from "./template.html";
const templateEl = document.createElement("template");
templateEl.innerHTML = template;

class Component extends HTMLElement {
  #root: ShadowRoot;
  #$title?: HTMLButtonElement;
  #$today?: HTMLButtonElement;
  #$prev?: HTMLButtonElement;
  #$next?: HTMLButtonElement;
  #$calendar?: HTMLElement;

  #today: Date = new Date();

  // the day controlling the month view
  #visibleDay: Date = this.#today;

  static dateRegex: RegExp = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

  constructor() {
    super();
    this.#root = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.#root.appendChild(templateEl.content.cloneNode(true));
    this.#$title = <HTMLButtonElement>this.#root.getElementById("title");
    this.#$today = <HTMLButtonElement>this.#root.getElementById("today");
    this.#$prev = <HTMLButtonElement>this.#root.getElementById("prev");
    this.#$next = <HTMLButtonElement>this.#root.getElementById("next");
    this.#$calendar = <HTMLElement>this.#root.getElementById("calendar");

    this._changeDate = this._changeDate.bind(this);
    this.goToSelectedMonth = this.goToSelectedMonth.bind(this);
    this.goToThisMonth = this.goToThisMonth.bind(this);
    this.goToPrevMonth = this.goToPrevMonth.bind(this);
    this.goToNextMonth = this.goToNextMonth.bind(this);

    this.#root.addEventListener("click", this._changeDate);
    this.#$title.addEventListener("click", this.goToSelectedMonth);
    this.#$today.addEventListener("click", this.goToThisMonth);
    this.#$prev.addEventListener("click", this.goToPrevMonth);
    this.#$next.addEventListener("click", this.goToNextMonth);

    if (this.date !== null) {
      if (isValid(this._selectedDate())) {
        this.#visibleDay = <Date>this._selectedDate();
      }
    }

    this._renderCalendarView();
  }

  disconnectedCallback() {
    this.#root.removeEventListener("click", this._changeDate);
    this.#$title?.removeEventListener("click", this.goToSelectedMonth);
    this.#$today?.removeEventListener("click", this.goToThisMonth);
    this.#$prev?.removeEventListener("click", this.goToPrevMonth);
    this.#$next?.removeEventListener("click", this.goToNextMonth);
  }

  /**
   * Events
   */

  private _changeDate(e: Event) {
    if (e.target && (e.target as HTMLButtonElement).dataset.date) {
      const newDate = (e.target as HTMLButtonElement).dataset.date;
      if (typeof newDate !== "undefined") {
        if (this.multiple && (this.date === null || this.endDate === null)) {
          e.stopPropagation();
        }
        this._setSelectedDates(newDate);
      }
    }
  }

  goToSelectedMonth(e: Event) {
    e.stopPropagation();
    if (this._selectedDate() === null) return;
    if (!isSameDay(this.#visibleDay, <Date>this._selectedDate())) {
      this.#visibleDay = <Date>this._selectedDate();
    } else if (this.multiple && this._selectedEndDate() !== null) {
      this.#visibleDay = <Date>this._selectedEndDate();
    }
    this._renderCalendarView();
  }

  goToThisMonth(e: Event) {
    e.stopPropagation();
    this.#visibleDay = this.#today;
    this._renderCalendarView();
  }

  goToPrevMonth(e: Event) {
    e.stopPropagation();
    this.#visibleDay = startOfMonth(subMonths(this.#visibleDay, 1));
    this._renderCalendarView();
  }

  goToNextMonth(e: Event) {
    e.stopPropagation();
    this.#visibleDay = startOfMonth(addMonths(this.#visibleDay, 1));
    this._renderCalendarView();
  }

  /**
   * Attribute handlers
   */

  static get observedAttributes() {
    return ["date", "end-date", "min", "max", "multiple"];
  }

  attributeChangedCallback(attr: string, oldVal: string, newVal: string) {
    if (attr === "min" || attr === "max") {
      this._clampSelectedDates();
    }

    if (attr === "multiple" && newVal === null) {
      this.endDate = null;
    }

    this._renderCalendarView();
  }

  /**
   * Props
   */

  set date(val: string | null) {
    if (val !== null) {
      this.setAttribute("date", val);
    } else {
      this.removeAttribute("date");
    }
    const event = new CustomEvent("date", {
      detail: val,
    });
    this.dispatchEvent(event);
  }

  get date() {
    return this.getAttribute("date");
  }

  set endDate(val: string | null) {
    if (val !== null) {
      this.setAttribute("end-date", val);
    } else {
      this.removeAttribute("end-date");
    }
    const event = new CustomEvent("end-date", {
      detail: val,
    });
    this.dispatchEvent(event);
  }

  get endDate() {
    return this.getAttribute("end-date");
  }

  set min(val: string | null) {
    if (val !== null) {
      this.setAttribute("min", val);
    } else {
      this.removeAttribute("min");
    }
    const event = new CustomEvent("min", {
      detail: val,
    });
    this.dispatchEvent(event);
  }

  get min() {
    return this.getAttribute("min");
  }

  set max(val: string | null) {
    if (val !== null) {
      this.setAttribute("max", val);
    } else {
      this.removeAttribute("max");
    }
    const event = new CustomEvent("max", {
      detail: val,
    });
    this.dispatchEvent(event);
  }

  get max() {
    return this.getAttribute("max");
  }

  set multiple(val) {
    if (val) {
      this.setAttribute("multiple", "");
    } else {
      this.removeAttribute("multiple");
    }
    const event = new CustomEvent("multiple", {
      detail: val,
    });
    this.dispatchEvent(event);
  }

  get multiple() {
    return this.hasAttribute("multiple");
  }

  /**
   * Computed properties
   */

  private _selectedDate(): Date | null {
    if (this.date === null) return null;
    return this._getDateFromFormattedString(this.date);
  }

  private _selectedEndDate(): Date | null {
    if (this.endDate === null) return null;
    return this._getDateFromFormattedString(this.endDate);
  }

  private _minDate(): Date | null {
    if (this.min === null) return null;
    return this._getDateFromFormattedString(this.min);
  }

  private _maxDate(): Date | null {
    if (this.max === null) return null;
    return this._getDateFromFormattedString(this.max);
  }

  /**
   * Helpers
   */

  private _isChangingTheStartDate(val: string): boolean {
    if (!this.multiple) return true;
    if (this._selectedDate() === null) return true;
    if (this._selectedEndDate() === null) return false;
    const date = this._getDateFromFormattedString(val);
    if (date == null) return true;
    const closest = closestTo(date, [
      <Date>this._selectedDate(),
      <Date>this._selectedEndDate(),
    ]);
    return isSameDay(closest, <Date>this._selectedDate());
  }

  private _clampSelectedDates() {
    // clamp max to min and reset date/endDate
    if (this._isBeforeMin(<Date>this._maxDate())) {
      this.date = null;
      this.endDate = null;
      this.max = this.min;
      return;
    }

    // clamp min to max and reset date/endDate
    if (this._isAfterMax(<Date>this._minDate())) {
      this.date = null;
      this.endDate = null;
      this.min = this.max;
      return;
    }

    // clamp date to min and max
    if (this.date !== null) {
      if (this._isBeforeMin(<Date>this._selectedDate())) {
        this.date = this.min;
      } else if (this._isAfterMax(<Date>this._selectedDate())) {
        this.date = this.max;
        this.endDate = null;
      }
    }

    // clamp endDate to min and max
    if (this.endDate !== null) {
      if (this._isBeforeMin(<Date>this._selectedEndDate())) {
        this.date = this.min;
        this.endDate = null;
      } else if (this._isAfterMax(<Date>this._selectedEndDate())) {
        this.endDate = this.max;
      }
    }
  }

  private _setSelectedDates(val: string) {
    const isStartDate = this._isChangingTheStartDate(val);

    if (isStartDate) {
      if (this.date === val && this.endDate !== null) {
        this.date = this.endDate;
        this.endDate = null;
      } else if (this.date === val) {
        this.date = null;
      } else {
        this.date = val;
      }
    } else {
      if (this.date === val || this.date === null) {
        this.date = null;
        this.endDate = null;
      } else if (this.endDate === val) {
        this.endDate = null;
      } else {
        const date = <Date>this._getDateFromFormattedString(val);
        if (isBefore(date, <Date>this._selectedDate())) {
          this.endDate = this.date;
          this.date = val;
        } else {
          this.endDate = val;
        }
      }
    }

    // after waiting for next render cycle,
    // if replacement for clicked button is visible,
    // focus it
    setTimeout(() => {
      const btn = this.#$calendar?.querySelector(
        `[data-date="${val}"]`
      ) as HTMLButtonElement;
      if (btn.offsetWidth > 0 && btn.offsetHeight > 0) {
        btn.focus();
      }
    }, 0);
  }

  private _isBeforeMin(date: Date): boolean {
    return isBefore(date, <Date>this._minDate());
  }

  private _isAfterMax(date: Date): boolean {
    return isAfter(date, <Date>this._maxDate());
  }

  private _getDateFromFormattedString(val: string = ""): Date | null {
    const userDateMatchesRegex = val?.match(Component.dateRegex);
    if (!userDateMatchesRegex) return null;
    const dateArr = val.split("-").map((i) => parseInt(i));
    // month is zero-indexed
    dateArr[1] = dateArr[1] - 1;
    const [year, month, day] = dateArr;
    return new Date(year, month, day);
  }

  private _isInsideRange(day: Date) {
    return (
      this._selectedDate() !== null &&
      (isAfter(day, <Date>this._selectedDate()) ||
        isSameDay(day, <Date>this._selectedDate())) &&
      this._selectedEndDate() !== null &&
      (isBefore(day, <Date>this._selectedEndDate()) ||
        isSameDay(day, <Date>this._selectedEndDate()))
    );
  }

  private _isSameWeek(day: Date) {
    return (
      this._selectedDate() !== null &&
      isSameWeek(day, <Date>this._selectedDate()) &&
      this._selectedEndDate() === null
    );
  }

  private _isSameDay(day: Date) {
    return (
      (this._selectedDate() !== null &&
        isSameDay(day, <Date>this._selectedDate())) ||
      (this._selectedEndDate() !== null &&
        isSameDay(day, <Date>this._selectedEndDate()))
    );
  }

  /**
   * Calendar creation
   */

  private _renderCalendarView(
    year: number = getYear(this.#visibleDay),
    month: number = getMonth(this.#visibleDay)
  ) {
    // stop immediately if calendar or title not displayed
    if (typeof this.#$calendar === "undefined") return;
    if (typeof this.#$title === "undefined") return;

    const matrix = Component.generateCalendarMatrix(year, month);

    // Build calendar
    const fragment = document.createDocumentFragment();
    const calendar = document.createElement("table");
    calendar.innerHTML = `
      <thead>
        <tr>
          <th>Sun</th>
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>${matrix
        .map((week: Date[], index: number) => {
          const days = week.map(
            (day: Date, i: number) => `
              <td
                class="
                  ${
                    this._isInsideRange(day) || this._isSameWeek(day)
                      ? "highlight"
                      : ""
                  }
                  ${this._isSameDay(day) ? "active" : ""}
                "
              >
                <button
                  class="
                    btn-date
                    ${!isSameMonth(day, this.#visibleDay) ? "dim" : ""}
                    ${isToday(day) ? "today" : ""}
                  "
                  ${
                    this._isBeforeMin(day) || this._isAfterMax(day)
                      ? `disabled="disabled"`
                      : ""
                  }
                  data-date="${format(day, "yyyy-MM-dd")}"
                >
                  ${format(day, "d")}
                </button>
              </td>
          `
          );
          return `<tr>${days.join("")}</tr>`;
        })
        .join("")}
      </tbody>`;
    fragment.appendChild(calendar);
    (this.#$calendar as HTMLElement).innerHTML = "";
    (this.#$calendar as HTMLElement).appendChild(fragment);

    // Build title
    (this.#$title as HTMLButtonElement).dataset.date = format(
      this.#today,
      "yyyy-MM-dd"
    );
    (this.#$title as HTMLButtonElement).innerHTML = `
      <span class="month">${format(this.#visibleDay, "MMM")}</span>
      <span class="year">${format(this.#visibleDay, "yyyy")}</span>
    `;
  }

  static generateCalendarMatrix(
    year: number,
    month: number,
    weekStartsOn?: any
  ) {
    // 0 = Sunday
    weekStartsOn = weekStartsOn || 0;
    //  1. Generate the date from params, then get the firstDay and lastDay in the month
    const date = new Date(year, month);
    // const firstDay = startOfMonth(date);
    // const lastDay = endOfMonth(date);
    //  2. Get the start date for our matrix
    const startDate = startOfWeek(date, { weekStartsOn });
    //  3. Get the differences in weeks from lastDay to firstDay
    //  Add (+1) to get total row we need for the matrix to cover all the days in the month
    //  It'll be used as total rows needed for our matrix
    // const matrixRows =
    //   differenceInCalendarWeeks(lastDay, firstDay, { weekStartsOn }) + 1;
    // **************************
    // Instead of all that... we just always use 6 rows since
    // it is the smallest number of rows that fits all months
    const matrixRows = 6;
    //  4. Set the number of days in a week.
    //  It'll be used as total columns needed for our matrix
    const matrixColumns = 7;
    //  5. Get the total days that we are going to generate.
    const totalDays = matrixRows * matrixColumns;
    //  Preparations complete! Let's generate the calendar matrix
    const calendar =
      //  6. Generate an empty Array from the totalDays
      Array.from({ length: totalDays })
        //  7. Assign a Date value to each value of the array
        //  We'll get an array with each value is a Date value
        .map((_, index) => addDays(startDate, index))
        //  8. use Array.reduce to transform our array for each week
        //  We want to cut the array at the beginning of each week
        .reduce(
          (matrix: any[], current, index, days) =>
            index % matrixColumns === 0
              ? [...matrix, days.slice(index, index + matrixColumns)]
              : matrix,
          []
        );
    return calendar;
  }
}

customElements.define("sds-calendar", Component);

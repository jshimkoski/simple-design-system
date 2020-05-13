import {
  addDays,
  startOfWeek,
  startOfMonth,
  format,
  getYear,
  getMonth,
  getDate,
  isDate,
  isSameDay,
  isToday,
  isSameWeek,
  isSameMonth,
  isBefore,
  isAfter,
  subMonths,
  addMonths,
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
  #year: number = getYear(this.#today);
  #month: number = getMonth(this.#today);
  #day: number = getDate(this.#today);
  #currentDay: Date = new Date(this.#year, this.#month, this.#day);
  #minDay: Date | boolean = false;
  #maxDay: Date | boolean = false;

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
    this._resetDate = this._resetDate.bind(this);
    this._prevMonth = this._prevMonth.bind(this);
    this._nextMonth = this._nextMonth.bind(this);

    this.#root.addEventListener("click", this._changeDate);
    this.#$title.addEventListener("click", this._resetDate);
    this.#$today.addEventListener("click", this._resetDate);
    this.#$prev.addEventListener("click", this._prevMonth);
    this.#$next.addEventListener("click", this._nextMonth);

    this._extractDate();
    this._renderCalendarView();
  }

  disconnectedCallback() {
    this.#root.removeEventListener("click", this._changeDate);
    this.#$title?.removeEventListener("click", this._resetDate);
    this.#$today?.removeEventListener("click", this._resetDate);
    this.#$prev?.removeEventListener("click", this._prevMonth);
    this.#$next?.removeEventListener("click", this._nextMonth);
  }

  _changeDate(e: Event) {
    if (e.target && (e.target as HTMLButtonElement).dataset.date) {
      const newDate = (e.target as HTMLButtonElement).dataset.date;
      if (typeof newDate !== "undefined") {
        this.date = newDate;
      }
    }
  }

  _resetDate(e: Event) {
    this.date = format(this.#today, "yyyy-MM-dd");
  }

  _prevMonth(e: Event) {
    this.date = format(
      startOfMonth(subMonths(this.#currentDay, 1)),
      "yyyy-MM-dd"
    );
  }

  _nextMonth(e: Event) {
    this.date = format(
      startOfMonth(addMonths(this.#currentDay, 1)),
      "yyyy-MM-dd"
    );
  }

  static get observedAttributes() {
    return ["date", "min", "max"];
  }

  attributeChangedCallback(attr: string, oldVal: string, newVal: string) {
    if (attr === "date") {
      this._extractDate(newVal);
      this._renderCalendarView();
      // (this.#root.querySelector(".active") as HTMLButtonElement).focus();
    }

    if (attr === "min") {
      if (newVal.match(Component.dateRegex)) {
        const dateArr = newVal.split("-").map((i) => parseInt(i));
        // month is zero-indexed
        dateArr[1] = dateArr[1] - 1;
        const [year, month, day] = dateArr;
        this.#minDay = new Date(year, month, day);
      } else {
        this.#minDay = false;
      }
      this._renderCalendarView();
    }

    if (attr === "max") {
      if (newVal.match(Component.dateRegex)) {
        const dateArr = newVal.split("-").map((i) => parseInt(i));
        // month is zero-indexed
        dateArr[1] = dateArr[1] - 1;
        const [year, month, day] = dateArr;
        this.#maxDay = new Date(year, month, day);
      } else {
        this.#maxDay = false;
      }
      this._renderCalendarView();
    }
  }

  /**
   * Props
   */

  set date(val: string | null) {
    this.setAttribute("date", val !== null ? val : "");
    const event = new CustomEvent("date", {
      detail: val,
    });
    this.dispatchEvent(event);
  }

  get date() {
    return this.getAttribute("date");
  }

  set endDate(val: string | null) {
    this.setAttribute("end-date", val !== null ? val : "");
    const event = new CustomEvent("end-date", {
      detail: val,
    });
    this.dispatchEvent(event);
  }

  get endDate() {
    return this.getAttribute("end-date");
  }

  set min(val: string | null) {
    this.setAttribute("min", val !== null ? val : "");
    const event = new CustomEvent("min", {
      detail: val,
    });
    this.dispatchEvent(event);
  }

  get min() {
    return this.getAttribute("min");
  }

  set max(val: string | null) {
    this.setAttribute("max", val !== null ? val : "");
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
   * Calendar creation
   */

  private _extractDate(val: string = "") {
    const userDateMatchesRegex = val?.match(Component.dateRegex);
    let dateArr;
    if (userDateMatchesRegex) {
      dateArr = val.split("-");
      dateArr = dateArr.map((i) => parseInt(i));
      // month is zero-indexed
      dateArr[1] = dateArr[1] - 1;
    } else {
      dateArr = [
        getYear(this.#today),
        getMonth(this.#today),
        getDate(this.#today),
      ];
    }
    const [year, month, day] = dateArr;
    this.#year = year;
    this.#month = month;
    this.#day = day;
    this.#currentDay = new Date(this.#year, this.#month, this.#day);
  }

  private _renderCalendarView(
    year: number = this.#year,
    month: number = this.#month
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
                  ${isSameWeek(day, this.#currentDay) ? "same-week" : ""}
                "
              >
                <button
                  class="
                    btn-date
                    ${!isSameMonth(day, this.#currentDay) ? "dim" : ""}
                    ${isSameDay(day, this.#currentDay) ? "active" : ""}
                    ${isToday(day) ? "today" : ""}
                  "
                  ${
                    (
                      typeof this.#minDay !== "boolean"
                        ? isBefore(day, this.#minDay)
                        : false
                    )
                      ? `disabled="disabled"`
                      : ""
                  }
                  ${
                    (
                      typeof this.#maxDay !== "boolean"
                        ? isAfter(day, this.#maxDay)
                        : false
                    )
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
      <span class="month">${format(this.#currentDay, "MMM")}</span>
      <span class="year">${format(this.#currentDay, "yyyy")}</span>
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
    let calendar =
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

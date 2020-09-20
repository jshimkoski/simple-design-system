<template>
  <div class="sds-calendar">
    <header>
      <div class="title-wrapper">
        <button
          class="btn-title"
          title="Go to selected month"
          @click="goToSelectedMonth"
        >
          <span class="month">{{ format(visibleDay, "MMM") }}</span>
          <span class="year">{{ format(visibleDay, " yyyy") }}</span>
        </button>
      </div>
      <div>
        <button
          class="btn-prev"
          title="Go to previous month"
          @click="goToPrevMonth"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          class="btn-today"
          title="Go to this month"
          :disabled="isSameMonth(visibleDay, today)"
          @click="goToThisMonth"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
        <button
          class="btn-next"
          title="Go to next month"
          @click="goToNextMonth"
        >
          <svg
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
    <div class="calendar">
      <table>
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
        <tbody>
          <tr v-for="(week, index) in calendarMatrix" :key="index">
            <td
              v-for="(day, i) in week"
              :key="i"
              :class="{
                highlight: isInsideRange(day) || isSameWeek(day),
                active: isSameDay(day),
              }"
            >
              <button
                class="btn-date"
                :class="{
                  dim: !isSameMonth(day, visibleDay),
                  today: isToday(day),
                }"
                :disabled="isBeforeMin(day) || isAfterMax(day)"
                @click="changeDate(day, $event)"
              >
                <span>{{ format(day, "d") }}</span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, toRefs, nextTick } from "vue";
import {
  addDays,
  startOfWeek,
  startOfMonth,
  format,
  getYear,
  getMonth,
  isSameDay as dateFnsIsSameDay,
  isToday,
  isSameWeek as dateFnsIsSameWeek,
  isSameMonth,
  isBefore,
  isAfter,
  subMonths,
  addMonths,
  closestTo,
} from "date-fns";

export default defineComponent({
  name: "Calendar",
  props: {
    date: { type: String, default: null },
    endDate: { type: String, default: null },
    min: { type: String, default: null },
    max: { type: String, default: null },
    multiple: { type: Boolean, default: false },
  },
  setup(props, { emit }) {
    const dateRegex = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

    function getDateFromFormattedString(
      val: string | null | undefined = ""
    ): Date | null {
      if (val !== null && val.trim() === "") return null;
      const userDateMatchesRegex = val?.match(dateRegex);
      if (!userDateMatchesRegex) return null;
      if (val !== null) {
        const dateArr = val.split("-").map((i) => parseInt(i));
        // month is zero-indexed
        dateArr[1] = dateArr[1] - 1;
        const [year, month, day] = dateArr;
        return new Date(year, month, day);
      }
      return null;
    }

    const date = getDateFromFormattedString(props.date);

    const state = reactive({
      today: new Date(),
      visibleDay: date !== null ? date : new Date(),
    });

    const localDate = computed({
      get(): string | null | undefined {
        if (props.date === null || !props.date.match(dateRegex)) return null;
        return props.date;
      },
      set(value: string | null | undefined) {
        emit("update:date", value);
      },
    });

    const localEndDate = computed({
      get(): string | null | undefined {
        if (props.endDate === null || !props.endDate.match(dateRegex))
          return null;
        return props.endDate;
      },
      set(value: string | null | undefined) {
        emit("update:endDate", value);
      },
    });

    const localMin = computed({
      get(): string | null | undefined {
        if (props.min === null || !props.min.match(dateRegex)) return null;
        return props.min;
      },
      set(value: string | null | undefined) {
        emit("update:min", value);
      },
    });

    const localMax = computed({
      get(): string | null | undefined {
        if (props.max === null || !props.max.match(dateRegex)) return null;
        return props.max;
      },
      set(value: string | null | undefined) {
        emit("update:max", value);
      },
    });

    const selectedDate = computed(() => {
      if (localDate.value === null) return null;
      return getDateFromFormattedString(localDate.value);
    });

    const selectedEndDate = computed(() => {
      if (localEndDate.value === null) return null;
      return getDateFromFormattedString(localEndDate.value);
    });

    const minDate = computed(() => {
      if (localMin.value === null) return null;
      return getDateFromFormattedString(localMin.value);
    });

    const maxDate = computed(() => {
      if (localMax.value === null) return null;
      return getDateFromFormattedString(localMax.value);
    });

    const calendarMatrix = computed(() => {
      // 0 = Sunday
      const weekStartsOn = 0;
      const year = getYear(state.visibleDay);
      const month = getMonth(state.visibleDay);
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
            (matrix, current, index, days) =>
              index % matrixColumns === 0
                ? [...matrix, days.slice(index, index + matrixColumns)]
                : (matrix as any),
            []
          );
      return calendar;
    });

    function isChangingTheStartDate(val: string | null | undefined) {
      if (!props.multiple) return true;
      if (selectedDate.value === null) return true;
      if (selectedEndDate.value === null) return false;
      const date = getDateFromFormattedString(val);
      if (date == null) return true;
      const closest = closestTo(date, [
        selectedDate.value,
        selectedEndDate.value,
      ]);
      return dateFnsIsSameDay(closest, selectedDate.value);
    }

    function setSelectedDates(val: string | null | undefined) {
      const isStartDate = isChangingTheStartDate(val);

      if (isStartDate) {
        if (localDate.value === val && localEndDate.value !== null) {
          localDate.value = localEndDate.value;
          localEndDate.value = null;
        } else if (localDate.value === val) {
          localDate.value = null;
        } else {
          localDate.value = val;
        }
      } else {
        if (localDate.value === val || localDate.value === null) {
          localDate.value = null;
          localEndDate.value = null;
        } else if (localEndDate.value === val) {
          localEndDate.value = null;
        } else {
          const date = getDateFromFormattedString(val);
          if (
            date !== null &&
            selectedDate.value !== null &&
            isBefore(date, selectedDate.value)
          ) {
            localEndDate.value = localDate.value;
            localDate.value = val;
          } else {
            localEndDate.value = val;
          }
        }
      }
    }

    function changeDate(day: Date | null, e: { stopPropagation: () => void }) {
      if (day === null) return;
      setSelectedDates(format(day, "yyyy-MM-dd"));
      nextTick(() => {
        if (
          props.multiple &&
          (localDate.value === null || localEndDate.value === null)
        ) {
          e.stopPropagation();
        }
      });
    }

    function goToSelectedMonth(e: { stopPropagation: () => void }) {
      e.stopPropagation();
      if (selectedDate.value === null) return;
      if (!dateFnsIsSameDay(state.visibleDay, selectedDate.value)) {
        state.visibleDay = selectedDate.value;
      } else if (props.multiple && selectedEndDate.value !== null) {
        state.visibleDay = selectedEndDate.value;
      }
    }

    function goToThisMonth(e: { stopPropagation: () => void }) {
      e.stopPropagation();
      state.visibleDay = state.today;
    }

    function goToPrevMonth(e: { stopPropagation: () => void }) {
      e.stopPropagation();
      state.visibleDay = startOfMonth(subMonths(state.visibleDay, 1));
    }

    function goToNextMonth(e: { stopPropagation: () => void }) {
      e.stopPropagation();
      state.visibleDay = startOfMonth(addMonths(state.visibleDay, 1));
    }

    function clampSelectedDates() {
      // clamp max to min and reset date/endDate
      if (isBeforeMin(maxDate.value)) {
        localDate.value = null;
        localEndDate.value = null;
        localMax.value = localMin.value;
        return;
      }

      // clamp min to max and reset date/endDate
      if (isAfterMax(minDate.value)) {
        localDate.value = null;
        localEndDate.value = null;
        localMin.value = localMax.value;
        return;
      }

      // clamp date to min and max
      if (localDate.value !== null) {
        if (isBeforeMin(selectedDate.value)) {
          localDate.value = localMin.value;
        } else if (isAfterMax(selectedDate.value)) {
          localDate.value = localMax.value;
          localEndDate.value = null;
        }
      }

      // clamp endDate to min and max
      if (localEndDate.value !== null) {
        if (isBeforeMin(selectedEndDate.value)) {
          localDate.value = localMin.value;
          localEndDate.value = null;
        } else if (isAfterMax(selectedEndDate.value)) {
          localEndDate.value = localMax.value;
        }
      }
    }

    function isBeforeMin(date: Date | null): boolean {
      if (date === null || minDate.value === null) return false;
      return isBefore(date, minDate.value);
    }

    function isAfterMax(date: Date | null): boolean {
      if (date === null || maxDate.value === null) return false;
      return isAfter(date, maxDate.value);
    }

    function isInsideRange(day: Date | null): boolean {
      if (day === null) return false;
      return (
        selectedDate.value !== null &&
        (isAfter(day, selectedDate.value) ||
          dateFnsIsSameDay(day, selectedDate.value)) &&
        selectedEndDate.value !== null &&
        (isBefore(day, selectedEndDate.value) ||
          dateFnsIsSameDay(day, selectedEndDate.value))
      );
    }

    function isSameWeek(day: Date | null): boolean {
      if (day === null) return false;
      return (
        selectedDate.value !== null &&
        dateFnsIsSameWeek(day, selectedDate.value) &&
        selectedEndDate.value === null
      );
    }

    function isSameDay(day: Date | null): boolean {
      if (day === null) return false;
      return (
        (selectedDate.value !== null &&
          dateFnsIsSameDay(day, selectedDate.value)) ||
        (selectedEndDate.value !== null &&
          dateFnsIsSameDay(day, selectedEndDate.value))
      );
    }

    return {
      // state
      ...toRefs(state),

      // computed
      selectedDate,
      selectedEndDate,
      minDate,
      maxDate,
      calendarMatrix,

      // methods
      format,
      isToday,
      isSameMonth,
      changeDate,
      goToSelectedMonth,
      goToThisMonth,
      goToPrevMonth,
      goToNextMonth,
      clampSelectedDates,
      isBeforeMin,
      isAfterMax,
      isInsideRange,
      isSameWeek,
      isSameDay,
    };
  },
});
</script>

<style scoped lang="postcss">
/**
 * Color variants
 */

.sds-calendar {
  @apply block;
  --cal-variant: var(--color-gray-500);
  --cal-on-variant: var(--color-white);
}

.sds-calendar[variant="white"] {
  --cal-variant: var(--color-white);
  --cal-on-variant: var(--color-black);
}

.sds-calendar[variant="black"] {
  --cal-variant: var(--color-black);
}

.sds-calendar[variant="blue"] {
  --cal-variant: var(--color-blue-500);
}

.sds-calendar[variant="green"] {
  --cal-variant: var(--color-green-500);
}

.sds-calendar[variant="indigo"] {
  --cal-variant: var(--color-indigo-500);
}

.sds-calendar[variant="orange"] {
  --cal-variant: var(--color-orange-500);
}

.sds-calendar[variant="pink"] {
  --cal-variant: var(--color-pink-500);
}

.sds-calendar[variant="purple"] {
  --cal-variant: var(--color-purple-500);
}

.sds-calendar[variant="red"] {
  --cal-variant: var(--color-red-500);
}

.sds-calendar[variant="teal"] {
  --cal-variant: var(--color-teal-500);
}

.sds-calendar[variant="yellow"] {
  --cal-variant: var(--color-yellow-500);
  --cal-on-variant: var(--color-black);
}

/**
 * Base styles
 */

header {
  @apply flex mb-1;
}

.title-wrapper {
  @apply flex-grow my-auto;
}

.btn-title {
  @apply whitespace-no-wrap text-left text-xl font-semibold text-gray-900 py-0 px-1 border-0 bg-transparent rounded cursor-pointer;

  & .year {
    color: var(--cal-variant);
  }

  &:hover,
  &:focus {
    @apply underline;
  }

  &:focus {
    @apply outline-none shadow-outline;
  }
}

.btn-prev,
.btn-next,
.btn-today {
  @apply p-2 text-base text-gray-900 bg-transparent border-0 rounded cursor-pointer;

  &:hover,
  &:focus {
    @apply bg-gray-200;
  }

  &:focus {
    @apply outline-none shadow-outline;
  }

  &[disabled] {
    @apply opacity-50 pointer-events-none;
  }

  svg {
    @apply w-5 h-5;
  }
}

.btn-prev,
.btn-today {
  @apply mr-1;
}

table {
  @apply border-0 w-full;
  border-spacing: 0;
}

th {
  @apply text-xs uppercase font-light text-gray-500;
}

th,
td {
  @apply text-center;
}

.highlight {
  @apply bg-gray-200;
}

.btn-date {
  @apply flex mx-auto text-sm h-8 w-8 text-gray-900 bg-transparent border-0 rounded items-center justify-center text-center cursor-pointer;

  &:focus {
    @apply outline-none shadow-outline;
  }

  &[disabled] {
    @apply opacity-25 pointer-events-none;
  }
}

.dim {
  @apply text-gray-600;
}

.today,
.active .btn-date,
.btn-date:hover {
  @apply font-bold;
}

.active .btn-date:not(.today),
.btn-date:not(.today):hover {
  @apply bg-gray-800 text-gray-100;
}

.same-week {
  &.active :not(.today),
  & .btn-date:not(.today):hover {
    @apply bg-gray-900 text-gray-100;
  }
}

:not(.active) .today {
  color: var(--cal-variant);
}

.active .today,
.today:hover {
  color: var(--cal-on-variant);
  background-color: var(--cal-variant);
}
</style>

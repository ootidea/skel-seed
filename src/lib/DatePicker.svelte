<script lang="ts">
  import dayjs, { Dayjs } from 'dayjs'
  import CommonCss from './CommonCss.svelte'
  import IconButton from './IconButton.svelte'
  import { type Arrow, until } from './utility'

  export let selectedDate: Dayjs | undefined = undefined
  export let selectedMonth: Dayjs = dayjs()
  export let onSelect: Arrow<[Date], unknown> | undefined = undefined
  let klass = ''
  export { klass as class }

  // TODO: i18n
  const dayNames = ['日', '月', '火', '水', '木', '金', '土']

  $: firstDateOfSelectedMonth = selectedMonth.date(1)
  $: firstDateOfSelectedMonthCal = firstDateOfSelectedMonth.subtract(
    firstDateOfSelectedMonth.day(),
    'day'
  )

  function onClickDate(date: Dayjs) {
    selectedDate = date
    onSelect?.(date.toDate())
  }
</script>

<div class="skel-date-picker_root {klass}">
  <div class="skel-date-picker_year-month-area">
    <IconButton
      src="src/assets/chevron-left.svg"
      onClick={() => (selectedMonth = selectedMonth.subtract(1, 'month'))}
      size="1.6em"
    />
    <div class="skel-date-picker_year-month">
      <!-- TODO: i18n -->
      <span class="skel-date-picker_year">
        {selectedMonth.format('YYYY')}年
      </span>
      <span class="skel-date-picker_month">
        {selectedMonth.format('M')}月
      </span>
    </div>
    <IconButton
      src="src/assets/chevron-right.svg"
      onClick={() => (selectedMonth = selectedMonth.add(1, 'month'))}
      size="1.6em"
    />
  </div>

  <div class="skel-date-picker_grid">
    <div class="skel-date-picker_day-row">
      {#each dayNames as dayName, day}
        <div class="skel-date-picker_cell" data-day={day}>
          {dayName}
        </div>
      {/each}
    </div>

    {#each until(6) as weakIndex}
      <div class="skel-date-picker_date-row">
        {#each dayNames as _, day}
          {@const date = firstDateOfSelectedMonthCal.add(weakIndex, 'week').add(day, 'day')}
          <div
            class="skel-date-picker_cell"
            class:skel-date-picker_today={selectedDate?.isSame(date, 'date')}
            class:skel-date-picker_next-month={date.isAfter(selectedMonth, 'month')}
            class:skel-date-picker_prev-month={date.isBefore(selectedMonth, 'month')}
            data-day={day}
            on:click={() => onClickDate(date)}
          >
            {date.date()}
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<CommonCss />

<style global lang="scss">
  :root {
    --skel-date-picker_cell-size: 2em;
    --skel-date-picker_sunday-text-color: oklch(50% 0.6 5);
    --skel-date-picker_saturday-text-color: oklch(50% 0.6 260);
  }

  .skel-date-picker_root {
    width: max-content;
  }

  .skel-date-picker_year-month-area {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 1em;
  }

  .skel-date-picker_year-month {
    font-weight: bold;
    color: oklch(50% 0 0);
  }

  .skel-date-picker_grid {
    display: grid;
    grid-template-columns: repeat(7, auto);
    width: max-content;
  }

  .skel-date-picker_day-row,
  .skel-date-picker_date-row {
    display: contents;
  }

  .skel-date-picker_cell {
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    width: var(--skel-date-picker_cell-size);
    height: var(--skel-date-picker_cell-size);

    .skel-date-picker_day-row & {
      color: oklch(50% 0 0);

      &[data-day='0'] {
        color: var(--skel-date-picker_sunday-text-color);
      }

      &[data-day='6'] {
        color: var(--skel-date-picker_saturday-text-color);
      }
    }

    .skel-date-picker_date-row & {
      border-radius: 99999px;
      border: transparent 1px solid;

      cursor: pointer;

      &:hover {
        background-color: var(--skel-clickable-hover-background-color);
      }

      &:active {
        background-color: var(--skel-clickable-active-background-color);
      }
    }

    &.skel-date-picker_today {
      border-color: var(--skel-primary-color);
    }
  }

  .skel-date-picker_next-month,
  .skel-date-picker_prev-month {
    color: oklch(60% 0 0);
  }
</style>

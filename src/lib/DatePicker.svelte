<script lang="ts">
  import dayjs, { Dayjs } from 'dayjs'
  import CommonCss from './CommonCss.svelte'
  import IconButton from './IconButton.svelte'
  import { type Arrow, until } from './utility'

  export let selectedDate: Date | undefined = undefined
  export let selectedMonth: Date = new Date()
  export let onSelect: Arrow<[Date], unknown> | undefined = undefined
  let klass = ''
  export { klass as class }

  // TODO: i18n
  const dayNames = ['日', '月', '火', '水', '木', '金', '土']

  $: _selectedMonth = dayjs(selectedMonth)
  $: firstDateOfSelectedMonth = _selectedMonth.date(1)
  $: firstDateOfSelectedCalendar = firstDateOfSelectedMonth.subtract(firstDateOfSelectedMonth.day(), 'day')

  function onClickDate(date: Dayjs) {
    selectedDate = date.toDate()
    onSelect?.(date.toDate())
  }
</script>

<div class="skel-DatePicker_root {klass}">
  <div class="skel-DatePicker_year-month-area">
    <IconButton
      src="src/assets/chevron-left.svg"
      onClick={() => (selectedMonth = _selectedMonth.subtract(1, 'month').toDate())}
      size="1.6em"
    />
    <div class="skel-DatePicker_year-month">
      <!-- TODO: i18n -->
      <span class="skel-DatePicker_year">
        {_selectedMonth.format('YYYY')}年
      </span>
      <span class="skel-DatePicker_month">
        {_selectedMonth.format('M')}月
      </span>
    </div>
    <IconButton
      src="src/assets/chevron-right.svg"
      onClick={() => (selectedMonth = _selectedMonth.add(1, 'month').toDate())}
      size="1.6em"
    />
  </div>

  <div class="skel-DatePicker_grid">
    <div class="skel-DatePicker_day-row">
      {#each dayNames as dayName, day}
        <div class="skel-DatePicker_cell" data-day={day}>
          {dayName}
        </div>
      {/each}
    </div>

    {#each until(6) as weakIndex}
      <div class="skel-DatePicker_date-row">
        {#each dayNames as _, day}
          {@const date = firstDateOfSelectedCalendar.add(weakIndex, 'week').add(day, 'day')}
          <div
            class="skel-DatePicker_cell"
            class:skel-DatePicker_today={date.isSame(selectedDate, 'date')}
            class:skel-DatePicker_next-month={date.isAfter(_selectedMonth, 'month')}
            class:skel-DatePicker_prev-month={date.isBefore(_selectedMonth, 'month')}
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
    --skel-DatePicker_cell-size: 2em;
    --skel-DatePicker_sunday-text-color: oklch(50% 0.6 5);
    --skel-DatePicker_saturday-text-color: oklch(50% 0.6 260);
  }

  .skel-DatePicker_root {
    width: max-content;
  }

  .skel-DatePicker_year-month-area {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 1em;
  }

  .skel-DatePicker_year-month {
    font-weight: bold;
    color: oklch(50% 0 0);
  }

  .skel-DatePicker_grid {
    display: grid;
    grid-template-columns: repeat(7, auto);
    width: max-content;
  }

  .skel-DatePicker_day-row,
  .skel-DatePicker_date-row {
    display: contents;
  }

  .skel-DatePicker_cell {
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    width: var(--skel-DatePicker_cell-size);
    height: var(--skel-DatePicker_cell-size);

    .skel-DatePicker_day-row & {
      color: oklch(50% 0 0);

      &[data-day='0'] {
        color: var(--skel-DatePicker_sunday-text-color);
      }

      &[data-day='6'] {
        color: var(--skel-DatePicker_saturday-text-color);
      }
    }

    .skel-DatePicker_date-row & {
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

    &.skel-DatePicker_today {
      border-color: var(--skel-primary-color);
    }
  }

  .skel-DatePicker_next-month,
  .skel-DatePicker_prev-month {
    color: oklch(60% 0 0);
  }
</style>

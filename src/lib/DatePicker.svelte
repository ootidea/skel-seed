<script lang="ts">
  import dayjs, { Dayjs } from 'dayjs'
  import IconButton from './IconButton.svelte'
  import {
    type ClassProp,
    createClassGetter,
    createStyleGetter,
    type StyleProp,
    until,
  } from './utility'

  export let selectedMonth: Dayjs = new dayjs()
  export let bindingDate: Dayjs = new dayjs()

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('DatePicker', classProp)
  export let style: StyleProp = {}
  $: getStyle = createStyleGetter(style)

  // TODO: i18n
  const dayNames = ['日', '月', '火', '水', '木', '金', '土']

  $: firstDateOfSelectedMonth = selectedMonth.date(1)
  $: firstDateOfSelectedMonthCal = firstDateOfSelectedMonth.subtract(
    firstDateOfSelectedMonth.day(),
    'day'
  )

  function onClickDate(date: Dayjs) {
    bindingDate = date
  }
</script>

<div class={getClass('root')} style={getStyle('root')}>
  <div class={getClass('year-month-area')} style={getStyle('year-month-area')}>
    <IconButton
      src="src/assets/chevron-left.svg"
      onClick={() => (selectedMonth = selectedMonth.subtract(1, 'month'))}
      size="1.6em"
    />
    <div class={getClass('year-month')} style={getStyle('year-month')}>
      <!-- TODO: i18n -->
      <span class={getClass('year')} style={getStyle('year')}>
        {selectedMonth.format('YYYY')}年
      </span>
      <span class={getClass('month')} style={getStyle('month')}>
        {selectedMonth.format('M')}月
      </span>
    </div>
    <IconButton
      src="src/assets/chevron-right.svg"
      onClick={() => (selectedMonth = selectedMonth.add(1, 'month'))}
      size="1.6em"
    />
  </div>

  <div class={getClass('grid')} style={getStyle('grid')}>
    <div class={getClass('day-row')} style={getStyle('day-row')}>
      {#each dayNames as dayName, day}
        <div class={getClass('cell')} style={getStyle('cell')} data-day={day}>
          {dayName}
        </div>
      {/each}
    </div>

    {#each until(6) as weakIndex}
      <div class={getClass('date-row')} style={getStyle('date-row')}>
        {#each dayNames as dayName, day}
          {@const date = firstDateOfSelectedMonthCal.add(weakIndex, 'week').add(day, 'day')}
          <div
            class={getClass('cell')}
            class:skel-date-picker_today={date.isSame(bindingDate, 'date')}
            class:skel-date-picker_next-month={date.isAfter(selectedMonth, 'month')}
            class:skel-date-picker_prev-month={date.isBefore(selectedMonth, 'month')}
            style={getStyle('cell')}
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

      &:hover {
        background-color: oklch(94% 0 0);
      }
      cursor: pointer;
    }

    &.skel-date-picker_today {
      border-color: var(--skel-accent-color);
    }
  }

  .skel-date-picker_next-month,
  .skel-date-picker_prev-month {
    color: oklch(60% 0 0);
  }
</style>

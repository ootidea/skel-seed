<script lang="ts">
  import dayjs from 'dayjs'
  import CommonCss from './CommonCss.svelte'
  import IconButton from './IconButton.svelte'
  import { joinClasses, until } from './utility'

  export let selectedMonth: Date = new Date()
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  // TODO: i18n
  const dayNames = ['日', '月', '火', '水', '木', '金', '土']

  $: _selectedMonth = dayjs(selectedMonth)
  $: firstDateOfSelectedMonth = _selectedMonth.date(1)
  $: firstDateOfSelectedCalendar = firstDateOfSelectedMonth.subtract(firstDateOfSelectedMonth.day(), 'day')
</script>

<div class={`skel-Calendar_root ${joinClasses(klass, classes)}`} {style} {...$$restProps}>
  <div class="skel-Calendar_year-month-area">
    <IconButton
      src="src/assets/chevron-left.svg"
      onClick={() => (selectedMonth = _selectedMonth.subtract(1, 'month').toDate())}
      size="1.6em"
    />
    <div class="skel-Calendar_year-month">
      <!-- TODO: i18n -->
      <span class="skel-Calendar_year">
        {_selectedMonth.format('YYYY')}年
      </span>
      <span class="skel-Calendar_month">
        {_selectedMonth.format('M')}月
      </span>
    </div>
    <IconButton
      src="src/assets/chevron-right.svg"
      onClick={() => (selectedMonth = _selectedMonth.add(1, 'month').toDate())}
      size="1.6em"
    />
  </div>

  <div class="skel-Calendar_grid">
    <div class="skel-Calendar_day-row">
      {#each dayNames as dayName, day}
        <div class="skel-Calendar_cell" data-day={day}>
          {dayName}
        </div>
      {/each}
    </div>

    {#each until(6) as weakIndex}
      <div class="skel-Calendar_date-row">
        {#each dayNames as _, day}
          {@const date = firstDateOfSelectedCalendar.add(weakIndex, 'week').add(day, 'day')}
          <div
            class="skel-Calendar_cell"
            class:skel-Calendar_next-month={date.isAfter(_selectedMonth, 'month')}
            class:skel-Calendar_prev-month={date.isBefore(_selectedMonth, 'month')}
            data-day={day}
          >
            <slot name="date-cell" date={date.toDate()}>{date.date()}</slot>
          </div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<CommonCss />

<style global lang="scss">
  :root {
    --skel-Calendar_cell-size: 2em;
    --skel-Calendar_sunday-text-color: oklch(50% 0.6 5);
    --skel-Calendar_saturday-text-color: oklch(50% 0.6 260);
  }

  .skel-Calendar_root {
    width: max-content;
  }

  .skel-Calendar_year-month-area {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 0 1em;
  }

  .skel-Calendar_year-month {
    font-weight: bold;
    color: oklch(50% 0 0);
  }

  .skel-Calendar_grid {
    display: grid;
    grid-template-columns: repeat(7, auto);
    width: max-content;
  }

  .skel-Calendar_day-row,
  .skel-Calendar_date-row {
    display: contents;
  }

  .skel-Calendar_cell {
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    width: var(--skel-Calendar_cell-size);
    height: var(--skel-Calendar_cell-size);

    .skel-Calendar_day-row & {
      color: oklch(50% 0 0);

      &[data-day='0'] {
        color: var(--skel-Calendar_sunday-text-color);
      }

      &[data-day='6'] {
        color: var(--skel-Calendar_saturday-text-color);
      }
    }
  }

  .skel-Calendar_next-month,
  .skel-Calendar_prev-month {
    color: oklch(60% 0 0);
  }
</style>

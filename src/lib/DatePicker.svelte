<script lang="ts">
  import dayjs from 'dayjs'
  import Calendar from './Calendar.svelte'
  import CommonCss from './CommonCss.svelte'
  import type { Arrow } from './utility'
  import { joinClasses, joinStyles, type StyleObject } from './utility'

  export let selectedDate: Date | undefined = undefined
  export let selectedMonth: Date = new Date()
  export let onSelect: Arrow<[Date], unknown> | undefined = undefined
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  function onClickDate(date: Date) {
    selectedDate = date
    onSelect?.(date)
  }
</script>

<Calendar
  class={`skel-DatePicker_root ${joinClasses(klass, classes)}`}
  style={joinStyles(style, styles)}
  bind:selectedMonth
  {...$$restProps}
>
  <div
    slot="date-cell"
    class="skel-DatePicker_date-cell"
    class:skel-DatePicker_selected={dayjs(date).isSame(selectedDate, 'date')}
    let:date
    on:click={() => onClickDate(date)}
  >
    {date.getDate()}
  </div>
</Calendar>

<CommonCss />

<style global lang="scss">
  .skel-DatePicker_root {
    width: max-content;
  }

  .skel-DatePicker_date-cell {
    display: flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 99999px;
    border: transparent 1px solid;

    cursor: pointer;

    &:hover {
      background-color: var(--skel-clickable-hover-background-color);
    }

    &:active {
      background-color: var(--skel-clickable-active-background-color);
    }

    &.skel-DatePicker_selected {
      border-color: var(--skel-primary-color);
    }
  }
</style>

<script lang="ts">
  import DatePicker from './DatePicker.svelte'
  import MonthPicker from './MonthPicker.svelte'
  import type { Arrow } from './utility'
  import { joinClasses, joinStyles, type StyleObject } from './utility'
  import YearPicker from './YearPicker.svelte'

  export let selectedDate: Date | undefined = undefined
  export let onSelect: Arrow<[Date], unknown> | undefined = undefined
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  let internalDate = new Date(selectedDate ?? new Date())

  let step: 0 | 1 | 2 = 0

  function onSelectYear(year: number) {
    internalDate.setFullYear(year)
    internalDate = internalDate

    step++
  }

  function onSelectMonth(month: number) {
    internalDate.setMonth(month - 1)
    internalDate = internalDate

    step++
  }

  function onSelectDate(date: Date) {
    selectedDate = date
    onSelect?.(date)
  }
</script>

<div
  class={`skel-FarDatePicker_root ${joinClasses(klass, classes)}`}
  style={joinStyles(style, styles)}
  {...$$restProps}
>
  {#if step === 0}
    <h4 class="skel-FarDatePicker_title">年を選択</h4>
    <YearPicker onSelect={onSelectYear} />
  {:else if step === 1}
    <h4 class="skel-FarDatePicker_title">月を選択</h4>
    <MonthPicker onSelect={onSelectMonth} />
  {:else}
    <DatePicker selectedMonth={internalDate} onSelect={onSelectDate} />
  {/if}
</div>

<style global lang="scss">
  .skel-FarDatePicker_title {
    text-align: center;
    color: oklch(40% 0 0);
    font-size: 16px;
    margin: 0.7em;
  }
</style>

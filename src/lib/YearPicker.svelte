<script lang="ts">
  import Button from './Button.svelte'
  import Foldable from './Foldable.svelte'
  import { type Arrow, range, type StyleObject } from './utility'
  import { joinClasses, joinStyles } from './utility'

  /** The largest of the year options */
  export let maxYear = new Date().getFullYear()
  /** The smallest of the year options */
  export let minYear = maxYear - 120
  /** The year options are divided by this size and displayed in accordion form */
  export let periodSize = 20
  /**
   * Base year for period division.
   * @example
   * If baseYear is 1900 and periodSize is 30,
   * for example, 1900 ~ 1930 ~ 1960 ~ 1990 are periods.
   * If baseYear is 2000 and periodSize is 30,
   * for example, 1910 ~ 1940 ~ 1970 ~ 2000 are periods.
   */
  export let baseYear = 2000
  /** The period containing this year is the initial display state of the accordion */
  export let mostPromisingYear = maxYear - 20
  export let onSelect: Arrow<[number], unknown> | undefined = undefined
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  let unfoldedPeriod = toPeriodYear(mostPromisingYear, periodSize)

  function toPeriodYear(year: number, periodSize: number): number {
    return year - ((year - (baseYear % periodSize)) % periodSize)
  }
</script>

<div class={`skel-YearPicker_root ${joinClasses(klass, classes)}`} style={joinStyles(style, styles)} {...$$restProps}>
  {#each range(toPeriodYear(minYear, periodSize), toPeriodYear(maxYear, periodSize), periodSize) as periodYear}
    {@const periodMinYear = Math.max(periodYear, toPeriodYear(minYear, 5))}
    {@const periodMaxYear = Math.min(periodYear + periodSize - 1, maxYear)}
    <Foldable unfolded={periodYear === unfoldedPeriod} onUnfold={() => (unfoldedPeriod = periodYear)}>
      <div slot="title" class="skel-YearPicker_foldable-title">
        {periodMinYear} ~ {periodMaxYear}
      </div>
      <div class="skel-YearPicker_button-list">
        {#each range(periodMinYear, periodMaxYear) as year}
          <Button tint="achromatic" ghost disabled={year < minYear} onClick={() => onSelect?.(year)}>
            {String(year % 100).padStart(2, '0')}
          </Button>
        {/each}
      </div>
    </Foldable>
  {/each}
</div>

<style global lang="scss">
  .skel-YearPicker_root {
    width: max-content;
  }

  .skel-YearPicker_foldable-title {
    font-weight: normal;
    font-size: 14px;
  }

  .skel-YearPicker_button-list {
    display: grid;
    grid-template-columns: repeat(5, auto);

    gap: 0.5em;
    padding: 1em 0.5em;

    font-size: 14px;
  }
</style>

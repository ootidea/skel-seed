<script lang="ts">
  import Button from './Button.svelte'
  import { type Arrow, joinClasses, joinStyles, range, type StyleObject } from './utility'

  /**
   * Callback function called when the month is selected.
   * If January is selected, the argument is 1.
   */
  export let onSelect: Arrow<[number], unknown> | undefined = undefined
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined
</script>

<div class={`skel-MonthPicker_root ${joinClasses(klass, classes)}`} style={joinStyles(style, styles)} {...$$restProps}>
  <slot {onSelect}>
    {#each range(1, 12) as month}
      <Button tint="achromatic" ghost onClick={() => onSelect?.(month)}>
        <slot name="button-text" {month} {onSelect}>{month}</slot>
      </Button>
    {/each}
  </slot>
</div>

<style global lang="scss">
  .skel-MonthPicker_root {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 0.5em;
    width: max-content;
  }
</style>

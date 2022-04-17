<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { type Arrow, type ClassProp, createInjectors, type StyleProp } from './utility'

  type Result = $$Generic

  export let onClick: Arrow<[MouseEvent], Result> | undefined = undefined
  export let disabled = false

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('Clickable', classProp, style)

  let result: Result | undefined = undefined

  function clickEventHandler(event: MouseEvent) {
    if (disabled) return

    result = onClick?.(event)
  }
</script>

<div
  {...injectors.attr('root')}
  class:skel-clickable_disabled={disabled}
  on:click={clickEventHandler}
>
  <slot {disabled} {result} />
</div>

<CommonCss />

<style global lang="scss">
  .skel-clickable_root {
    width: max-content;
    transition: var(--skel-backward-transition);

    &:not(.skel-clickable_disabled) {
      cursor: pointer;

      &:hover {
        background-color: var(--skel-clickable-hover-background-color);
        transition: var(--skel-forward-transition);
      }

      &:active {
        background-color: var(--skel-clickable-active-background-color);
        transition: var(--skel-forward-transition);
      }
    }
  }
</style>

<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  export let checked = false
  export let value: string | undefined = undefined
  export let disabled = false

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('Checkbox', classProp, style)
</script>

<label {...injectors.attr('root')} class:skel-checkbox_disabled={disabled}>
  <input type="checkbox" {...injectors.attr('checkbox')} {value} bind:checked {disabled} />
  <slot />
</label>

<CommonCss />

<style global lang="scss">
  .skel-checkbox_root {
    display: inline-grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 0.3em;

    cursor: pointer;

    &.skel-checkbox_disabled {
      cursor: default;

      color: var(--skel-disabled-text-color);
    }
  }

  .skel-checkbox_checkbox {
    margin: 0;
    accent-color: var(--skel-accent-color);

    cursor: pointer;

    .skel-checkbox_disabled & {
      cursor: default;
    }
  }
</style>

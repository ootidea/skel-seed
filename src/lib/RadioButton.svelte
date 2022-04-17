<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  export let group = ''
  export let value: string | undefined = undefined
  export let disabled = false

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('RadioButton', classProp, style)
</script>

<label {...injectors.attr('root')} class:skel-disabled={disabled}>
  <input type="radio" {...injectors.attr('radio')} bind:group {value} {disabled} />
  <slot>
    {#if value !== undefined}
      {value}
    {/if}
  </slot>
</label>

<CommonCss />

<style global lang="scss">
  .skel-radio-button_root {
    display: inline-grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 0.3em;

    cursor: pointer;

    &.skel-disabled {
      cursor: default;

      color: var(--skel-disabled-text-color);
    }
  }

  .skel-radio-button_radio {
    margin: 0;
    accent-color: var(--skel-accent-color);

    cursor: pointer;

    .skel-disabled & {
      cursor: default;
    }
  }
</style>

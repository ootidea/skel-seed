<script lang="ts">
  import CommonCss from './CommonCss.svelte'

  export let group = ''
  export let value: string | undefined = undefined
  export let disabled = false

  let klass = ''
  export { klass as class }
</script>

<label class="skeleto-radio-button_root {klass}" class:skeleto-disabled={disabled}>
  <input type="radio" class="skeleto-radio-button_radio" bind:group {value} {disabled} />
  <slot>
    {#if value !== undefined}
      {value}
    {/if}
  </slot>
</label>

<CommonCss />

<style global lang="scss">
  .skeleto-radio-button_root {
    display: inline-grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 0.3em;

    cursor: pointer;

    &.skeleto-disabled {
      cursor: default;

      color: oklch(70% 0 0);
    }
  }

  .skeleto-radio-button_radio {
    margin: 0;
    accent-color: var(--accent-color);

    cursor: pointer;

    .skeleto-disabled & {
      cursor: default;
    }
  }
</style>

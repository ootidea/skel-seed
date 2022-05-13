<script lang="ts">
  import CommonCss from './CommonCss.svelte'

  export let checked = false
  export let value: string | undefined = undefined
  export let disabled = false
  let klass = ''
  export { klass as class }
</script>

<label class="skel-checkbox_root {klass}" class:skel-checkbox_disabled={disabled}>
  <input type="checkbox" class="skel-checkbox_checkbox" {value} bind:checked {disabled} />
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
    accent-color: var(--skel-primary-color);

    cursor: pointer;

    .skel-checkbox_disabled & {
      cursor: default;
    }
  }
</style>

<script lang="ts">
  import CommonCss from './CommonCss.svelte'

  export let checked = false
  export let value: string | undefined = undefined
  export let disabled = false
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
</script>

<label class="skel-Checkbox_root {klass}" class:skel-Checkbox_disabled={disabled} {style}>
  <input type="checkbox" class="skel-Checkbox_checkbox" {value} bind:checked {disabled} />
  <slot />
</label>

<CommonCss />

<style global lang="scss">
  .skel-Checkbox_root {
    display: inline-grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 0.3em;

    cursor: pointer;

    &.skel-Checkbox_disabled {
      cursor: default;

      color: var(--skel-disabled-text-color);
    }
  }

  .skel-Checkbox_checkbox {
    margin: 0;
    accent-color: var(--skel-primary-color);

    cursor: pointer;

    .skel-Checkbox_disabled & {
      cursor: default;
    }
  }
</style>

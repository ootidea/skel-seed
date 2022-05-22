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
  <div class="skel-Checkbox_unnamed-slot-wrapper">
    <slot />
  </div>
</label>

<CommonCss />

<style global lang="scss">
  .skel-Checkbox_root {
    display: inline-grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 0.5em;

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

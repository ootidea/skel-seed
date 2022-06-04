<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { joinClasses, joinStyles, type StyleObject } from './utility'

  export let checked = false
  export let value: string | undefined = undefined
  export let disabled = false
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined
</script>

<label
  class={`skel-Checkbox_root ${joinClasses(klass, classes)}`}
  class:skel-Checkbox_disabled={disabled}
  style={joinStyles(style, styles)}
  {...$$restProps}
>
  <input type="checkbox" class="skel-Checkbox_checkbox" {value} bind:checked {disabled} />
  <div class="skel-Checkbox_unnamed-slot-wrapper">
    <slot />
  </div>
</label>

<CommonCss />

<style global lang="scss">
  @use 'utility.scss';

  :root {
    --skel-Checkbox_checkbox-size: 1em;
  }

  .skel-Checkbox_root {
    display: inline-grid;
    grid-template-columns: auto minmax(0, 1fr);
    align-items: center;
    gap: 0.5em;

    cursor: pointer;

    &.skel-Checkbox_disabled {
      cursor: default;

      color: oklch(70% 0 0);
    }
  }

  .skel-Checkbox_checkbox {
    appearance: none;

    background-color: white;
    width: utility.toEvenPx(var(--skel-Checkbox_checkbox-size));
    height: utility.toEvenPx(var(--skel-Checkbox_checkbox-size));

    border: oklch(70% 0 0) 1px solid;
    border-radius: 0.2em;

    margin: 0;
    accent-color: var(--skel-primary-color);

    cursor: pointer;

    &:checked {
      background-color: var(--skel-primary-color);

      &::before {
        content: '';
        display: inline-block;

        width: 100%;
        height: 100%;
        box-sizing: border-box;

        background-color: oklch(100% 0 0);
        mask: url('/src/assets/check-bold.svg') no-repeat center;
        mask-size: contain;
      }
    }

    .skel-Checkbox_disabled & {
      cursor: default;
    }
  }
</style>

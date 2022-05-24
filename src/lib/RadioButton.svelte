<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { joinClasses } from './utility'

  export let group: string | undefined = undefined
  export let value: string | undefined = undefined
  export let name: string | undefined = undefined
  export let disabled = false
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined
</script>

<label class="skel-RadioButton_root {joinClasses(klass, classes)}" class:skel-RadioButton_disabled={disabled} {style}>
  <input type="radio" class="skel-RadioButton_radio" bind:group {value} {name} {disabled} />
  <slot>
    {#if value !== undefined}
      {value}
    {/if}
  </slot>
</label>

<CommonCss />

<style global lang="scss">
  @use 'utility.scss';

  :root {
    --skel-RadioButton_radio-size: 1.2em;
    --skel-RadioButton_inner-circle-size: 0.6em;
  }

  .skel-RadioButton_root {
    display: inline-grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 0.3em;
    vertical-align: top;

    cursor: pointer;

    &.skel-RadioButton_disabled {
      cursor: default;

      color: var(--skel-disabled-text-color);
    }
  }

  .skel-RadioButton_radio {
    appearance: none;

    display: inline-flex;
    align-items: center;
    justify-content: center;

    width: utility.toEvenPx(var(--skel-RadioButton_radio-size));
    height: utility.toEvenPx(var(--skel-RadioButton_radio-size));
    border-radius: 100%;
    margin: 0;

    border: oklch(60% 0 0) 0.1em solid;

    cursor: pointer;

    transition: all 0.1s ease-out;

    &::before {
      content: '';
      display: inline-block;
      width: 0;
      height: 0;
      border-radius: 100%;

      transition: all 0.1s ease-out;
    }

    &:checked {
      border-color: var(--skel-primary-color);
      transition: all 0.1s ease-out;

      &::before {
        width: utility.toEvenPx(var(--skel-RadioButton_inner-circle-size));
        height: utility.toEvenPx(var(--skel-RadioButton_inner-circle-size));
        background-color: var(--skel-primary-color);

        transition: all 0.1s ease-out;
      }
    }

    .skel-RadioButton_disabled & {
      cursor: default;
    }
  }
</style>

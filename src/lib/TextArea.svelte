<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { classGenerator, type ClassProp } from './utility'

  export let text = ''
  export let placeholder = ''
  export let disabled = false

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = classGenerator('TextArea', classProp)

  const ZERO_WIDTH_SPACE = '\u200b'
</script>

<div class={getClass('root')} class:skel-disabled={disabled}>
  <div class={getClass('dummy')} aria-hidden="true">
    {text ? text : placeholder}{ZERO_WIDTH_SPACE}
  </div>
  <textarea class={getClass('text-area')} bind:value={text} {placeholder} {disabled} />
</div>

<CommonCss />

<style global lang="scss">
  .skel-text-area_root {
    position: relative;
    width: max-content;
    min-width: 10em;
  }

  .skel-text-area_dummy,
  .skel-text-area_text-area {
    box-sizing: border-box;

    padding: 0.4em 0.6em;
    border: none;
    border-radius: 0.3em;

    overflow: hidden;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .skel-text-area_dummy {
    visibility: hidden;
  }

  .skel-text-area_text-area {
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    width: 100%;
    height: 100%;

    color: inherit;
    font: inherit;
    line-height: inherit;
    letter-spacing: inherit;
    resize: none;

    box-shadow: 0 0 2.5px oklch(60% 0 0) inset;

    .skel-disabled & {
      color: var(--skel-disabled-text-color);
    }
  }

  .skel-text-area_text-area:focus {
    outline: 1px solid var(--skel-accent-color);
  }
</style>

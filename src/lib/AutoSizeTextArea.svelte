<script lang="ts">
  import CommonCss from './CommonCss.svelte'

  export let text = ''
  export let placeholder = ''
  export let disabled = false
  let klass = ''
  export { klass as class }

  const ZERO_WIDTH_SPACE = '\u200b'
</script>

<div
  class="skel-auto-size-text-area_root {klass}"
  class:skel-auto-size-text-area_disabled={disabled}
>
  <div class="skel-auto-size-text-area_dummy" aria-hidden="true">
    {text ? text : placeholder}{ZERO_WIDTH_SPACE}
  </div>
  <textarea class="skel-auto-size-text-area_text-area" bind:value={text} {placeholder} {disabled} />
</div>

<CommonCss />

<style global lang="scss">
  .skel-auto-size-text-area_root {
    position: relative;
    width: max-content;
    min-width: 10em;
  }

  .skel-auto-size-text-area_dummy,
  .skel-auto-size-text-area_text-area {
    box-sizing: border-box;

    padding: 0.4em 0.6em;
    border: none;
    border-radius: 0.3em;

    overflow: hidden;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .skel-auto-size-text-area_dummy {
    visibility: hidden;
  }

  .skel-auto-size-text-area_text-area {
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

    .skel-auto-size-text-area_disabled & {
      color: var(--skel-disabled-text-color);
    }
  }

  .skel-auto-size-text-area_text-area:focus {
    outline: 1px solid var(--skel-primary-color);
  }
</style>

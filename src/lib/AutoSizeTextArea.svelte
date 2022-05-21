<script lang="ts">
  import CommonCss from './CommonCss.svelte'

  export let value = ''
  export let placeholder = ''
  export let disabled = false
  let klass = ''
  export { klass as class }

  const ZERO_WIDTH_SPACE = '\u200b'
</script>

<div class="skel-AutoSizeTextArea_root {klass}" class:skel-AutoSizeTextArea_disabled={disabled}>
  <div class="skel-AutoSizeTextArea_dummy" aria-hidden="true">
    {value ? value : placeholder}{ZERO_WIDTH_SPACE}
  </div>
  <textarea class="skel-AutoSizeTextArea_text-area" bind:value {placeholder} {disabled} />
</div>

<CommonCss />

<style global lang="scss">
  .skel-AutoSizeTextArea_root {
    position: relative;
  }

  .skel-AutoSizeTextArea_dummy,
  .skel-AutoSizeTextArea_text-area {
    box-sizing: border-box;

    padding: 0.4em 0.6em;
    border-radius: var(--skel-input-border-radius);
    border: var(--skel-input-border-color) 1px solid;

    overflow: hidden;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;

    color: inherit;
    font: inherit;
    line-height: 1.8em;
    letter-spacing: inherit;

    min-height: 4.8em;
  }

  .skel-AutoSizeTextArea_dummy {
    visibility: hidden;
  }

  .skel-AutoSizeTextArea_text-area {
    position: absolute;
    top: 0;
    left: 0;

    display: block;
    width: 100%;
    height: 100%;

    resize: none;

    .skel-AutoSizeTextArea_disabled & {
      color: var(--skel-disabled-text-color);
    }
  }

  .skel-AutoSizeTextArea_text-area:focus {
    outline: 1px solid var(--skel-primary-color);
  }
</style>

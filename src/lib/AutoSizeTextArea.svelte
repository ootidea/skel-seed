<script lang="ts">
  import CommonCss from './CommonCss.svelte'
  import { joinClasses, joinStyles, type StyleObject } from './utility'

  export let value = ''
  export let placeholder = ''
  export let disabled = false
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined
</script>

<div
  class={`skel-AutoSizeTextArea_root ${joinClasses(klass, classes)}`}
  class:skel-AutoSizeTextArea_disabled={disabled}
  style={joinStyles(style, styles)}
  {...$$restProps}
>
  <div class="skel-AutoSizeTextArea_dummy" aria-hidden="true">
    {value ? value : placeholder}
  </div>
  <textarea class="skel-AutoSizeTextArea_text-area" bind:value {placeholder} {disabled} />
</div>

<CommonCss />

<style global lang="scss">
  .skel-AutoSizeTextArea_root {
    box-sizing: border-box;
    position: relative;
    width: 100%;
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

    outline: none;
    resize: none;

    &::placeholder {
      color: var(--skel-placeholder-text-color);
    }

    &:disabled {
      background-color: var(--skel-disabled-input-background-color);
    }

    &:focus {
      border-color: var(--skel-primary-color);
    }
  }
</style>

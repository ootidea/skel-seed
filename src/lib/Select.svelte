<script lang="ts">
  import chevron from '/src/assets/chevron-down.svg'
  import CommonCss from './CommonCss.svelte'
  import Divider from './Divider.svelte'
  import Dropdown from './Dropdown.svelte'
  import Icon from './Icon.svelte'
  import StretchLayout from './StretchLayout.svelte'
  import { joinClasses } from './utility'

  export let values: string[] = []
  export let selected: string | undefined = undefined
  export let titles: Record<string, string> = {}
  export let placeholder = ''
  export let disabled = false
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  function getText(value: string): string {
    return titles[value] ? titles[value] : value
  }

  const ZERO_WIDTH_SPACE = '\u200b'
</script>

<Dropdown let:toggle>
  <StretchLayout
    class={`skel-Select_root ${joinClasses(klass, classes)}`}
    classes={{ 'skel-Select_disabled': disabled }}
    on:click={() => disabled || toggle()}
    {...$$restProps}
  >
    <div class="skel-Select_preview-area">
      <!-- Render invisible to prevent width fluctuations -->
      {#each values as value}
        <div class="skel-Select_selected-value" class:skel-Select_invisible={selected !== value}>
          <slot name="selected-value" {value} title={titles[value]} text={getText(value)}>
            {getText(value)}{ZERO_WIDTH_SPACE}
          </slot>
        </div>
      {/each}
      <div class="skel-Select_placeholder" class:skel-Select_invisible={selected !== undefined}>
        {placeholder}{ZERO_WIDTH_SPACE}
      </div>
    </div>
    <Icon src={chevron} />
  </StretchLayout>
  <div slot="dropdown" class="skel-Select_dropdown">
    {#each values as value, i}
      {#if i > 0}
        <Divider />
      {/if}
      <div
        class="skel-Select_option"
        class:skel-Select_selected={selected === value}
        on:click={() => {
          selected = value
          toggle()
        }}
      >
        {getText(value)}
      </div>
    {/each}
  </div>
</Dropdown>

<CommonCss />

<style global lang="scss">
  .skel-Select_root {
    align-items: center;
    border-radius: 0.3em;
    border: var(--skel-input-border-color) 1px solid;

    background-color: var(--skel-background-color);
    padding: 0.4em 0.7em;

    box-sizing: border-box;
    height: var(--skel-one-input-height);

    cursor: pointer;

    &.skel-Select_disabled {
      background-color: var(--skel-disabled-input-background-color);
      cursor: default;
    }
  }

  .skel-Select_invisible {
    visibility: hidden;
    height: 0;
    overflow: hidden;
  }

  .skel-Select_placeholder {
    color: var(--skel-placeholder-text-color);
  }

  .skel-Select_option {
    display: flex;
    align-items: center;

    padding: 0 0.8em;
    box-sizing: border-box;
    height: 2.5em;

    cursor: pointer;

    &:hover {
      background-color: oklch(97% 0 0);
    }

    &:active {
      background-color: oklch(94% 0 0);
    }

    &.skel-Select_selected {
      color: var(--skel-primary-color);
      background-color: var(--skel-primary-background-color);

      &:hover {
        background-color: var(--skel-primary-background-hover-color);
      }

      &:active {
        background-color: var(--skel-primary-background-active-color);
      }
    }
  }
</style>

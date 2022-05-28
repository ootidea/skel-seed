<script lang="ts">
  import chevron from '/src/assets/chevron-down.svg'
  import CommonCss from './CommonCss.svelte'
  import Divider from './Divider.svelte'
  import Dropdown from './Dropdown.svelte'
  import Icon from './Icon.svelte'
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
  <div class={`skel-Select_root ${joinClasses(klass, classes)}`} on:click={toggle} {...$$restProps}>
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
  </div>
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
    border-radius: 0.3em;
    border: var(--skel-input-border-color) 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: oklch(100% 0 0);
    padding: 0.4em 0.7em;
    cursor: pointer;

    /* TODO: disabled状態の色変化を実装する */
  }

  .skel-Select_invisible {
    visibility: hidden;
    height: 0;
    overflow: hidden;
  }

  .skel-Select_placeholder {
    user-select: none;
    color: var(--skel-placeholder-text-color);
  }

  .skel-Select_option {
    padding: 0.7em 1em;
    cursor: pointer;
  }

  .skel-Select_selected {
    background-color: var(--skel-primary-color);
    color: oklch(100% 0 0);
  }
</style>

<script lang="ts">
  import chevron from '/src/assets/chevron-down.svg'
  import Checkbox from './Checkbox.svelte'
  import CommonCss from './CommonCss.svelte'
  import Divider from './Divider.svelte'
  import Dropdown from './Dropdown.svelte'
  import Icon from './Icon.svelte'
  import StretchLayout from './StretchLayout.svelte'
  import { joinClasses } from './utility'

  export let values: string[] = []
  export let selected: Record<string, boolean> = {}
  export let titles: Record<string, string> = {}
  export let placeholder = ''
  export let disabled = false
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  // fill in missing entries
  $: for (const value of values) {
    if (selected[value] === undefined) {
      selected[value] = false
    }
  }

  function getText(value: string): string {
    return titles[value] ? titles[value] : value
  }

  const ZERO_WIDTH_SPACE = '\u200b'
</script>

<Dropdown style="max-width: 100%" let:toggle>
  <StretchLayout
    class={`skel-MultiSelect_root ${joinClasses(klass, classes)}`}
    classes={{ 'skel-MultiSelect_disabled': disabled }}
    on:click={() => disabled || toggle()}
    {...$$restProps}
  >
    <div class="skel-MultiSelect_preview-area">
      <div class="skel-MultiSelect_selected-values">
        {#each values.filter((value) => selected[value]) as value}
          <slot name="selected-value" {value} title={titles[value]} text={getText(value)}>
            <div class="skel-MultiSelect_selected-value">{getText(value)}</div>
          </slot>
        {:else}
          <div class="skel-MultiSelect_placeholder">{placeholder}{ZERO_WIDTH_SPACE}</div>
        {/each}
      </div>
      <div class="skel-MultiSelect_selected-values skel-MultiSelect_invisible">
        {#each values as value}
          <slot name="selected-value" {value} title={titles[value]} text={getText(value)}>
            <div class="skel-MultiSelect_selected-value">{getText(value)}</div>
          </slot>
        {/each}
      </div>
      <div class="skel-MultiSelect_selected-values skel-MultiSelect_invisible">
        <div class="skel-MultiSelect_placeholder">{placeholder}{ZERO_WIDTH_SPACE}</div>
      </div>
    </div>
    <Icon src={chevron} />
  </StretchLayout>
  <div slot="dropdown" class="skel-MultiSelect_dropdown">
    {#each values as value, i}
      {#if i > 0}
        <Divider />
      {/if}
      <Checkbox class="skel-MultiSelect_checkbox" style="display: grid" {value} bind:checked={selected[value]}>
        {getText(value)}
      </Checkbox>
    {/each}
  </div>
</Dropdown>

<CommonCss />

<style global lang="scss">
  .skel-MultiSelect_root {
    border-radius: 0.3em;
    border: var(--skel-input-border-color) 1px solid;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--skel-background-color);
    padding: 0.4em 0.7em;
    cursor: pointer;

    &.skel-MultiSelect_disabled {
      background-color: var(--skel-disabled-input-background-color);
      cursor: default;
    }
  }

  .skel-MultiSelect_selected-values {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3em;
  }

  .skel-MultiSelect_selected-value {
    border-radius: 99999px;
    background-color: oklch(92% 0 0);
    padding: 0.05em 0.8em;
  }

  .skel-MultiSelect_placeholder {
    color: var(--skel-placeholder-text-color);
  }

  .skel-MultiSelect_invisible {
    visibility: hidden;
    height: 0;
    overflow: hidden;
  }

  .skel-MultiSelect_checkbox {
    padding: 0.7em 1em;
  }
</style>

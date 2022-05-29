<script lang="ts">
  import calendar from '/src/assets/calendar.svg'
  import CommonCss from './CommonCss.svelte'
  import FarDatePicker from './FarDatePicker.svelte'
  import Gravity from './Gravity.svelte'
  import Icon from './Icon.svelte'
  import Modal from './Modal.svelte'
  import StretchLayout from './StretchLayout.svelte'
  import type { Arrow } from './utility'
  import { joinClasses } from './utility'

  export let date: Date | undefined = undefined
  export let placeholder = ''
  export let disabled: true | undefined = undefined
  export let onSelect: Arrow<[Date], unknown> | undefined = undefined
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  const ZERO_WIDTH_SPACE = '\u200b'
</script>

<Modal let:toggle>
  <StretchLayout
    class={`skel-FarDateInput_root ${joinClasses(klass, classes)}`}
    classes={{ 'skel-FarDateInput_disabled': disabled }}
    {style}
    stretchAt={0}
    on:click={() => disabled || toggle()}
    {...$$restProps}
  >
    <div class="skel-FarDateInput_preview-area">
      {#if date !== undefined}
        <div class="skel-FarDateInput_selected-date">{date.toLocaleDateString()}{ZERO_WIDTH_SPACE}</div>
      {:else}
        <div class="skel-FarDateInput_placeholder">{placeholder}{ZERO_WIDTH_SPACE}</div>
      {/if}
    </div>
    <Gravity>
      <slot name="icon">
        <Icon class="skel-FarDateInput_icon" src={calendar} />
      </slot>
    </Gravity>
  </StretchLayout>
  <FarDatePicker
    slot="modal"
    bind:selectedDate={date}
    onSelect={(date) => {
      toggle()
      onSelect?.(date)
    }}
  />
</Modal>

<CommonCss />

<style global lang="scss">
  .skel-FarDateInput_root {
    align-items: center;
    border-radius: var(--skel-input-border-radius);
    border: var(--skel-input-border-color) 1px solid;

    box-sizing: border-box;
    height: var(--skel-one-input-height);

    cursor: pointer;

    &.skel-FarDateInput_disabled {
      background-color: var(--skel-disabled-input-background-color);
    }
  }

  .skel-FarDateInput_icon {
    margin-right: 0.3em;
  }

  .skel-FarDateInput_preview-area {
    padding: 0.4em 0.6em;
  }

  .skel-FarDateInput_placeholder {
    color: var(--skel-placeholder-text-color);
  }
</style>

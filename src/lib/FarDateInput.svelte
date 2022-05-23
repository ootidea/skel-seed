<script lang="ts">
  import calendar from '/src/assets/calendar.svg'
  import FarDatePicker from './FarDatePicker.svelte'
  import Gravity from './Gravity.svelte'
  import Icon from './Icon.svelte'
  import Modal from './Modal.svelte'
  import StretchLayout from './StretchLayout.svelte'
  import type { Arrow } from './utility'

  export let date: Date | undefined = undefined
  export let placeholder = ''
  export let disabled: true | undefined = undefined
  export let onSelect: Arrow<[Date], unknown> | undefined = undefined
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }

  const ZERO_WIDTH_SPACE = '\u200b'
</script>

<Modal let:toggle>
  <StretchLayout class="skel-FarDateInput_root {klass}" {style} stretchAt={0} on:click={() => disabled || toggle()}>
    <div class="skel-FarDateInput_selected-date">{date?.toLocaleDateString() ?? placeholder}{ZERO_WIDTH_SPACE}</div>
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

<style global lang="scss">
  .skel-FarDateInput_root {
    border-radius: var(--skel-input-border-radius);
    border: var(--skel-input-border-color) 1px solid;
    cursor: pointer;
  }

  .skel-FarDateInput_icon {
    margin-right: 0.3em;
  }

  .skel-FarDateInput_selected-date {
    padding: 0.4em 0.6em;
  }
</style>

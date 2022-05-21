<script lang="ts">
  import calendar from '/src/assets/calendar.svg'
  import DatePicker from './DatePicker.svelte'
  import Gravity from './Gravity.svelte'
  import Icon from './Icon.svelte'
  import Modal from './Modal.svelte'
  import StretchLayout from './StretchLayout.svelte'
  import type { Arrow } from './utility'

  export let date: Date | undefined = undefined
  export let placeholder = ''
  export let disabled: true | undefined = undefined
  export let onSelect: Arrow<[Date], unknown> | undefined = undefined

  const ZERO_WIDTH_SPACE = '\u200b'
</script>

<Modal let:toggle>
  <StretchLayout class="skel-DateInput_root" stretchAt={0} on:click={toggle}>
    <div class="skel-DateInput_selected-date">{date?.toLocaleDateString() ?? placeholder}{ZERO_WIDTH_SPACE}</div>
    <Gravity>
      <slot name="icon">
        <Icon class="skel-DateInput_icon" src={calendar} />
      </slot>
    </Gravity>
  </StretchLayout>
  <DatePicker
    slot="modal"
    bind:selectedDate={date}
    onSelect={(date) => {
      toggle()
      onSelect?.(date)
    }}
  />
</Modal>

<style global lang="scss">
  .skel-DateInput_root {
    border-radius: var(--skel-input-border-radius);
    border: var(--skel-input-border-color) 1px solid;
    overflow: hidden;
    cursor: pointer;
  }

  .skel-DateInput_icon {
    margin-right: 0.3em;
  }

  .skel-DateInput_selected-date {
    padding: 0.4em 0.6em;
  }
</style>

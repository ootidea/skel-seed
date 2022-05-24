<script lang="ts">
  import Button from '../lib/Button.svelte'
  import Modal from '../lib/Modal.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'

  let opened = false
</script>

<PageTitle>Modal</PageTitle>

<SectionTitle>Control by toggle function</SectionTitle>
<Sample>
  <Modal showCloseButton let:toggle>
    <Button onClick={toggle}>Open</Button>
    <div slot="modal" style="padding: 0em">Modal content</div>
  </Modal>
</Sample>

<SectionTitle>Control by flag variable</SectionTitle>
<Sample>
  <Button onClick={() => (opened = true)}>Open</Button>
  <Modal bind:opened>
    <div style="padding: 0.5em 1em">Modal content</div>
  </Modal>
</Sample>

<script lang="ts">
  import Button from '../lib/Button.svelte'
  import DatePicker from '../lib/DatePicker.svelte'
  import Popover from '../lib/Popover.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
</script>

<PageTitle>Popover</PageTitle>

<Sample>
  <Popover let:toggle>
    <Button onClick={toggle}>Open</Button>
    <div slot="popover" style="padding: 0.5em 1em">Pop up text</div>
  </Popover>
</Sample>

<Sample>
  <Popover on="right" let:toggle>
    <Button onClick={toggle}>Open to right</Button>
    <div slot="popover" style="padding: 1em">
      <DatePicker onSelect={toggle} />
    </div>
  </Popover>
</Sample>

<Sample>
  <Popover on="bottom right" joint="bottom right" let:toggle>
    <div style="padding: 3rem; background-color: aliceblue">
      <Button onClick={toggle}>Open in right bottom</Button>
    </div>
    <div slot="popover" style="padding: 0.2em 0.4em">Pop up text</div>
  </Popover>
</Sample>

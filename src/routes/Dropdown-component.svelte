<script lang="ts">
  import Button from '../lib/Button.svelte'
  import Dropdown from '../lib/Dropdown.svelte'
  import Icon from '../lib/Icon.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
</script>

<PageTitle>Dropdown</PageTitle>

<Sample>
  <Dropdown let:toggle>
    <Button fullWidth onClick={toggle}>Open</Button>
    <div slot="dropdown" style="padding: 0.5em 1em">Dropdown text</div>
  </Dropdown>
</Sample>

<Sample>
  <Dropdown let:toggle>
    <Button fullWidth onClick={toggle}>
      <div style="display: flex; width: 100%; align-items: center; justify-content: space-between">
        Dropdown
        <Icon src="src/assets/chevron-down.svg" iconColor="currentColor" />
      </div>
    </Button>
    <div slot="dropdown" style="padding: 0.5em 1em">Longer than button width</div>
  </Dropdown>
</Sample>

<Sample>
  <Dropdown let:toggle>
    <Button fullWidth onClick={toggle}>
      Very long dropdown button
      <Icon src="src/assets/chevron-down.svg" iconColor="currentColor" />
    </Button>
    <div slot="dropdown" style="padding: 0.5em 1em">Short text</div>
  </Dropdown>
</Sample>

<Sample>
  <Dropdown let:toggle>
    <Button fullWidth onClick={toggle}>
      Editable dropdown button
      <Icon src="src/assets/chevron-down.svg" iconColor="currentColor" />
    </Button>
    <div slot="dropdown" contenteditable style="padding: 0.5em 1em">Editable text</div>
  </Dropdown>
</Sample>

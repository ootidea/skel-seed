<script lang="ts">
  import Button from '../lib/Button.svelte'
  import Icon from '../lib/Icon.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'

  const items = ['Button', 'finish', 'cancel', '完了', 'キャンセル']

  async function awaitSomeSeconds() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
  }
</script>

<PageTitle>Button</PageTitle>

<Sample direction="horizontal">
  {#each items as item}
    <Button>{item}</Button>
  {/each}
</Sample>

<SectionTitle>Achromatic</SectionTitle>
<Sample direction="horizontal">
  {#each items as item}
    <Button tint="achromatic">{item}</Button>
  {/each}
</Sample>

<SectionTitle>Ghost</SectionTitle>
<Sample direction="horizontal">
  {#each items as item}
    <Button ghost>{item}</Button>
  {/each}
</Sample>

<SectionTitle>Achromatic & Ghost</SectionTitle>
<Sample direction="horizontal">
  {#each items as item}
    <Button tint="achromatic" ghost>{item}</Button>
  {/each}
</Sample>

<SectionTitle>onClick function that returns a Promise</SectionTitle>
<Sample direction="horizontal">
  <Button onClick={awaitSomeSeconds}>First</Button>
  <Button ghost onClick={awaitSomeSeconds}>First</Button>
  <Button tint="achromatic" onClick={awaitSomeSeconds}>First</Button>
  <Button tint="achromatic" ghost onClick={awaitSomeSeconds}>First</Button>
</Sample>

<SectionTitle>with icon</SectionTitle>
<Sample direction="horizontal">
  <Button>
    Dropdown
    <Icon src="src/assets/chevron-down.svg" iconColor="currentColor" />
  </Button>
  <Button ghost>
    Dropdown
    <Icon src="src/assets/chevron-down.svg" iconColor="currentColor" />
  </Button>
  <Button tint="achromatic" ghost>
    Dropdown
    <Icon src="src/assets/chevron-down.svg" iconColor="currentColor" />
  </Button>
</Sample>

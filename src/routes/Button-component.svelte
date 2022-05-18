<script lang="ts">
  import Button from '../lib/Button.svelte'
  import Icon from '../lib/Icon.svelte'
  import List from '../lib/List.svelte'
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

<Sample>
  <List direction="horizontal" {items} let:item>
    <Button>{item}</Button>
    <div slot="divider" style="width: 0.3em;" />
  </List>
</Sample>

<SectionTitle>Achromatic</SectionTitle>
<Sample>
  <List direction="horizontal" {items} let:item>
    <Button tint="achromatic">{item}</Button>
    <div slot="divider" style="width: 0.3em;" />
  </List>
</Sample>

<SectionTitle>Ghost</SectionTitle>
<Sample>
  <List direction="horizontal" {items} let:item>
    <Button ghost>{item}</Button>
    <div slot="divider" style="width: 0.3em;" />
  </List>
</Sample>

<SectionTitle>Achromatic & Ghost</SectionTitle>
<Sample>
  <List direction="horizontal" {items} let:item>
    <Button tint="achromatic" ghost>{item}</Button>
    <div slot="divider" style="width: 0.3em;" />
  </List>
</Sample>

<SectionTitle>onClick function that returns a Promise</SectionTitle>
<Sample>
  <Button onClick={awaitSomeSeconds}>First</Button>
  <Button ghost onClick={awaitSomeSeconds}>First</Button>
  <Button tint="achromatic" onClick={awaitSomeSeconds}>First</Button>
  <Button tint="achromatic" ghost onClick={awaitSomeSeconds}>First</Button>
</Sample>

<SectionTitle>with icon</SectionTitle>
<Sample>
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

<style global lang="scss">
</style>

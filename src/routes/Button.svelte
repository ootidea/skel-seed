<script lang="ts">
  import Button from '../lib/Button.svelte'
  import Icon from '../lib/Icon.svelte'
  import List from '../lib/List.svelte'
  import Sample from './Sample.svelte'
  import SectionTitle from './SectionTitle.svelte'

  const items = ['Button', 'finish', 'cancel', '完了', 'キャンセル']
</script>

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

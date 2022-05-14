<script lang="ts">
  import Button from '../lib/Button.svelte'
  import List from '../lib/List.svelte'

  const items = ['Button', 'finish', 'cancel', '完了', 'キャンセル']
</script>

<br />

<List direction="horizontal" {items} let:item>
  <Button>{item}</Button>
  <div slot="divider" style="width: 0.3em;" />
</List>

<br />

<List direction="horizontal" {items} let:item>
  <Button tint="achromatic">{item}</Button>
  <div slot="divider" style="width: 0.3em;" />
</List>

<br />

<List direction="horizontal" {items} let:item>
  <Button ghost>{item}</Button>
  <div slot="divider" style="width: 0.3em;" />
</List>

<br />

<List direction="horizontal" {items} let:item>
  <Button ghost tint="achromatic">{item}</Button>
  <div slot="divider" style="width: 0.3em;" />
</List>

<style global lang="scss">
</style>

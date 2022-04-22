<script lang="ts">
  import MultiSelectToggleButton from '../lib/MultiSelectToggleButton.svelte'
  import SingleSelectToggleButton from '../lib/SingleSelectToggleButton.svelte'
</script>

<h1>Toggle button</h1>

<h2>Single select</h2>
<SingleSelectToggleButton values={['West', 'East']} />
<SingleSelectToggleButton values={['Enable auto resize']} />
<SingleSelectToggleButton values={['female', 'male', 'other']} let:value>
  {{ female: '女性', male: '男性', other: 'その他' }[value]}
</SingleSelectToggleButton>

<h2>Multi select</h2>
<MultiSelectToggleButton values={['West', 'East']} />
<MultiSelectToggleButton values={['Enable auto resize']} />
<MultiSelectToggleButton values={['female', 'male', 'other']} let:value>
  {{ female: '女性', male: '男性', other: 'その他' }[value]}
</MultiSelectToggleButton>

<style global lang="scss">
</style>

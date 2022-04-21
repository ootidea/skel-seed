<script lang="ts">
  import MultiSelectToggleButton from '../lib/MultiSelectToggleButton.svelte'
</script>

<h1>Toggle button</h1>

<MultiSelectToggleButton values={['West', 'East']} />
<MultiSelectToggleButton values={['Enable auto resize']} />
<MultiSelectToggleButton values={['female', 'male', 'other']} let:value>
  {{ female: '女性', male: '男性', other: 'その他' }[value]}
</MultiSelectToggleButton>

<style global lang="scss">
</style>

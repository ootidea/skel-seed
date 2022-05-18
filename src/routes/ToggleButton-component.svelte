<script lang="ts">
  import MultiSelectToggleButton from '../lib/MultiSelectToggleButton.svelte'
  import SingleSelectToggleButton from '../lib/SingleSelectToggleButton.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
</script>

<PageTitle>Toggle Button</PageTitle>

<h2>Single select</h2>
<Sample>
  <SingleSelectToggleButton values={['West', 'East']} />
  <SingleSelectToggleButton values={['Enable auto resize']} />
  <SingleSelectToggleButton values={['female', 'male', 'other']} let:value>
    {{ female: '女性', male: '男性', other: 'その他' }[value]}
  </SingleSelectToggleButton>
</Sample>

<h2>Multi select</h2>
<Sample>
  <MultiSelectToggleButton values={['West', 'East']} />
  <MultiSelectToggleButton values={['Enable auto resize']} />
  <MultiSelectToggleButton values={['female', 'male', 'other']} let:value>
    {{ female: '女性', male: '男性', other: 'その他' }[value]}
  </MultiSelectToggleButton>
</Sample>

<style global lang="scss">
</style>

<script lang="ts">
  import MultiSelectToggleButton from '../lib/MultiSelectToggleButton.svelte'
  import SingleSelectToggleButton from '../lib/SingleSelectToggleButton.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>Toggle Button</PageTitle>

<SectionTitle>Single select</SectionTitle>
<Sample>
  <SingleSelectToggleButton values={['West', 'East']} />
  <SingleSelectToggleButton values={['Enable auto resize']} />
  <SingleSelectToggleButton values={['female', 'male', 'other']} let:value>
    {{ female: '女性', male: '男性', other: 'その他' }[value]}
  </SingleSelectToggleButton>
</Sample>

<SectionTitle>Multi select</SectionTitle>
<Sample>
  <MultiSelectToggleButton values={['West', 'East']} />
  <MultiSelectToggleButton values={['Enable auto resize']} />
  <MultiSelectToggleButton values={['female', 'male', 'other']} let:value>
    {{ female: '女性', male: '男性', other: 'その他' }[value]}
  </MultiSelectToggleButton>
</Sample>

<script lang="ts">
  import Select from '../lib/Select.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>Select</PageTitle>

<Sample>
  <Select values={['Female', 'Male', 'Other']} />
</Sample>

<SectionTitle>Default selected</SectionTitle>
<Sample>
  <Select values={['Female', 'Male', 'Other']} selected="Female" />
</Sample>

<SectionTitle>Placeholder</SectionTitle>
<Sample>
  <Select values={['Female', 'Male', 'Other']} placeholder="placeholder" />
</Sample>

<SectionTitle>Disabled</SectionTitle>
<Sample>
  <Select values={['Female', 'Male', 'Other']} selected="Female" disabled />
  <Select values={['Female', 'Male', 'Other']} placeholder="placeholder" disabled />
</Sample>

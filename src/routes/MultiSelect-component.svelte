<script lang="ts">
  import MultiSelect from '../lib/MultiSelect.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>MultiSelect</PageTitle>

<Sample>
  <MultiSelect values={['Female', 'Male', 'Other']} />
</Sample>

<SectionTitle>Default selected</SectionTitle>
<Sample>
  <MultiSelect values={['Female', 'Male', 'Other']} selected={{ Female: true }} />
</Sample>

<SectionTitle>Placeholder</SectionTitle>
<Sample>
  <MultiSelect values={['Female', 'Male', 'Other']} placeholder="placeholder" />
</Sample>

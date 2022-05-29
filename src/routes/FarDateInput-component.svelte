<script lang="ts">
  import FarDateInput from '../lib/FarDateInput.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>FarDateInput</PageTitle>

<SectionTitle>Default appearance</SectionTitle>
<Sample>
  <FarDateInput />
</Sample>

<SectionTitle>Placeholder and initial value</SectionTitle>
<Sample>
  <FarDateInput placeholder="placeholder" />
  <FarDateInput date={new Date()} />
</Sample>

<SectionTitle>Disabled</SectionTitle>
<Sample>
  <FarDateInput placeholder="placeholder" disabled />
  <FarDateInput date={new Date()} disabled />
</Sample>

<script lang="ts">
  import DateInput from '../lib/DateInput.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>DateInput</PageTitle>

<SectionTitle>Default appearance</SectionTitle>
<Sample>
  <DateInput />
</Sample>

<SectionTitle>Placeholder and initial value</SectionTitle>
<Sample>
  <DateInput placeholder="placeholder" />
  <DateInput date={new Date()} />
</Sample>

<SectionTitle>Disabled</SectionTitle>
<Sample>
  <DateInput placeholder="placeholder" disabled />
  <DateInput date={new Date()} disabled />
</Sample>

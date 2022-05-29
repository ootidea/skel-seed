<script lang="ts">
  import AutoSizeTextArea from '../lib/AutoSizeTextArea.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>AutoSizeTextArea</PageTitle>

<SectionTitle>Default appearance</SectionTitle>
<Sample>
  <AutoSizeTextArea />
</Sample>

<SectionTitle>Placeholder and initial value</SectionTitle>
<Sample>
  <AutoSizeTextArea placeholder="placeholder" />
  <AutoSizeTextArea value="initial value" />
</Sample>

<SectionTitle>Disabled</SectionTitle>
<Sample>
  <AutoSizeTextArea placeholder="placeholder" disabled />
  <AutoSizeTextArea value="initial value" disabled />
</Sample>

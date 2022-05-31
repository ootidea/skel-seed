<script lang="ts">
  import AutoSizeTextArea from '../lib/AutoSizeTextArea.svelte'
  import Description from './_components/Description.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>AutoSizeTextArea</PageTitle>

<Description>
  Component for inputting multi-line text.<br />
  Unlike textarea element, the height stretches to match the height of the text.
</Description>

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

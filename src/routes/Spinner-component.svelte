<script lang="ts">
  import Spinner from '../lib/Spinner.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>Spinner</PageTitle>

<SectionTitle>Default</SectionTitle>
<Sample>
  <Spinner />
</Sample>

<SectionTitle>Size</SectionTitle>
<Sample direction="horizontal">
  <Spinner size="0.7em" />
  <Spinner size="1.4em" />
  <Spinner size="2.1rem" />
  <Spinner size="50px" />
</Sample>

<SectionTitle>Frequency</SectionTitle>
<Sample direction="horizontal">
  <Spinner frequency={0.7} />
  <Spinner frequency={1.4} />
  <Spinner frequency={2.1} />
  <Spinner frequency={2.8} />
</Sample>

<SectionTitle>Thickness</SectionTitle>
<Sample direction="horizontal">
  <Spinner thickness={10} />
  <Spinner thickness={25} />
  <Spinner thickness={50} />
  <Spinner thickness={80} />
</Sample>

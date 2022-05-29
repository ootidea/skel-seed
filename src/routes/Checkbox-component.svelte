<script lang="ts">
  import Checkbox from '../lib/Checkbox.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>Checkbox</PageTitle>

<Sample>
  <Checkbox>Default</Checkbox>
  <Checkbox checked>Checked</Checkbox>
</Sample>

<SectionTitle>Disabled</SectionTitle>
<Sample>
  <Checkbox disabled>Default</Checkbox>
  <Checkbox checked disabled>Checked</Checkbox>
</Sample>

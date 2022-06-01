<script lang="ts">
  import Text from '../lib/Text.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>Text</PageTitle>

<SectionTitle>Text containing newline characters</SectionTitle>
<Sample>
  <Text value={'Multi\nline\ntext'} />
</Sample>

<SectionTitle>Skeleton</SectionTitle>
<Sample>
  <Text value={new Promise(() => {})} loading="Sufficiently long invisible dummy text." />
</Sample>

<SectionTitle>Word-wrapped skeleton</SectionTitle>
<Sample>
  <div style="width: 16rem">
    <Text value={new Promise(() => {})} loading="Sufficiently long invisible dummy text." />
  </div>
</Sample>

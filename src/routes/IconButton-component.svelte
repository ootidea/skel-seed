<script lang="ts">
  import chevronLeft from '/src/assets/chevron-left.svg'
  import chevronRight from '/src/assets/chevron-right.svg'
  import IconButton from '../lib/IconButton.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'

  async function awaitSomeSeconds() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000)
    })
  }
</script>

<PageTitle>IconButton</PageTitle>

<SectionTitle>Default</SectionTitle>
<Sample>
  <IconButton src={chevronLeft} />
  <IconButton src={chevronRight} />
</Sample>

<SectionTitle>Icon color</SectionTitle>
<Sample>
  <IconButton src={chevronLeft} iconColor="#F05A4D" />
  <IconButton src={chevronRight} iconColor="hsl(180, 60%, 40%)" />
</Sample>

<SectionTitle>Button size</SectionTitle>
<Sample>
  <IconButton src={chevronLeft} size="40px" />
  <IconButton src={chevronRight} size="1.5em" />
</Sample>

<SectionTitle>Icon size (without button size)</SectionTitle>
<Sample>
  <IconButton src={chevronLeft} iconSize="50%" />
  <IconButton src={chevronRight} iconSize="100%" />
</Sample>

<SectionTitle>onClick function that returns a Promise</SectionTitle>
<Sample>
  <IconButton src={chevronLeft} onClick={awaitSomeSeconds} />
  <IconButton src={chevronRight} onClick={awaitSomeSeconds} />
</Sample>

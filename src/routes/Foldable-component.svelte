<script lang="ts">
  import DatePicker from '../lib/DatePicker.svelte'
  import Foldable from '../lib/Foldable.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
</script>

<PageTitle>Foldable</PageTitle>

<Sample>
  <Foldable>
    <div slot="title">Title</div>
    <p>paragraph</p>
    <p>test</p>
  </Foldable>
</Sample>

<Sample>
  <Foldable unfolded>
    <div slot="title">DatePicker</div>
    <DatePicker />
  </Foldable>
</Sample>

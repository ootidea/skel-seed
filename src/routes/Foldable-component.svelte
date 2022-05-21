<script lang="ts">
  import DatePicker from '../lib/DatePicker.svelte'
  import Foldable from '../lib/Foldable.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'

  let month = 'January'
</script>

<PageTitle>Foldable</PageTitle>

<SectionTitle>Default appearance</SectionTitle>
<Sample>
  <Foldable>
    <div slot="title">Title</div>
    <p>paragraph</p>
    <p>test</p>
  </Foldable>
</Sample>

<SectionTitle>Default unfolded</SectionTitle>
<Sample>
  <Foldable unfolded>
    <div slot="title">DatePicker</div>
    <DatePicker />
  </Foldable>
</Sample>

<SectionTitle>Nested</SectionTitle>
<Sample>
  <Foldable unfolded>
    <div slot="title">1</div>
    <Foldable>
      <div slot="title">1.1</div>
      ...
    </Foldable>
    <Foldable>
      <div slot="title">1.2</div>
      ...
    </Foldable>
  </Foldable>
</Sample>

<SectionTitle>Accordion</SectionTitle>
<Sample>
  <Foldable unfolded={month === 'January'} onUnfold={() => (month = 'January')}>
    <div slot="title">January</div>
    ...
  </Foldable>
  <Foldable unfolded={month === 'February'} onUnfold={() => (month = 'February')}>
    <div slot="title">February</div>
    ...
  </Foldable>
  <Foldable unfolded={month === 'March'} onUnfold={() => (month = 'March')}>
    <div slot="title">March</div>
    ...
  </Foldable>
</Sample>

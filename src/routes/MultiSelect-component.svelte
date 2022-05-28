<script lang="ts">
  import MultiSelect from '../lib/MultiSelect.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>MultiSelect</PageTitle>

<Sample>
  <MultiSelect values={['Female', 'Male', 'Other']} />
</Sample>

<SectionTitle>Default selected</SectionTitle>
<Sample>
  <MultiSelect values={['Female', 'Male', 'Other']} selected={{ Female: true }} />
</Sample>

<SectionTitle>Placeholder</SectionTitle>
<Sample>
  <MultiSelect values={['Female', 'Male', 'Other']} placeholder="placeholder" />
</Sample>

<SectionTitle>Auto wrap</SectionTitle>
<Sample>
  <MultiSelect
    style="max-width: 25em"
    values={[
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]}
    selected={{ January: true, February: true, March: true, August: true, September: true }}
  />
</Sample>

<SectionTitle>Disabled</SectionTitle>
<Sample>
  <MultiSelect values={['Female', 'Male', 'Other']} placeholder="placeholder" disabled />
  <MultiSelect
    values={[
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]}
    selected={{ January: true, February: true, March: true, August: true, September: true }}
    disabled
  />
</Sample>

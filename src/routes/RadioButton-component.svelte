<script lang="ts">
  import RadioButton from '../lib/RadioButton.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'

  let group: string | undefined
</script>

<PageTitle>RadioButton</PageTitle>
<Sample>
  <RadioButton bind:group value="TypeScript" />
  <RadioButton bind:group value="Kotlin" />
</Sample>

<Sample>
  <RadioButton name="2nd" value="Swift" />
  <RadioButton name="2nd">Prolog</RadioButton>
</Sample>

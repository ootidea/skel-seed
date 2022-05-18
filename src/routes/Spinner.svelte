<script lang="ts">
  import Spinner from '../lib/Spinner.svelte'
  import Sample from './_components/Sample.svelte'
</script>

<h1>Spinner</h1>

<h2>Default</h2>
<Sample>
  <Spinner />
</Sample>

<h2>Size</h2>
<Sample>
  <Spinner size="0.7em" />
  <Spinner size="1.4em" />
  <Spinner size="2.1em" />
  <Spinner size="2.8em" />
</Sample>

<h2>Frequency</h2>
<Sample>
  <Spinner frequency={0.7} />
  <Spinner frequency={1.4} />
  <Spinner frequency={2.1} />
  <Spinner frequency={2.8} />
</Sample>

<h2>Thickness</h2>
<Sample>
  <Spinner thickness={10} />
  <Spinner thickness={25} />
  <Spinner thickness={50} />
  <Spinner thickness={80} />
</Sample>

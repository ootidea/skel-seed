<script lang="ts">
  import Spinner from '../lib/Spinner.svelte'
</script>

<div>
  <h1>Spinner</h1>

  <h2>Default</h2>
  <Spinner />

  <h2>Size</h2>
  <Spinner size="0.7em" />
  <Spinner size="1.4em" />
  <Spinner size="2.1em" />
  <Spinner size="2.8em" />

  <h2>Frequency</h2>
  <Spinner frequency={0.7} />
  <Spinner frequency={1.4} />
  <Spinner frequency={2.1} />
  <Spinner frequency={2.8} />

  <h2>Thickness</h2>
  <Spinner thickness={10} />
  <Spinner thickness={25} />
  <Spinner thickness={50} />
  <Spinner thickness={80} />
</div>

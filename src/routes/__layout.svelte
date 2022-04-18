<script lang="ts">
  import Divider from '../lib/Divider.svelte'
  import Link from '../lib/Link.svelte'
  import StretchLayout from '../lib/StretchLayout.svelte'
</script>

<StretchLayout class="full-height" stretchAt={2}>
  <div class="sidebar">
    <Link href="./">index</Link>
    <Link href="DataTable" />
    <Link href="Popover" />
  </div>
  <Divider direction="vertical" />
  <slot />
</StretchLayout>

<style global lang="scss">
  html {
    height: 100%;
  }

  body {
    height: 100%;
    margin: 0;
  }

  body > div {
    height: 100%;
  }

  .full-height {
    height: 100%;
  }

  .sidebar {
    width: 16vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1em;
  }
</style>

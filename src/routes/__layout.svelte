<script lang="ts">
  import Divider from '../lib/Divider.svelte'
  import Link from '../lib/Link.svelte'
  import StretchLayout from '../lib/StretchLayout.svelte'
</script>

<StretchLayout class="full-height" stretchAt={2}>
  <aside class="sidebar">
    <Link href="./">index</Link>
    <Link href="Button" />
    <Link href="RadioButton" />
    <Link href="ToggleButton" />
    <Link href="DataTable" />
    <Link href="Popover" />
    <Link href="Spinner" />
  </aside>
  <Divider direction="vertical" />
  <main>
    <slot />
  </main>
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

    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;
  }

  main {
    box-sizing: border-box;
    height: 100%;
    overflow-y: auto;

    padding: 2em;
  }
</style>

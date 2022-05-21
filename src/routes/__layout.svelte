<script lang="ts">
  import Divider from '../lib/Divider.svelte'
  import StretchLayout from '../lib/StretchLayout.svelte'
  import SidebarMenu from './_components/SidebarMenu.svelte'
</script>

<StretchLayout class="full-height" stretchAt={2}>
  <aside class="sidebar">
    <SidebarMenu componentName="Button" />
    <SidebarMenu componentName="IconButton" />
    <SidebarMenu componentName="RadioButton" />
    <SidebarMenu componentName="ToggleButton" />
    <SidebarMenu componentName="TextInput" />
    <SidebarMenu componentName="AutoSizeTextArea" />
    <SidebarMenu componentName="FarDatePicker" />
    <SidebarMenu componentName="DataTable" />
    <SidebarMenu componentName="Popover" />
    <SidebarMenu componentName="Modal" />
    <SidebarMenu componentName="Foldable" />
    <SidebarMenu componentName="Spinner" />
    <SidebarMenu componentName="Toast" />
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
    padding-block: 1em;

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

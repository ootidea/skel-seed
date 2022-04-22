<script lang="ts">
  import AutoSizeTextArea from '../lib/AutoSizeTextArea.svelte'
  import Popover from '../lib/Popover.svelte'
</script>

<div>
  <Popover on="left" let:toggle>
    <button on:click={toggle}>hoge</button>
    <AutoSizeTextArea />
    <div slot="popover-frame">
      <AutoSizeTextArea />
      <button on:click={toggle}>x</button>
    </div>
  </Popover>
  <Popover on="right" joint="top left" let:toggle>
    <button on:click={toggle}>hoge</button>
    <div slot="popover">
      <AutoSizeTextArea />
      <button on:click={toggle}>x</button>
    </div>
  </Popover>
  <div>@@@@@@@@@@@</div>
  <div>@@@@@@@@@@@</div>
  <div>@@@@@@@@@@@</div>
  <Popover on="right" joint="bottom left" let:toggle>
    <button on:click={toggle}>hoge</button>
    <div slot="popover">
      <div>@@@@@@@@@@@</div>
      <div>@@@@@@@@@@@</div>
      <div>@@@@@@@@@@@</div>
    </div>
  </Popover>
  <div>@@@@@@@@@@@</div>
  <div>@@@@@@@@@@@</div>
  <div>@@@@@@@@@@@</div>
</div>

<style global lang="scss">
</style>

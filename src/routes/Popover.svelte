<script lang="ts">
  import Popover from '../lib/Popover.svelte'
  import TextArea from '../lib/TextArea.svelte'
</script>

<div>
  <Popover let:toggle>
    <button on:click={toggle}>hoge</button>
    <TextArea />
    <div slot="popover" class="popover">
      <TextArea />
      <button on:click={toggle}>x</button>
    </div>
  </Popover>
  <Popover let:toggle>
    <button on:click={toggle}>hoge</button>
    <div slot="popover" class="popover">
      <TextArea />
      <button on:click={toggle}>x</button>
    </div>
  </Popover>
  <div>@@@@@@@@@@@</div>
  <div>@@@@@@@@@@@</div>
  <div>@@@@@@@@@@@</div>
  <Popover let:toggle>
    <button on:click={toggle}>hoge</button>
    <div slot="popover" class="popover">
      <TextArea />
      <button on:click={toggle}>x</button>
    </div>
  </Popover>
  <div>@@@@@@@@@@@</div>
  <div>@@@@@@@@@@@</div>
  <div>@@@@@@@@@@@</div>
</div>

<style global lang="scss">
  .popover {
    background-color: oklch(100% 0 0);
  }
</style>

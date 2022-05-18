<script lang="ts">
  import { goto } from '$app/navigation'
  import { page } from '$app/stores'
  import CommonCss from '../../lib/CommonCss.svelte'

  export let componentName: string
  let klass = ''
  export { klass as class }

  function onClick() {
    goto(`./${componentName}-component`)
  }

  function getFileName(url: string): string {
    const entities = url.split('/')
    return entities[entities.length - 1]
  }
</script>

<div
  class="root {klass}"
  class:active={getFileName($page.url.pathname) === `${componentName}-component`}
  on:click={onClick}
>
  {componentName}
</div>

<CommonCss />

<style lang="scss">
  .root {
    padding: 0.7em 1.4em;
    cursor: pointer;

    &.active {
      color: var(--skel-primary-color);
      font-weight: bold;
    }

    &:hover {
      background-color: hsl(0 0% 96%);
    }

    &:active {
      background-color: hsl(0 0% 92%);
    }
  }
</style>

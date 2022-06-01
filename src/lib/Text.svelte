<script lang="ts">
  import Await from './Await.svelte'
  import { joinClasses, joinStyles, type StyleObject } from './utility'

  export let value: Promise<string> | string | undefined = undefined
  export let loading: string | undefined = undefined
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined
</script>

<Await promise={value} let:result>
  {#if result === undefined}
    <span class="skel-Text_root skel-Text_loading {joinClasses(klass, classes)}" style={joinStyles(style, styles)}
      >{loading ?? ''}</span
    >
  {:else}
    <span class="skel-Text_root {joinClasses(klass, classes)}" style={joinStyles(style, styles)}>{result}</span>
  {/if}
</Await>

<style global lang="scss">
  .skel-Text_root {
    white-space: pre-wrap;
  }

  .skel-Text_loading {
    color: transparent;
    text-decoration: line-through oklch(88% 0 0) 0.9em;
  }
</style>

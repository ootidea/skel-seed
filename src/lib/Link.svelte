<script lang="ts">
  import { joinClasses } from './utility'

  export let href = ''
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined
</script>

<a class={`skel-Link_root ${joinClasses(klass, classes)}`} {style} {href} {...$$restProps}>
  <slot>{href}</slot>
</a>

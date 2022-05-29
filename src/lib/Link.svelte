<script lang="ts">
  import { joinClasses, joinStyles, type StyleObject } from './utility'

  export let href = ''
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined
</script>

<a class={`skel-Link_root ${joinClasses(klass, classes)}`} style={joinStyles(style, styles)} {href} {...$$restProps}>
  <slot>{href}</slot>
</a>

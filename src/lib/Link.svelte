<script lang="ts">
  import { type ClassProp, createClassGetter, createStyleGetter, type StyleProp } from './utility'

  export let href = ''

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('Link', classProp)
  export let style: StyleProp = {}
  $: getStyle = createStyleGetter(style)
</script>

<a class={getClass('root')} style={getStyle('root')} {href}>
  <slot>{href}</slot>
</a>

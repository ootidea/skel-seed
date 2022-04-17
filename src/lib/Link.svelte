<script lang="ts">
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  export let href = ''

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('Link', classProp, style)
</script>

<a {...injectors.attr('root')} {href}>
  <slot>{href}</slot>
</a>

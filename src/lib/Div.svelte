<script lang="ts">
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  export let width: string | undefined = undefined

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('Div', classProp, style, { width })
</script>

<div {...injectors.attr('root')}>
  <slot />
</div>

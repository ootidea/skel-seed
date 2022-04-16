<script lang="ts">
  export let href = ''

  import { classGenerator, type ClassProp } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = classGenerator('Link', classProp)
</script>

<a class={getClass('root')} {href}>
  <slot>{href}</slot>
</a>

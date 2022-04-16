<script lang="ts">
  export let href = ''

  import { type ClassProp, createClassGetter } from './utility'

  let classProp: ClassProp = {}
  export { classProp as class }
  $: getClass = createClassGetter('Link', classProp)
</script>

<a class={getClass('root')} {href}>
  <slot>{href}</slot>
</a>

<script lang="ts">
  export let href = ''
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
</script>

<a class="skel-Link_root {klass}" {style} {href}>
  <slot>{href}</slot>
</a>

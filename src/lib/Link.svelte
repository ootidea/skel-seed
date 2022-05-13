<script lang="ts">
  export let href = ''
  let klass = ''
  export { klass as class }
</script>

<a class="skel-link_root {klass}" {href}>
  <slot>{href}</slot>
</a>

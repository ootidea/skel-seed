<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skel-vertical-prepend_root {klass}">
  <slot />
</div>

<style global lang="scss">
  .skel-vertical-prepend_root {
    display: grid;
    grid-template-rows: minmax(0, 1fr) auto;
    height: 100%;
  }
</style>

<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skel-vertical-append_root {klass}">
  <slot />
</div>

<style global lang="scss">
  .skel-vertical-append_root {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
    height: 100%;
  }
</style>

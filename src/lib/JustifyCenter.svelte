<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skel-justify-center_root {klass}">
  <slot />
</div>

<style global lang="scss">
  .skel-justify-center_root {
    display: flex;
    justify-content: center;
  }
</style>

<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skel-justify-end_root {klass}">
  <slot />
</div>

<style global lang="scss">
  .skel-justify-end_root {
    display: flex;
    justify-content: end;
  }
</style>

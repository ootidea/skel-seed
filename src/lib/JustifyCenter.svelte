<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skeleto-justify-center_root {klass}">
  <slot />
</div>

<style global lang="scss">
  .skeleto-justify-center_root {
    display: flex;
    justify-content: center;
  }
</style>

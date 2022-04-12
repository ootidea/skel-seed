<script lang="ts">
  let klass = ''
  export { klass as class }
</script>

<div class="skeleto-justify-end_root {klass}">
  <slot />
</div>

<style global lang="scss">
  .skeleto-justify-end_root {
    display: flex;
    justify-content: end;
  }
</style>

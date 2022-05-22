<script lang="ts">
  import { type EnneaPosition, toHorizontalPosition, toVerticalPosition } from './Position'

  export let to: EnneaPosition = 'center'
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
</script>

<div
  class="skel-Gravity_root {klass}"
  {style}
  data-horizontal-position={toHorizontalPosition(to)}
  data-vertical-position={toVerticalPosition(to)}
>
  <slot />
</div>

<style global lang="scss">
  .skel-Gravity_root {
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    &[data-horizontal-position='left'] {
      justify-content: left;
    }

    &[data-horizontal-position='center'] {
      justify-content: center;
    }

    &[data-horizontal-position='right'] {
      justify-content: right;
    }

    &[data-vertical-position='top'] {
      align-items: start;
    }

    &[data-vertical-position='center'] {
      align-items: center;
    }

    &[data-vertical-position='bottom'] {
      align-items: end;
    }
  }
</style>

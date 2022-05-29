<script lang="ts">
  import { type EnneaPosition, toHorizontalPosition, toVerticalPosition } from './Position'
  import { joinClasses, joinStyles, type StyleObject } from './utility'

  export let to: EnneaPosition = 'center'
  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined
</script>

<div
  class={`skel-Gravity_root ${joinClasses(klass, classes)}`}
  style={joinStyles(style, styles)}
  data-horizontal-position={toHorizontalPosition(to)}
  data-vertical-position={toVerticalPosition(to)}
  {...$$restProps}
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

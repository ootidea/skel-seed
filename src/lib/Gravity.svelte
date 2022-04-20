<script lang="ts">
  import { type EnneaPosition, toHorizontalPosition, toVerticalPosition } from './Position'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  export let to: EnneaPosition = 'center'

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('Gravity', classProp, style)
</script>

<div
  {...injectors.attr('root')}
  data-horizontal-position={toHorizontalPosition(to)}
  data-vertical-position={toVerticalPosition(to)}
>
  <slot />
</div>

<style global lang="scss">
  .skel-gravity_root {
    display: flex;
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

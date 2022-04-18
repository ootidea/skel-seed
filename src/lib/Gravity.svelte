<script lang="ts">
  import { type JointPosition } from './JointPosition'
  import { type ClassProp, createInjectors, type StyleProp } from './utility'

  export let position: JointPosition = 'center'

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('Gravity', classProp, style)
</script>

<div {...injectors.attr('root')} data-position={position}>
  <slot />
</div>

<style global lang="scss">
  .skel-gravity_root {
    display: flex;
    width: 100%;
    height: 100%;

    &[data-position='top left'],
    &[data-position='left'],
    &[data-position='bottom left'] {
      justify-content: left;
    }

    &[data-position='top'],
    &[data-position='center'],
    &[data-position='bottom'] {
      justify-content: center;
    }

    &[data-position='top right'],
    &[data-position='right'],
    &[data-position='bottom right'] {
      justify-content: right;
    }

    &[data-position='top left'],
    &[data-position='top'],
    &[data-position='top right'] {
      align-items: start;
    }

    &[data-position='left'],
    &[data-position='center'],
    &[data-position='right'] {
      align-items: center;
    }

    &[data-position='bottom left'],
    &[data-position='bottom'],
    &[data-position='bottom right'] {
      align-items: end;
    }
  }
</style>

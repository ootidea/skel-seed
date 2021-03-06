<script context="module" lang="ts">
  import { flip } from 'svelte/animate'
  import { get, writable, type Writable } from 'svelte/store'
  import { scale } from 'svelte/transition'
  import { assertNonUndefined, getCssVariableAsNumber } from './utility'

  export type ToastOptions = {
    type?: ToastType
    /**
     * Amount of time (in milliseconds) that toast remains visible.
     * If non-positive integer, toast is not be displayed.
     * If Infinity or NaN, toast is persistent.
     */
    durationMs?: number
    onClick?: (toastModel: ToastModel, event: MouseEvent) => unknown
  }

  export type ToastType = 'normal' | 'error' | 'success'
  export type ToastModel = { id: ToastId; payload: unknown; options?: ToastOptions }
  export type ToastId = number

  export function showToast(payload: unknown, options?: ToastOptions): ToastId | undefined {
    const durationMs = getDurationMs(options)
    if (durationMs <= 0) return undefined

    const toastModels = get(toastModelsStore)
    const newToastId = nextAvailableId++
    const newToastModel = { id: newToastId, payload, options }

    toastModels.push(newToastModel)
    toastModelsStore.set(toastModels)

    if (toastModels.length === 1) {
      if (Number.isFinite(durationMs)) {
        setTimeout(() => removeToast(newToastId), durationMs)
      }
    }

    return newToastId
  }

  export function removeToast(toastId: ToastId) {
    const toastModels = get(toastModelsStore)
    const index = toastModels.findIndex((toastModel) => toastModel.id === toastId)
    if (index === -1) return

    toastModels.splice(index, 1)
    toastModelsStore.set(toastModels)

    if (index > 0) return

    const nextFirstToast = toastModels[0]
    if (nextFirstToast !== undefined) {
      const durationMs = getDurationMs(nextFirstToast.options)
      if (Number.isFinite(durationMs)) {
        setTimeout(() => removeToast(nextFirstToast.id), durationMs)
      }
    }
  }

  function getDurationMs(toastOptions: ToastOptions | undefined): number {
    const durationMs = toastOptions?.durationMs ?? getCssVariableAsNumber('--skel-Toast_default-duration-ms')
    assertNonUndefined(durationMs)
    return durationMs
  }

  const toastModelsStore: Writable<ToastModel[]> = writable([])
  let nextAvailableId: ToastId = 0
</script>

<script lang="ts">
  import { onDestroy } from 'svelte'
  import CommonCss from './CommonCss.svelte'
  import Icon from './Icon.svelte'
  import { joinClasses, joinStyles, type StyleObject } from './utility'

  export let style: string | undefined = undefined
  export let styles: StyleObject | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  onDestroy(() => {
    // Clear the toast data before transitioning to another page on the SPA
    // because the toast data may not be compatible with other pages.
    $toastModelsStore = []
  })

  function onClick(toastModel: ToastModel, event: MouseEvent) {
    removeToast(toastModel.id)
    toastModel.options?.onClick?.(toastModel, event)
  }
</script>

<div class={`skel-Toast_root ${joinClasses(klass, classes)}`} style={joinStyles(style, styles)} {...$$restProps}>
  {#each $toastModelsStore as toastModel (toastModel.id)}
    <div class="skel-Toast_toast-wrapper" animate:flip>
      <slot model={toastModel}>
        <div
          class="skel-Toast_default-view"
          data-type={toastModel.options?.type ?? 'normal'}
          transition:scale
          on:click={(event) => onClick(toastModel, event)}
        >
          {#if toastModel.options?.type === 'error'}
            <Icon
              class="skel-Toast_icon"
              src="src/assets/alert-outline.svg"
              size="1.3em"
              iconColor="var(--skel-error-color)"
            />
          {:else if toastModel.options?.type === 'success'}
            <Icon
              class="skel-Toast_icon"
              src="src/assets/check-circle-outline.svg"
              size="1.3em"
              iconColor="var(--skel-success-color)"
            />
          {/if}
          <div class="skel-Toast_payload">{toastModel.payload}</div>
        </div>
      </slot>
    </div>
  {/each}
</div>

<CommonCss />

<style global lang="scss">
  :root {
    --skel-Toast_default-duration-ms: 3000;
  }

  .skel-Toast_root {
    // Show at bottom right
    position: fixed;
    bottom: 0;
    right: 0;

    margin: 1em;

    display: flex;
    flex-direction: column-reverse;
    align-items: end;
  }

  .skel-Toast_default-view {
    display: flex;
    align-items: center;

    max-width: 40vw;
    border-radius: 0.2em;

    margin: 0.5em;
    padding: 0.4em 1em;

    background-color: var(--skel-background-color);
    box-shadow: 0 1px 4px oklch(75% 0 0);

    cursor: pointer;
  }

  .skel-Toast_icon {
    margin-right: 0.5em;
  }

  .skel-Toast_payload {
    white-space: pre-wrap;
  }
</style>

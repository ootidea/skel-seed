<script lang="ts">
  import check from '/src/assets/check.svg'
  import Icon from './Icon.svelte'
  import Link from './Link.svelte'
  import type { DiscriminatedUnion } from './utility'
  import { joinClasses } from './utility'

  export let value: unknown = undefined
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  $: analysisResult = analyze(value)

  function analyze(value: unknown): AnalysisResult {
    if (typeof value === 'boolean') return { type: 'boolean', value }
    if (typeof value === 'number') return { type: 'number', value }
    if (typeof value === 'bigint') return { type: 'bigint', value }

    if (value instanceof Date) return { type: 'Date', value }
    if (value instanceof URL) return { type: 'URL', value }

    if (typeof value === 'string') {
      try {
        return { type: 'URL', value: new URL(value) }
      } catch {
        return { type: 'string', value }
      }
    }

    return { type: 'unknown', value }
  }

  type AnalysisResult = DiscriminatedUnion<{
    Date: { value: Date }
    URL: { value: URL }
    boolean: { value: boolean }
    number: { value: number }
    bigint: { value: bigint }
    string: { value: string }
    unknown: { value: unknown }
  }>
</script>

<div
  class={`skel-DataTableCell_root ${joinClasses(klass, classes)}`}
  {style}
  data-type={analysisResult.type}
  {...$$restProps}
>
  {#if analysisResult.type === 'number'}
    <slot name="number" value={analysisResult.value}>
      {analysisResult.value.toLocaleString()}
    </slot>
  {:else if analysisResult.type === 'bigint'}
    <slot name="bigint" value={analysisResult.value}>
      {analysisResult.value.toLocaleString()}
    </slot>
  {:else if analysisResult.type === 'boolean'}
    <slot name="boolean" value={analysisResult.value}>
      {#if value}
        <Icon src={check} />
      {/if}
    </slot>
  {:else if analysisResult.type === 'Date'}
    <slot name="Date" value={analysisResult.value}>
      {analysisResult.value.toLocaleString()}
    </slot>
  {:else if analysisResult.type === 'URL'}
    <slot name="URL" value={analysisResult.value}>
      <Link href={analysisResult.value.href} />
    </slot>
  {:else if analysisResult.type === 'string'}
    <slot name="string" value={analysisResult.value}>
      {value}
    </slot>
  {:else}
    <slot name="unknown" value={analysisResult.value}>
      {value ?? ''}
    </slot>
  {/if}
</div>

<style global lang="scss">
  .skel-DataTableCell_root {
    white-space: pre-wrap;

    &[data-type='number'] {
      display: flex;
      justify-content: end;
    }

    &[data-type='bigint'] {
      display: flex;
      justify-content: end;
    }

    &[data-type='boolean'] {
      display: flex;
      justify-content: center;
    }
  }
</style>

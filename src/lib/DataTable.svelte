<script lang="ts">
  import DataTableCell from './DataTableCell.svelte'
  import Divider from './Divider.svelte'
  import IconButton from './IconButton.svelte'
  import StretchLayout from './StretchLayout.svelte'
  import { type Arrow, call, joinClasses } from './utility'
  import arrowDown from '/src/assets/arrow-down.svg'

  type Row = $$Generic<Record<string, unknown>>
  type Column = string | { id: string; title?: string; sortable?: boolean | CompareFunction }
  type CompareFunction = Arrow<[unknown, unknown, Row, Row], number>

  export let rows: readonly Row[] = []
  export let columns: readonly Column[] = []
  export let evenRowBackgroundColor = 'var(--skel-DataTable_even-row-background-default-color)'
  export let oddRowBackgroundColor = 'var(--skel-DataTable_odd-row-background-default-color)'
  export let sortingState: { columnId: string; reversed: boolean } | undefined = undefined
  export let style: string | undefined = undefined
  let klass = ''
  export { klass as class }
  export let classes: Record<string, unknown> | undefined = undefined

  $: sortedRows = call(() => {
    const result = rows.slice()
    if (sortingState === undefined) return result

    const sortingColumn = columns.find((column) => getColumnId(column) === sortingState.columnId)
    if (sortingColumn === undefined) return result
    const sortingColumnId = sortingState.columnId

    result.sort((row1, row2) => {
      const value1 = row1[sortingColumnId]
      const value2 = row2[sortingColumnId]
      const compareFunction = getCompareFunction(sortingColumn)
      return compareFunction(value1, value2, row1, row2)
    })

    if (sortingState.reversed) {
      result.reverse()
    }

    return result
  })

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function compareInStandardWay(value1: unknown, value2: unknown, row1: Row, row2: Row): number {
    const type1 = typeof value1
    const type2 = typeof value2
    if (type1 === type2) {
      if (type1 === 'number') {
        return value1 - value2
      }
      if (type1 === 'bigint') {
        return Number(value1 - value2)
      }
      if (type1 === 'boolean') {
        // trueが上、falseが下に並ぶ
        return (value1 ? 0 : 1) - (value2 ? 0 : 1)
      }
      if (value1 instanceof Date && value2 instanceof Date) {
        return value1.getTime() - value2.getTime()
      }

      return String(value1).localeCompare(String(value2))
    } else {
      return type1.localeCompare(type2)
    }
  }

  function getColumnId(column: Column): string {
    if (typeof column === 'string') return column

    return column.id
  }

  function getColumnTitle(column: Column): string {
    if (typeof column === 'string') return column

    return column.title ?? column.id
  }

  function getSortable(column: Column): boolean {
    if (typeof column === 'string') return false

    return Boolean(column.sortable)
  }

  function getCompareFunction(column: Column): CompareFunction {
    if (typeof column === 'string') return compareInStandardWay

    if (typeof column.sortable === 'function') return column.sortable

    return compareInStandardWay
  }

  function onClickSortButton(columnId: string) {
    if (sortingState?.columnId === columnId) {
      sortingState.reversed = !sortingState.reversed
    } else {
      sortingState = { columnId, reversed: false }
    }
  }
</script>

<div
  class={`skel-DataTable_root ${joinClasses(klass, classes)}`}
  {style}
  style:--skel-DataTable_template-columns={Array(columns.length + 1)
    .fill('max-content')
    .join(' auto ')}
  style:--skel-data-table-column-count={columns.length}
  style:--skel-DataTable_even-row-background-color={evenRowBackgroundColor}
  style:--skel-DataTable_odd-row-background-color={oddRowBackgroundColor}
  {...$$restProps}
>
  <div class="skel-DataTable_horizontal-ruled-line">
    <slot name="horizontal-ruled-line" rowIndex={0}>
      <Divider />
    </slot>
  </div>

  <div class="skel-DataTable_header-row">
    {#each columns as column, columnIndex}
      <div class="skel-DataTable_vertical-ruled-line">
        <slot name="vertical-ruled-line" rowIndex={0} {columnIndex}>
          <Divider direction="vertical" />
        </slot>
      </div>

      {@const columnId = getColumnId(column)}
      {@const columnTitle = getColumnTitle(column)}
      <StretchLayout class="skel-DataTable_cell" data-column-id={columnId}>
        <div class="skel-DataTable_column-title" data-column-id={columnId}>
          <slot name="header-cell" {columnId} {columnTitle} {columnIndex}>
            <span style="white-space: pre-wrap">{columnTitle}</span>
          </slot>
        </div>
        {#if getSortable(column)}
          {#if sortingState?.columnId === columnId}
            <IconButton
              class="skel-DataTable_sort-button"
              src={arrowDown}
              iconColor="var(--skel-DataTable_sort-icon-default-active-color)"
              data-reversed={sortingState.reversed}
              onClick={() => onClickSortButton(columnId)}
            />
          {:else}
            <IconButton
              class="skel-DataTable_sort-button"
              src={arrowDown}
              iconColor="var(--skel-DataTable_sort-icon-default-inactive-color)"
              onClick={() => onClickSortButton(columnId)}
            />
          {/if}
        {/if}
      </StretchLayout>
    {/each}

    <div class="skel-DataTable_vertical-ruled-line">
      <slot name="vertical-ruled-line" rowIndex={0} columnIndex={columns.length}>
        <Divider direction="vertical" />
      </slot>
    </div>
  </div>

  {#each sortedRows as row, index}
    {@const rowIndex = index + 1}
    <div class="skel-DataTable_horizontal-ruled-line">
      <slot name="horizontal-ruled-line" {rowIndex}>
        <Divider />
      </slot>
    </div>

    <div
      class="skel-DataTable_body-row"
      class:skel-DataTable_even-row={index % 2 === 0}
      class:skel-DataTable_odd-row={index % 2 === 1}
    >
      {#each columns as column, columnIndex}
        <div class="skel-DataTable_vertical-ruled-line">
          <slot name="vertical-ruled-line" {rowIndex} {columnIndex}>
            <Divider direction="vertical" />
          </slot>
        </div>

        {@const columnId = getColumnId(column)}
        {@const value = row[columnId]}
        <div class="skel-DataTable_cell" data-column-id={columnId}>
          <slot name="cell" {row} {columnId} {value} {rowIndex} {columnIndex}>
            <DataTableCell {value} />
          </slot>
        </div>
      {/each}

      <div class="skel-DataTable_vertical-ruled-line">
        <slot name="vertical-ruled-line" {rowIndex} columnIndex={columns.length}>
          <Divider direction="vertical" />
        </slot>
      </div>
    </div>
  {/each}

  <div class="skel-DataTable_horizontal-ruled-line">
    <slot name="horizontal-ruled-line" rowIndex={rows.length + 1}>
      <Divider />
    </slot>
  </div>
</div>

<style global lang="scss">
  :root {
    --skel-DataTable_header-background-default-color: oklch(90% 0.04 200);
    --skel-DataTable_even-row-background-default-color: transparent;
    --skel-DataTable_odd-row-background-default-color: transparent;
    --skel-DataTable_sort-icon-default-active-color: oklch(40% 0 0);
    --skel-DataTable_sort-icon-default-inactive-color: oklch(60% 0 0);
  }

  .skel-DataTable_root {
    display: grid;
    grid-template-columns: var(--skel-DataTable_template-columns);
    width: max-content;
  }

  .skel-DataTable_header-row {
    display: contents;
  }

  .skel-DataTable_sort-button {
    transform-origin: center;
    transition: all 140ms ease-out;

    &[data-reversed='true'] {
      transform: rotate(-180deg);
    }
  }

  .skel-DataTable_body-row {
    display: contents;
  }

  .skel-DataTable_cell {
    padding: 0.6em 1.6em;

    .skel-DataTable_header-row & {
      font-weight: bold;
      color: oklch(30% 0 0);
      text-align: center;
      align-items: center;

      background-color: var(--skel-DataTable_header-background-default-color);
    }

    .skel-DataTable_even-row & {
      background-color: var(--skel-DataTable_even-row-background-color);
    }

    .skel-DataTable_odd-row & {
      background-color: var(--skel-DataTable_odd-row-background-color);
    }
  }

  .skel-DataTable_horizontal-ruled-line {
    grid-column: 1 / calc(2 * var(--skel-data-table-column-count) + 2);
  }
</style>

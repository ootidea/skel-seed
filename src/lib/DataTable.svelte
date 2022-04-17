<script lang="ts">
  import DataTableCell from './DataTableCell.svelte'
  import Divider from './Divider.svelte'
  import { type ClassProp, type StyleProp, createInjectors } from './utility'

  export let rows: readonly Row[] = []
  type Row = $$Generic<Record<string, unknown>>

  export let columns: readonly Column[] = []
  type Column = string | { id: string; title?: string }

  let classProp: ClassProp = {}
  export { classProp as class }
  export let style: StyleProp = {}
  $: injectors = createInjectors('DataTable', classProp, style)

  function getColumnId(column: Column): string {
    if (typeof column === 'string') return column

    return column.id
  }

  function getColumnTitle(column: Column): string {
    if (typeof column === 'string') return column

    return column.title ?? column.id
  }
</script>

<div {...injectors.attr('root')} style:--skel-data-table-column-count={columns.length}>
  <div {...injectors.attr('horizontal-ruled-line')}>
    <slot name="horizontal-ruled-line" rowIndex={0}>
      <Divider />
    </slot>
  </div>

  <div {...injectors.attr('header-row')}>
    {#each columns as column, columnIndex}
      <div {...injectors.attr('vertical-ruled-line')}>
        <slot name="vertical-ruled-line" rowIndex={0} {columnIndex}>
          <Divider direction="vertical" />
        </slot>
      </div>

      {@const columnId = getColumnId(column)}
      {@const columnTitle = getColumnTitle(column)}
      <div {...injectors.attr('cell')} data-column-id={columnId}>
        <slot name="header-cell" {columnId} {columnTitle} {columnIndex}>
          {columnTitle}
        </slot>
      </div>
    {/each}

    <div {...injectors.attr('vertical-ruled-line')}>
      <slot name="vertical-ruled-line" rowIndex={0} columnIndex={columns.length}>
        <Divider direction="vertical" />
      </slot>
    </div>
  </div>

  {#each rows as row, index}
    {@const rowIndex = index + 1}
    <div {...injectors.attr('horizontal-ruled-line')}>
      <slot name="horizontal-ruled-line" {rowIndex}>
        <Divider />
      </slot>
    </div>

    <div
      {...injectors.attr('body-row')}
      class:skel-data-table_even-row={index % 2 === 0}
      class:skel-data-table_odd-row={index % 2 === 1}
    >
      {#each columns as column, columnIndex}
        <div {...injectors.attr('vertical-ruled-line')}>
          <slot name="vertical-ruled-line" {rowIndex} {columnIndex}>
            <Divider direction="vertical" />
          </slot>
        </div>

        {@const columnId = getColumnId(column)}
        {@const value = row[columnId]}
        <div {...injectors.attr('cell')} data-column-id={columnId}>
          <slot name="cell" {row} {columnId} {value} {rowIndex} {columnIndex}>
            <DataTableCell {value} />
          </slot>
        </div>
      {/each}

      <div {...injectors.attr('vertical-ruled-line')}>
        <slot name="vertical-ruled-line" {rowIndex} columnIndex={columns.length}>
          <Divider direction="vertical" />
        </slot>
      </div>
    </div>
  {/each}

  <div {...injectors.attr('horizontal-ruled-line')}>
    <slot name="horizontal-ruled-line" rowIndex={rows.length + 1}>
      <Divider />
    </slot>
  </div>
</div>

<style global lang="scss">
  :root {
    // TODO: Define and integrate color palettes
    --skel-data-table-header-background-default-color: oklch(90% 0.04 200);
    --skel-data-table-even-row-background-default-color: inherit;
    --skel-data-table-odd-row-background-default-color: oklch(96% 0.015 200);
  }

  .skel-data-table_root {
    display: grid;
    grid-template-columns: repeat(calc(2 * var(--skel-data-table-column-count) + 1), auto);
    width: max-content;
  }

  .skel-data-table_header-row {
    display: contents;
  }

  .skel-data-table_body-row {
    display: contents;
  }

  .skel-data-table_cell {
    padding: 0.6em 1.6em;

    .skel-data-table_header-row & {
      font-weight: bold;
      text-align: center;

      background-color: var(--skel-data-table-header-background-default-color);
    }

    .skel-data-table_even-row & {
      background-color: var(--skel-data-table-even-row-background-default-color);
    }

    .skel-data-table_odd-row & {
      background-color: var(--skel-data-table-odd-row-background-default-color);
    }
  }

  .skel-data-table_horizontal-ruled-line {
    grid-column: 1 / calc(2 * var(--skel-data-table-column-count) + 2);
  }
</style>

<script lang="ts">
  import DataTableCell from './DataTableCell.svelte'
  import Divider from './Divider.svelte'

  type Row = $$Generic<Record<string, unknown>>
  type Column = string | { id: string; title?: string }

  export let rows: readonly Row[] = []
  export let columns: readonly Column[] = []
  export let evenRowBackgroundColor = 'var(--skel-data-table_even-row-background-default-color)'
  export let oddRowBackgroundColor = 'var(--skel-data-table_odd-row-background-default-color)'
  let klass = ''
  export { klass as class }

  function getColumnId(column: Column): string {
    if (typeof column === 'string') return column

    return column.id
  }

  function getColumnTitle(column: Column): string {
    if (typeof column === 'string') return column

    return column.title ?? column.id
  }
</script>

<div
  class="skel-data-table_root {klass}"
  style:--skel-data-table_template-columns={Array(columns.length + 1)
    .fill('max-content')
    .join(' auto ')}
  style:--skel-data-table-column-count={columns.length}
  style:--skel-data-table_even-row-background-color={evenRowBackgroundColor}
  style:--skel-data-table_odd-row-background-color={oddRowBackgroundColor}
>
  <div class="skel-data-table_horizontal-ruled-line">
    <slot name="horizontal-ruled-line" rowIndex={0}>
      <Divider />
    </slot>
  </div>

  <div class="skel-data-table_header-row">
    {#each columns as column, columnIndex}
      <div class="skel-data-table_vertical-ruled-line">
        <slot name="vertical-ruled-line" rowIndex={0} {columnIndex}>
          <Divider direction="vertical" />
        </slot>
      </div>

      {@const columnId = getColumnId(column)}
      {@const columnTitle = getColumnTitle(column)}
      <div class="skel-data-table_cell" data-column-id={columnId}>
        <slot name="header-cell" {columnId} {columnTitle} {columnIndex}>
          {columnTitle}
        </slot>
      </div>
    {/each}

    <div class="skel-data-table_vertical-ruled-line">
      <slot name="vertical-ruled-line" rowIndex={0} columnIndex={columns.length}>
        <Divider direction="vertical" />
      </slot>
    </div>
  </div>

  {#each rows as row, index}
    {@const rowIndex = index + 1}
    <div class="skel-data-table_horizontal-ruled-line">
      <slot name="horizontal-ruled-line" {rowIndex}>
        <Divider />
      </slot>
    </div>

    <div
      class="skel-data-table_body-row"
      class:skel-data-table_even-row={index % 2 === 0}
      class:skel-data-table_odd-row={index % 2 === 1}
    >
      {#each columns as column, columnIndex}
        <div class="skel-data-table_vertical-ruled-line">
          <slot name="vertical-ruled-line" {rowIndex} {columnIndex}>
            <Divider direction="vertical" />
          </slot>
        </div>

        {@const columnId = getColumnId(column)}
        {@const value = row[columnId]}
        <div class="skel-data-table_cell" data-column-id={columnId}>
          <slot name="cell" {row} {columnId} {value} {rowIndex} {columnIndex}>
            <DataTableCell {value} />
          </slot>
        </div>
      {/each}

      <div class="skel-data-table_vertical-ruled-line">
        <slot name="vertical-ruled-line" {rowIndex} columnIndex={columns.length}>
          <Divider direction="vertical" />
        </slot>
      </div>
    </div>
  {/each}

  <div class="skel-data-table_horizontal-ruled-line">
    <slot name="horizontal-ruled-line" rowIndex={rows.length + 1}>
      <Divider />
    </slot>
  </div>
</div>

<style global lang="scss">
  :root {
    --skel-data-table_header-background-default-color: oklch(90% 0.04 200);
    --skel-data-table_even-row-background-default-color: transparent;
    --skel-data-table_odd-row-background-default-color: transparent;
  }

  .skel-data-table_root {
    display: grid;
    grid-template-columns: var(--skel-data-table_template-columns);
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

      background-color: var(--skel-data-table_header-background-default-color);
    }

    .skel-data-table_even-row & {
      background-color: var(--skel-data-table_even-row-background-color);
    }

    .skel-data-table_odd-row & {
      background-color: var(--skel-data-table_odd-row-background-color);
    }
  }

  .skel-data-table_horizontal-ruled-line {
    grid-column: 1 / calc(2 * var(--skel-data-table-column-count) + 2);
  }
</style>

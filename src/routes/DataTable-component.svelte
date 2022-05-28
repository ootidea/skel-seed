<script lang="ts">
  import DataTable from '../lib/DataTable.svelte'
  import DataTableCell from '../lib/DataTableCell.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'

  const rows = [
    { name: 'hoge', age: 10, createdAt: new Date(), ed: true, image: 'src/assets/plus.svg' },
    { name: 'eccc', age: 1219, createdAt: new Date(), ed: false, image: 'src/assets/check.svg' },
    { name: 'pien', age: 32, createdAt: new Date(), ed: false, image: 'src/assets/clipboard.svg' },
    { name: 'fontor', age: 10, createdAt: new Date(), ed: true, image: 'https://example.com' },
    { name: 'bruky', age: 19, createdAt: new Date(), ed: false, image: 'src/assets/gear.svg' },
    { name: 'ape', age: 32, createdAt: new Date(), ed: true, image: 'src/assets/page.svg' },
  ]
</script>

<PageTitle>DataTable</PageTitle>

<Sample>
  <DataTable {rows} columns={['行番号', 'name', { id: 'age', title: '年齢' }, 'ed', 'image', 'createdAt']}>
    <svelte:fragment slot="cell" let:columnId let:value let:rowIndex>
      {#if columnId === '行番号'}
        <DataTableCell value={rowIndex} />
      {:else}
        <DataTableCell {value} />
      {/if}
    </svelte:fragment>
  </DataTable>
</Sample>

<SectionTitle>Data type specific rendering</SectionTitle>
<Sample>
  <DataTable
    rows={[
      { string: 'text', number: 583, boolean: true, date: new Date(), url: 'https://example.com' },
      { string: 'title', number: 1234, boolean: false, date: new Date(), url: 'http://localhost:3000/' },
    ]}
    columns={['string', 'number', 'boolean', 'date', 'url']}
  />
</Sample>

<SectionTitle>Show sort buttons</SectionTitle>
<Sample>
  <DataTable
    {rows}
    columns={[
      '行番号',
      'name',
      { id: 'age', title: '年齢', sortable: true },
      { id: 'ed', sortable: true },
      'image',
      'createdAt',
    ]}
  >
    <svelte:fragment slot="cell" let:columnId let:value let:rowIndex>
      {#if columnId === '行番号'}
        <DataTableCell value={rowIndex} />
      {:else}
        <DataTableCell {value} />
      {/if}
    </svelte:fragment>
  </DataTable>
</Sample>

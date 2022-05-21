<script lang="ts">
  import Button from '../lib/Button.svelte'
  import Toast, { showToast } from '../lib/Toast.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
</script>

<PageTitle>Toast</PageTitle>

<Sample>
  <Button
    onClick={() =>
      showToast('Assertion error: the given value is undefined. @' + new Date().valueOf(), {
        type: 'error',
      })}
  >
    Show error toast
  </Button>
  <Button
    onClick={() =>
      showToast('skel is a UI library.', {
        type: 'success',
      })}
  >
    Show success toast
  </Button>
  <Button onClick={() => showToast('Multi line toast\n' + new Date().valueOf())}>Show multi line toast</Button>
  <Button onClick={() => showToast('Infinite', { durationMs: Infinity })}>Show persistent toast</Button>

  <Toast />
</Sample>

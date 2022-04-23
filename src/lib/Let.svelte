<script lang="ts">
  import type { Arrow } from './utility'

  export let value: any = undefined

  function set<T>(newValue: T): T {
    value = newValue
    return newValue
  }

  function capture<Args extends unknown[], R>(f: Arrow<Args, R>): Arrow<Args, R> {
    return (...args: Args) => {
      const result = f(...args)
      value = result
      return result
    }
  }

  function steal<Args extends unknown[], R>(f: Arrow<Args, R>): Arrow<Args, void> {
    return (...args: Args) => {
      value = f(...args)
    }
  }
</script>

<slot {value} {set} {capture} {steal} />

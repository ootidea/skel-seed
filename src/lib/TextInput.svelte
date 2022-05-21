<script lang="ts">
  import Gravity from './Gravity.svelte'
  import StretchLayout from './StretchLayout.svelte'

  export let type: string | undefined = undefined
  export let value = ''
  export let placeholder = ''
  export let name: string | undefined = undefined
  export let disabled: true | undefined = undefined
  export let readonly: true | undefined = undefined
  export let required: true | undefined = undefined
  export let maxlength: number | undefined = undefined
  export let minlength: number | undefined = undefined
  export let pattern: string | undefined = undefined
  export let autofocus: true | undefined = undefined
  export let autocomplete: string | undefined = undefined
  export let list: string | undefined = undefined

  $: attrs = {
    name,
    placeholder,
    disabled,
    readonly,
    required,
    maxlength,
    minlength,
    pattern,
    autofocus,
    autocomplete,
    list,
  } as const
</script>

<StretchLayout class="skel-TextInput_root" stretchAt={1}>
  <Gravity class="skel-TextInput_prefix">
    <slot name="prefix" />
  </Gravity>
  <StretchLayout class="skel-TextInput_inner" stretchAt={1}>
    <Gravity class="skel-TextInput_prepend">
      <slot name="prepend" />
    </Gravity>
    {#if type === 'email'}
      <input class="skel-TextInput_input" type="email" bind:value {...attrs} />
    {:else if type === 'tel'}
      <input class="skel-TextInput_input" type="tel" bind:value {...attrs} />
    {:else if type === 'password'}
      <input class="skel-TextInput_input" type="password" bind:value {...attrs} />
    {:else if type === 'search'}
      <input class="skel-TextInput_input" type="search" bind:value {...attrs} />
    {:else if type === 'url'}
      <input class="skel-TextInput_input" type="url" bind:value {...attrs} />
    {:else if type === 'text'}
      <input class="skel-TextInput_input" type="text" bind:value {...attrs} />
    {:else}
      <input class="skel-TextInput_input" bind:value {...attrs} />
    {/if}
    <Gravity class="skel-TextInput_append">
      <slot name="append" />
    </Gravity>
  </StretchLayout>
  <Gravity class="skel-TextInput_postfix">
    <slot name="postfix" />
  </Gravity>
</StretchLayout>

<style global lang="scss">
  :root {
    --skel-TextInput_border-color: oklch(82% 0 0);
  }

  .skel-TextInput_root {
    border-radius: 0.3em;
    border: var(--skel-TextInput_border-color) 1px solid;
    overflow: hidden;
  }

  .skel-TextInput_prefix,
  .skel-TextInput_postfix {
    padding: 0 0.5em;
    background-color: oklch(96% 0 0);

    &:empty {
      padding: 0;
      border: none;
    }
  }

  .skel-TextInput_prefix {
    border-right: var(--skel-TextInput_border-color) 1px solid;
  }

  .skel-TextInput_postfix {
    border-left: var(--skel-TextInput_border-color) 1px solid;
  }

  .skel-TextInput_prepend {
    padding-left: 0.3em;

    &:empty {
      padding: 0;
    }
  }

  .skel-TextInput_append {
    padding-right: 0.3em;

    &:empty {
      padding: 0;
    }
  }

  .skel-TextInput_input {
    padding: 0.4em 0.6em;
    border: none;
    outline: none;
    appearance: none;

    font: inherit;
    line-height: inherit;
    letter-spacing: inherit;
  }
</style>

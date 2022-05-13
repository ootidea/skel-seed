<script lang="ts">
  import RadioButton from '../lib/RadioButton.svelte'

  let group: string | undefined
</script>

<RadioButton bind:group value="TypeScript" />
<RadioButton bind:group value="Kotlin" />

<br />

<RadioButton name="2nd" value="Swift" />
<RadioButton name="2nd">Prolog</RadioButton>

<br />

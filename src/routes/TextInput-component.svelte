<script lang="ts">
  import alertOutline from '/src/assets/alert-outline.svg'
  import check from '/src/assets/check.svg'
  import Icon from '../lib/Icon.svelte'
  import TextInput from '../lib/TextInput.svelte'
  import PageTitle from './_components/PageTitle.svelte'
  import Sample from './_components/Sample.svelte'
  import SectionTitle from './_components/SectionTitle.svelte'
</script>

<PageTitle>TextInput</PageTitle>

<SectionTitle>Default appearance</SectionTitle>
<Sample>
  <TextInput />
</Sample>

<SectionTitle>Placeholder and initial value</SectionTitle>
<Sample>
  <TextInput placeholder="placeholder" />
  <br />
  <TextInput value="initial value" />
</Sample>

<SectionTitle>Types</SectionTitle>
<Sample>
  <TextInput type="tel" placeholder="tel" />
  <br />
  <TextInput type="email" placeholder="email" />
  <br />
  <TextInput type="password" placeholder="password" />
</Sample>

<SectionTitle>Append and prepend</SectionTitle>
<Sample>
  <TextInput value="valid text">
    <Icon slot="append" src={check} />
  </TextInput>
  <br />
  <TextInput placeholder="security number">
    <Icon slot="prepend" src={alertOutline} />
  </TextInput>
</Sample>

<SectionTitle>Prefix and postfix</SectionTitle>
<Sample>
  <TextInput placeholder="www.example">
    <div slot="prefix">https://</div>
    <div slot="postfix">.com</div>
  </TextInput>
</Sample>

<SectionTitle>Disabled</SectionTitle>
<Sample>
  <TextInput placeholder="placeholder" disabled />
  <br />
  <TextInput value="initial value" disabled />
</Sample>

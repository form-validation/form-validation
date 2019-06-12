<svelte:head>
	<title>FormValidation • v0.4.2</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.4.2</h1>
    <h2 class="f4 fw4 tc">Released 19 April 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <a class="blue dim link" href="/guide/validators/siren/">siren</a> and <a class="blue dim link" href="/guide/validators/siret/">siret</a> validators</li>
            <li>Add <a class="blue dim link" href="/guide/validators/vin/">vin validator</a></li>
            <li><i class="fa fa-star"></i> Add <code>excluded</code> option</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <a class="blue dim link" href="/guide/validators/phone/">phone validator</a> now supports +1 country code and area code for US phone number</li>
            <li>The <a class="blue dim link" href="/guide/validators/remote/">remote validator</a> allows to override <code>name</code> option</li>
            <li>Improve <a class="blue dim link" href="/guide/validators/zip-code/">zipCode validator</a></li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Do not validate fields that <code>enabled</code> is set to <code>false</code></li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
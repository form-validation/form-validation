<svelte:head>
	<title>FormValidation • v0.4.2</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.4.2</h1>
    <h2 class="f4 fw4 tc">Released 19 April 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <a href="/guide/validators/siren"class="blue dim link">siren</a> and <a href="/guide/validators/siret" class="blue dim link">siret</a> validators</li>
            <li>Add <a href="/guide/validators/vin" class="blue dim link">vin validator</a></li>
            <li><i class="fa fa-star"></i> Add <code>excluded</code> option</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <a href="/guide/validators/phone" class="blue dim link">phone validator</a> now supports +1 country code and area code for US phone number</li>
            <li>The <a href="/guide/validators/remote" class="blue dim link">remote validator</a> allows to override <code>name</code> option</li>
            <li>Improve <a href="/guide/validators/zip-code" class="blue dim link">zipCode validator</a></li>
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
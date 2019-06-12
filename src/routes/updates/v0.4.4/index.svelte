<svelte:head>
	<title>FormValidation • v0.4.4</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.4.4</h1>
    <h2 class="f4 fw4 tc">Released 05 May 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <code>$.fn.bootstrapValidator.helpers.mod_11_10</code> method that implements modulus 11, 10 (ISO 7064) algorithm. The helper is then reused in validating <a class="blue dim link" href="/guide/validators/vat/">German and Croatian VAT</a> numbers</li>
            <li>Add <code>$.fn.bootstrapValidator.helpers.mod_37_36</code> method that implements modulus 37, 36 (ISO 7064) algorithm, used in <a class="blue dim link" href="/guide/validators/grid/">GRid</a> validator</li>
            <li>Add <a class="blue dim link" href="/guide/validators/ean/">ean (International Article Number)</a> validator</li>
            <li>Add <a class="blue dim link" href="/guide/validators/grid/">grid (Global Release Identifier)</a> validator</li>
            <li>Add <a class="blue dim link" href="/guide/validators/imei/">imei (International Mobile Station Equipment Identity)</a> validator</li>
            <li>Add <a class="blue dim link" href="/guide/validators/ismn/">ismn (International Standard Music Number)</a> validator</li>
            <li>Add <a class="blue dim link" href="/guide/validators/issn/">issn (International Standard Serial Number)</a> validator</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Support using both the <code>name</code> attribute and <code>selector</code> option for field</li>
            <li>Indicate success/error tab</li>
            <li>Add UK postcode support for the <a class="blue dim link" href="/guide/validators/zip-code/">zipCode validator</a></li>
            <li>The <a class="blue dim link" href="/guide/validators/date/">date validator</a> supports seconds</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Wrong prefix of Laser credit card number</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
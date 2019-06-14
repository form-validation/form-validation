<svelte:head>
	<title>FormValidation • v0.4.4</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.4.4</h1>
    <h2 class="f4 fw4 tc">Released 05 May 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <code>$.fn.bootstrapValidator.helpers.mod_11_10</code> method that implements modulus 11, 10 (ISO 7064) algorithm. The helper is then reused in validating <a href="/guide/validators/vat" class="blue dim link">German and Croatian VAT</a> numbers</li>
            <li>Add <code>$.fn.bootstrapValidator.helpers.mod_37_36</code> method that implements modulus 37, 36 (ISO 7064) algorithm, used in <a href="/guide/validators/grid" class="blue dim link">GRid</a> validator</li>
            <li>Add <a href="/guide/validators/ean" class="blue dim link">ean (International Article Number)</a> validator</li>
            <li>Add <a href="/guide/validators/grid" class="blue dim link">grid (Global Release Identifier)</a> validator</li>
            <li>Add <a href="/guide/validators/imei" class="blue dim link">imei (International Mobile Station Equipment Identity)</a> validator</li>
            <li>Add <a href="/guide/validators/ismn" class="blue dim link">ismn (International Standard Music Number)</a> validator</li>
            <li>Add <a href="/guide/validators/issn" class="blue dim link">issn (International Standard Serial Number)</a> validator</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Support using both the <code>name</code> attribute and <code>selector</code> option for field</li>
            <li>Indicate success/error tab</li>
            <li>Add UK postcode support for the <a href="/guide/validators/zip-code" class="blue dim link">zipCode validator</a></li>
            <li>The <a href="/guide/validators/date" class="blue dim link">date validator</a> supports seconds</li>
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
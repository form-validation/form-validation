<svelte:head>
	<title>FormValidation • v0.4.3</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.4.3</h1>
    <h2 class="f4 fw4 tc">Released 26 April 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <a href="/guide/validators/file" class="blue dim link">file validator</a></li>
            <li><i class="fa fa-star"></i> Add <a href="/guide/validators/vat" class="blue dim link">vat validator</a>, support 32 countries</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add Canadian Postal Code support for the <a href="/guide/validators/zip-code" class="blue dim link">zipCode validator</a></li>
            <li>The <a href="/guide/validators/choice" class="blue dim link">choice validator</a> supports <code>select</code> element</li>
            <li>Activate tab containing the first invalid field</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Plugin method invocation</li>
            <li>Fix IE8 error</li>
            <li>The <code>excluded: ':disabled'</code> setting does not work on IE 8</li>
            <li>The <a href="/guide/validators/isbn" class="blue dim link">isbn validator</a> accepts letters and special characters</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
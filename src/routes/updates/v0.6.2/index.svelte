<svelte:head>
	<title>FormValidation • v0.6.2</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.6.2</h1>
    <h2 class="f4 fw4 tc">Released 02 April 2015</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add new <a href="/guide/validators/promise" class="blue dim link">promise</a> validator</li>
            <li>Add <code>STATUS_IGNORED</code> status. The field will be ignored for the current validation if the validator returns <code>null</code></li>
            <li><a href="/guide/validators/iban" class="blue dim link">iban</a> validator adds new sepa option that requires the IBAN number must be (or not) from the SEPA countries</li>
            <li><a href="/guide/validators/iban" class="blue dim link">iban</a> validator now supports East Timor, Kosovo countries</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li><a href="/guide/validators/date" class="blue dim link">date</a> validator supports dot (.) separator for European countries</li>
            <li><a href="/guide/validators/iban" class="blue dim link">iban</a> validator will return <code>false</code> if the country is not supported</li>
            <li>Allow to use callback for field's <code>excluded</code> option</li>
            <li>Skip validation on button using <code>formnovalidate</code> attribute</li>
            <li>Add more examples for iban test suite</li>
            <li>The field container and its feedback icon don't have success/error class if all field validators are disabled</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Spanish VAT validator doesn't work with some examples</li>
            <li>Override the options when adding field</li>
            <li>The Brazilian <a href="/guide/validators/id" class="blue dim link">ID</a> (CPF) number must have 11 digits</li>
            <li>The <code>updateMessage()</code> method must return the plugin instance for chaining</li>
            <li>When calling <code>resetField(true)</code> and <code>resetForm(true)</code> methods, the field need be reset value before updating the status</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
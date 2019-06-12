<svelte:head>
	<title>FormValidation • v0.6.3</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.6.3</h1>
    <h2 class="f4 fw4 tc">Released 31 May 2015</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <code>prevalidate.form.fv</code> event that is triggered before validating the form</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Improve <a class="blue dim link" href="/guide/validators/id/">Dutch national identification number (BSN)</a> validator. It doesn't accept numbers which have less than 8 digits</li>
            <li>Add the date to return value of the <a class="blue dim link" href="/guide/validators/date/">date</a> validator. We can reuse it for additional job</li>
            <li>The <a class="blue dim link" href="/guide/validators/remote/">remote</a> validator supports using <code>$field</code> and <code>value</code> in data/url callbacks</li>
            <li>The <a class="blue dim link" href="/guide/validators/isbn/">isbn</a> validator adds ISBN type to the return value</li>
            <li>The <a class="blue dim link" href="/guide/validators/ismn/">ismn</a> validator adds ISMN type to the return value</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Fix an issue on IE 10/11 that causes an input element with placeholder attribute to be validated automatically when it's focused</li>
            <li>Fix an issue that causes the validating icon to not shown when the field is being validated</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
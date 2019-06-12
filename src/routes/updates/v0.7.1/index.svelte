<svelte:head>
	<title>FormValidation • v0.7.1</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.7.1</h1>
    <h2 class="f4 fw4 tc">Released 01 February 2016</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add new <code>priority</code> option that allows to set the validator execution order</li>
            <li>Add <code>rst.field.fv</code> and <code>rst.form.fv</code> events that are triggered after calling <code>resetField()</code> and <code>resetForm()</code> methods, respectively</li>
            <li>The <a class="blue dim link" href="/guide/validators/regexp/">regexp</a> validator provides new <code>flags</code> option to use in declarative mode</li>
            <li>The <a class="blue dim link" href="/guide/validators/remote/">remote</a> validator supports synchronous via new <code>async</code> option</li>
            <li>The <a class="blue dim link" href="/guide/validators/id/">id</a> validator now supports Turkish identification number</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <a class="blue dim link" href="/guide/validators/mac/">mac</a> validator now supports all formats of IEEE 802 standards</li>
            <li>Support <a class="blue dim link" href="http://getuikit.com/docs/form-password.html">UIKit form-password</a> component</li>
            <li>The fields of <code>fields</code> option provided by the <a class="blue dim link" href="/guide/validators/different/">different</a> validator can be separated by a comma with or without a space</li>
            <li>The <a class="blue dim link" href="/guide/validators/phone/">phone</a> validator adds support for (123) 456-7890 US phone numbers</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Fix an issue caused by the <a class="blue dim link" href="/guide/validators/date/">date</a> validator when the <code>min</code>, <code>max</code> options follows the same format as <code>format</code></li>
            <li>The <a class="blue dim link" href="/guide/validators/numeric/">numeric</a> validator accepts numbers without a preceding zero</li>
            <li>The <a class="blue dim link" href="/guide/validators/ein/">ein</a> validator now supports identification numbers that start with "47-"</li>
            <li>Fix the typo in German language package</li>
            <li>The <code>updateMessage()</code> method doesn't work properly if the <code>selector</code> contains multiple class names</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
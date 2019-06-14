<svelte:head>
	<title>FormValidation • v0.3.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.3.0</h1>
    <h2 class="f4 fw4 tc">Released 10 March 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <a href="/guide/validators/choice" class="blue dim link"><code>choice</code> validator</a></li>
            <li>Add method to validate form manually</li>
            <li><i class="fa fa-star"></i> Rewrite entirely using Deferred</li>
            <li>Add optional feedback icons</li>
            <li>Add <code>resetForm()</code> method</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <a href="/guide/validators/remote" class="blue dim link">remote validator</a> supports dynamic data</li>
            <li>Disable submit button on successful form submit</li>
            <li>Add submit button to <code>submitHandler()</code> parameter</li>
            <li>Don't validate disabled element</li>
            <li>Add example for Rail field convention</li>
            <li>Update the installation guide</li>
            <li>Support <a href="/guide/validators/zip-code" class="blue dim link">Danish zip code</a></li>
            <li>Support <a href="/guide/validators/zip-code" class="blue dim link">Sweden zip code</a></li>
            <li>Support custom grid columns</li>
            <li>Show all errors</li>
            <li>Describe which version should be included in the Usage section</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Submit after submit doesn't work</li>
            <li>Fix <a href="/guide/validators/not-empty" class="blue dim link">notEmpty validator</a> for radios and checkboxes</li>
            <li>The plugin doesn't validate other fields if the <a href="/guide/validators/remote" class="blue dim link">remote validator</a> returns <code>true</code></li>
            <li>The <a href="/guide/validators/callback" class="blue dim link">callback validator</a> passes wrong parameter</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
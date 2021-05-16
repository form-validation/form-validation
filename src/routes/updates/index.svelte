<svelte:head>
	<title>FormValidation • v1.8.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">The latest version v1.8.0</h1>
    <h2 class="f4 fw4 tc">Released 16th May 2021</h2>

    <section class="mv5">
        <Heading>New features</Heading>

        <ul class="pa0 ma0 mt4 ml3 lh-copy">
            <li>Add new plugin <a href="/guide/plugins/bootstrap5" class="blue dim link">Bootstrap5</a> that supports Bootstrap v5</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 mt4 ml3 lh-copy">
            <li>The <a href="/guide/plugins/tooltip" class="blue dim link">Tooltip plugin</a> doesn't display the error message at proper position if it is long enough</li>
            <li>The <a href="/guide/plugins/tooltip" class="blue dim link">tooltip</a> blocks user from entering the field</li>
            <li>The <a href="/guide/validators/string-length" class="blue dim link">stringLength validator</a> doesn't increase or decrease the number of characters in the error message</li>
            <li>The <a href="/guide/validators/vat/bulgarian-vat-number" class="blue dim link">Bulgarian VAT validator</a> doesn't work for some VAT numbers</li>
            <li>The <a href="/guide/validators/vat/french-vat-number" class="blue dim link">French VAT validator</a> doesn't work for some VAT numbers</li>
            <li>Fix an issue found in the ES6 version of the <a href="/guide/plugins/message" class="blue dim link">Message plugin</a></li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v1.8.0</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>From v0.8.1 and older versions: Follow the <a href="/updates/v1.0.0/#upgrading-to-v1-0-0" class="blue dim link">Upgrading to v1.0.0</a> guide.</li>
            <li>From v1.0.0: Download the new version and replace the old files with new files in v1.8.0.</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../components/ChangelogLayout.svelte';
import Heading from '../../components/Heading.svelte';
import SampleCode from '../../components/SampleCode.svelte';
</script>

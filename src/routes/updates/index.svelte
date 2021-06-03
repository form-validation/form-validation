<svelte:head>
	<title>FormValidation • v1.8.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">The latest version v1.8.1</h1>
    <h2 class="f4 fw4 tc">Released 03rd June 2021</h2>

    <section class="mv5">
        <Heading>Improvement</Heading>

        <ul class="pa0 ma0 mt4 ml3 lh-copy">
            <li>The <a href="/guide/plugins/bootstrap5" class="blue dim link">Bootstrap5 plugin</a> supports <a href="https://getbootstrap.com/docs/5.0/forms/floating-labels/" class="blue dim link">floating labels</a></li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 mt4 ml3 lh-copy">
            <li>The <a href="/guide/plugins/bootstrap5" class="blue dim link">Bootstrap5 plugin</a> loses the border radius of input groups</li>
            <li>The <a href="/guide/plugins/bootstrap5" class="blue dim link">Bootstrap5 plugin</a> shows error message at a wrong place when using with variants of add-on input</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>TypeScript definition</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Change <code>ValidateFunction</code> to <code>ValidateFunction&lt;ValidateOptions&gt;</code></li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v1.8.1</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>From v0.8.1 and older versions: Follow the <a href="/updates/v1.0.0/#upgrading-to-v1-0-0" class="blue dim link">Upgrading to v1.0.0</a> guide.</li>
            <li>From v1.0.0: Download the new version and replace the old files with new files in v1.8.1.</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../components/ChangelogLayout.svelte';
import Heading from '../../components/Heading.svelte';
</script>
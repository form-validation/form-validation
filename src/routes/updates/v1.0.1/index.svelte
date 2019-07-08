<svelte:head>
	<title>FormValidation • v1.0.1</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 1.0.1</h1>
    <h2 class="f4 fw4 tc">Released 29 June 2018</h2>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Fix an issue that the separator option in <a href="/guide/validators/date" class="blue dim link">date</a> validator isn't determined properly</li>
            <li>Fix an issue that the message container isn't added success/error CSS classes when choosing any but first checkbox</li>
            <li>Fix an issue that the <a href="/guide/validators/remote" class="blue dim link">remote</a> validator and <code>FormValidation.utils.fetch()</code> method don't send the correct data for POST request</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v1.0.1</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>From v0.8.1 and older versions: Follow the <a href="/updates/v1.0.0/#upgrading-to-v1-0-0" class="blue dim link">Upgrading to v1.0.0</a> guide</li>
            <li>From v1.0.0: Just download the new version and replace the old files in v1.0.0 with new files in v1.0.1.</li>
        </ul>
    </section>

    <section class="tc mv5">
        <a href="/download" class="f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" title="Download">Download v1.0.1</a>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
<svelte:head>
	<title>FormValidation • v0.2.2</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.2.2</h1>
    <h2 class="f4 fw4 tc">Released 07 January 2014</h2>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Focus to the first invalid element</li>
            <li><a href="/guide/validators/remote" class="blue dim link">remote validator</a>: Allow to set additional data to remote URL</li>
            <li>Only validate not empty field</li>
            <li>Validate existing fields only</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Avoid from calling form submit recursively</li>
            <li>Fix the issue when the form label doesn't have class</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
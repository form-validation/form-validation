<svelte:head>
	<title>FormValidation • v0.1.1</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.1.1</h1>
    <h2 class="f4 fw4 tc">Released 17 October 2013</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Added <code>submitButtons</code> option</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Added disabling client side validation in HTML 5</li>
            <li>Added support for default Bootstrap form without labels</li>
            <li>Added support for select box validator</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
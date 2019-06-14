<svelte:head>
	<title>FormValidation • v0.2.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.2.0</h1>
    <h2 class="f4 fw4 tc">Released 21 October 2013</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <a href="/guide/validators/credit-card" class="blue dim link">creditCard validator</a></li>
            <li>Add <a href="/guide/validators/different" class="blue dim link">different validator</a></li>
            <li>Add custom submit handler using <code>submitHandler</code> option</li>
            <li>Add <a href="/guide/validators/callback" class="blue dim link">callback validator</a></li>
            <li>Add <code>live</code> option</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Support form that labels are placed in extra small (<code>col-xs-</code>), small (<code>col-sm-</code>), medium (<code>col-md-</code>) elements</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <a href="/guide/validators/regexp" class="blue dim link">regexp validator</a> does not work</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
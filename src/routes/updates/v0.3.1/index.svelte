<svelte:head>
	<title>FormValidation • v0.3.1</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.3.1</h1>
    <h2 class="f4 fw4 tc">Released 17 March 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <a href="/guide/validators/date" class="blue dim link">date</a> validator</li>
            <li>Add <code>enabled</code> option and <code>enableFieldValidators()</code> method to enable/disable all validators to given field</li>
            <li>Add <code>bower.json</code> file</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Changes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Remove the <code>columns</code> option. Now the plugin works normally no matter how many columns the form uses</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Support more form controls on the same row</li>
            <li>Improve <code>updateStatus()</code> method to make the plugin play well with another</li>
            <li>The <code>resetForm</code> method now only resets fields with validator rules</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The error messages aren't shown if the form field doesn't have label</li>
            <li><code>submitHandler</code> or default submission isn't called after <a href="/guide/validators/remote" class="blue dim link">remote validation</a> completes</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
<svelte:head>
	<title>FormValidation • v0.4.1</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.4.1</h1>
    <h2 class="f4 fw4 tc">Released 12 April 2014</h2>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Prevent the <code>validate()</code> method from submit the form automatically. So we can call <code>validate()</code> method to validate the form</li>
            <li>Doesn't trigger validation on the first focus</li>
            <li>The row state is now only marked as success if all fields on it are valid</li>
            <li>Add support for element outside of form using the <code>selector</code> option</li>
            <li>User doesn't need to submit the form twice when remote validator complete</li>
            <li>The <a href="/guide/validators/phone" class="blue dim link">phone validator</a> now also checks the length of US phone number</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Fixed an issue that the custom submit handler is not fired from the second time</li>
            <li>Fix errors in IE 8</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
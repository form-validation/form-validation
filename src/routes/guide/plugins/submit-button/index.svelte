<svelte:head>
	<title>FormValidation • SubmitButton plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">SubmitButton plugin</h1>
    <h2 class="f4 fw4 tc">Automatically validate the form when pressing its Submit button</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The following piece of code is the starting point to use the SubmitButton plugin:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
        <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
        <button type="submit">Submit</button>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                submitButton: new FormValidation.plugins.SubmitButton({
                    // Optional setting:
                    // Set it to true if you are using a traditional ASP.Net form 
                    // and there is a custom handler for the submit button 
                    // aspNetButton: false,
                }),
                ...
            },
        }
    );
});
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy">The sample code above assumes that the FormValidation files are placed inside the <code>vendors</code> directory. You might need to change the path depending on where you place them on the server.</p>
        <Tip>If you want the form to be submited to the server after pressing its Submit button and all fields are valid, use the <a href="/guide/plugins/default-submit" class="blue dim link">DefaultSubmit</a> plugin</Tip>
    </section>

    <section class="mv5">
        <Heading>Example</Heading>
        <p class="lh-copy">Try to press the <span class="i">Add product</span> button to see the form will be validated.</p>
        <Demo prefix="/guide/plugins/tachyons/horizontal-form" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.5.0: Fixed an issue that the click handler of submit button of ASP.Net form isn't executed. Now you can fix it by setting the <code>aspNetButton</code> option to <code>true</code>.</li>
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <Examples examples={[
        'Multiple steps wizard',
        'Using Ajax to submit the form',
        'Validating form manually',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/start-end-date">StartEndDate plugin</PrevButton>
            <NextButton target="/guide/plugins/tachyons">Tachyons plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

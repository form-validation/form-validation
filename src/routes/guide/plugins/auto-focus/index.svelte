<svelte:head>
	<title>FormValidation • AutoFocus plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">AutoFocus plugin</h1>
    <h2 class="f4 fw4 tc">Focus on the first invalid element when submit form</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">You have to use this plugin with <a href="/guide/plugins/submit-button" class="blue dim link">SubmitButton</a> plugin which automatically validate the form when pressing the Submit button. The following piece of code is the starting point to use the AutoFocus plugin:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
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
                autoFocus: new FormValidation.plugins.AutoFocus(),
                submitButton: new FormValidation.plugins.SubmitButton(),
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
    </section>
    
    <section class="mv5">
        <Heading>Basic example</Heading>
        <p class="lh-copy">Try to press the <span class="i">Add product</span> button to see the first invalid field will be focused. Then fill in the <span class="i">Product name</span>, press the <span class="i">Add product</span> button again. 
            The plugin will bring focus to the <span class="i">Description</span> field which now becomes the first invalid field.</p>
        <Demo prefix="/guide/plugins/auto-focus/basic" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.3.0: Added <code>onPrefocus</code> option that is useful when you want to activate the tab containing the first invalid field</li>
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/aria">Aria plugin</PrevButton>
            <NextButton target="/guide/plugins/bootstrap">Bootstrap plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

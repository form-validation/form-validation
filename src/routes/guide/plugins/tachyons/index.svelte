<svelte:head>
	<title>FormValidation • Tachyons plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Tachyons plugin</h1>
    <h2 class="f4 fw4 tc lh-copy">Integrate with <a href="https://tachyons.io" class="blue dim link">Tachyons</a> library. Support Tachyons v4.10.0</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The following piece of code is the starting point to validate the form made in Tachyons:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                tachyons: new FormValidation.plugins.Tachyons(),
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
        <p class="lh-copy">The next sections list out some examples of various forms made with Tachyons.</p>
    </section>

    <section class="mv5">
        <Heading>Horizontal form</Heading>
        <Demo prefix="/guide/plugins/tachyons/horizontal-form" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Stacked form</Heading>
        <p class="lh-copy">You need to add the <code>fv-stacked-form</code> class to the <code>form</code> element such as:</p>
        <div class="mb4">
            <SampleCode lang="html" code={`
<form class="fv-stacked-form">
    <!-- The fields go here -->
    ...
</form>
`} />
        </div>
        <p class="lh-copy">In order to add the correct class for error message and the field element when it is a valid or invalid, we need to specify the CSS selector of the field container.</p>
        <p class="lh-copy">By default, the Tachyons plugin will look for the <code>.fl</code> element. But in the stacked form below, every field will be placed inside our own <code>.row</code> container.</p>
        <p class="lh-copy">We need to use the <code>rowSelector</code> option to help the plugin determine the field containers as following:</p>
        <div class="mb4">
            <SampleCode lang="javascript" code={`
tachyons: new FormValidation.plugins.Tachyons({
    rowSelector: function(field, ele) {
        // field is the field name
        // ele is the field element
        return '.row';
    }

    // Or you can just simply pass it as a string:
    // rowSelector: '.row',
}),
`} />    
        </div>  
        <Demo prefix="/guide/plugins/tachyons/stacked-form" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Multiple fields on the same row</Heading>
        <Demo prefix="/guide/plugins/tachyons/multiple-fields" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/submit-button">SubmitButton plugin</PrevButton>
            <NextButton target="/guide/plugins/tooltip">Tooltip plugin</NextButton>
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

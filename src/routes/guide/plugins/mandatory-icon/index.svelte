<svelte:head>
	<title>FormValidation • MandatoryIcon plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">MandatoryIcon plugin</h1>
    <h2 class="f4 fw4 tc">Show required icons for mandatory fields</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The following piece of code is the starting point to use the MandatoryIcon plugin:</p>
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
<script-tag src="/vendors/formvalidation/dist/js/plugins/MandatoryIcon.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                // You have to enable MandatoryIcon plugin before the Icon plugin
                mandatoryIcon: new FormValidation.plugins.MandatoryIcon({
                    // The CSS classes (separated by a space) that present the icon
                    icon: '...'
                }),
                icon: new FormValidation.plugins.Icon({
                    valid: '...',
                    invalid: '...',
                    validating: '...',
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
        <p class="lh-copy">For example, to use the plugin with <a href="https://fontawesome.com" class="blue dim link">FontAwesome</a>, we can set the <code>icon</code> option as:</p>
<SampleCode lang="javascript" code={`
mandatoryIcon: new FormValidation.plugins.MandatoryIcon({
    icon: 'fa fa-asterisk',
}),
icon: new FormValidation.plugins.Icon({
    valid: 'fa fa-check',
    invalid: 'fa fa-times',
    validating: 'fa fa-refresh',
}),
`} />
    </section>

    <section class="mv5">
        <Heading>Important note</Heading>
        <p class="lh-copy">You have to register the MandatoryIcon plugin before the <a href="/guide/plugins/icon" class="blue dim link">Icon plugin</a>.</p>
<SampleCode lang="javascript" code={`
// Does NOT work
plugins: {
    icon: new FormValidation.plugins.Icon(...),
    mandatoryIcon: new FormValidation.plugins.MandatoryIcon(...),
},

// Work
plugins: {
    mandatoryIcon: new FormValidation.plugins.MandatoryIcon(...),
    icon: new FormValidation.plugins.Icon(...),
},
`} />
    </section>
    
    <section class="mv5">
        <Heading>Basic example</Heading>
        <Demo prefix="/guide/plugins/mandatory-icon/basic" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.6.0: Fixed an issue that the plugin doesn't work with textarea element</li>
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <RelatedValidators validators={['notEmpty']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/mailgun">Mailgun plugin</PrevButton>
            <NextButton target="/guide/plugins/materialize">Materialize plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

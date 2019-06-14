<svelte:head>
	<title>FormValidation • Wizard plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Wizard plugin</h1>
    <h2 class="f4 fw4 tc lh-copy">Support validating multiple steps form</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">Assume that the form is split into multiple steps which can be accessed via a CSS class <code>js-step</code>. It also contains two buttons for jumping to the previous or next step.</p>
<SampleCode lang="html" code={`
<form id="demoForm" method="POST">
    <!-- Split the form into multiple steps -->
    <div class="js-step">
        ...
    </div>

    <div class="js-step">
        ...
    </div>

    <div class="js-step">
        ...
    </div>

    <!-- The button to go to the previous step -->
    <button id="prevButton">Prev</button>

    <!-- The button to go to the next step -->
    <button id="nextButton">Next</button>
</form>
`} />
        <p class="lh-copy">Clicking the <span class="i">Next</span> button will validate the current step. If all fields in the step are valid, the plugin will bring user to the next step.</p>
        <p class="lh-copy">The following piece of code is the starting point to use the Wizard plugin:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Wizard.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                // The options here matches with the form above
                wizard: new FormValidation.plugins.Wizard({
                    stepSelector: '.js-step',
                    prevButton: '#prevButton',
                    nextButton: '#nextButton',
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
        <p class="lh-copy">The Wizard plugin provides three required options:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Option</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>stepSelector</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">A CSS selector of steps</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>prevButton</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">A CSS selector of the Previous button</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>nextButton</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">A CSS selector of the Next button</td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>Events</Heading>
        <p class="lh-copy">The Wizard plugin provides four events that you can trigger. The event handlers can be set via either plugin option</p>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        wizard: new FormValidation.plugins.Wizard({
            // Triggered when a step is activated
            onStepActive: function(e) {
                // e.step is the zero-based index of current step
                // e.numSteps is the number of steps
            },

            // Triggered when a step is invalid
            onStepInvalid: function(e) {
                // e.step is the zero-based index of current step
                // e.numSteps is the number of steps
            },

            // Triggered when a step is valid
            onStepValid: function(e) {
                // e.step is the zero-based index of current step
                // e.numSteps is the number of steps
            },

            // Triggered when all steps are valid
            onValid: function(e) {
                // e.numSteps is the number of steps
            },
        }),
    },
});
`} />
        <p class="lh-copy">or using <code>on()</code> as following:</p>
<SampleCode lang="javascript" code={`
FormValidation
    .formValidation(form, {
        fields: {
            ...
        },
        plugins: {
            wizard: new FormValidation.plugins.Wizard({
                stepSelector: '...',
                prevButton: '...',
                nextButton: '...',
            }),
        },
    })
    .on('plugins.wizard.step.active', function(e) {
        // Same as onStepActive option
    })
    .on('plugins.wizard.step.invalid', function(e) {
        // Same as onStepInvalid option
    })
    .on('plugins.wizard.step.valid', function(e) {
        // Same as onStepValid option
    })
    .on('plugins.wizard.valid', function(e) {
        // Same as onValid option
    });
`} />        
    </section>

    <section class="mv5">
        <Heading>Submitting form</Heading>
        <p class="lh-copy">You cannot use the <a href="/guide/plugins/default-submit" class="blue dim link">DefaultSubmit</a> plugin to submit the form when all steps are valid. Instead, you can use the <code>onValid</code> option (or listen the <code>plugins.wizard.valid</code> event):</p>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        wizard: new FormValidation.plugins.Wizard({
            onValid: function(e) {
                // Submit the form when all steps are valid
                form.submit();
            },
        }),
    },
});
`} />        
    </section>

    <section class="mv5">
        <Heading>Basic example</Heading>
        <Demo prefix="/guide/plugins/wizard/basic" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.3.0: First release. It means that the Wizard plugin requires FormValidation v1.3.0 or newer.</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/uikit">Uikit plugin</PrevButton>
            <NextButton target="/guide/api">API</NextButton>
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

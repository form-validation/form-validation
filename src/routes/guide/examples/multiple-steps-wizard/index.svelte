<svelte:head>
	<title>FormValidation • Multiple steps wizard</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Multiple steps wizard</h1>
    
    <section class="mv5">
        <Tip>Use the <a href="/guide/plugins/wizard" class="blue dim link">Wizard</a> plugin to support validating multiple steps form.</Tip>
        <p class="lh-copy">In this example, you will learn how to use FormValidation to validate a multiple steps wizard. The wizard is actually a normal form but is split into multiple steps. By default, all steps are hidden except the active one.</p>
        <p class="lh-copy">We can imagine that the form is structured as following:</p>
<SampleCode lang="html" code={`
<style>
.js-step {
    // By default, all steps is hidden        
    display: none;
}
.js-step-active {
    // Show the current step
    display: block;
}
</style>

<form id="demoForm" method="POST">
    <!-- Initially, the first step is active -->
    <div class="js-step js-step-active" data-step="1">
        ...
    </div>

    <div class="js-step" data-step="2">
        ...
    </div>

    <!-- The buttons to go to previous or next step -->
    <button type="button" id="prevButton">Prev</button>
    <button type="button" id="nextButton">Next</button>
</form>
`} />
        <p class="lh-copy">We initialize a FormValidation instance for each step. Also, we will bring user to the next step when a step is successfully validated:</p>
<SampleCode lang="javascript" code={`
const demoForm = document.getElementById('demoForm');
    
const step1 = demoForm.querySelector('.js-step[data-step="1"]');
const step2 = demoForm.querySelector('.js-step[data-step="2"]');

const prevButton = demoForm.querySelector('[id="prevButton"]');
const nextButton = demoForm.querySelector('[id="nextButton"]');

// Track the current step
let currentStep = 1;

// Set the rule for fields in the first step
const fv1 = FormValidation
    .formValidation(
        step1, 
        {
            fields: {
                ...
            },
            plugins: {
                ...
            },
        }
    )
    .on('core.form.valid', function() {
        // Jump to the next step when all fields in the current step are valid
        currentStep++;

        nextButton.innerHTML = 'Purchase';

        // Hide the first step
        FormValidation.utils.classSet(step1, {
            'js-step-active': false,
        });
        
        // Show the next step
        FormValidation.utils.classSet(step2, {
            'js-step-active': true,
        });
    });

// Set the rule for fields in the second step
const fv2 = FormValidation
    .formValidation(
        step2,
        {
            fields: {
                ...
            },
            plugins: {
                ...
            },
        }
    )
    .on('core.form.valid', function() {
        // You can submit the form
        // demoForm.submit()
        // or send the form data to server via an Ajax request

        // To make the demo simple, I just update the label of button
        nextButton.innerHTML = 'Done';
    });
`} />
        <p class="lh-copy">The sample code uses the built in method, <code>FormValidation.utils.classSet</code>, to set the CSS classes for given element.</p>
        <p class="lh-copy">Now, we need to validate the current step when clicking the <span class="i">Next</span> button. It can be done via the <a href="/guide/api/validate" class="blue dim link">validate()</a> method:</p>
<SampleCode lang="javascript" code={`
nextButton.addEventListener('click', function() {
    // When click the Next button, we will validate the current step
    switch (currentStep) {
        case 1:
            fv1.validate();
            break;
        
        case 2:
            fv2.validate();
            break;
        
        default:
            break;
    }
});
`} />
        <p class="lh-copy">Going to the previous step is much simple:</p>
<SampleCode lang="javascript" code={`
prevButton.addEventListener('click', function() {
    switch (currentStep) {
        case 2:
            currentStep--;
            nextButton.innerHTML = 'Next';
            
            // Hide the second step
            FormValidation.utils.classSet(step2, {
                'js-step-active': false,
            });
            
            // Show the first step
            FormValidation.utils.classSet(step1, {
                'js-step-active': true,
            });
            break;

        case 1:
        default:
            break;
    }
});    
`} />
        <p class="lh-copy">This example only has two steps, but we can use the same approach if your wizard has more steps. You can play with it in the demo below:</p>
        <Demo prefix="/guide/examples/multiple-steps-wizard" frameworks={['Tachyons']} />
    </section>

    <Examples examples={[
        'Multiple steps wizard',
        'Using Ajax to submit the form',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

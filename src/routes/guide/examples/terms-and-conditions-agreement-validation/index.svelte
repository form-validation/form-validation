<svelte:head>
	<title>FormValidation • Terms and conditions agreement validation</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Terms and conditions agreement validation</h1>

    <section class="mv5">
        <p class="lh-copy">Showing and asking user to agree with terms and conditions is a common task, especially in registration forms.
            This example collects two popular approaches and shows how to force visitors to agree with the terms of use.</p>

        <Tip>It's recommended to use a <a href="/guide/validators/callback#basic-example" class="blue dim link">basic math calculation</a> captcha or <a href="/guide/plugins/recaptcha" class="blue dim link">Google reCaptcha</a> in a registration form</Tip>
    </section>

    <section class="mv5">
        <Heading>Showing terms and conditions in the same form</Heading>

        <p class="lh-copy">In the form below, the terms of use is shown in the same form. It's easy for you to use the <a href="/guide/validators/not-empty" class="blue dim link">notEmpty</a> validator in this case:</p>

        <div class="mb4">
<SampleCode lang="javascript" code={`
FormValidation.formValidation(document.getElementById('registrationForm'), {
    fields: {
        ...
        agree: {
            validators: {
                notEmpty: {
                    message: 'You must agree with the terms and conditions'
                }
            }
        }
    }
});
`} />
        </div>
        <Demo prefix="/guide/examples/terms-and-conditions-agreement-validation/basic" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Showing terms and conditions in a modal</Heading>

        <p class="lh-copy">If the terms of use is too long and you want the user to pay more attention in reading it, it's great idea to place it in a modal.</p>
        <p class="lh-copy">The modal consists of two buttons, one to indicate the agreement and the other to indicate the disagreement.</p>
        <p class="lh-copy">The implementation can be described as following:</p>

        <h3>Step 1: Create a hidden input to determine whether user agree with the terms or not</h3>
        <p class="lh-copy">Initially, the field's value is set as <code>no</code>:</p>

<SampleCode lang="html" code={`
<input type="hidden" name="agree" value="no" />
`} />

        <h3>Step 2: Define validation rules for the field</h3>

        <p class="lh-copy">It's easy to check if user agree with the terms by checking the field value via the <a href="/guide/validators/callback" class="blue dim link">callback</a> validator:</p>

<SampleCode lang="javascript" code={`
const fv = FormValidation.formValidation(document.getElementById('registrationForm'), {
    fields: {
        ...
        agree: {
            callback: {
                message: 'You must agree with the terms and conditions',
                callback: function(input) {
                    return input.value === 'yes';
                }
            }
        }
    }
});
`} />

        <h3>Step 3: Handle the Agree and Disagree click event</h3>
        <p class="lh-copy">When user click the <strong>Agree</strong> or <strong>Disagree</strong> button placed inside the modal, we need to set the hidden field's value to <code>yes</code> or <code>no</code>.</p>
        <p class="lh-copy">Also, revalidate the field by using the <a href="/guide/api/revalidate-field" class="blue dim link">revalidateField()</a> method:</p>

<SampleCode lang="javascript" code={`
// Update the value of "agree" input when clicking the Agree/Disagree button
const agreeInput = demoForm.querySelector('[name="agree"]');
document.getElementById('agreeButton').addEventListener('click', function() {
    agreeInput.value = 'yes';
    fv.revalidateField('agree');
});

document.getElementById('disagreeButton').addEventListener('click', function() {
    agreeInput.value = 'no';
    fv.revalidateField('agree');
});
`} />

        <p class="lh-copy">Below is the working example demonstrating all the implementation steps above. The terms are placed inside a <a href="http://getbootstrap.com/javascript/#modals" class="blue dim link">Bootstrap modal</a>.</p>

        <Demo prefix="/guide/examples/terms-and-conditions-agreement-validation/modal" frameworks={['bootstrap']} />
    </section>

    <RelatedValidators validators={['callback', 'notEmpty']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

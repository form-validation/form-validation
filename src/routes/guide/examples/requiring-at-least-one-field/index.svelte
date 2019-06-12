<svelte:head>
	<title>FormValidation • Requiring at least one field</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Requiring at least one field</h1>
    
    <section class="mv5">
        <p class="lh-copy">In fact, the form might have multiple fields with the same validator rules but at least one of them is required.
            We can't use neither the <a href="/guide/validators/notEmpty/" class="blue dim link">notEmpty</a> validator nor HTML 5 <code>required</code> attribute for all of them.</p>
        <p class="lh-copy">Fortunately, this can be done easily by two things.</p>
        <p class="lh-copy">First, use the <a href="/guide/getting-started/field-selector/" class="blue dim link">selector</a> option to define validators for all fields. So, we don't need to indicate the validator rules for each separate field.</p>
<SampleCode lang="html" code={`
<form id="demoForm" method="POST">
    <input type="text" class="js-email-address" name="primaryEmail" placeholder="Primary email" />
    <input type="text" class="js-email-address" name="secondaryEmail" placeholder="Secondary email" />
    ...
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                email: {
                    // All the email address field have js-email-address class
                    selector: '.js-email-address',
                    validators: {
                        ...
                    },
                },
            },
            plugins: {
                ...
            },
        }
    );
});    
</script-tag>
`} />
        <Tip>Using the class name prefixed by <code>js-</code>, <code>js-email-address</code> for example, is a good practice. It lets other developer in your team know that the field will be interactived by JavaScript. So it shouldn't be removed when other designers refactor the markup or CSS classes.</Tip>
        <p class="lh-copy">Next, use the <a href="/guide/validators/callback/" class="blue dim link">callback</a> validator to check if one of fields is not empty. And then update the result of callback validator via the <code>updateFieldStatus()</code> method.</p>
<SampleCode lang="javascript" code={`
const fv = FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            email: {
                // All the email address field have js-email-address class
                selector: '.js-email-address',
                validators: {
                    callback: {
                        message: 'You must enter at least one email address',
                        callback: function(input) {
                            let isEmpty = true;
                            const emailElements = fv.getElements('email');
                            for (const i in emailElements) {
                                if (emailElements[i].value !== '') {
                                    isEmpty = false;
                                    break;
                                }
                            }

                            if (!isEmpty) {
                                // Update the status of callback validator for all fields
                                fv.updateFieldStatus('email', 'Valid', 'callback');
                                return true;
                            }

                            return false;
                        }
                    },
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    },
                },
            }
        },
        plugins: {
            ...
        },
    }
);
`} />
        <p class="lh-copy">In the sample code above, we use the <code>getElements()</code> method to get all the email elements.</p>

        <Demo prefix="/guide/examples/requiring-at-least-one-field" frameworks={['Tachyons']} />        
    </section>

    <RelatedValidators validators={['callback', 'emailAddress', 'notEmpty']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

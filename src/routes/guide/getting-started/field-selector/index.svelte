<svelte:head>
	<title>FormValidation • Field selector</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Field selector</h1>
    <h2 class="f4 fw4 tc">Validating field determined by a CSS selector</h2>

    <section class="mv5">
        <p class="lh-copy">In the <a href="/guide/getting-started/usage" class="blue dim link">Usage</a> page, we know that it's possible to declare the validator rules for field via its <code>name</code> attribute:</p>
<SampleCode lang="html" code={`
<form id="loginForm" method="POST">
    <input type="text" name="username" />
    ...
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('loginForm'),
        {
            fields: {
                username: {
                    validators: {
                        ...
                    }
                },
            }
        }
    );
});    
</script-tag>
`} /> 
        <p class="lh-copy">But in reality, there're cases that it's not possible to use the <code>name</code> attribute for the field.</p>
        <p class="lh-copy">For example, assume that you have to fill in a payment form containing sensitive data such as the credit card number, its expiration date, .etc. These fields are nameless elements. How we can apply the validation rules for them?</p>
        <Tip>By not using the name attribute for sensitive fields, we can prevent them from sending to the server when the form is submitted.</Tip>
        <p class="lh-copy">Fortunately, FormValidation provides the <code>selector</code> option to support indicating fields via a CSS selector:</p>
<SampleCode lang="html" code={`
<form id="purchaseForm" method="POST">
    <input type="text" [data-stripe="number"] />
    ...
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('purchaseForm'),
        {
            fields: {
                ccNumber: {
                    // The credit card number field can be retrieved
                    // by [data-stripe="number"] attribute
                    selector: '[data-stripe="number"]',
                    validators: {
                        notEmpty: {
                            ...
                        },
                        creditCard: {
                            ...
                        }
                    }
                },
            },
        }
    );
});
</script-tag>
`} />
        <p class="lh-copy">The following example shows how to use this option to validate a a standard <a href="https://stripe.com" class="blue dim link">Stripe</a> payment form.</p>
        <p class="lh-copy">All fields for filling the credit card information don't have the <code>name</code> attribute.
            Instead, they use the <code>data-stripe</code> attribute which are defined by Stripe. The Stripe API then will
            collects the credit card data from fields using this attribute.</p>
        
        <Demo prefix="/guide/getting-started/field-selector/stripe" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/getting-started/special-field-name">Special field name</PrevButton>
            <NextButton target="/guide/validators">Validators</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

<svelte:head>
	<title>FormValidation • Switching validators on the same field</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Switching validators on the same field</h1>
    
    <section class="mv5">
        <p class="lh-copy">In general, a field might have different validators. Based on various conditions, some of them can be turned on, and the remaining are turned off.</p>
        <p class="lh-copy">For instance, the following form asks user to fill in a number which must be a valid Brazilian <a href="/guide/validators/id/" class="blue dim link">ID</a> (known as CPF) or <a href="/guide/validators/vat/" class="blue dim link">VAT</a> (known as CNPJ) number.
            CPF and CNPJ numbers have 11 and 14 characters respectively.
            Based on the length of input, we can guess which type of number user is trying to put in.</p>
        <p class="lh-copy">Firstly, use the <code>enabled</code> option to enable (disable) validators initially</p>
<SampleCode lang="javascript" code={`
const form = document.getElementById('demoForm');
const fv = FormValidation.formValidation(form, {
    fields: {
        yourId: {
            validators: {
                id: {
                    // The id validator is enabled by default
                    enabled: true,
                    country: 'BR',
                    message: 'Please enter a valid Brazilian ID number',
                },
                vat: {
                    // The vat validator is disabled initially
                    enabled: false,
                    country: 'BR',
                    message: 'Please enter a valid Brazilian VAT number',
                },
            },
        },
    },
});
`} />
        <p class="lh-copy">Lastly, turn on (off) the validators based on the length of field:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
form.querySelector('[name="yourId"]').addEventListener('keyup', function(e) {
    switch (e.target.value.length) {
        // User is trying to put a VAT number
        case 14:
            fv
                // Disable the id validator
                .disableValidator('yourId', 'id')
                // Enable the vat one
                .enableValidator('yourId', 'vat')
                // Revalidate field
                .revalidateField('yourId');
            break;

        // User is trying to put an ID number
        case 11:
        default:
            fv
                .enableValidator('yourId', 'id')
                .disableValidator('yourId', 'vat')
                .revalidateField('yourId');
            break;
    }
});
`} />            
        </div>
        <Demo prefix="/guide/examples/switching-validators-on-the-same-field" frameworks={['Tachyons']} />
    </section>

    <Examples examples={[
        'Enabling validators on the fly',
        'Switching validators on the same field',
    ]} />

    <RelatedValidators validators={['id', 'vat']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

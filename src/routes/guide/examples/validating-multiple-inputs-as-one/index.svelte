<svelte:head>
	<title>FormValidation • Validating multiple inputs as one</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Validating multiple inputs as one</h2>
    
    <section class="mv5">
        <p class="lh-copy">In some cases, you need to validate a value which is combined by various fields. For instance, a Birthday field might be a combination of Date, Month and Year one.</p>
        <p class="lh-copy">This example show a way to deal with these cases. The following form requires all of Date, Month and Year fields. Also, the combination of them must be a valid date.</p>
        <p class="lh-copy">First, we need to create a hidden field that its value is generated from Date, Month and Year fields:</p>
<SampleCode lang="html" code={`
<form id="demoForm" method="POST">
    <input type="text" name="date" placeholder="Date" />
    <input type="text" name="month" placeholder="Month" />
    <input type="text" name="year" placeholder="Year" />

    <!-- Create a hidden field which is combined by 3 fields above -->
    <input type="hidden" name="dob" />
</form>
`} />
        <p class="lh-copy">We set the validator rules for that hidden field as usual:</p>        
<SampleCode lang="javascript" code={`
const form = document.getElementById('demoForm');

const fv = FormValidation.formValidation(
    form,
    {
        fields: {
            dob: {
                validators: {
                    notEmpty: {
                        message: 'Please fill out each field'
                    },
                    date: {
                        format: 'YYYY/MM/DD',
                        message: 'Please enter a valid date',
                    },
                }
            }
        },
        plugins: {
            ...
        },
    }
);
`} />       
        <p class="lh-copy">Finally, when any of Date, Month and Year fields changes its value, we need to update the hidden field value and revalidate it using the <code>revalidateField()</code> method:</p>
<SampleCode lang="javascript" code={`
const keyupHandler = function() {
    const y = form.querySelector('[name="year"]').value;
    const m = form.querySelector('[name="month"]').value;
    const d = form.querySelector('[name="date"]').value;

    // Set the dob field value
    const dob = y === '' || m === '' || d === '' ? '' : [y, m, d].join('/');
    form.querySelector('[name="dob"]').value = dob;

    // Revalidate it
    fv.revalidateField('dob');
};

form.querySelector('[name="year"]').addEventListener('keyup', keyupHandler);
form.querySelector('[name="month"]').addEventListener('keyup', keyupHandler);
form.querySelector('[name="date"]').addEventListener('keyup', keyupHandler);
`} />
        <p class="lh-copy">Here is the working example:</p>
        <Demo prefix="/guide/examples/validating-multiple-inputs-as-one" frameworks={['Tachyons']} />
    </section>

    <Examples examples={[
        'Disabling date',
        'Integrating with flatpickr',
        'Supporting custom date format',
        'Validating date range',
        'Validating multiple inputs as one',
    ]} />

    <RelatedValidators validators={['date']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

<svelte:head>
	<title>FormValidation • Integrating with flatpickr</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Integrating with flatpickr</h2>
    
    <section class="mv5">
        <p class="lh-copy">The form below is an example of using the date validator with <a href="https://flatpickr.js.org/" class="blue dim link">flatpickr</a>, a lightweight and powerful datetime picker.</p>
        <Demo prefix="/guide/examples/integrating-with-flatpickr" frameworks={['Tachyons']} />

        <p class="lh-copy">If you look at the sample code in the <span class="i">Code</span> tab, the date field has to be revalidated after picking a date from the date picker. You have to do the same thing for any date picker.</p>
        <SampleCode lang="javascript" code={`
const fv = FormValidation.formValidation(form, {
    fields: {
        meetingTime: {
            ...
        },
    },
});

flatpickr(form.querySelector('[name="meetingTime"]'), {
    ...
    // After selecting a date, we need to revalidate the field
    onChange: function() {
        fv.revalidateField('meetingTime');
    },
});
`} />  
    </section>

    <Examples examples={[
        'Disabling date',
        'Integrating with flatpickr',
        'Supporting custom date format',
        'Using flatpickr for start and end dates',
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

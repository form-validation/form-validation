<svelte:head>
	<title>FormValidation • Using flatpickr for start and end dates</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Using flatpickr for start and end dates</h1>
    
    <section class="mv5">
        <p class="lh-copy">It's possible to use a date picker that allows user to choose a date easily. You have to <a href="/guide/api/revalidate-field" class="blue dim link">revalidate the field</a> when the date is changed.</p>
        <p class="lh-copy">The example below uses the <a href="https://flatpickr.js.org" class="blue dim link">flatpickr</a>, a lightweight and powerful datetime picker.</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
const fv = FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        ...
    },
});

flatpickr(form.querySelector('[name="startDate"]'), {
    ...
    // After selecting a date, we need to revalidate the field
    onChange: function() {
        fv.revalidateField('startDate');
    },
});

flatpickr(form.querySelector('[name="endDate"]'), {
    ...
    onChange: function() {
        fv.revalidateField('endDate');
    },
});
`} />        
        </div>
        <Demo prefix="/guide/examples/using-flatpickr-for-start-and-end-dates" frameworks={['tachyons']} />
    </section>

    <Examples examples={[
        'Integrating with flatpickr',
        'Using flatpickr for start and end dates'
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

<svelte:head>
	<title>FormValidation • Integrating with 3rd party libraries</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Integrating with 3rd party libraries</h1>
    
    <section class="mv5">
        <p class="lh-copy">Most UI libraries trigger an event after changing the field value. By using this kind of event handler, you need to ask FormValidation to revalidate the field using the <a href="/guide/api/revalidate-field" class="blue dim link">revalidateField()</a> method.</p>

        <p class="lh-copy">The following snippet demonstrates how to validate a field by using both <a href="/guide/validators/date" class="blue dim link">date</a> validator and <a href="https://flatpickr.js.org" class="blue dim link">flatpickr</a>, a lightweight and powerful datetime picker.</p>
        <div class="mb3">
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
        </div>
        <Demo prefix="/guide/examples/integrating-with-flatpickr" frameworks={['tachyons']} />
    </section>

    <Examples heading="Integrate with 3rd party libraries" examples={[
        'Integrating with 3rd party libraries',
        'Integrating with flatpickr',
        'Integrating with TinyMCE',
        'Using flatpickr for start and end dates',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

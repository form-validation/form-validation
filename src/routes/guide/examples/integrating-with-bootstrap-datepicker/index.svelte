<svelte:head>
	<title>FormValidation • Integrating with Bootstrap Datepicker</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Integrating with Bootstrap Datepicker</h1>

    <p class="lh-copy">The following example illustrates an usage of FormValidation with the <a href="https://github.com/eternicode/bootstrap-datepicker" class="blue dim link">Bootstrap Datepicker</a> plugin.</p>

    <section class="mv5">
        <Heading>Basic example</Heading>
        <p class="lh-copy">We need to revalidate the date field after picking a date from the date picker:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
const fv = FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            date: {
                ...
            },
        }
    }
);

$('[name="date"]')
    .datepicker({
        format: 'mm/dd/yyyy'
    })
    .on('changeDate', function(e) {
        // Revalidate the date field
        fv.revalidateField('date');
    });
`} />
        </div>
        <Demo prefix="/guide/examples/integrating-with-bootstrap-datepicker/basic" frameworks={['bootstrap']} />
    </section>

    <section class="mv5">
        <Heading>Embedding a date picker</Heading>
        <p class="lh-copy">It's possible for Bootstrap Datepicker to embed a picker right on the page without attaching it to particular input field.</p>
        <p class="lh-copy">In order to validate the selected date, firstly we need create a hidden input to keep the selected date:</p>
<SampleCode lang="html" code={`
<div id="embeddingDatePicker"></div>
<input type="hidden" id="selectedDate" name="selectedDate" />
`} />
        <p class="lh-copy">We then add validator rules for the <code>selectedDate</code> field:</p>
<SampleCode lang="javascript" code={`
const form = document.getElementById('demoForm');
const fv = formValidation(form, {
    fields: {
        selectedDate: {
            validators: {
                notEmpty: {
                    message: 'The date is required'
                },
                date: {
                    format: 'MM/DD/YYYY',
                    message: 'The date is not a valid'
                }
            }
        },
    }
});
`} />
        <p class="lh-copy">Finally, after choosing a date, you need to set the selected date to the hidden field, and revalidate it:</p>
<SampleCode lang="javascript" code={`
$('#embeddingDatePicker')
    .datepicker({
        format: 'mm/dd/yyyy'
    })
    .on('changeDate', function(e) {
        // Set the value for the date input
        document.querySelector('[name="selectedDate"]').value = $('#embeddingDatePicker').datepicker('getFormattedDate');

        // Revalidate it
        fv.revalidateField('selectedDate');
    });
`} />
        <p class="lh-copy">You can try it with the following live form:</p>
        <Demo prefix="/guide/examples/integrating-with-bootstrap-datepicker/embedding" frameworks={['bootstrap']} />
    </section>

    <section class="mv5">
        <Heading>Setting date in a range</Heading>
        <p class="lh-copy">Since Bootstrap Datepicker provides <a href="http://bootstrap-datepicker.readthedocs.org/en/stable/options.html#startdate" class="blue dim link">startDate</a> and <a href="http://bootstrap-datepicker.readthedocs.org/en/stable/options.html#enddate" class="blue dim link">endDate</a> options,
            and the <a href="/guide/validators/date" class="blue dim link">date</a> validator supports <code>min</code> and <code>max</code> options, we can set a date range easily.</p>
        <p class="lh-copy">The following example asks to enter a date between 01/01/2010 and 12/30/2020.</p>
        <Demo prefix="/guide/examples/integrating-with-bootstrap-datepicker/range" frameworks={['bootstrap']} />
    </section>

    <section class="mv5">
        <Heading>Closing the date picker automatically</Heading>
        <p class="lh-copy">If you want to close the date picker immediately right after choosing a date, you need to set the
                <a href="https://bootstrap-datepicker.readthedocs.io/en/stable/options.html#autoclose" class="blue dim link">autoclose</a> option to <code>true</code>:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
$('[name="date"]')
    .datepicker({
        autoclose: true, // It is false, by default
        format: 'mm/dd/yyyy'
    })
    .on('changeDate', function(e) {
        ...
    });
`} />
        </div>
        <Demo prefix="/guide/examples/integrating-with-bootstrap-datepicker/autoclose" frameworks={['bootstrap']} />
    </section>

    <Examples examples={[
        'Disabling date',
        'Integrating with Bootstrap Datepicker',
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
import Heading from '../../../../components/Heading.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>
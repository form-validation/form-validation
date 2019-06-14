<svelte:head>
	<title>FormValidation • StartEndDate plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">StartEndDate plugin</h1>
    <h2 class="f4 fw4 tc">Validate start and end dates</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The following piece of code is the starting point to use the StartEndDate plugin:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <!-- The start date field -->
        <input type="text" name="startDate" placeholder="Start date" />

        <!-- The end date field -->
        <input type="text" name="endDate" placeholder="End date" />

        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/StartEndDate.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                startEndDate: new FormValidation.plugins.StartEndDate({
                    format: '...',
                    startDate: {
                        field: 'startDate',
                        message: 'The start date must be ealier than the end date',
                    },
                    endDate: {
                        field: 'endDate',
                        message: 'The end date must be later than the start date',
                    },
                }),
                ...
            },
        }
    );
});
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy">The sample code above assumes that the FormValidation files are placed inside the <code>vendors</code> directory. You might need to change the path depending on where you place them on the server.</p>
    </section>

    <section class="mv5">
        <Heading>Options</Heading>
        <p class="lh-copy i"><sup>*</sup> presents a required option</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Option</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>format</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The date format that both start and end dates have to follow. It's the same as the <code>format</code> option provided by the <a href="/guide/validators/date" class="blue dim link">date</a> validator</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>startDate</code> <sup>*</sup></td>
                <td class="pv2 ph3">Object</td>
                <td class="pv2 ph3 lh-copy">
                    Contains two require properties:
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>field</code> (String): The name of start date field</li>
                        <li><code>message</code> (String): The message when the start date is not a valid date or not ealier than the end date</li>
                    </ul>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>endDate</code> <sup>*</sup></td>
                <td class="pv2 ph3">Object</td>
                <td class="pv2 ph3 lh-copy">
                    Contains two require properties:
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>field</code> (String): The name of end date field</li>
                        <li><code>message</code> (String): The message when the end date is not a valid date or not later than the start date</li>
                    </ul>
                </td>
            </tr>
        </table>
        <p class="lh-copy">You don't have to define the <a href="/guide/validators/date" class="blue dim link">date</a> validator rules for start and end date fiels, because it's handled by the StartEndDate plugin automatically.</p>
    </section>

    <section class="mv5">
        <Heading>Basic example</Heading>
        <Demo prefix="/guide/plugins/start-end-date/basic" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.1.0: First release. It means that the StartEndDate plugin requires FormValidation v1.1.0 or newer.</li>
        </ul>
    </section>

    <Examples examples={[
        'Using flatpickr for start and end dates'
    ]} />

    <RelatedValidators validators={['date']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/spectre">Spectre plugin</PrevButton>
            <NextButton target="/guide/plugins/submit-button">SubmitButton plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

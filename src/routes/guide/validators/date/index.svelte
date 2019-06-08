<svelte:head>
	<title>FormValidation • date validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">date validator</h1>
    <h2 class="f4 fw4 tc">Validate a date</h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i"><sup>*</sup> presents a required option. The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative/" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>format</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-date___format</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The date format. It is <code>MM/DD/YYYY</code>, by default</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>max</code></td>
                <td class="pv2 ph3"><code>data-fv-date___max</code></td>
                <td class="pv2 ph3">String or Date or Function</td>
                <td class="pv2 ph3">The value must be earlier than this option</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-date___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>min</code></td>
                <td class="pv2 ph3"><code>data-fv-date___min</code></td>
                <td class="pv2 ph3">String or Date or Function</td>
                <td class="pv2 ph3">The value must be later than this option</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>separator</code></td>
                <td class="pv2 ph3"><code>data-fv-date___separator</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">Used to separate the day, month, and year. If it's not defined, the validator will look for the following separators automatically:</p>
                    <ul class="ma0 pl3 lh-copy">
                        <li>/</li>
                        <li>-</li>
                        <li>. (which is used in most European countries)</li>
                    </ul>
                </td>
            </tr>
        </table>

        <p class="lh-copy">The <code>min</code> and <code>max</code> options can be</p>
        <ul class="ma0 pl3 lh-copy">
            <li>a date string in the format defined by the <code>format option</code></li>
            <li>a Date object</li>
            <li>or a function that returns one of the two types above.</li>
        </ul>
        <Tip>Use the <a href="/guide/plugins/start-end-date/" class="blue dim link">StartEndDate</a> plugin if you want to validate start and end dates</Tip>
        <p class="lh-copy">The <code>format</code> can combine date, time, and AM/PM indicator sections:</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Section</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Token</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Separator</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Date</td>
                <td class="pv2 ph3">DD, MM, YYYY</td>
                <td class="pv2 ph3 lh-copy">Defined by the <code>separator</code> option.<br/>Most popular examples are a slash (/), hyphen (-), or dot (.)</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Time</td>
                <td class="pv2 ph3">h, m, s</td>
                <td class="pv2 ph3">a colon (:)</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">AM/PM</td>
                <td class="pv2 ph3">A</td>
                <td class="pv2 ph3">n/a</td>
            </tr>
        </table>

        <p class="lh-copy">The following table describes the token meanings, defined by <a href="http://momentjs.com/docs/#/displaying/format/" class="blue dim link">momentjs</a>, one of most popular JavaScript datetime library:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Token</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Required</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">MM</td>
                <td class="pv2 ph3">Month number</td>
                <td class="pv2 ph3">Yes</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">DD</td>
                <td class="pv2 ph3">Day of month</td>
                <td class="pv2 ph3">Yes</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">YYYY</td>
                <td class="pv2 ph3">4 digit year</td>
                <td class="pv2 ph3">Yes</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">h</td>
                <td class="pv2 ph3">12 hour time</td>
                <td class="pv2 ph3">No</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">m</td>
                <td class="pv2 ph3">Minutes</td>
                <td class="pv2 ph3">No</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">s</td>
                <td class="pv2 ph3">Seconds</td>
                <td class="pv2 ph3">No</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">A</td>
                <td class="pv2 ph3">AM/PM</td>
                <td class="pv2 ph3">No</td>
            </tr>
        </table>

        <p class="lh-copy">The date validator requires day, month and year. If you are looking for hour and time validator, HH:mm, for example, you should use the <a href="/guide/validators/regexp/" class="blue dim link">regexp</a> validator.</p>
        <p class="lh-copy">Below are some example of possible formats:</p>
        <ul class="ma0 pl3 lh-copy">
            <li>YYYY/DD/MM</li>
            <li>YYYY/DD/MM h</li>
            <li>YYYY/DD/MM h A</li>
            <li>YYYY/DD/MM h:m</li>
            <li>YYYY/DD/MM h:m A</li>
            <li>YYYY/DD/MM h:m:s</li>
            <li>YYYY/DD/MM h:m:s A</li>
            <li>YYYY-MM-DD</li>
            <li>YYYY-MM-DD h:m A</li>
            <li>DD/MM/YYYY</li>
            <li>DD/MM/YYYY h:m A</li>
            <li>MM-DD-YYYY</li>
            <li>MM-DD-YYYY h:m A</li>
            <li>DD-MM-YYYY</li>
            <li>DD-MM-YYYY h:m A</li>
        </ul>
        <p class="lh-copy">It's possible to support other date format by using <a href="/guide/validators/callback/" class="blue dim link">callback</a> validator as shown in the <span class="i">Custom format example</span> below.</p>
        <Tip>The date validator also checks the number of days in February of leap year. For example, 2000/02/29 is a valid date, while 2001/02/29 is invalid one</Tip>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import date from 'formvalidation/dist/es6/validators/date';

const result = date().validate({
    value: ...,
    options: {
        format: ...,
        max: ...,
        message: ...,
        min: ...,
        separator: ...,
    },
});
/*
result is an object of
{
    valid: true or false,
    message: The error message,
    meta: {
        // Can be null (if the value is not a valid date)
        // or a JavaScript Date object presenting the value
        date: ...,
    }
}
*/
`} />
    </section>

    <section class="mv5">
        <Heading>Basic example</Heading>
        <p class="lh-copy">The following form might be used in a profile setting page:</p>
        <Demo prefix="/guide/validators/date/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the date validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import date from 'formvalidation/dist/es6/validators/date';

const res1 = date().validate({
    value: '2014/08/17',
    options: {
        format: 'YYYY/MM/DD',
        message: 'The value is not a valid date',
        min: '2010/01/01',
    },
});
// res1.valid === true
// res1.meta.date === new Date('2014/08/17')

const res2 = date().validate({
    value: '32.11.2014',
    options: {
        format: 'DD.MM.YYYY',
        message: 'The value is not a valid date',
    },
});
// res2.valid === false
// res2.meta.date === null
`} />
    </section>

    <Examples examples={[
        'Disabling date',
        'Integrating with flatpickr',
        'Supporting custom date format',
        'Validating date range'
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/cusip/">cusip validator</PrevButton>
            <NextButton href="/guide/validators/different/">different validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>
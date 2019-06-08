<svelte:head>
	<title>FormValidation • ein validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">ein validator</h1>
    <h2 class="f4 fw4 tc">Validate an <a href="https://en.wikipedia.org/wiki/Employer_Identification_Number" class="blue dim link">EIN (Employer Identification Number)</a></h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i">The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative/" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-ein___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import ein from 'formvalidation/dist/es6/validators/ein';

const result = ein().validate({
    value: ...,
    options: {
        message: ...,
    },
});
/*
result is an object of
{
    valid: true or false,
    message: The error message     
}
*/
`} />
    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>

        <p class="lh-copy">You can click on sample to see if it's a valid or invalid EIN.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is valid?</th>
            </tr>
            {#each _samples as sample}
            <tr class="striped--light-gray">
                <SampleData sample={sample} sender="/guide/validators/ein/basic" />
            </tr>
            {/each}
        </table>

        <Demo prefix="/guide/validators/ein/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the ein validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import ein from 'formvalidation/dist/es6/validators/ein';

const res1 = ein().validate({
    value: '91-1144442',
    options: {
        message: 'The value is not valid EIN',
    },
});
// res1.valid === true

const res2 = ein().validate({
    value: '123-45-6789',
    options: {
        message: 'The value is not valid EIN',
    },
});
// res2.valid === false
`} />
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/ean/">ean validator</PrevButton>
            <NextButton href="/guide/validators/email-address/">emailAddress validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import SampleData from '../../../../components/SampleData.svelte';

const _samples = [
    // Valid
    '01-1234567', '91-1144442', '011234567',
    // Invalid format
    '123-45-6789',
    // Invalid campus
    '00-1234567', '07-1144442', '49-1234567',
];
</script>
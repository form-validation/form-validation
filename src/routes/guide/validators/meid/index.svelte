<svelte:head>
	<title>FormValidation • meid validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">meid validator</h1>
    <h2 class="f4 fw4 tc">Validate a <a href="https://en.wikipedia.org/wiki/Mobile_equipment_identifier" class="blue dim link">MEID (mobile equipment identifier)</a></h2>

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
                <td class="pv2 ph3"><code>data-fv-meid___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import meid from 'formvalidation/dist/es6/validators/meid';

const result = meid().validate({
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

        <p class="lh-copy">You can click on sample to see if it's a valid or invalid MEID.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is valid?</th>
            </tr>
            {#each _samples as sample}
            <tr class="striped--light-gray">
                <SampleData sample={sample} sender="/guide/validators/meid/basic" />
            </tr>
            {/each}
        </table>

        <Demo prefix="/guide/validators/meid/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the meid validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import meid from 'formvalidation/dist/es6/validators/meid';

const res1 = meid().validate({
    value: 'A00000049259B16',
    options: {
        message: 'The value is not valid MEID',
    },
});
// res1.valid === true

const res2 = meid().validate({
    value: '2936087365007037101',
    options: {
        message: 'The value is not valid MEID',
    },
});
// res2.valid === false
`} />
    </section>

    <RelatedValidators validators={['imei']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/mac/">mac validator</PrevButton>
            <NextButton href="/guide/validators/not-empty/">notEmpty validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import SampleData from '../../../../components/SampleData.svelte';

const _samples = [
    'A00000049259B16', 'A0-000004-9259B1-6', 'A0 000004 9259B1 6', '2936087365007037100', '29360-87365-0070-3710-0',
    '29360 87365 0070 3710 ', ' AF0123450ABCDE', 'AF-012345-0ABCDE', 'AF 012345 0ABCDE', '293608736500703710',
    '29360-87365-0070-3710', '29360 87365 0070 3710', 'A00000049259B15', 'A00000049259B', '2936087365007037101',
    '29360873650070371',
];
</script>

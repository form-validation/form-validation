<svelte:head>
	<title>FormValidation • bic validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">bic validator</h1>
    <h2 class="f4 fw4 tc">Validate a <a href="http://en.wikipedia.org/wiki/ISO_9362" class="blue dim link">BIC</a> (Business Identifier Codes)</h2>

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
                <td class="pv2 ph3"><code>data-fv-bic___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import bic from 'formvalidation/dist/es6/validators/bic';

const result = bic().validate({
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

        <p class="lh-copy">You can click on sample to see if it's a valid or invalid BIC.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is valid?</th>
            </tr>
            {#each _samples as sample}
            <tr class="striped--light-gray">
                <SampleData sample={sample} sender="/guide/validators/bic/basic" />
            </tr>
            {/each}
        </table>

        <Demo prefix="/guide/validators/bic/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the bic validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import bic from 'formvalidation/dist/es6/validators/bic';

const res1 = bic().validate({
    value: 'DSBACNBXSHA',
    options: {
        message: 'The value is not valid BIC',
    },
});
// res1.valid === true

const res2 = bic().validate({
    value: 'RZ00AT2L303',
    options: {
        message: 'The value is not valid BIC',
    },
});
// res2.valid === false
`} />
    </section>

    <RelatedValidators validators={['creditCard', 'iban', 'rtn']} />

    <section class="cf mv5">
        <div class="fl w-50 tl">
            <PrevButton href="/guide/validators/between/">between validator</PrevButton>
        </div>
        <div class="fl w-50 tr">
            <NextButton href="/guide/validators/callback/">callback validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import SampleData from '../../../../components/SampleData.svelte';

const _samples = [
    // Valid
    'ASPKAT2LXXX', 'ASPKAT2L', 'DSBACNBXSHA', 'UNCRIT2B912', 'DABADKKK', 'RZOOAT2L303',
    // Invalid
    'ASPKAT2LXX', 'ASPKAT2LX', 'ASPKAT2LXXX1', 'DABADKK', 'RZ00AT2L303',
    // Invalid fist 6 characters
    '1SBACNBXSHA', 'D2BACNBXSHA', 'DS3ACNBXSHA', 'DSB4CNBXSHA', 'DSBA5NBXSHA', 'DSBAC6BXSHA', '1S3AC6BXSHA',
];
</script>

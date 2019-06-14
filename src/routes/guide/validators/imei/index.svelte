<svelte:head>
	<title>FormValidation • imei validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">imei validator</h1>
    <h2 class="f4 fw4 tc">Validate an <a href="https://en.wikipedia.org/wiki/International_Mobile_Equipment_Identity" class="blue dim link">IMEI (International Mobile Station Equipment Identity)</a></h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i">The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-imei___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import imei from 'formvalidation/dist/es6/validators/imei';

const result = imei().validate({
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

        <p class="lh-copy">You can click on sample to see if it's a valid or invalid IMEI.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is valid?</th>
            </tr>
            {#each _samples as sample}
            <tr class="striped--light-gray">
                <SampleData sample={sample} sender="/guide/validators/imei/basic" />
            </tr>
            {/each}
        </table>

        <Demo prefix="/guide/validators/imei/basic" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the imei validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import imei from 'formvalidation/dist/es6/validators/imei';

const res1 = imei().validate({
    value: '35-209900-176148-1',
    options: {
        message: 'The value is not valid IMEI',
    },
});
// res1.valid === true

const res2 = imei().validate({
    value: '490154203237517',
    options: {
        message: 'The value is not valid IMEI',
    },
});
// res2.valid === false
`} />
    </section>

    <RelatedValidators validators={['meid']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/identical">identical validator</PrevButton>
            <NextButton target="/guide/validators/imo">imo validator</NextButton>
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

const _samples = ['35-209900-176148-1', '35-209900-176148-23', '3568680000414120', '490154203237518', '490154203237517'];
</script>
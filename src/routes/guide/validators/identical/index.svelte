<svelte:head>
	<title>FormValidation • identical validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">identical validator</h1>
    <h2 class="f4 fw4 tc">Check if the value is the same as one of given value</h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i"><sup>*</sup> presents a required option. The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>compare</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-identical___compare</code></td>
                <td class="pv2 ph3">String or a function returns a string</td>
                <td class="pv2 ph3">The value that the field has to be different with</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-identical___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import identical from 'formvalidation/dist/es6/validators/identical';

const result = identical().validate({
    value: ...,
    options: {
        compare: ...,
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
        <p class="lh-copy">The following form requires the password and confirmation one to be the same using <code>identical</code> validator.</p>
        <Demo prefix="/guide/validators/identical/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <Examples examples={[
        'Enabling validators on the fly',
    ]} />

    <RelatedValidators validators={['different']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/id/{slug(idData[idData.length - 1].adjective)}-identification-number">{idData[idData.length - 1].adjective} id validator</PrevButton>
            <NextButton target="/guide/validators/imei">imei validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import idData from '../id/data';
import slug from '../../../../components/helpers/slug';

import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>
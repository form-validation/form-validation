<svelte:head>
	<title>FormValidation • id validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">id validator</h1>
    <h2 class="f4 fw4 tc">Validate an <a href="https://en.wikipedia.org/wiki/National_identification_number" class="blue dim link">identification number</a></h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i"><sup>*</sup> presents a required option. The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative/" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>country</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-id___country</code></td>
                <td class="pv2 ph3">String or Function</td>
                <td class="pv2 ph3">An ISO-3166 country code</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-id___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>
        <p class="lh-copy">The validator supports the following countries (click the sample number to validate it):</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">#</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Country</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Abbreviation ID system</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Country code</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample ID</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is it valid?</th>
            </tr>
            {#each data as item, index}
                <tr class="striped--light-gray">
                    <td class="pv2 ph3">{index + 1}</td>
                    <td class="pv2 ph3"><a href="/guide/validators/id/{slug(item.adjective)}-identification-number/" title="{item.adjective} identification number validator" class="blue dim link pa2">{item.country}</a></td>
                    <td class="pv2 ph3">{item.abbr || '-'}</td>
                    <td class="pv2 ph3">{item.code}</td>
                    <SampleData 
                        sample={{ country: item.code, sample: random(item.validExamples.concat(item.invalidExamples)) }}
                        sender="/guide/validators/id/basic"
                        renderSample={(s) => s.sample} />
                </tr>
            {/each}
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import id from 'formvalidation/dist/es6/validators/id';

const result = id().validate({
    value: ...,
    options: {
        // Can be a string or a function returns a string
        country: ...,
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
        <p class="lh-copy">You can click on sample from the table above to see if it's a valid or invalid id.</p>
        <Demo prefix="/guide/validators/id/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the id validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import id from 'formvalidation/dist/es6/validators/id';

const res1 = id().validate({
    value: '54362315K',
    options: {
        country: 'ES',
        message: 'The value is not a valid ID',
    },
});
// res1.valid === true

const res2 = id().validate({
    value: '511062-5629',
    options: {
        country: 'DK',
        message: 'The value is not a valid ID',
    },
});
// res2.valid === false
`} />
    </section>

    <RelatedValidators validators={['vat']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/iban/">iban validator</PrevButton>
            <NextButton href="/guide/validators/id/{slug(data[0].adjective)}-identification-number/">{data[0].adjective} id validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import data from './data';
import random from '../../../../components/helpers/random';
import slug from '../../../../components/helpers/slug';

import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import SampleData from '../../../../components/SampleData.svelte';
</script>

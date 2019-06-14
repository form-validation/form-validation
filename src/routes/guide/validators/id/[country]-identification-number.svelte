<svelte:head>
	<title>FormValidation • id validator • Validate {item.adjective} identification number</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">id validator</h1>
    <h2 class="f4 fw4 tc">Validate a {item.adjective} identification number</h2>

    <section class="mv5">
        <Heading>Basic Example</Heading>
        <p class="lh-copy">You can click on sample from the following table to see if it's a valid or invalid {item.adjective} id.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample ID</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is it valid?</th>
            </tr>
            {#each examples as sample (sample)}
            <tr class="striped--light-gray">
                <SampleData sample={{ sample: sample }} renderSample={(s) => s.sample} sender="/guide/validators/id/basic-{countryCode}" />
            </tr>
            {/each}
        </table>

        <Demo prefix="/guide/validators/id/basic-{countryCode}" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>
    
        <p class="lh-copy">The following snippet shows how to use the id validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import ${item.code.toLowerCase()}Id from 'formvalidation/dist/es6/validators/id/${item.code.toLowerCase()}Id';

const res1 = ${item.code.toLowerCase()}Id().validate('${validSample}');
// res1.valid === true

const res2 = ${item.code.toLowerCase()}Id().validate('${invalidSample}');
// res2.valid === false
`} />
    </section>

    <RelatedValidators validators={['id', 'vat']} />

    <section class="mv5">
        <div class="flex">
            {#if index === 0}
            <PrevButton target="/guide/validators/id">id validator</PrevButton>
            {:else}
            <PrevButton target="/guide/validators/id/{slug(data[index - 1].adjective)}-identification-number">{data[index - 1].adjective} id validator</PrevButton>
            {/if}
            {#if index === numIdValidators - 1}
            <NextButton target="/guide/validators/identical">identical validator</NextButton>
            {:else}
            <NextButton target="/guide/validators/id/{slug(data[index + 1].adjective)}-identification-number">{data[index + 1].adjective} id validator</NextButton>
            {/if}
        </div>
    </section>
</GuideLayout>

<script context="module">
export async function preload({ params }) {
    const country = params.country;
    const item = data.find((item) =>  {
        return item.adjective.toLowerCase().replace(/\s/g, '-') === country;
    });
    if (!item) {
        return this.error(404, 'Not found');
    }

    return {
        item,
        index: data.indexOf(item),
        numIdValidators: data.length,
        countryCode: item.code.toLowerCase(),
        examples: item.validExamples.concat(item.invalidExamples),
        invalidSample: random(item.invalidExamples),
        validSample: random(item.validExamples),
    };
};
</script>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import SampleData from '../../../../components/SampleData.svelte';

import data from './data';
import random from '../../../../components/helpers/random';
import slug from '../../../../components/helpers/slug';

let item;
let index;
let numIdValidators;
let countryCode;
let examples;
let invalidSample;
let validSample;

export {
    item,
    index,
    numIdValidators,
    countryCode,
    examples,
    invalidSample,
    validSample,
};
</script>

<svelte:head>
	<title>FormValidation • vat validator • Validate {item.adjective} VAT number</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">vat validator</h1>
    <h2 class="f4 fw4 tc">Validate a {item.adjective} VAT number</h2>

    <section class="mv5">

    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>
        <p class="lh-copy">You can click on sample from the following table to see if it's a valid or invalid {item.adjective} VAT number.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample VAT number</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is it valid?</th>
            </tr>
            {#each examples as sample (sample)}
            <tr class="striped--light-gray">
                <SampleData sample={{ sample: sample }} renderSample={(s) => s.sample} sender="/guide/validators/vat/basic-{countryCode}" />
            </tr>
            {/each}
        </table>

        <Demo prefix="/guide/validators/vat/basic-{countryCode}" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>
    
        <p class="lh-copy">The following snippet shows how to use the vat validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import ${item.code.toLowerCase()}Vat from 'formvalidation/dist/es6/validators/vat/${item.code.toLowerCase()}Vat';

const res1 = ${item.code.toLowerCase()}Vat().validate('${validSample}');
// res1.valid === true

const res2 = ${item.code.toLowerCase()}Vat().validate('${invalidSample}');
// res2.valid === false
`} />
    </section>

    <RelatedValidators validators={['id', 'vat']} />

    <section class="mv5">
        <div class="flex">
            {#if index === 0}
            <PrevButton target="/guide/validators/vat">vat validator</PrevButton>
            {:else}
            <PrevButton target="/guide/validators/vat/{slug(data[index - 1].adjective)}-vat-number">{data[index - 1].adjective} vat validator</PrevButton>
            {/if}
            {#if index === numVatValidators - 1}
            <NextButton target="/guide/validators/vin">vin validator</NextButton>
            {:else}
            <NextButton target="/guide/validators/vat/{slug(data[index + 1].adjective)}-vat-number">{data[index + 1].adjective} vat validator</NextButton>
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
        numVatValidators: data.length,
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
let numVatValidators;
let countryCode;
let examples;
let invalidSample;
let validSample;

export {
    item,
    index,
    numVatValidators,
    countryCode,
    examples,
    invalidSample,
    validSample,
};
</script>

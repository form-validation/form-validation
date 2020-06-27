<svelte:head>
	<title>FormValidation • vat validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">vat validator</h1>
    <h2 class="f4 fw4 tc">Validate a <a href="https://en.wikipedia.org/wiki/VAT_identification_number" class="blue dim link">VAT number</a></h2>

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
                <td class="pv2 ph3"><code>country</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-vat___country</code></td>
                <td class="pv2 ph3">String or Function</td>
                <td class="pv2 ph3">An ISO-3166 country code</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-vat___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>
        <p class="lh-copy">The validator supports the following countries (click the sample number to validate it):</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">#</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Country</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Abbreviation VAT system</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Country code</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample VAT</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is it valid?</th>
            </tr>
            {#each data as item, index}
                <tr class="striped--light-gray">
                    <td class="pv2 ph3">{index + 1}</td>
                    <td class="pv2 ph3"><a href="/guide/validators/vat/{slug(item.adjective)}-vat-number" title="{item.adjective} VAT number validator" class="blue dim link pa2">{item.country}</a></td>
                    <td class="pv2 ph3">{item.abbr || '-'}</td>
                    <td class="pv2 ph3">{item.code}</td>
                    <SampleData 
                        sample={{ country: item.code, sample: random(item.validExamples.concat(item.invalidExamples)) }}
                        sender="/guide/validators/vat/basic"
                        renderSample={(s) => s.sample} />
                </tr>
            {/each}
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import vat from 'formvalidation/dist/es6/validators/vat';

const result = vat().validate({
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
        <p class="lh-copy">You can click on sample from the table above to see if it's a valid or invalid VAT.</p>
        <Demo prefix="/guide/validators/vat/basic" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the vat validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import vat from 'formvalidation/dist/es6/validators/vat';

const res1 = vat().validate({
    value: 'U13585627',
    options: {
        country: 'AT',
        message: 'The value is not a valid VAT number',
    },
});
// res1.valid === true

const res2 = vat().validate({
    value: '13585627',
    options: {
        country: 'DK',
        message: 'The value is not a valid VAT number',
    },
});
// res2.valid === false
`} />
    </section>

    <Examples examples={[
        'Switching validators on the same field',
    ]} />

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.6.0: Fixed an issue that the <code>country</code> option isn't passed to the placeholder message</li>
        </ul>
    </section>

    <RelatedValidators validators={['id']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/uuid">uuid validator</PrevButton>
            <NextButton target="/guide/validators/vat/{slug(data[0].adjective)}-vat-number">{data[0].adjective} vat validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import data from './data';
import random from '../../../../components/helpers/random';
import slug from '../../../../components/helpers/slug';

import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import SampleData from '../../../../components/SampleData.svelte';
</script>

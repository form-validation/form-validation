<svelte:head>
	<title>FormValidation • zipCode validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">zipCode validator</h1>
    <h2 class="f4 fw4 tc">Validate a zip code</h2>

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
                <td class="pv2 ph3"><code>country</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-zip-code___country</code></td>
                <td class="pv2 ph3">String or Function</td>
                <td class="pv2 ph3">An ISO-3166 country code</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-zip-code___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>
        <p class="lh-copy">If you want to support custom formats of a zipCode number, you should use the <a href="/guide/plugins/transformer" class="blue dim link">Transformer</a> plugin.</p>
        <p class="lh-copy">The validator supports the following countries (click the sample number to validate it):</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Country</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Country code</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is it valid?</th>
            </tr>
            {#each _samples as item}
                {#if item.examples.length > 0}
                {#each item.examples as example, i}
                <tr class="striped--light-gray">
                    <td class="pv2 ph3">{#if i === 0}{item.country}{/if}</td>
                    <td class="pv2 ph3">{#if i === 0}{item.code}{/if}</td>
                    <SampleData sample={{ country: item.code, sample: example }} renderSample={(s) => s.sample} sender="/guide/validators/zip-code/basic" />
                </tr>
                {/each}
                {:else}
                <tr class="striped--light-gray">
                    <td class="pv2 ph3">{item.country}</td>
                    <td class="pv2 ph3">{item.code}</td>
                    <td class="pv2 ph3"></td>
                    <td class="pv2 ph3"></td>
                </tr>
                {/if}
            {/each}
        </table>

        <h3>US zipcode</h3>
        <p class="lh-copy">This validator supports 4 digits US zipcode. If you want a valid US zipcode to be 5 digits exactly, use the <a href="/guide/validators/regexp" class="blue dim link">regexp</a> validator</p>
<SampleCode lang="html" code={`
<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                postcode: {
                    validators: {
                        regexp: {
                            regexp: /^\d{5}$/,
                            message: 'The US zip code must contain 5 digits'
                        }
                    }
                }
            },
        }
    );
});
</script-tag>
`} />        

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import zipCode from 'formvalidation/dist/es6/validators/zipCode';

const result = zipCode().validate({
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
        <Heading>Basic example</Heading>
        <p class="lh-copy">You can click on sample from the table above to see if it's a valid or invalid zipcode.</p>
        <Demo prefix="/guide/validators/zip-code/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Using country option with different value</Heading>
        <p class="lh-copy">In the example above, the value of country select box must be the country code as following.</p>
        <SampleCode lang="html" code={`
<select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="country">
    <option value="US">United States</option>
    <option value="AT">Austria</option>
    <option value="BG">Bulgaria</option>
    <option value="BR">Brazil</option>
    <option value="CA">Canada</option>
    <option value="CZ">Czech Republic</option>
    ...
</select>
`} />

        <p class="lh-copy">In the case that the <code>value</code> attribute of <code>option</code> can't exactly be the country code, instead, be a country name for example:</p>
        <SampleCode lang="html" code={`
<select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="country">
    <option value="United States">United States</option>
    <option value="Austria">Austria</option>
    <option value="Bulgaria">Bulgaria</option>
    <option value="Brazil">Brazil</option>
    <option value="Canada">Canada</option>
    <option value="Czech Republic">Czech Republic</option>
    ...
</select>
`} />
        <p class="lh-copy">Then we need to set the <code>country</code> option as a callback function returning a country code based on the selected name:</p>
        <SampleCode lang="html" code={`
<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                postalCode: {
                    validators: {
                        zipCode: {
                            country: function() {
                                // Map the country names to the code
                                const map = {
                                    'United States': 'US',
                                    'Austria': 'AT',
                                    'Bulgaria': 'BG',
                                    'Brazil': 'BR',
                                    'Canada': 'CA',
                                    'Czech Republic': 'CZ',
                                    'Denmark': 'DK',
                                    'French': 'FR',
                                    'Germany': 'DE',
                                    'India': 'IN',
                                    'Italy': 'IT',
                                    'Morocco': 'MA',
                                    'Netherlands': 'NL',
                                    'Poland': 'PL',
                                    'Portugal': 'PT',
                                    'Romania': 'RO',
                                    'Russia': 'RU',
                                    'Singapore': 'SG',
                                    'Slovakia': 'SK',
                                    'Spain': 'ES',
                                    'Sweden': 'SE',
                                    'Switzerland': 'CH',
                                    'United Kingdom': 'GB'
                                };

                                // Get the selected country
                                const country = form.querySelector('[name="country"]').value;

                                // Return the country code based on selected name
                                return (country == '') ? '' : (map[country] || '');
                            },
                            message: 'The value is not a valid postal code'
                        }
                    }
                },
            },
            plugins: {
                ...,
            },
        }
    );

    form.querySelector('[name="country"]').addEventListener('change', function() {
        // Revalidate the postal code field whenever user changes the country
        fv.revalidateField('postalCode');
    });
});
</script-tag>
`} />   
        <p class="lh-copy">This case happens when you can't control the value of country select box which might be generated by a back-end side or third party.</p>
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the zipCode validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import zipCode from 'formvalidation/dist/es6/validators/zipCode';

const res1 = zipCode().validate({
    value: '12345',
    options: {
        country: 'US',
        message: 'The value is not a valid zipcode',
    },
});
// res1.valid === true

const res2 = zipCode().validate({
    value: '12345',
    options: {
        country: 'AT',
        message: 'The value is not a valid zipcode',
    },
});
// res2.valid === false
`} />
    </section>

    <RelatedValidators validators={['phone', 'regexp']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/vin">vin validator</PrevButton>
            <NextButton target="/guide/plugins">Plugins</NextButton>
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
    {
        country: 'United States',
        code: 'US',
        examples: [
            // Valid
            '12345',
            // Invalid
            '123',
        ],
    },
    {
        country: 'Austria',
        code: 'AT',
        examples: [
            // Valid
            '6020', '1010', '4853',
            // Invalid
            '0020', '12345', '102', '12AB', 'AT 6020 XY',
        ],
    },
    {
        country: 'Bulgaria',
        code: 'BG',
        examples: [],
    },
    {
        country: 'Brazil',
        code: 'BR',
        examples: [],
    },
    {
        country: 'Canada',
        code: 'CA',
        examples: [],
    },
    {
        country: 'Czech Republic',
        code: 'CZ',
        examples: [
            // Valid
            '12345', '123 45',
            // Invalid
            '12 345', '123456', '1 2345', '1234 5', '12 3 45',
        ],
    },
    {
        country: 'Denmark',
        code: 'DK',
        examples: [
            'DK-1234',  // Valid
            'DK 123',   // Invalid
        ],
    },
    {
        country: 'France',
        code: 'FR',
        examples: [
            // Valid
            '12340', '01230', '75116',
            // Invalid
            '123 45', '12 345', '123456', '1 2345', '1234 5', '12 3 45', '1234A',
        ],
    },
    {
        country: 'Germany',
        code: 'DE',
        examples: [
            // Valid
            '52238', '01001', '09107',
            // Invalid
            '01000', '99999', '102', 'ABCDE', 'DE 52240 XY',
        ],
    },
    {
        country: 'India',
        code: 'IN',
        examples: [
            // Valid
            '226024', '201014', '226 021',
            // Invalid
            '226-024', '11023', 'A226023',
        ],
    },
    {
        country: 'Italy',
        code: 'IT',
        examples: [
            // Valid
            'I-12345', 'IT-12345',
            // Invalid
            '1234',
        ],
    },
    {
        country: 'Ireland',
        code: 'IE',
        examples: [
            // Valid
            'A65 F4E2', 'D6W FNT4', 'T37 F8HK',
            // Invalid
            'a65 f4e2', 'D6W FNTO', 'T37F8HK',
        ],
    },
    {
        country: 'Morocco',
        code: 'MA',
        examples: [],
    },
    {
        country: 'Netherlands',
        code: 'NL',
        examples: [
            '1234 ab',  // Valid
            '0123',     // Invalid
        ],
    },
    {
        country: 'Poland',
        code: 'PL',
        examples: [
            // Valid
            '02-920', '00-002', '77-400',
            // Invalid
            '03456', '000-02', 'AB-002', '12 345',
        ],
    },
    {
        country: 'Portugal',
        code: 'PT',
        examples: [
            // Valid
            '2435-459', '1000-000', '1234-456',
            // Invalid
            '0123-456', '1234456', '1234-ABC', '1234 456',
        ],
    },
    {
        country: 'Romania',
        code: 'RO',
        examples: [],
    },
    {
        country: 'Russia',
        code: 'RU',
        examples: [],
    },
    {
        country: 'Singapore',
        code: 'SG',
        examples: [],
    },
    {
        country: 'Slovakia',
        code: 'SK',
        examples: [
            // Valid
            '12345', '123 45',
            // Invalid
            '12 345', '123456', '1 2345', '1234 5', '12 3 45',
        ],
    },
    {
        country: 'Spain',
        code: 'ES',
        examples: [
            // Valid
            '01234', '28080', '29004', '41023',
            // Invalid
            '0123', '99999', '102', 'ABCD', '00000',
        ],
    },
    {
        country: 'Sweden',
        code: 'SE',
        examples: [
            'S-12345',  // Valid
            'S-567 8',  // Invalid
        ],
    },
    {
        country: 'Switzerland',
        code: 'CH',
        examples: [
            // Valid
            '8280', '8090', '8238', '9490',
            // Invalid
            '0123', '99999', '102', 'ABCD', 'CH-5224 XY',
        ],
    },
    {
        country: 'United Kingdom',
        code: 'GB',
        examples: [
            // Valid
            'EC1A 1BB', 'W1A 1HQ', 'M1 1AA', 'B33 8TH', 'CR2 6XH', 'DN55 1PT', 'AI-2640', 'ASCN 1ZZ', 'GIR 0AA',
        ],
    },
];
</script>

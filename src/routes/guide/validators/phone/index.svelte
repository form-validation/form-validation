<svelte:head>
	<title>FormValidation • phone validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">phone validator</h1>
    <h2 class="f4 fw4 tc">Validate a phone number</h2>

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
                <td class="pv2 ph3"><code>data-fv-phone___country</code></td>
                <td class="pv2 ph3">String or Function</td>
                <td class="pv2 ph3">An ISO-3166 country code</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-phone___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>
        <Tip>Since the plugin doesn't support HTML 5 <code>type="tel"</code> attribute, you should use <code>type="text"</code> instead</Tip>

        <p class="lh-copy">If you want to support custom formats of a phone number, you should use the <a href="/guide/plugins/transformer" class="blue dim link">Transformer</a> plugin.</p>

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
                    <SampleData sample={{ country: item.code, sample: example }} renderSample={(s) => s.sample} sender="/guide/validators/phone/basic" />
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

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import phone from 'formvalidation/dist/es6/validators/phone';

const result = phone().validate({
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
        <p class="lh-copy">You can click on sample from the table above to see if it's a valid or invalid phone number.</p>
        <Demo prefix="/guide/validators/phone/basic" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the phone validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import phone from 'formvalidation/dist/es6/validators/phone';

const res1 = phone().validate({
    value: '246.555.8888',
    options: {
        country: 'US',
        message: 'The value is not a valid phone number',
    },
});
// res1.valid === true

const res2 = phone().validate({
    value: '(+55) 15 3702-7523',
    options: {
        country: 'BR',
        message: 'The value is not a valid phone number',
    },
});
// res2.valid === true
`} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.6.0: Fixed an issue that the <code>country</code> option isn't passed to the placeholder message</li>
        </ul>
    </section>

    <RelatedValidators validators={['regexp', 'zipCode']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/numeric">numeric validator</PrevButton>
            <NextButton target="/guide/validators/promise">promise validator</NextButton>
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
import Tip from '../../../../components/Tip.svelte';

const _samples = [
    {
        country: 'United States',
        code: 'US',
        examples: [
            // Valid
            '1444-555-1234', '246.555.8888', '1235554567', '(123)456-7890', '123)456.0987', '1-444-555-1234', '14325678901', '1(123)456-7890', '+1 246.555-8888', '+1 (123)456-7890', '+1(123)456-7890',
            // Invalid
            '7334-12.111', 'v123.11.1111', '(23)440.4448', '123(456)7890', '0800 333333 abcdef',
        ],
    },
    {
        country: 'United Arab Emirates',
        code: 'AE',
        examples: [
            // Valid
            '00971501234567', '+971521234567', '971551234567', '971 56 123 4567', '971-50-123-4567', '971.4.123.4567', '+971 (0) 4 1234567', '971 (56) 1234567', '0551234567', '021234567', '600-540-000',
        ],
    },
    {
        country: 'Bulgaria',
        code: 'BG',
        examples: [
            // Valid
            '359895123456', '0898111222', '0886111222', '0875111222', '0899555555', '359898111222',
            '00898111222', // double 0
            '+35998111222', '098111222', '090012900', '070010007', '070043256', '35970045045', '35970045666', '08000700', '080088001', '080015333', '028700000', '030100000', '03010070', '03656745', // + and without + at the beginning
            // Invalid
            '01211212',
        ],
    },
    {
        country: 'Brazil',
        code: 'BR',
        examples: [
            // Valid
            '0800.000.00.00', '0800-000-00-00', '0800 000 00 00', '0800-00-00-00', '0800.00.00.00', '0800 00 00 00', '0800-000-0000', '0800 000 0000', '0800.000.0000', '08000000000', '1692089-4635',
            '16920894635', '16992089-4635', '16 99202-4635', '(16)99202-4635', '(16)92089-4635', '(16) 92089-4635', '(15) 4343-4343', '+55 15 3702-7523', '(+55)1537027523',
            '(+55)(15)3702-7523', '(+55) 15 3702-7523', '(+55) 15 99202-7523', '99202-4635', '(16) 9208-4635',
        ],
    },
    {
        country: 'China',
        code: 'CN',
        examples: [
            // Valid
            '18911111111', '189 1111 1111', '189-1111-1111', '0086-18911111111', '+86-18911111111', '86-18911111111', '0086 18911111111', '+86 18911111111', '86 18911111111', '0086 189-1111-1111',
            '+86 189-1111-1111', '86 189-1111-1111', '02011111111', '020-11111111', '020 11111111', '020 1111 1111', '020-1111-1111', '0086 020 82803159',
            '0086-020-82803159', '+86 20 61302222-8866', '+86 20 6130-2222-8866', '+86 10 59081185',
        ],
    },
    {
        country: 'Czech Republic',
        code: 'CZ',
        examples: [
            // Valid
            '00420123456789', '00420 123456789', '00420 123 456 789', '00 420 123 456 789', '+420123456789', '+420 123456789', '+420 123 456 789', '123456789', '123 456 789',
            // Invalid
            '420123456789', '420 123456789', '420 123 456 789', '00421123456789', '00421 123456789', '00421 123 456 789', '00 421 123 456 789', '+421123456789', '+421 123456789', '+421 123 456 789',
        ],
    },
    {
        country: 'Denmark',
        code: 'DK',
        examples: [],
    },
    {
        country: 'France',
        code: 'FR',
        examples: [
            // Valid
            '0644444444', '06 44 44 44 44', '06-44-44-44-44', '06.44.44.44.44', '+33644444444', '+336.44.44.44.44', '+33 6.44.44.44.44', '0033644444444', '00336.44.44.44.44', '0033 6.44.44.44.44', '+33(0)644444444', '+33 (0) 644444444',
            // Invalid
            '06 44.44-44.44', '06 44 44-4444', '06444444444444', '6644444444', '06  44.44-44.44', '+33 (0)  644444444', '(0)644444444', '+33-(0)-644444444', '+33 (0)-644444444', '+33-(0) 644444444', '06.44.44.44.44.',
        ],
    },
    {
        country: 'Germany',
        code: 'DE',
        examples: [
            // Valid
            '+49(89)123456', '089-1234567', '0891234567', '0049-89-123456', '089 123456-78',
        ],
    },
    {
        country: 'India',
        code: 'IN',
        examples: [
            // Valid
            '9999114011', '+919911112341', '+91 9415007327', '03598245785', '+911204312280', '1302231221',
        ],
    },
    {
        country: 'Morocco',
        code: 'MA',
        examples: [
            // Valid
            '0644444444', '0610245896', '0630548564', '06 44 44 44 44', '06-44-44-44-44', '06.44.44.44.44', '06 44.44-44.44', '0528254856', '0535484541', '05 28 44 44 44',
            '05-28-44.44.44', '05.28.44.44.44', '05 28.44-44.44', '+212644444444', '+2126.44.44.44.44', '+212 6.44.44.44.44', '00212644444444', '002126.44.44.44.44', '00212 6.44.44.44.44', '+212(0)644444444', '+212 (0) 644444444',
            // Invalid
            '0625468961', '0512548632', '0542564896', '06444444444444', '6644444444', '06  44.44-44.44', '+212 (0)  644444444', '(0)644444444',
        ],
    },
    {
        country: 'Netherlands',
        code: 'NL',
        examples: [
            // Valid
            '0101234567', '010-1234567', '010 - 123 45 67', '010 1234 567', '06-12345678', '06 123 456 78', '0111-123456', '0111 123456', // Popular formats
            '+31101234567', '0031101234567', '+31(0) 10123 4567', '+3110-1234567', '003110 1234567', '+316 123 456 78', '+31(0)6 123 45678', '+31111-123456', '0031111-123456', // International notation
            // Invalid
            '06-1234-5678',         // An extra dash is not allowed
            '06 123456789',         // Too long
            '06 1234567',           // Too short
            '+31(06) 123 45678',    // Invalid optional declaration
            '1234567',              // Without regional number
        ],
    },
    {
        country: 'Pakistan',
        code: 'PK',
        examples: [
            // Valid
            '03336527366'
        ],
    },
    {
        country: 'Romania',
        code: 'RO',
        examples: [
            // Valid
            '+40213.564.864', '+40213 564 864', '0213-564-864', '0213564864', '0313564864', '0720512346', '0730512346', '0740512346', '0750512346', '+40750512346', '+40750.512.346', '0760512346', '0770512346', '0780512346',
            // Invalid
            '40213-564-864', '0213/564/864', '0413564864', '0790512346',
        ],
    },
    {
        country: 'Russia',
        code: 'RU',
        examples: [
            // Valid
            '+7(911)976-91-04',
        ],
    },
    {
        country: 'Slovakia',
        code: 'SK',
        examples: [
            // Valid
            '00421123456789', '00421 123456789', '00421 123 456 789', '00 421 123 456 789', '+421123456789', '+421 123456789', '+421 123 456 789', '123456789', '123 456 789',
            // Invalid
            '421123456789', '421 123456789', '421 123 456 789', '00420123456789', '00420 123456789', '00420 123 456 789', '00 420 123 456 789', '+420123456789', '+420 123456789', '+420 123 456 789',
        ],
    },
    {
        country: 'Spain',
        code: 'ES',
        examples: [],
    },
    {
        country: 'Thailand',
        code: 'TH',
        examples: [],
    },
    {
        country: 'United Kingdom',
        code: 'GB',
        examples: [
            // Valid
            '01611234567', '0161 123 4567', '(0161) 123 4567', '0161-123-4567', '+44 161 123 4567', '+441611234567', '+44(0)161234567', '00 44 161 1234567', '(011) 44 161 234567', '0161-158-5587', '0161 123 4567 ext. 123', '01611234567x123', '+44161234567x123', '+44 (0) 161 1234567 ext 123',
            // Invalid
            '012345678900', '1611234567', '012345678', '123 4567', '061 123 4567',
        ],
    },
    {
        country: 'Venezuela',
        code: 'VE',
        examples: [],
    },
];
</script>

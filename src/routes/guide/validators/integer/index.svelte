<svelte:head>
	<title>FormValidation • integer validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">integer validator</h1>
    <h2 class="f4 fw4 tc">Validate an integer number. Accept both positive and negative number</h2>

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
                <td class="pv2 ph3"><code>data-fv-integer___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>thousandsSeparator</code></td>
                <td class="pv2 ph3"><code>data-fv-integer___thousands-separator</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">
                    The thousands separator. The popular values are
                    <ul class="ma0 pl3">
                        <li>An empty string (the default value)</li>
                        <li>A bank space</li>
                        <li>A comma (<code>,</code>)</li>
                        <li>A dot (<code>.</code>)</li>
                    </ul>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>decimalSeparator</code></td>
                <td class="pv2 ph3"><code>data-fv-integer___decimal-separator</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">
                    The decimal separator. The popular values are
                    <ul class="ma0 pl3">
                        <li>A dot (<code>.</code>) (the default value)</li>
                        <li>A comma (<code>,</code>)</li>
                    </ul>
                </td>
            </tr>
        </table>
        <p class="lh-copy">The <code>thousandsSeparator</code> and <code>decimalSeparator</code> options are useful if your country use particular separators for thousands and decimal parts.
            See the next <span class="i">Supporting locales</span> section for more details.</p>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import integer from 'formvalidation/dist/es6/validators/integer';

const result = integer().validate({
    value: ...,
    options: {
        decimalSeparator: ...,
        message: ...,
        thousandsSeparator: ...,
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
        <Heading>Supporting locales</Heading>
        <p class="lh-copy">The thousands and decimal separators might take different value in certain countries. The following table introduces some popular values that are defined by various countries.</p>
        <p class="lh-copy">You can click the sample number to test:</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Country</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Thousands separator</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Decimal separator</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is valid?</th>
            </tr>
            {#each _samples as sample}
                {#each sample.examples as example, index}
                <tr class="striped--light-gray">
                <td class="pv2 ph3">{#if index == 0}{sample.country}{/if}</td>
                <td class="pv2 ph3 lh-copy">{#if index == 0}{@html sample.thousandsSeparatorDesc}{/if}</td>
                <td class="pv2 ph3 lh-copy">{#if index == 0}{@html sample.decimalSeparatorDesc}{/if}</td>
                <SampleData
                    sample={{sample: example, country: sample.code, thousandsSeparator: sample.thousandsSeparator, decimalSeparator: sample.decimalSeparator}} 
                    sender="/guide/validators/integer/locale"
                    renderSample={(s) => s.sample} />
                </tr>
                {/each}
            {/each}
        </table>

        <p>The example also uses the <a href="/guide/api/update-validator-option" class="blue dim link">updateValidatorOption()</a> method to set values for <code>thousandsSeparator</code> and <code>decimalSeparator</code> options.</p>

        <SampleCode lang="javascript" code={`
formValidationInstance
    // Update the options
    .updateValidatorOption('number', 'integer', 'thousandsSeparator', thousandsSeparator)
    .updateValidatorOption('number', 'integer', 'decimalSeparator', decimalSeparator);
`} />
        <Tip>
            Since the thousands and decimal separators are various, the field should use <code>type="text"</code> attribute.
            Using <code>type="number"</code> for field will restrict the input to use default separators for an integer number (an empty string for thousands, and a dot for decimal parts).
        </Tip>

        <Demo prefix="/guide/validators/integer/locale" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Basic example</Heading>
        <Demo prefix="/guide/validators/integer/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>HTML5 Example</Heading>
        <p class="lh-copy">When the <a href="/guide/plugins/declarative" class="blue dim link">Declarative</a> plugin is used, the integer validator will be enabled automatically when using HTML5 <code>type="number"</code> attribute.</p>
        <Demo prefix="/guide/validators/integer/html5" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the integer validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import integer from 'formvalidation/dist/es6/validators/integer';

const res1 = integer().validate({
    value: '967295.00',
    options: {
        thousandsSeparator: '',
        decimalSeparator: '.',
        message: 'The value is not a valid integer number',
    },
});
// res1.valid === true

const res2 = integer().validate({
    value: '4967,295',
    options: {
        thousandsSeparator: ',',
        decimalSeparator: '.',
        message: 'The value is not a valid integer number',
    },
});
// res2.valid === false

const res3 = integer().validate({
    value: '4 294 967 295',
    options: {
        thousandsSeparator: ' ',
        decimalSeparator: ',',
        message: 'The value is not a valid integer number',
    },
});
// res3.valid === true
`} />
    </section>

    <RelatedValidators validators={['digits', 'numeric']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/imo">imo validator</PrevButton>
            <NextButton target="/guide/validators/ip">ip validator</NextButton>
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
        country: '', code: '', thousandsSeparator: '', thousandsSeparatorDesc: 'An empty string', decimalSeparator: '.', decimalSeparatorDesc: 'A dot (<code>.</code>)',
        examples: [
            // Valid
            '95', '095', '0095', '295', '7295', '67295', '967295.00', '4294967295.000',
            // Invalid
            '7,295', '67,295', '967,295', '4967,295', '67295.01', '4,294,967,295,00', '4294967295.001',
        ]
    },
    {
        country: 'United States', code: 'en_US', thousandsSeparator: ',', thousandsSeparatorDesc: 'A comma (<code>,</code>)', decimalSeparator: '.', decimalSeparatorDesc: 'A dot (<code>.</code>)',
        examples: [
            // Valid
            '95', '295', '7,295', '67,295', '967,295', '967,295.00', '4,294,967,295', '4,294,967,295.00', '4,294,967,295.000',
            // Invalid
            '7295', '67295.01', '4967,295', '4294,967,295.0001', '4294,967,295.00', '4,294,967,295,00', '42,94,967,295.00', '42,94,967295.00', 
        ]
    },
    {
        country: 'France', code: 'fr_FR', thousandsSeparator: ' ', thousandsSeparatorDesc: 'A blank space', decimalSeparator: ',', decimalSeparatorDesc: 'A comma (<code>,</code>)',
        examples: [
            // Valid
            '95', '295', '67 295', '967 295', '967 295,00', '4 294 967 295', '4 294 967 295,00', '4 294 967 295,000',
            // Invalid
            '7295', '67295,01', '4967 295', '4 294 967 295,0001', '4294 967 295,00', '4 294 967 295.00', '42 94 967 295,00', '42 94 967295,00',
        ]
    },
    {
        country: 'Italy', code: 'it_IT', thousandsSeparator: '.', thousandsSeparatorDesc: 'A dot (<code>.</code>)', decimalSeparator: ',', decimalSeparatorDesc: 'A comma (<code>,</code>)',
        examples: [
            // Valid
            '95', '295', '7.295', '67.295', '967.295', '967.295,00', '4.294.967.295', '4.294.967.295,00', '4.294.967.295,000',
            // Invalid
            '7295', '67295,01', '4967.295', '967.295.00', '4294.967.295,00', '4.294.967.295.00', '42.94.967.295,00', '42.94.967295,00',
        ]
    },
];
</script>
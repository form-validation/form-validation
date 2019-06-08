<svelte:head>
	<title>FormValidation • creditCard validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">creditCard validator</h1>
    <h2 class="f4 fw4 tc">Validate a credit card number</h2>

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
                <td class="pv2 ph3"><code>data-fv-credit-card___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>
        <p class="lh-copy">Behind the scene, in addition to using the <a href="http://en.wikipedia.org/wiki/Luhn" class="blue dim link">Luhn algorithm</a>, the validator also validate the IIN ranges and length of credit card number.</p>
        <p class="lh-copy">It supports validating the following cards:</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is it valid?</th>
            </tr>
            {#each Object.entries(samples) as [name, sample]}
            <tr class="striped--light-gray">
                <td class="pv2 ph3">{name}</td>
                <SampleData sample={sample} sender="/guide/validators/credit-card/basic" />
            </tr>
            {/each}
        </table>
        <Tip heading="Note">13 digits Visa credit cards are no longer used and it will be treated as an invalid card number</Tip>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import creditCard from 'formvalidation/dist/es6/validators/creditCard';

const result = creditCard().validate({
    value: ...,
    options: {
        message: ...,
    },
});
/*
result is an object of
{
    valid: true or false,
    message: The error message,
    meta: {
        // The type of credit card
        // Can be null or one of AMERICAN_EXPRESS, DINERS_CLUB, DINERS_CLUB_US, DISCOVER, JCB, LASER,
        // MAESTRO, MASTERCARD, SOLO, UNIONPAY, VISA
        type: ...
    }
}
*/
`} />
        <Tip>You can use <a href="http://www.getcreditcardnumbers.com" class="blue dim link">getcreditcardnumbers.com</a> to generate fake credit card numbers</Tip>
    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>

        <Demo prefix="/guide/validators/credit-card/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the creditCard validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import creditCard from 'formvalidation/dist/es6/validators/creditCard';

const res1 = creditCard().validate({
    value: '340653705597107',
    options: {
        message: 'The credit card number is not valid',
    },
});
// res1.valid === true
// res1.meta.type === 'AMERICAN_EXPRESS'

const res2 = creditCard().validate({
    value: '5303765013600',
    options: {
        message: 'The credit card number is not valid',
    },
});
// res2.valid === false
// res2.meta.type === null
`} />
    </section>

    <RelatedValidators validators={['bic', 'iban', 'rtn']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/color/">color validator</PrevButton>
            <NextButton href="/guide/validators/cusip/">cusip validator</NextButton>
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

const samples = {
    'American Express': '340653705597107',
    'Dankort': '5019717010103742',
    'Diners Club': '30130708434187',
    'Diners Club (US)': '5517479515603901',
    'Discover': '6011734674929094',
    'Elo': '6362970000457013',
    'JCB': '3566002020360505',
    'Laser': '6304 9000 1774 0292 441',
    'Maestro': '6762835098779303',
    'Mastercard': '5303765013600904',
    'Solo': '6334580500000000',
    'Visa': '4929248980295542',
    'Visa Electron': '4917300800000000',
};
</script>

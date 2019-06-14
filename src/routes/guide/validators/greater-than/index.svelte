<svelte:head>
	<title>FormValidation • greaterThan validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">greaterThan validator</h1>
    <h2 class="f4 fw4 tc">Check if the value is greater than or equals to given number</h2>

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
                <td class="pv2 ph3"><code>inclusive</code></td>
                <td class="pv2 ph3"><code>data-fv-greater-than___inclusive</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3 lh-copy">Can be <code>true</code> (default) or <code>false</code>.<br />If <code>true</code>, the input value must be greater than or equal to the comparison one.<br />If <code>false</code>, the input value must be greater than the comparison one.</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-greater-than___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>min</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-greater-than___min</code></td>
                <td class="pv2 ph3">Float</td>
                <td class="pv2 ph3">The number to make a comparison to</td>
            </tr>
        </table>
        <p class="lh-copy">If you want the value to support custom format, such as a comma for thousand separator, you should use the <a href="/guide/plugins/transformer" class="blue dim link">Transformer</a> plugin.</p>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import greaterThan from 'formvalidation/dist/es6/validators/greaterThan';

const result = greaterThan().validate({
    value: ...,
    options: {
        inclusive: ...,
        message: ...,
        min: ...,
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

        <Demo prefix="/guide/validators/greater-than/basic" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the greaterThan validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import greaterThan from 'formvalidation/dist/es6/validators/greaterThan';

const res1 = greaterThan().validate({
    value: 20,
    options: {
        message: 'The value has to be greater than 18',
        min: 18,
    },
});
// res1.valid === true

const res2 = greaterThan().validate({
    value: 18,
    options: {
        inclusive: false,
        message: 'The value has to be greater than 18',
        min: 18,
    },
});
// res2.valid === false
`} />
    </section>

    <RelatedValidators validators={['between', 'lessThan']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/file">file validator</PrevButton>
            <NextButton target="/guide/validators/grid">grid validator</NextButton>
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
</script>

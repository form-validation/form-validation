<svelte:head>
	<title>FormValidation • between validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">between validator</h1>
    <h2 class="f4 fw4 tc">Check if the input value is between (strictly or not) two given numbers</h2>

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
                <td class="pv2 ph3"><code>data-fv-between___inclusive</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3 lh-copy">Can be <code>true</code> or <code>false</code>. If <code>true</code>, the input value must be in the range strictly</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>max</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-between___max</code> or <code>max</code></td>
                <td class="pv2 ph3">Float</td>
                <td class="pv2 ph3">The upper value in the range</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-between___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>min</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-between___min</code> or <code>min</code></td>
                <td class="pv2 ph3">Float</td>
                <td class="pv2 ph3">The lower value in the range</td>
            </tr>
        </table>
        <p class="lh-copy">If you use <code>min</code> and <code>max</code> attributes, please set <code>type="range"</code>.</p>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import between from 'formvalidation/dist/es6/validators/between';

const result = between().validate({
    value: ...,
    options: {
        inclusive: ...,
        min: ...,
        max: ...,
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

        <p class="lh-copy">The following example validates latitude and longitude values.</p>
        <p class="lh-copy">A valid latitude must be between -90.0 and 90.0, and valid longitude may range from -180.0 to 180.0.</p>

        <Demo prefix="/guide/validators/between/basic" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the between validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import between from 'formvalidation/dist/es6/validators/between';

const checkLatitude = between().validate({
    value: 45,
    options: {
        inclusive: true,
        min: -90,
        max: 90,
        message: 'The latitude must be between -90.0 and 90.0',
    },
});
// checkLatitude.valid === true

const checkLongitude = between().validate({
    value: 200,
    options: {
        inclusive: true,
        min: -180,
        max: 180,
        message: 'The latitude must be between -180.0 and 180.0',
    },
});
// checkLongitude.valid === false
`} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.6.0: Fixed an issue that the <code>max</code> and <code>min</code> options aren't passed to the placeholder message</li>
        </ul>
    </section>

    <RelatedValidators validators={['greaterThan', 'lessThan']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/base64">base64 validator</PrevButton>
            <NextButton target="/guide/validators/bic">bic validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

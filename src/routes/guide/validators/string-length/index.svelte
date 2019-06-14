<svelte:head>
	<title>FormValidation • stringLength validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">stringLength validator</h1>
    <h2 class="f4 fw4 tc">Validate the length of a string</h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i"><sup>*</sup> presents a required option. The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>max</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-string-length___max</code> or <code>maxlength</code></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3">The maximum length</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-string-length___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>min</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-string-length___min</code> or <code>minlength</code></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3">The minimum length</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>utf8Bytes</code></td>
                <td class="pv2 ph3"><code>data-fv-string-length___utf8-bytes</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3 lh-copy">Evaluate string length in UTF-8 bytes. Default to <code>false</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>trim</code></td>
                <td class="pv2 ph3"><code>data-fv-string-length___trim</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3 lh-copy">Indicate the length will be calculated after trimming the value or not. Default to <code>false</code></td>
            </tr>
        </table>
        <p class="lh-copy">At least one of <code>min</code> and <code>max</code> options is required.</p>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import stringLength from 'formvalidation/dist/es6/validators/stringLength';

const result = stringLength().validate({
    value: ...,
    options: {
        'case': ...,
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
        <p class="lh-copy">In the following form, the <span class="i">Full name</span> and <span class="i">Bio</span> fields must be less than 50 and 200 characters respectively.</p>
        <Demo prefix="/guide/validators/string-length/basic" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <section class="mv5">
        <Heading>HTML5 Example</Heading>
        <p class="lh-copy">When the <a href="/guide/plugins/declarative" class="blue dim link">Declarative</a> plugin is used, the stringLength validator will be turned on automatically if the input uses HTML 5 <code>maxlength</code> or <code>minlength</code> attribute.</p>
        <Demo prefix="/guide/validators/string-length/html5" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the stringLength validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import stringLength from 'formvalidation/dist/es6/validators/stringLength';

const res1 = stringLength().validate({
    value: '123456',
    options: {
        max: 10,
        message: 'The input has to be less than 11 characters',
    },
});
// res1.valid === true

const res2 = stringLength().validate({
    value: '1234567890♥',
    options: {
        min: 5,
        max: 10,
        message: 'The input has to be between 5 and 10 characters long',
    },
});
// res2.valid === false
`} />
    </section>

    <RelatedValidators validators={['notEmpty']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/string-case">stringCase validator</PrevButton>
            <NextButton target="/guide/validators/uri">uri validator</NextButton>
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

<svelte:head>
	<title>FormValidation • notEmpty validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">notEmpty validator</h1>
    <h2 class="f4 fw4 tc">Check if the value an is empty string</h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i">The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative/" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-not-empty___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>

        <h3>Use with select element</h3>
        <p class="lh-copy">If you want a select element to be required, you have to set <code>value=""</code> for the option which is treated as empty one:</p>
<SampleCode lang="html" code={`
<select name="gender">
    <option value="">Select the gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
</select>
`} />

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import notEmpty from 'formvalidation/dist/es6/validators/notEmpty';

const result = notEmpty().validate({
    value: ...,
    options: {
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
        <Tip>The <a href="/guide/plugins/mandatory-icon/" class="blue dim link">MandatoryIcon</a> plugin is useful when you want to display the mandatory icon for required fields</Tip>
    </section>

    <section class="mv5">
        <Heading>Basic example</Heading>
        <p class="lh-copy">In the following form, user is asked to enter the full name.</p>
        <Demo prefix="/guide/validators/not-empty/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>HTML5 example</Heading>
        <p class="lh-copy">When the <a href="/guide/plugins/declarative/" class="blue dim link">Declarative</a> plugin is used, the notEmpty validator will be turned on automatically if the input uses HTML 5 <code>required</code> attribute.</p>
        <Demo prefix="/guide/validators/not-empty/html5" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the notEmpty validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import notEmpty from 'formvalidation/dist/es6/validators/notEmpty';

const res1 = notEmpty().validate({
    value: 'John Smith',
    options: {
        message: 'The name is required',
    },
});
// res1.valid === true

const res2 = notEmpty().validate({
    value: '',
    options: {
        message: 'The name is required',
    },
});
// res2.valid === false

const res3 = notEmpty().validate({
    value: '   ',
    options: {
        message: 'The name is required',
    },
});
// res3.valid === false
`} />
    </section>

    <Examples examples={[
        'Integrating with TinyMCE',
        'Requiring at least one field',
        'Trimming a value',
    ]} />

    <RelatedValidators validators={['stringLength']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/meid/">meid validator</PrevButton>
            <NextButton href="/guide/validators/numeric/">numeric validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import SampleData from '../../../../components/SampleData.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

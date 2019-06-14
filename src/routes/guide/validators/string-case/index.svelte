<svelte:head>
	<title>FormValidation • stringCase validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">stringCase validator</h1>
    <h2 class="f4 fw4 tc">Check if a string is a lower or upper case one</h2>

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
                <td class="pv2 ph3"><code>case</code></td>
                <td class="pv2 ph3"><code>data-fv-string-case___case</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">Can be <code>lower</code> (the default value) or <code>upper</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-string-case___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import stringCase from 'formvalidation/dist/es6/validators/stringCase';

const result = stringCase().validate({
    value: ...,
    options: {
        'case': ...,
        message: ...,
    },
});
// result is an object of
// {
//      valid: true or false,
//      message: The error message     
// }
`} />
    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>
        <p class="lh-copy">The following form asks user to enter a credit card holder in uppercase:</p>
        <Demo prefix="/guide/validators/string-case/basic" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the stringCase validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import stringCase from 'formvalidation/dist/es6/validators/stringCase';

const res1 = stringCase().validate({
    value: 'JOHN SMITH',
    options: {
        'case': 'upper',
        message: 'The name must be in must be in uppercase',
    },
});
// res1.valid === true

const res2 = stringCase().validate({
    value: 'John Smith',
    options: {
        'case': 'lower',
        message: 'The name must be in must be in lowercase',
    },
});
// res2.valid === false
`} />
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/step">step validator</PrevButton>
            <NextButton target="/guide/validators/string-length">stringLength validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

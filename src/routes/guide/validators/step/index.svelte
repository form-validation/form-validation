<svelte:head>
	<title>FormValidation • step validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">step validator</h1>
    <h2 class="f4 fw4 tc">Check if the value is valid step one</h2>

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
                <td class="pv2 ph3"><code>baseValue</code></td>
                <td class="pv2 ph3"><code>data-fv-step___base-value</code></td>
                <td class="pv2 ph3">Float</td>
                <td class="pv2 ph3">The base value, default to 0</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-step___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>step</code></td>
                <td class="pv2 ph3"><code>data-fv-step___step</code></td>
                <td class="pv2 ph3">Float</td>
                <td class="pv2 ph3">The step, default to 1</td>
            </tr>
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import step from 'formvalidation/dist/es6/validators/step';

const result = step().validate({
    value: ...,
    options: {
        baseValue: ...,
        message: ...,
        step: ...,
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
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.6.0: Fixed an issue that the <code>step</code> option isn't passed to the placeholder message</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/siret">siret validator</PrevButton>
            <NextButton target="/guide/validators/string-case">stringCase validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

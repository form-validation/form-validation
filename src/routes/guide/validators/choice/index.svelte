<svelte:head>
	<title>FormValidation • choice validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">choice validator</h1>
    <h2 class="f4 fw4 tc">Check if the number of checked boxes are less or more than a given number</h2>

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
                <td class="pv2 ph3"><code>max</code></td>
                <td class="pv2 ph3"><code>data-fv-choice___max</code><sup>*</sup></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3">The maximum number of check boxes required to be checked</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-choice___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>min</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-choice___min</code> or <code>min</code></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3">The minimum number of check boxes required to be checked</td>
            </tr>
        </table>
        <p class="lh-copy">At least one of <code>min</code> and <code>max</code> option is required.</p>
        <p class="lh-copy">The validator also supports the <code>select</code> element if the <code>multiple="multiple"</code> attribute is set.</p>
    </section>

    <section class="mv5">
        <Heading>Naming convention</Heading>

        <p class="lh-copy">In order to get the correct submit data in the server side, you should pay attention on setting the <code>name</code> attribute of checkbox/select elements.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Server side</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">name attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Example</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">PHP</td>
                <td class="pv2 ph3"><code>name[]</code></td>
                <td class="pv2 ph3">
<SampleCode lang="html" code={`
<input type="checkbox" name="languages[]" />
<select name="editors[]" multiple="multiple">
    ...
</select>
`} />
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="http://projects.spring.io/spring-framework" class="blue dim link">Spring framework</a></td>
                <td class="pv2 ph3"><code>name</code></td>
                <td class="pv2 ph3">
<SampleCode lang="html" code={`
<input type="checkbox" name="languages" />
<select name="editors" multiple="multiple">
    ...
</select>
`} />
                </td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>

        <p class="lh-copy">The following form asks a developer to choose 2-4 programming languages which he/she is good at:</p>

        <Demo prefix="/guide/validators/choice/basic" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <Examples examples={[
        'Integrating with Select2',
        'Requiring all options to be selected',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/callback">callback validator</PrevButton>
            <NextButton target="/guide/validators/color">color validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>
<svelte:head>
	<title>FormValidation • regexp validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">regexp validator</h1>
    <h2 class="f4 fw4 tc">Check if the value matches given JavaScript regular expression</h2>

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
                <td class="pv2 ph3"><code>flags</code></td>
                <td class="pv2 ph3"><code>data-fv-regexp___flags</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">If specified, flags can have any combination of JavaScript regular expression flags such as:</p>
                    <ul class="ma0 pl3 lh-copy">
                        <li>g: global match</li>
                        <li>i: ignore case</li>
                        <li>m: multiple line</li>
                    </ul>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-regexp___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>regexp</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-regexp___regexp</code> or <code>pattern</code></td>
                <td class="pv2 ph3">String or RegExp</td>
                <td class="pv2 ph3">The JavaScript regular expression</td>
            </tr>
        </table>
        <Tip>Look at the <a href="/guide/plugins/alias/" class="blue dim link">Alias</a> plugin if you want to have multiple regular expressions on the same field</Tip>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import regexp from 'formvalidation/dist/es6/validators/regexp';

const result = regexp().validate({
    value: ...,
    options: {
        flags: ...,
        message: ...,
        regexp: ...,
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
        
        <h3>Use a correct pattern</h3>
        <p class="lh-copy">If the validator still pass when the field value doesn't match the pattern, please ensure you use a correct pattern. Here are some check lists:</p>
        <ol class="ma0 pl3 lh-copy">
            <li>
                <p class="lh-copy">Is the pattern wrapped between <code>^</code> and <code>$</code>?</p>
                <p class="lh-copy">For example, if a field must be 5 digits number, then <code>^\d{5}</code> (no <code>$</code> at the end) is wrong pattern. <code>^\d{5}$</code> is right one.</p>
            </li>
            <li>
                <p class="lh-copy">Does the pattern work with external services?</p>
                <p class="lh-copy">You can use the following services to test the regular expression:</p>
                <ul class="ma0 pl3">
                    <li><a href="http://regexr.com" class="blue dim link">regexr.com</a></li>
                    <li><a href="http://regex101.com/" class="blue dim link">regex101.com</a></li>
                    <li><a href="http://regexpal.com/" class="blue dim link">regexpal.com</a></li>
                </ul>
            </li>
        </ol>
    </section>

    <section class="mv5">
        <Heading>Useful patterns</Heading>
        <p class="lh-copy">The following table collects some useful patterns:</p>
        
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Pattern</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">SSN (<a href="https://en.wikipedia.org/wiki/Social_Security_number" class="blue dim link">Social Security Numbers</a>)</td>
                <td class="pv2 ph3"><code>^(?!000|666)(?:[0-6][0-9]{2}|7(?:[0-6][0-9]|7[0-2]))-(?!00)[0-9]{2}-(?!0000)[0-9]{4}$</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Traditional time in 12-hour format</td>
                <td class="pv2 ph3">
                    <ul class="ma0 pl3 lh-copy">
                        <li>without seconds (hh:mm): <code>^(1[0-2]|0?[1-9]):([0-5]?[0-9])$</code></li>
                        <li>with seconds (hh:mm:ss): <code>^(1[0-2]|0?[1-9]):([0-5]?[0-9]):([0-5]?[0-9])$</code></li>
                    </ul>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Traditional time in 24-hour format</td>
                <td class="pv2 ph3">
                    <ul class="ma0 pl3 lh-copy">
                        <li>without seconds (hh:mm): <code>^(2[0-3]|[01]?[0-9]):([0-5]?[0-9])$</code></li>
                        <li>with seconds (hh:mm:ss): <code>^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$</code></li>
                    </ul>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Numbers in a particular range</td>
                <td class="pv2 ph3">
                    <ul class="ma0 pl3 lh-copy">
                        <li>Range of 1-12 (hour, month): <code>^(1[0-2]|[1-9])$</code></li>
                        <li>Range of 1-24 (hour): <code>^(2[0-4]|1[0-9]|[1-9])$</code></li>
                        <li>Range of 0-59 (minute, second): <code>^[1-5]?[0-9]$</code></li>
                        <li>Range of 1-31 (day of month): <code>^(3[01]|[12][0-9]|[1-9])$</code></li>
                        <li>Range of 0-100 (percentage): <code>^(100|[1-9]?[0-9])$</code></li>
                    </ul>
                </td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>
        <p class="lh-copy">In the following form, user is asked to enter the full name which alphabetical characters and spaces only.</p>
        <Demo prefix="/guide/validators/regexp/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>HTML5 Example</Heading>
        <p class="lh-copy">When the <a href="/guide/plugins/declarative/" class="blue dim link">Declarative</a> plugin is used, the regexp validator will be turned on automatically if the input uses HTML 5 <code>pattern</code> attribute.</p>
        <Demo prefix="/guide/validators/regexp/html5" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the regexp validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import regexp from 'formvalidation/dist/es6/validators/regexp';

const res1 = regexp().validate({
    value: 'Ms',
    options: {
        regexp: /^[A-Z\s]+$/,
        message: 'The input is not valid',
    },
});
// res1.valid === false

const res2 = regexp().validate({
    value: 'form VALIDATION',
    options: {
        regexp: '^[A-Z\\s]+$',
        flags: 'i',
        message: 'The input is not valid',
    },
});
// res2.valid === true
`} />
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/promise/">promise validator</PrevButton>
            <NextButton href="/guide/validators/remote/">remote validator</NextButton>
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
import Tip from '../../../../components/Tip.svelte';
</script>

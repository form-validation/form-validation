<svelte:head>
	<title>FormValidation • emailAddress validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">emailAddress validator</h1>
    <h2 class="f4 fw4 tc">Validate an email address</h2>

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
                <td class="pv2 ph3"><code>data-fv-email-address___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>multiple</code></td>
                <td class="pv2 ph3"><code>data-fv-email-address___multiple</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">Allow multiple email addresses, separated by a comma or semicolon. The default value is <code>false</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>separator</code></td>
                <td class="pv2 ph3"><code>data-fv-email-address___separator</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">Regex for character or characters expected as separator between addresses. By default, it is /[,;]/, i.e. comma or semicolon</td>
            </tr>
        </table>
        <Tip>This validator passes an empty field since the field might be optional. If the field is required, then use the <a href="/guide/validators/not-empty" class="blue dim link">notEmpty</a> validator</Tip>
        <p class="lh-copy">You also can use the <a href="/guide/validators/remote" class="blue dim link">remote</a> validator to connect and validate the email address on the server. The <a href="/guide/plugins/mailgun" class="blue dim link">Mailgun</a> plugin demonstrates how to do this.</p>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import emailAddress from 'formvalidation/dist/es6/validators/emailAddress';

const result = emailAddress().validate({
    value: ...,
    options: {
        message: ...,
        multiple: ...,
        separator: ...,
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

        <p class="lh-copy">You can click on sample to see if it's a valid or invalid email address.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is valid?</th>
            </tr>
            {#each _samples as sample}
            <tr class="striped--light-gray">
                <SampleData sample={sample} sender="/guide/validators/email-address/basic" />
            </tr>
            {/each}
        </table>

        <Demo prefix="/guide/validators/email-address/basic" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <section class="mv5">
        <Heading>HTML5 Example</Heading>
        <p class="lh-copy">When the <a href="/guide/plugins/declarative" class="blue dim link">Declarative</a> plugin is used, the emailAddress validator will be enabled automatically when using HTML5 <code>type="email"</code> attribute.</p>
        <Demo prefix="/guide/validators/email-address/html5" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the emailAddress validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import emailAddress from 'formvalidation/dist/es6/validators/emailAddress';

const res1 = emailAddress().validate({
    value: 'niceandsimple@example.com',
    options: {
        message: 'The value is not a valid email address',
    },
});
// res1.valid === true

const res2 = emailAddress().validate({
    value: 'just"not"right@example.com',
    options: {
        message: 'The value is not a valid email address',
    },
});
// res2.valid === false
`} />
    </section>

    <Examples examples={[
        'Is a@b valid email address',
    ]} />

    <RelatedValidators validators={['regexp']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/ein">ein validator</PrevButton>
            <NextButton target="/guide/validators/file">file validator</NextButton>
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

const _samples = [
    // Valid
    'niceandsimple@example.com', 'very.common@example.com', 'a.little.lengthy.but.fine@dept.example.com',
    'disposable.style.email.with+symbol@example.com', 'other.email-with-dash@example.com',
    '"much.more unusual"@example.com', '"very.unusual.@.unusual.com"@example.com',
    '"very.(),:;<>[]\".VERY.\"very@\\ \"very\".unusual"@strange.example.com',
    'admin@mailserver1', '"!#$%&*+-/=?^_{}`|~@example.org"',
    '" "@example.org', 'üñîçøðé@example.com',
    // Invalid
    'üñîçøðé@üñîçøðé.com', 'Abc.example.com', 'A@b@c@example.com',
    'a"b(c)d,e:f;g<h>i[j\k]l@example.com', 'just"not"right@example.com',
    'this is"not\allowed@example.com', 'this\ still\"not\\allowed@example.com',
];
</script>

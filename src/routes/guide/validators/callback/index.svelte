<svelte:head>
	<title>FormValidation • callback validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">callback validator</h1>
    <h2 class="f4 fw4 tc">Check if the input value passes a callback method</h2>

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
                <td class="pv2 ph3"><code>callback</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-callback___callback</code></td>
                <td class="pv2 ph3">Function</td>
                <td class="pv2 ph3">The callback method</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-callback___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>
        <p class="lh-copy">The callback method must follow the format below:</p>
<SampleCode lang="javascript" code={`
function(input) {
    // input is an object of
    // {
    //      value: The field value,
    //      options: The callback validator options
    // }

    // Check the field validity
    return true;    // or false
}
`} />

        <p class="lh-copy">If you want to return a dynamic message, the callback function must return an object containing the <code>valid</code> and <code>message</code> members:</p>
<SampleCode lang="javascript" code={`
function(input) {
    // input is an object of
    // {
    //      value: The field value,
    //      options: The callback validator options
    // }

    // ... Do your logic checking
    if (...) {
        return {
            valid: true,    // or false
            message: 'The error message'
        };
    }

    return {
        valid: false,       // or true
        message: 'Other error message'
    };
}
`} />
        <Tip>Look at the <a href="/guide/plugins/alias" class="blue dim link">Alias</a> plugin if you want to have multiple callbacks on the same field</Tip>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import callback from 'formvalidation/dist/es6/validators/callback';

const result = callback().validate({
    value: ...,
    options: {
        callback: ...,
    },
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

        <p class="lh-copy">In the following form, user is asked to enter a correct answer of simple operation which is generated randomly.</p>

        <Demo prefix="/guide/validators/callback/basic" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the callback validator with ES6 module to check if a password is strong or weak:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import callback from 'formvalidation/dist/es6/validators/callback';

// A very simple method to check the strength of a password
const validatePassword = function(input) {
    const value = input.value;
    if (value === '') {
        return { valid: true };
    }

    if (value.length < 8) {
        return {
            valid: false,
            message: 'Password must have at least 8 characters',
        };
    }

    if (value === value.toLowerCase()) {
        return {
            valid: false,
            message: 'Password must have at least one uppercase character',
        };
    }

    if (value === value.toUpperCase()) {
        return {
            valid: false,
            message: 'Password must have at least one lowercase character',
        };
    }

    if (value.search(/[0-9]/) < 0) {
        return {
            valid: false,
            message: 'Password must have at least one digit',
        };
    }

    return { valid: true };
}

const res1 = callback().validate({
    value: '123456',
    options: {
        callback: validatePassword,
    },
});
// res1.valid === false

const res2 = callback().validate({
    value: 'not.contains.upper',
    options: {
        callback: validatePassword,
    },
});
// res2.valid === false

const res3 = callback().validate({
    value: 'not@CONTAIN@digit',
    options: {
        callback: validatePassword,
    },
});
// res3.valid === false

const res4 = callback().validate({
    value: 'v@l1dP@@',
    options: {
        callback: validatePassword,
    },
});
// res4.valid === true
`} />
    </section>

    <Examples examples={[
        'Asking fields to be unique',
        'Integrating with TinyMCE',
        'Preventing user to have same value as the placeholder',
        'Regenerating captcha when the form is invalid',
        'Showing all messages',
        'Showing dynamic message',
        'Terms and conditions agreement validation',
        'Validating credit card expiration date',
    ]} />

    <RelatedValidators validators={['promise', 'remote']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/bic">bic validator</PrevButton>
            <NextButton target="/guide/validators/choice">choice validator</NextButton>
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
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

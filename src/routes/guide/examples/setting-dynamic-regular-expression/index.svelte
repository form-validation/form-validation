<svelte:head>
	<title>FormValidation • Setting dynamic regular expression</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Setting dynamic regular expression</h1>

    <section class="mv5">
        <p class="lh-copy">As you know, we can use the <a href="/guide/validators/regexp" class="blue dim link">regexp validator</a> to check if the value matches a given JavaScript regular expression. The regular expression must be a string or an instance of RegExp.</p>
        <p class="lh-copy">To make it simple, let's assume that the form asks user to provide a valid <a href="http://en.wikipedia.org/wiki/International_Standard_Book_Number" target="_blank" class="blue dim link">ISBN</a> which can be a ISBN 10 or ISBN 13 format.</p>
        <p class="lh-copy">Here is the form markup:</p>
<SampleCode lang="html" code={`
<form id="demoForm" method="post">
    <div class="cf mb2">
        <div class="fl w-100">
            <div class="fl w-25 pa2">ISBN type</div>
            <div class="fl w-50">
                <select name="isbnType" class="input-reset">
                    <option value="isbn10">ISBN 10</option>
                    <option value="isbn13">ISBN 13</option>
                </select>
            </div>
        </div>
    </div>

    <div class="cf mb2">
        <div class="fl w-100">
            <div class="fl w-25 pa2">ISBN</div>
            <div class="fl w-50">
                <input type="text" name="isbn" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
            </div>
        </div>
    </div>
</form>
`} />
        <p class="lh-copy">The first two radios asks user to choose the type of ISBN. The next text field requires a valid ISBN based on the selected ISBN type.</p>
<SampleCode lang="javascript" code={`
document.addEventListener('DOMContentLoaded', function(e) {
    const ISBN10_REGEXP = "^[0-9]{9}[0-9X]$";
    const ISBN13_REGEXP = "^(978|979)[0-9]{9}[0-9X]$";

    const demoForm = document.getElementById('demoForm');

    // Create a FormValidation instance which will be used later
    const fv = FormValidation.formValidation(demoForm, {
        fields: {
            isbnType: {
                validators: {
                    notEmpty: {
                        message: 'The ISBN type is required'
                    }
                }
            },
            isbn: {
                validators: {
                    notEmpty: {
                        message: 'The ISBN is required'
                    },
                    regexp: {
                        regexp: ISBN10_REGEXP,
                        message: 'The input is not a valid ISBN',
                    }
                },
            },
        },
        plugins: {
            ...
        },
    });
});
`} />
        <p class="lh-copy">By default, the <code>isbn</code> field uses the <code>ISBN10_REGEXP</code> for the regexp validator. How can we turn it to <code>ISBN13_REGEXP</code> when user picks up the ISBN 13 format?</p>
        <p class="lh-copy">This guide demonstrates a few ways of supporting dynamic regular expression.</p>
        <Tip>This guide uses simple patterns to validate an ISBN. You can use the <a href="/guide/validators/isbn" class="blue dim link">isbn validator</a> which covers more patterns and also verifies the check digit as well.</Tip>
    </section>

    <section class="mv5">
        <Heading>Testing numbers</Heading>
        <p class="lh-copy">You can use the following sample numbers to test with examples in the next sections.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">9971502100</td>
                <td class="pv2 ph3">A valid ISBN 10</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">99921-58-10-6</td>
                <td class="pv2 ph3">An invalid ISBN 10</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">9780306406157</td>
                <td class="pv2 ph3">A valid ISBN 13</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">978-0-306-40615-6</td>
                <td class="pv2 ph3">An invalid ISBN 13</td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>Updating validator options</Heading>
        <p class="lh-copy">When user changes the ISBN type, we can use the <a href="/guide/api/update-validator-option" class="blue dim link">updateValidatorOption() method</a> to update the validator's option. Then the ISBN field need to be revalidated
        via the <a href="/guide/api/revalidate-field" class="blue dim link">revalidateField() method</a>:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
demoForm.querySelector('[name="isbnType"]').addEventListener('change', function(e) {
    const isbnType = e.target.value;
    if (isbnType === '') {
        return;
    }

    let regexp, message;
    switch (isbnType) {
        case 'isbn13':
            regexp  = ISBN13_REGEXP;
            message = 'The input is not a valid ISBN 13';
            break;

        case 'isbn10':
        default:
            regexp  = ISBN10_REGEXP;
            message = 'The input is not a valid ISBN 10';
            break;
    }

    // fv is the FormValidation instance created above
    fv
        // Update options
        .updateValidatorOption('isbn', 'regexp', 'regexp', regexp)
        // Update message
        .updateValidatorOption('isbn', 'regexp', 'message', message)        
        // You might need to revalidate field
        .revalidateField('isbn');
});
`} />
        </div>
        <Demo prefix="/guide/examples/setting-dynamic-regular-expression/update-option" frameworks={['tachyons']} />
    </section>

    <Examples examples={[
        'Setting dynamic regular expression',
        'Switching validators on the same field',
        'Updating validator options',
    ]} />

    <RelatedValidators validators={['callback', 'regexp']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

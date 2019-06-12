<svelte:head>
	<title>FormValidation • Asking fields to be unique</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Asking fields to be unique</h1>
    
    <section class="mv5">
        <p class="lh-copy">Sometime the user need to fill multiple fields in form, also each of them must be unique. Any of them has to be different to the remaining.
            You might think of using the <a href="/guide/validators/different/" class="blue dim link">different</a> validator which requires two fields to be different to each other,
            such as an username and password shouldn't be the same. In our case, the different validator isn't useful because the number of fields
            for doing comparison are unknown.</p>
        <p class="lh-copy">The form in this example asks user to provide some email addresses. User is also required to fill at least one email address.
            Each of them, if present, must be unique. This kind of form can be seen in a lot of forms nowadays.</p>
        <p class="lh-copy">The approach illustrated in this example is that:</p>
        <ul class="ma0 pl3 lh-copy">
            <li>Use the <a href="/guide/validators/email-address/" class="blue dim link">emailAddress</a> validator to ensure each field need to be a valid email address</li>
            <li>Use the <a href="/guide/validators/callback/" class="blue dim link">callback</a> validator to check if the list of email addresses consist duplicated item</li>
            <li>If all fields pass these validators, we then use the <code>updateFieldStatus()</code> method to set them as valid fields</li>
        </ul>
        <p class="lh-copy">That are straight forward steps. The next sections show the implementation in details.</p>
    </section>

    <section class="mv5">
        <Heading>Checking duplicate items in array</Heading>

         <p class="lh-copy">In order to check whether an array contains duplicated items or not, we can use a simple implementation:</p>
<SampleCode lang="javascript" code={`
const hasDuplicatedItems = function(inputArray) {
    const obj = {};
    const numItems = inputArray.length;
    const duplicateRemoved = [];

    for (const i in inputArray) {
        obj[inputArray[i]] = 0;
    }

    for (const i in obj) {
        duplicateRemoved.push(obj[i]);
    }

    return duplicateRemoved.length === numItems;
}
`} />
        <p class="lh-copy">Since the array of email addresses might consist of empty item, we need to adjust the code above a little bit to ensure that
            the array has at least one not-empty item and doesn't contain any duplicated items:</p>
<SampleCode lang="javascript" code={`
// Assume that emailElements is the list of email elements
let notEmptyCount      = 0;
const obj              = {};
const duplicateRemoved = [];

for (const i in emailElements) {
    const v = emailElements[i].value;
    if (v !== '') {
        obj[v] = 0;
        notEmptyCount++;
    }
}

for (const i in obj) {
    duplicateRemoved.push(obj[i]);
}

if (duplicateRemoved.length === 0) {
    // All the items are empty
} else if (duplicateRemoved.length !== notEmptyCount) {
    // The list of emails have duplicated items
}
`} />
    </section>

    <section class="mv5">
        <Heading>Using the same names</Heading>
        <p class="lh-copy">The example code below demonstrates the implementation when all email fields use the same names, <code>email[]</code>, for example.</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
const form = document.getElementById('demoForm');
const fv = FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            'email[]': {
                validators: {
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    },
                    callback: {
                        callback: function(input) {
                            ...

                            if (duplicateRemoved.length === 0) {
                                return {
                                    valid: false,
                                    message: 'You must fill at least one email address',
                                };
                            } else if (duplicateRemoved.length !== notEmptyCount) {
                                return {
                                    valid: false,
                                    message: 'The email address must be unique',
                                };
                            }

                            // Set all fields as valid
                            fv.updateFieldStatus('email[]', 'Valid', 'callback');
                            return {
                                valid: true,
                            };
                        }
                    },
                }
            }
        },
        plugins: {
            ...
        },
    }
);
`} />
        </div>
        <Demo prefix="/guide/examples/asking-fields-to-be-unique/basic" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Using different names</Heading>
        <p class="lh-copy">What if the email fields have different names? How we can set the validator rules for them?</p>
        <p class="lh-copy">In this case, we can use a same CSS class for all email fields:</p>
<SampleCode lang="html" code={`
<input type="text" class="js-user-email" name="user.email[0]" />
<input type="text" class="js-user-email" name="user.email[1]" />
<input type="text" class="js-user-email" name="user.email[2]" />
<input type="text" class="js-user-email" name="user.email[3]" />
`} />
        <p class="lh-copy">and then use the <a href="/guide/getting-started/field-selector/" class="blue dim link">selector</a> option to apply the same set of validation rules for them:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
const form = document.getElementById('demoForm');
const fv = FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            'email[]': {
                // All email fields have .js-user-email class
                selector: '.js-user-email',
                validators: {
                    ...
                }
            }
        },
        plugins: {
            ...
        },
    }
);
`} />
        </div>
        <Demo prefix="/guide/examples/asking-fields-to-be-unique/selector" frameworks={['Tachyons']} />
    </section>

    <Examples examples={[
        'Asking fields to be unique',
        'Validating credit card expiration date',
    ]} />

    <RelatedValidators validators={['callback', 'different', 'emailAddress']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

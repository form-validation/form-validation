<svelte:head>
	<title>FormValidation • Showing custom message returned from server</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Showing custom message returned from server</h1>
    
    <section class="mv5">
        <p class="lh-copy">As you know, each <a href="/validators" class="blue dim link">validator</a> provides the <code>message</code> option to define the error message in case the field
            doesn't pass the associated validator.</p>
        <p class="lh-copy">It's recommended to perform the validation on server side after the form passes the client side validation. 
            The usual question is that how to show the messages from the server if the field doesn't pass the validation on server side.</p>
        <p class="lh-copy">This example will show a handy approach which is described as following steps. To demonstrate the implementation,
            the example uses a simple registration form that consists of three fields for filling the username, email address and password.</p>

        <h3>Defining the validation rules</h3>
        <p class="lh-copy">In addition to <a href="/validators" class="blue dim link">usual validators</a>, we also attach a special validator called <code>blank</code> to each field which
            need to show the custom message returned from the server.</p>
        <p class="lh-copy">The blank validator doesn't have any option:</p>
<SampleCode lang="javascript" code={`
const fv = FormValidation.formValidation(
    form,
    {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        ...
                    },
                    stringLength: {
                        ...
                    },
                    regexp: {
                        ...
                    },
                    blank: {},
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        ...
                    },
                    emailAddress: {
                        ...
                    },
                    blank: {},
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        ...
                    },
                    blank: {},
                }
            },
        }
    }
);
`} />
        <p class="lh-copy">Since the blank validator always returns <code>true</code>, the field is supposed to pass it whenever the validation is performed in the client side.</p>
    </section>

    <section class="mv5">
        <Heading>Submitting the form data via Ajax</Heading>

        <p class="lh-copy">When all fields satisfy the validation rules, we can trigger the <a href="/guide/events/core.form.valid" class="blue dim link">core.form.valid</a> event to send the form data to server via an Ajax request:</p>
<SampleCode lang="javascript" code={`
const fv = FormValidation
    .formValidation(
        form,
        {
            fields: {
                ...
            }
        }
    )
    .on('core.form.valid', function() {
        // Send data to back-end
        FormValidation.utils.fetch('/path/to/your/back-end/', {
            params: {
                username: form.querySelector('[name="username"]').value,
                email: form.querySelector('[name="email"]').value,
                password: form.querySelector('[name="password"]').value,
            }
        }).then((response) => {
            // We will display the messages from server if they're available
        });
    });
`} />
        <Tip>We're using a built in helper method, <code>FormValidation.utils.fetch</code>, to send the data to given back-end. Anyway, you can use whatever method you're familiar with such as Github's <a href="https://github.com/github/fetch" class="blue dim link">fetch</a> implementation.</Tip>
        <p class="lh-copy">The error messages returned from server will be processed inside the <code>response</code> handler of the Ajax request. We will see how to do that in the next step.</p>
    </section>

    <section class="mv5">
        <Heading>Showing message returned from the server</Heading>

        <p class="lh-copy">After getting the data sent from the client via the Ajax request, the server will perform validation using certain programming language. Depend on the validation result, it might response an encoded JSON as</p>
<SampleCode lang="javascript" code={`
// A sample response if all fields are valid
{
    "result": "ok"
}
`} />
        <p class="lh-copy">or</p>
<SampleCode lang="javascript" code={`
// A sample response if there is an invalid field.
// It also tell which and the reason why the field is not valid
{
    "result": "error",
    "fields": {
        "username": "The username is not available",
        "password": "You need to have more secure password"
        ...
    }
}
`} />    
        <p class="lh-copy">Lastly, we can use the <code>updateValidatorOption()</code> and <a href="/guide/api/update-field-status" class="blue dim link">updateFieldStatus()</a> methods to set the message and validation result of the <code>blank</code> validator:</p>
<SampleCode lang="javascript" code={`
const fv = FormValidation
    .formValidation(
        ...
    )
    .on('core.form.valid', function() {
        // Send data to back-end
        FormValidation.utils.fetch('/path/to/your/back-end/', {
            params: {
                username: form.querySelector('[name="username"]').value,
                email: form.querySelector('[name="email"]').value,
                password: form.querySelector('[name="password"]').value,
            }
        }).then((response) => {
            if (response.result === 'error') {
                for (const field in response.fields) {
                    fv
                        // Update the message option
                        .updateValidatorOption(
                            field, 'blank', 'message', response.fields[field]
                        )
                        // Set the field as invalid
                        .updateFieldStatus(field, 'Invalid', 'blank');
                }
            } else {
                // Do whatever you want here
                // such as showing a modal ...
            }
        });
    });
`} />  
        <p class="lh-copy">Following is a working example that illustrates all steps above:</p>
        <Tip heading="Note">For demonstrating purpose, the form randomly displays a custom message for the username field no matter what you put in it</Tip>
        
        <Demo prefix="/guide/examples/showing-custom-message-returned-from-server" frameworks={['tachyons']} />
    </section>

    <Examples examples={[
        'Hiding messages',
        'Showing all messages',
        'Showing custom message returned from server',
        'Showing dynamic message',
        'Showing messages in custom area',
        'Showing only one message each time',
    ]} />

    <RelatedValidators validators={['callback']} />
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

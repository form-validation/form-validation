<svelte:head>
	<title>FormValidation • Creating a custom validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Creating a custom validator</h1>
    
    <section class="mv5">
        <Heading>Writing new validator</Heading>

        <p class="lh-copy">A validator has to follow the syntax:</p>
<SampleCode lang="javascript" code={`
const customValidator = function() {
    return {
        validate: function(input) {
            // input.element presents the field element
            // input.elements presents all field elements
            // input.field is the field name
            // input.value is the field value
            // input.options is the validator options

            // Has to return an object
            return {
                // Required property
                // valid: true indicates that the field passes your custom validator
                // valid: false, otherwise.
                valid: ...,
                
                // Optional: include a custom error message
                message: ...,

                // Optional: include a meta data that can be used by the library later
                meta: {
                    key: value,
                    ...
                },
            };
        },
    };
};
`} />
        <p class="lh-copy">The following example illustrates how to develop a simple validator which validates a password. The validator will treat a password as valid, if it satisfies all the conditions below:</p>
        <ul class="ma0 pl3 lh-copy">
            <li>Must be more than 8 characters long</li>
            <li>Must contain at least one upper case character</li>
            <li>Must contain at least one lower case character</li>
            <li>Must contain at least one digit</li>
        </ul>
        <p class="lh-copy">In fact, you can add more conditions to make a secure password.</p>
<SampleCode lang="javascript" code={`
const strongPassword = function() {
    return {
        validate: function(input) {
            const value = input.value;
            if (value === '') {
                return {
                    valid: true,
                };
            }

            // Check the password strength
            if (value.length < 8) {
                return {
                    valid: false,
                };
            }

            // The password does not contain any uppercase character
            if (value === value.toLowerCase()) {
                return {
                    valid: false,
                };
            }

            // The password does not contain any uppercase character
            if (value === value.toUpperCase()) {
                return {
                    valid: false,
                };
            }

            // The password does not contain any digit
            if (value.search(/[0-9]/) < 0) {
                return {
                    valid: false,
                };
            }

            return {
                valid: true,
            };
        },
    };
};
`} />
        <Tip>To see how built-in validators are developed, you can look at their sources located inside the <code>src/js/validators</code> folder</Tip>
    </section>

    <section class="mv5">
        <Heading>Registering custom validator</Heading>
        <p class="lh-copy">There are two ways to reuse a custom validator.</p>

        <h3>Adding to <code>FormValidation.validators</code> namespace</h3>
<SampleCode lang="javascript" code={`
const strongPassword = function() {
    ...
};

// Register the validator
FormValidation.validators.checkPassword = strongPassword;

// Use new validator
FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            pwd: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    // checkPassword is name of new validator
                    checkPassword: {
                        message: 'The password is too weak'
                    },
                }
            }
        },
    }
);
`} />
        <p class="lh-copy">We register a new validator named <code>checkPassword</code> which is implemented by the <code>strongPassword</code> function.</p>
        <p class="lh-copy">Since the validators are distinct by the names, the new validator name (<code>checkPassword</code>, in the example above) has to be different with <a href="/guide/validators" class="blue dim link">built-in validators</a>.</p>
        <Demo prefix="/guide/examples/creating-a-custom-validator/validators-namespace" frameworks={['tachyons']} />

        <h3>Using the <a href="/guide/api/register-validator" class="blue dim link">registerValidator()</a> method</h3>
        <p class="lh-copy">This approach should be used when the <code>FormValidation</code> namespace doesn't exist. For example, when the library is used with ES6 module.</p>
<SampleCode lang="javascript" code={`
const strongPassword = function() {
    ...
};

// Use new validator
FormValidation
    .formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                pwd: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required and cannot be empty'
                        },
                        // checkPassword is name of new validator
                        checkPassword: {
                            message: 'The password is too weak'
                        },
                    }
                }
            },
        }
    )
    // Register the validator
    .registerValidator('checkPassword', strongPassword);
`} />
    </section>

    <section class="mv5">
        <Heading>Adding custom message</Heading>
        <p class="lh-copy">Basically, the custom validator above works fine. It returns <code>false</code> if the password doesn't satisfy any of conditions we define. The limitation here is that the user don't know
            which condition the password doesn't pass. It informs the same <code>The password is too weak</code> message all the times.</p>
        <p class="lh-copy">To improve that, we can set a dynamic error message in custom validator:</p>
<SampleCode lang="javascript" code={`
const customValidator = function() {
    return {
        validate: function(input) {
            // ... Do your logic checking
            if (...) {
                return {
                    valid: true,    // or false
                    message: 'The error message',
                };
            }

            return {
                valid: false,       // or true
                message: 'Other error message',
            };
        },
    };
};
`} />
        <p class="lh-copy">Our password checker now indicates the reason for a weak password:</p>
<SampleCode lang="javascript" code={`
const strongPassword = function() {
    return {
        validate: function(input) {
            const value = input.value;
            if (value === '') {
                return {
                    valid: true,
                };
            }

            // Check the password strength
            if (value.length < 8) {
                return {
                    valid: false,
                    message: 'The password must be more than 8 characters long',
                };
            }

            // The password does not contain any uppercase character
            if (value === value.toLowerCase()) {
                return {
                    valid: false,
                    message: 'The password must contain at least one upper case character',
                };
            }

            // The password does not contain any uppercase character
            if (value === value.toUpperCase()) {
                return {
                    valid: false,
                    message: 'The password must contain at least one lower case character',
                };
            }

            // The password does not contain any digit
            if (value.search(/[0-9]/) < 0) {
                return {
                    valid: false,
                    message: 'The password must contain at least one digit',
                };
            }

            return {
                valid: true,
            };
        },
    };
};
`} />
        <p class="lh-copy">Now, the form shows exactly condition that we want the password to satisfy.</p>
        <Demo prefix="/guide/examples/creating-a-custom-validator/dynamic-message" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Adding meta data</Heading>
        <p class="lh-copy">The rules used in example above are too simple and can't cover most popular cases of weak password. For example, it doesn't check the simple password such as 123456, abcdef, .etc.</p>
        <p class="lh-copy">In this section, we will use the awesome Dropbox's <a href="https://github.com/dropbox/zxcvbn" class="blue dim link">zxcvbn</a> library to
            build a password strength meter.</p>
        <p class="lh-copy">For anyone who haven't known about zxcvbn library, it's a password strength estimator inspired by password crackers developed by Dropbox. 
            It can recognize and weighs 30k common passwords. For more information about this library, you can refer to <a href="https://github.com/dropbox/zxcvbn" class="blue dim link">its official page</a>.</p>
        <p class="lh-copy">It's quite easy to <a href="https://github.com/dropbox/zxcvbn#usage" class="blue dim link">use it</a> to see how strong a given password is:</p>
<SampleCode lang="javascript" code={`
const result = zxcvbn(password);

// The password strength score. See the following table for available values
result.score

// Explain why the password is weak. "This is a top-10 common password", for example
result.feedback.warning
`} />
        <p class="lh-copy"><code>score</code> is an integer number between 0 and 4 that indicates the strength level:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Score</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">0</td>
                <td class="pv2 ph3">Too guessable: risky password</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">1</td>
                <td class="pv2 ph3">Very guessable: protection from throttled online attacks</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">2</td>
                <td class="pv2 ph3">Somewhat guessable: protection from unthrottled online attacks</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">3</td>
                <td class="pv2 ph3">Safely unguessable: moderate protection from offline slow-hash scenario</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">4</td>
                <td class="pv2 ph3">Very unguessable: strong protection from offline slow-hash scenario</td>
            </tr>
        </table>
        <p class="lh-copy">Our custom validator will use zxcvbn and include score in its validation result:</p>
<SampleCode lang="javascript" code={`
const strongPassword = function() {
    return {
        validate: function(input) {
            // input.value is the field value
            // input.options are the validator options

            const value = input.value;
            if (value === '') {
                return {
                    valid: true,
                };
            }

            const result = zxcvbn(value);
            const score = result.score;
            const message = result.feedback.warning || 'The password is weak';

            // By default, the password is treat as invalid if the score is smaller than 3
            // We allow user to change this number via options.minimalScore
            const minimalScore = input.options && input.options.minimalScore
                                ? input.options.minimalScore
                                : 3;

            if (score < minimalScore) {
                return {
                    valid: false,
                    // Yeah, this will be set as error message
                    message: message,
                    meta: {
                        // This meta data will be used later
                        score: score,
                    },
                }
            }
        },
    };
};
`} />
        <p class="lh-copy">Next, we will use the score which is inclued the meta data of validation result to show up a password strength meter.</p>
        <p class="lh-copy">Bootstrap's <a href="http://getbootstrap.com/docs/4.1/components/progress" class="blue dim link">progress</a> is used to simply demo the functionality.</p>
<SampleCode lang="html" code={`
<input type="password" class="form-control" name="pwd" autocomplete="off" />
                    
<!-- The progress bar is hidden initially -->
<div class="progress mt-2" id="progressBar" style="opacity: 0;">
    <div class="progress-bar progress-bar-striped progress-bar-animate" style="width: 100%"></div>
</div>
`} />
        <p class="lh-copy">We handle the <a href="/guide/events/core.validator.validated" class="blue dim link">core.validator.validated</a> event to update the progress bar:</p>
<SampleCode lang="javascript" code={`
FormValidation
    .formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                ...
            },
        }
    )
    .registerValidator('checkPassword', strongPassword)
    .on('core.validator.validated', function(e) {
        if (e.field === 'pwd' && e.validator === 'checkPassword') {
            const progressBar = document.getElementById('progressBar');

            if (e.result.meta) {
                // Get the score which is a number between 0 and 4
                const score = e.result.meta.score;
                
                // Update the width of progress bar
                const width = (score === 0) ? '1%' : score * 25 + '%';
                progressBar.style.opacity = 1;
                progressBar.style.width = width;
            } else {
                progressBar.style.opacity = 0;
                progressBar.style.width = '0%';
            }
        }
    });
`} />
        <p class="lh-copy">Lastly, for a full working demonstration, you can play with the following form:</p>
        <Tip>Try to enter simple passwords such as 123456, abcdef, abc123 to see how they are treated</Tip>
        <Demo prefix="/guide/examples/creating-a-custom-validator/meta-data" frameworks={['bootstrap']} />
    </section>

    <Examples examples={[
        'Creating a custom validator',
        'Building a password strength meter',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

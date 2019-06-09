<svelte:head>
	<title>FormValidation • Alias plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Alias plugin</h1>
    <h2 class="f4 fw4 tc">Allow to use multiple instances of the same validator</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">If you want to have multiple instances of particular validator, such as different <a href="/guide/validators/callback/" class="blue dim link">callback</a> validators, the following approach doesn't work:</p>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            password: {
                validators: {
                    callback: {
                        // Check if the password has at least one digit
                    },
                    callback: {
                        // Check if the password has at least one special character
                    },
                    callback: {
                        // Check if the password has at least one uppercase character
                    },
                    callback: {
                        // Check if the password has at least one lowercase character
                    },
                }
            },
            ...
        },
    }
);
`} />
        <p class="lh-copy">It is a common case especially when you use an external service to validate field. The Alias plugin is handy for these scenarios.</p>
        <p class="lh-copy">The following piece of code is the starting point to use the Alias plugin:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                alias: new FormValidation.plugins.Alias({
                    // Map the alias with defined validator name
                    ALIAS_NAME: BUILT_IN_VALIDATOR,
                }),
                ...
            },
        }
    );
});
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy">The sample code above assumes that the FormValidation files are placed inside the <code>vendors</code> directory. You might need to change the path depending on where you place them on the server.</p>
    </section>
    
    <section class="mv5">
        <Heading>Basic example</Heading>
        <p class="lh-copy">The following example registers various methods to validate a password by different requirements, but all of them are alias of the <a href="/guide/validators/callback/" class="blue dim link">callback</a> validator:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            password: {
                validators: {
                    required: {
                        message: 'The password is required'
                    },
                    checkStrength: {
                        message: 'It must be more than 8 characters long',
                        callback: function(input) {
                            return input.value.length >= 8;
                        },
                    },
                    checkUppercase: {
                        message: 'It must contain at least one uppercase character',
                        callback: function(input) {
                            return input.value != input.value.toLowerCase();
                        },
                    },
                    checkLowercase: {
                        message: 'It must contain at least one lowercase character',
                        callback: function(input) {
                            return input.value != input.value.toUpperCase();
                        },
                    },
                    checkDigit: {
                        message: 'It must contain at least one digit',
                        callback: function(input) {
                            return input.value.search(/[0-9]/) >= 0;
                        },
                    },
                }
            },
        },
        plugins: {
            ...
            alias: new FormValidation.plugins.Alias({
                // The required validator is infact treated as notEmpty validator
                required: 'notEmpty',
                // These checkers are treated as callback validator
                checkStrength: 'callback',
                checkUppercase: 'callback',
                checkLowercase: 'callback',
                checkDigit: 'callback',
            }),
        },
    }
);
`} />
        </div>
        <p class="lh-copy">The Alias plugin gives you the beauty of code because you can split complicate logic into different, smaller, more maintainable parts as seen above.</p>
        <Demo prefix="/guide/plugins/alias/basic" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <RelatedValidators validators={['callback']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/plugins/">Plugins</PrevButton>
            <NextButton href="/guide/plugins/aria/">Aria plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

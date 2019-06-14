<svelte:head>
	<title>FormValidation • L10n plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">L10n plugin</h1>
    <h2 class="f4 fw4 tc">Support multiple locales for error messages</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">As you already knew, you can use the <code>message</code> option to indicate error message for each validator:</p>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            userName: {
                validators: {
                    notEmpty: {
                        message: '...'
                    },
                    stringLength: {
                        message: '...'
                    },
                },
            },
            ...
        },
    }
);
`} />
        <p class="lh-copy">This L10n plugin allows to define messages in different languages. The following piece of code is the starting point to use the L10n plugin:</p>
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
<script-tag src="/vendors/formvalidation/dist/js/plugins/L10n.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                l10n: new FormValidation.plugins.L10n({
                    // Replace FIELD_NAME and VALIDATOR_NAME with real names
                    FIELD_NAME: {
                        VALIDATOR_NAME: ...,
                    },
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
        <Heading>Defining messages</Heading>

        <p class="lh-copy">The languages are distinguished by locales. A locale is combination of <code>countrycode_LANGUAGECODE</code>. Here <code>countrycode</code>
            and <code>LANGUAGECODE</code> are the ISO 3166 country and language codes in lowercase and uppercase respectively. en_US (default), fr_FR, de_DE, vi_VN are some examples.</p>
        <p class="lh-copy">The L10n plugin provides three ways to define messages in different languages.</p>

        <h3>Using language packages</h3>
        <p class="lh-copy">There are many supported language packages which provide the translation of default validator message in given language. In order to use them, you only need to include the language file:</p>
<SampleCode lang="html" code={`
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<!--
You can include many language packages as you want. Their order don't matter
as you ensure that they are loaded after FormValidation(.min).js
-->
<script-tag src="/vendors/formvalidation/dist/js/locales/en_US.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/locales/fr_FR.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/locales/vi_VN.min.js"></script-tag>
`} />

        <h3>Using literal object</h3>
        <p class="lh-copy">Map the locale with associating message for particular validator:</p>
<SampleCode lang="javascript" code={`
plugins: {
    ...
    l10n: new FormValidation.plugins.L10n({
        username: {
            stringLength: {
                en_US: 'The username must be between %s and %s characters long',
                vi_VN: 'Tên đăng nhập phải có ít nhất %s và nhiều nhất %s ký tự',
            },
        },
    }),
}
`} />

        <h3>Using a callback function</h3>
        <p class="lh-copy">You also can use a callback function that returns the literal object as above:</p>
<SampleCode lang="javascript" code={`
plugins: {
    ...
    l10n: new FormValidation.plugins.L10n({
        password: {
            stringLength: function(field, validator) {
                // field is the field name
                // validator the name of current validator
                return {
                    en_US: 'The password must have at least %s characters',
                    vi_VN: 'Mật khẩu phải có ít nhất %s ký tự',
                };
            },
        },
    }),
}
`} />
    </section>

    <section class="mv5">
        <Heading>Switching locales</Heading>
        <p class="lh-copy">The previous section introduces various ways to define the message in different locales. To switch messages between them (via a switcher control, for example), you need to call the <a href="/guide/api/set-locale" class="blue dim link">setLocale()</a> method:</p>
<SampleCode lang="html" code={`
<!-- To switch between locales. The data-locale attribute will be used later -->
<button type="button" class="setLocaleButton" data-locale="en_US">English</button>
<button type="button" class="setLocaleButton" data-locale="vi_VN">Tiếng Việt</button>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            // Set the default locale
            locale: 'en_US',
            localization: FormValidation.locales.en_US,
            
            fields: {
                ...
            },
            plugins: {
                l10n: new FormValidation.plugins.L10n({
                    ...
                }),
                ...
            },
        }
    );

    // Find all buttons that can change locale
    const localeButtons = Array.from(document.querySelectorAll('.setLocaleButton'));
    localeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            // Get the associate locale from data-locale attribute
            const locale = btn.getAttribute('data-locale');

            // Change the locale
            fv.setLocale(locale, FormValidation.locales[locale])
              .resetForm();
        });
    });
});
</script-tag>
`} />
    </section>
    
    <section class="mv5">
        <Heading>Basic example</Heading>
        <p class="lh-copy">The following example uses all of three ways above to define the messages in different languages. It's up to you to choose any way in a multilingual website.</p>
        <Demo prefix="/guide/plugins/l10n/basic" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/j">J plugin</PrevButton>
            <NextButton target="/guide/plugins/mailgun">Mailgun plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

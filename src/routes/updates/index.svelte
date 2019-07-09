<svelte:head>
	<title>FormValidation • Updates</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">The latest version v1.5.0</h1>
    <h2 class="f4 fw4 tc">Released 08th July 2019</h2>

    <section class="mv5">
        <Heading>New features</Heading>

        <h3>New FieldStatus plugin</h3>
        <p class="lh-copy">The <a href="/guide/plugins/field-status" class="blue dim link">FieldStatus plugin</a> tracks the field status, and allows us to perform an action when a field status is changed.</p>
        <p class="lh-copy">In the following code snippet, we can disable or <a href="/guide/examples/enabling-submit-button-only-when-all-fields-are-valid" class="blue dim link">enable the Submit button</a> based on the validity of all fields:</p>

<SampleCode lang="javascript" code={`
const demoForm = document.getElementById('demoForm');

// Submit button
const submitButton = demoForm.querySelector('[name="signup"]');

const fv = FormValidation.formValidation(demoForm, {
    fields: {
        ...
    },
    plugins: {
        fieldStatus: new FormValidation.plugins.FieldStatus({
            onStatusChanged: function(areFieldsValid) {
                // areFieldsValid is true if all fields are valid
                areFieldsValid
                    // Enable the submit button
                    // so user has a chance to submit the form again
                    ? submitButton.removeAttribute('disabled')
                    // Disable the submit button
                    : submitButton.setAttribute('disabled', 'disabled');
            }
        }),
        ...
    }
});
`} />

        <h3>New PasswordStrength plugin</h3>
        <p class="lh-copy">Powered by the zxcvbn library, the PasswordStrength plugin can be used to check the strength of a password.</p>

        <h3>New Recaptcha3 plugin</h3>
        <p class="lh-copy">There are some users asking for supporting Google reCAPTCHA v3, and here it is.</p>

        <ul class="pa0 ma0 mt4 ml3 lh-copy">
            <li>The <a href="/guide/validators/id" class="blue dim link">id validator</a> supports <a href="/guide/validators/id/israeli-identification-number" class="blue dim link">Israeli identity number</a> (Mispar Zehut)</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <a href="/guide/validators/ean" class="blue dim link">ean validator</a> now supports GTIN-14 format.</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>

        <h3>Fix ASP.Net integration issue</h3>
        <p class="lh-copy">Fix an issue that the click handler of submit button of ASP.Net form isn't executed. Now you can fix it easily with new <code>aspNetButton</code> option provided by the <a href="/guide/plugins/submit-button" class="blue dim link">SubmitButton plugin</a>:</p>

<SampleCode lang="html" code={`
<form id="demoForm" runat="server">
    <asp:Button ID="btnSubmit" runat="server" Text="Submit" OnClick="btnSubmit_OnClick" />
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const demoForm = document.getElementById('demoForm');

    const fv = FormValidation.formValidation(demoForm, {
        fields: {
            ...
        },
        plugins: {
            submitButton: new FormValidation.plugins.SubmitButton({
                aspNetButton: true,
            }),
        }
    });
});
</script-tag>
`} />

        <ul class="pa0 ma0 mt4 ml3 lh-copy">
            <li>Fix an issue that the <a href="/guide/plugins/auto-focus" class="blue dim link">AutoFocus plugin</a> doesn't work.</li>
            <li>Fix a bug that <a href="/guide/validators/email-address" class="blue dim link">emailAddress validator</a> doesn't support multiple email addresses on IE 11.</li>
            <li>Fix a bug that the <a href="/guide/plugins/wizard" class="blue dim link">Wizard plugin</a> doesn't work on IE 11.</li>
            <li>Fix the duplicated icons when using the <a href="/guide/plugins/icon" class="blue dim link">Icon plugin</a> with <a href="/guide/plugins/bootstrap" class="blue dim link">Bootstrap 4.3</a>.</li>
            <li>Thanks Michal Heban for fixing the Czech translation for the <a href="/guide/validators/string-length" class="blue dim link">stringLength validator</a>.</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Breaking changes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>It is not possible to use <code>Status</code> from this version, so please replace <code>Status</code> with the corresponding value. For example:
<code>FormValidation.Status.Validating</code> must be replaced with string of <code>'Validating'</code>.</li>
            <li>The <a href="/guide/plugins/auto-focus" class="blue dim link">AutoFocus plugin</a> now is an external plugin</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v1.5.0</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>From v0.8.1 and older versions: Follow the <a href="/updates/v1.0.0/#upgrading-to-v1-0-0" class="blue dim link">Upgrading to v1.0.0</a> guide.</li>
            <li>From v1.0.0: Download the new version and replace the old files with new files in v1.5.0.</li>
        </ul>

        <p class="lh-copy">Replacing <code>Status</code> with corresponding value:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Replace</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">With</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>FormValidation.Status.Ignored</code></td> 
                <td class="pv2 ph3"><code>'Ignored'</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>FormValidation.Status.Invalid</code></td> 
                <td class="pv2 ph3"><code>'Invalid'</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>FormValidation.Status.NotValidated</code></td> 
                <td class="pv2 ph3"><code>'NotValidated'</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>FormValidation.Status.Valid</code></td> 
                <td class="pv2 ph3"><code>'Valid'</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>FormValidation.Status.Validating</code></td> 
                <td class="pv2 ph3"><code>'Validating'</code></td>
            </tr>
        </table>

        <p class="lh-copy">If you are using the <a href="/guide/plugins/auto-focus" class="blue dim link">AutoFocus plugin</a>, then you need to insert its script:</p>
<SampleCode lang="html" code={`  
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/AutoFocus.min.js"></script-tag>     
`} />       
    </section>

    <section class="tc mv5">
        <a href="/download" class="f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" title="Download">Download v1.5.0</a>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../components/ChangelogLayout.svelte';
import Heading from '../../components/Heading.svelte';
import SampleCode from '../../components/SampleCode.svelte';
</script>

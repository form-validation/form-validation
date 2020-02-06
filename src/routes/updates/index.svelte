<svelte:head>
	<title>FormValidation • Updates</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">The latest version v1.6.0</h1>
    <h2 class="f4 fw4 tc">Released 06th February 2020</h2>

    <section class="mv5">
        <Heading>New features</Heading>

        <ul class="pa0 ma0 mt4 ml3 lh-copy">
            <li>Add new amd package that you can use with RequireJS</li>
            <li>The <a href="/guide/plugins/trigger" class="blue dim link">Trigger plugin</a> adds a new filter named plugins-trigger-should-validate. We can use it to determine the field is validated automatically when the value is changed or not.</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li><a href="/guide/plugins/auto-focus" class="blue dim link">AutoFocus's</a> onPrefocus option provides the access to the field name</li>
            <li>The <a href="/guide/plugins/recaptcha3" class="blue dim link">Recaptcha3 plugin</a> adds new minimum score option. The backend verification will be treated as invalid if the returned score doesn't exceed this option</li>
            <li>The <a href="/guide/plugins/recaptcha3" class="blue dim link">Recaptcha3 plugin</a> can return an error message from the backend verification</li>
            <li>The <a href="/guide/plugins/wizard" class="blue dim link">Wizard plugin</a> adds new API to go to the previous or next steps. It's useful when users want to go to the next step automatically, for example, after choosing a checkbox or radio button.</li>
            <li>The <a href="/guide/plugins/l10n" class="blue dim link">L10n plugin</a> supports localized error message in custom validator:</li>
        </ul>

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

            if (value.length < 8) {
                return {
                    valid: false,
                    message: {
                        en_US: 'The password must have at least 8 characters',
                        vi_VN: 'Mật khẩu phải có ít nhất 8 ký tự',
                    },
                };
            }

            ...
        }
    };
};
`} />
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>

        <ul class="pa0 ma0 mt4 ml3 lh-copy">
            <li>The <a href="/guide/plugins/mandatory-icon" class="blue dim link">MandatoryIcon plugin</a> doesn't work with textarea element</li>
            <li>Fix an issue in <code>normalizeResult</code> method which can cause an exception</li>
            <li>The <a href="/guide/plugins/field-status" class="blue dim link">FieldStatus plugin</a> doesn't work with ignored fields</li>
            <li>Fix an issue in the <a href="/guide/plugins/tooltip" class="blue dim link">Tooltip plugin</a> that causes the tooltip position isn't calculated correcly</li>
            <li>The <a href="/guide/plugins/submit-button" class="blue dim link">SubmitButton plugin</a> doesn't send the clicked button to server</li>
            <li>Fix the placeholder message in validators: between, greaterThan, iban, id, lessThan, phone, step, stringLength, uuid, vat, zipCode</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Breaking changes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <code>getStatues()</code> method of <a href="/guide/plugins/field-status" class="blue dim link">FieldStatus plugin</a> is renamed to <code>getStatuses()</code></li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v1.6.0</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>From v0.8.1 and older versions: Follow the <a href="/updates/v1.0.0/#upgrading-to-v1-0-0" class="blue dim link">Upgrading to v1.0.0</a> guide.</li>
            <li>From v1.0.0: Download the new version and replace the old files with new files in v1.6.0.</li>
        </ul>

        <p class="lh-copy">If you are using the <code>getStatues</code> of <a href="/guide/plugins/field-status" class="blue dim link">FieldStatus plugin</a>, then you need to change to <code>getStatuses</code>.</p>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../components/ChangelogLayout.svelte';
import Heading from '../../components/Heading.svelte';
import SampleCode from '../../components/SampleCode.svelte';
import Tip from '../../components/Tip.svelte';
</script>

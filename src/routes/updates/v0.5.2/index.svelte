<svelte:head>
	<title>FormValidation • v0.5.2</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.5.2</h1>
    <h2 class="f4 fw4 tc">Released 25 September 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <code>verbose</code> option</li>
            <li>Add blank validator</li>
            <li>Add <code>init</code> and <code>destroy</code> methods to validator</li>
            <li>Add Venezuelan VAT number (RIF) validator</li>
            <li>Add China phone number validator</li>
            <li>Add Venezuela phone number validator</li>
            <li>Add Romania phone number validator</li>
            <li>Add Romania postal code validator</li>
            <li>Add Denmark phone number validator</li>
            <li>Add Thailand phone number and ID validator</li>
            <li>Add Chinese citizen ID validator></li>
            <li>Add Russia phone number validator</li>
            <li>Add Russian postal code validator</li>
            <li>Add Czech and Slovakia phone number and postal code validators</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Changes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Change the default type of <a href="/guide/validators/remote" class="blue dim link">remote</a> validator to GET</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <code>delay</code> option to the <a href="/guide/validators/remote" class="blue dim link">remote</a> validator</li>
            <li>The <a href="/guide/validators/different" class="blue dim link">different</a> validator allows more than a 2-way comparison</li>
            <li>The <code>container</code> option can be defined by a callback</li>
            <li>Use CSS classes instead of inline styling to fix icons with <code>input-group</code></li>
            <li>The <a href="/guide/validators/string-length" class="blue dim link">stringLength</a> validator supports HTML 5 <code>minlength</code> attribute</li>
            <li>The <a href="/guide/validators/email-address" class="blue dim link">emailAddress</a> validator accepts multiple email addresses</li>
            <li>Reuse data returned by <a href="/guide/validators/callback" class="blue dim link">callback</a>, <a href="/guide/validators/remote" class="blue dim link">remote</a>, custom validators</li>
            <li>The <a href="/guide/validators/uri" class="blue dim link">uri</a> validator adds support for custom protocol</li>
            <li>Support VAT number without prefixing by country code</li>
            <li>Support latest Bootstrap when using tooltip/popover to show the message</li>
            <li>Improve behaviour of the <a href="/guide/validators/different" class="blue dim link">different</a> validator</li>
            <li>Add "BootstrapValidator's JavaScript requires jQuery" warning</li>
            <li>Add <code>minSize</code> option for the <a href="/guide/validators/file" class="blue dim link">file</a> validator</li>
            <li>Add <a href="/guide/validators/phone" class="blue dim link">phone</a> number validator test suite</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Tabs get red even form is valid</li>
            <li>Fix the <a href="/guide/validators/email-address" class="blue dim link">emailAddress</a> issue which email@server is not valid email address</li>
            <li>Keep disabled validators VALID</li>
            <li>Fix the issue when adding field which does not exist but is already set in "fields" option</li>
            <li>Fix the issue when removing the radio or checkbox field</li>
            <li>The form is still submitted when clicking on submit button which is set <code>onclick="return false;"</code></li>
            <li>Using <a href="/guide/validators/not-empty" class="blue dim link">notEmpty</a> validator with <code>type="number"</code></li>
            <li>The tooltip/popover isn't shown if there is disabled validator. The tooltip/popover is shown automatically when the field gets the focus</li>
            <li>Can't validate ipv4 and ipv6 at the same time. Add ip validator test suite</li>
            <li>Fix Russian <a href="/guide/validators/vat" class="blue dim link">VAT</a> number validator</li>
            <li>The form won't be validated if the submit button contains a HTML tag</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading from v0.5.x to v0.5.2</Heading>
        <p class="lh-copy">If you don't use the <a href="/guide/validators/remote" class="blue dim link">remote</a> validator, just download v0.5.2 package and override the CSS/JS bundle.</p>
        <p class="lh-copy">Otherwise, please indicate the <code>type</code> option when using <a href="/guide/validators/remote" class="blue dim link">remote</a> validator:</p>
        <SampleCode lang="javascript" code={`
$(form).bootstrapValidator({
    fields: {
        username: {
            message: 'The username is not valid',
            validators: {
                // The validator will create an Ajax request
                // sending { username: 'its value' } to the back-end
                remote: {
                    message: 'The username is not available',
                    url: '/path/to/backend/',
                    type: 'GET'     // or 'POST'
                }
            }
        }
    }
});
`} />
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
</script>
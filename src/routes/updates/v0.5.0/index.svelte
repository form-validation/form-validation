<svelte:head>
	<title>FormValidation • v0.5.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.5.0</h1>
    <h2 class="f4 fw4 tc">Released 14 July 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>
                <strong>Error message</strong>:
                <ul class="pa0 ma0 ml3 lh-copy">
                    <li>Provide the default message</li>
                    <li>Support translating error messages</li>
                    <li>Support dynamic message</li>
                </ul>
            </li>
            <li>
                <i class="fa fa-star"></i> <strong>Events</strong>:
                <ul class="pa0 ma0 ml3 lh-copy">
                    <li>Add events for form</li>
                    <li>Add events for field</li>
                    <li>Add events for validator</li>
                </ul>
            </li>
            <li>
                <i class="fa fa-star"></i> <strong>Support dynamic option</strong>:
                <ul class="pa0 ma0 ml3 lh-copy">
                    <li><a href="/guide/validators/between" class="blue dim link">between</a>, <a href="/guide/validators/greater-than/">greaterThan</a>, <a href="/guide/validators/less-than" class="blue dim link">lessThan</a> add support for comparing to other field, return value of a callback function</li>
                    <li><a href="/guide/validators/zip-code" class="blue dim link">zipCode validator</a> allow to set the country code via another field or callback</li>
                </ul>
            </li>
            <li>
                <i class="fa fa-star"></i> <strong>Support dynamic fields</strong>:
                <ul class="pa0 ma0 ml3 lh-copy">
                    <li>Support dynamic fields</li>
                    <li>Add <code>addField()</code> and <code>removeField()</code> methods for managing dynamic fields</li>
                </ul>
            </li>
            <li>
                <strong>New options</strong>:
                <ul class="pa0 ma0 ml3 lh-copy">
                    <li>Add <code>container</code> option for indicating the element showing all errors</li>
                    <li>Showing errors in tooltip or popover</li>
                    <li>Add <code>feedbackIcons</code> option to enabled/disable feedback icons for particular fields</li>
                    <li>Add <code>group</code> option</li>
                    <li>Add <code>enabled</code> option enable/disable particular validator</li>
                    <li>Add <code>excluded</code> option to exclude particular field</li>
                </ul>
            </li>
            <li>
                <strong>New APIs</strong>:
                <ul class="pa0 ma0 ml3 lh-copy">
                    <li>Add <code>getInvalidFields()</code> method that returns all invalid fields</li>
                    <li>Add <code>destroy()</code> method</li>
                    <li>Add <code>isValidContainer()</code> method</li>
                    <li>Add <code>isValidField()</code> method</li>
                    <li>Add <code>revalidateField()</code> method</li>
                    <li>Add <code>resetField()</code> method</li>
                    <li>Add <code>updateMessage()</code> method</li>
                    <li>Add <code>updateOption()</code> method for updating the particular validator option</li>
                </ul>
            </li>
            <li>
                <strong>Misc</strong>:
                <ul class="pa0 ma0 ml3 lh-copy">
                    <li>Add <code>separator</code> option for the <a href="/guide/validators/date" class="blue dim link">date validator</a></li>
                    <li>Add UK phone number support for the <a href="/guide/validators/phone" class="blue dim link">phone validator</a></li>
                    <li>Add <code>$field</code> instance to the <a href="/guide/validators/callback" class="blue dim link">callback validator</a></li>
                    <li>Add Singapore postal code for the <a href="/guide/validators/zip-code" class="blue dim link">zipCode validator</a></li>
                </ul>
            </li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Changes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li><code>$.fn.bootstrapValidator.helpers</code> renames <code>mod_11_10</code> to <code>mod11And10</code>, <code>mod_37_36</code> to <code>mod37And36</code></li>
            <li>Remove <code>submitHandler</code> option</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Only enable the submit buttons if all fields are valid</li>
            <li>Improve the <code>updateStatus()</code> method. The plugin now doesn't show the errors, feedback icons of given field if there are uncompleted validators</li>
            <li>Fix feedback icons in <code>input-group</code></li>
            <li>Only send the submit button which is clicked</li>
            <li>The <a href="/guide/validators/uri" class="blue dim link">uri validator</a> now provides an option to support private/local network address</li>
            <li>Clicking the feedback icon also effect to the checkbox, radio fields</li>
            <li>Don't change the enable setting when the new one is the same</li>
            <li><i class="fa fa-star"></i> Add JSHint to Grunt build</li>
            <li>Allow to override the default options. Useful for using multiple forms in the same page</li>
            <li>The <a href="/guide/validators/remote" class="blue dim link">remote validator</a> adds support for dynamic <code>url</code> and method type (GET/POST)</li>
            <li>Add test suite</li>
            <li>Add built time to the build file</li>
            <li>Define the callback via <code>data-bv-callback-callback</code> attribute</li>
            <li>Validation of numeric fields with decimal steps</li>
            <li>Adjust the feedback icon position for <code>.input-group</code> element</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Fix <a href="/guide/validators/date" class="blue dim link">date validator</a> issue on IE8</li>
            <li>Fix identical validator issue with not clearing <code>has-error</code> class</li>
            <li>Fix <code>inclusive</code> option in the <a href="/guide/validators/between" class="blue dim link">between</a>, <a href="/guide/validators/greater-than/">greaterThan</a> and <a href="/guide/validators/less-than" class="blue dim link">lessThan</a> validators</li>
            <li>The <a href="/guide/validators/date" class="blue dim link">date validator</a> still return valid if the value doesn't contain digits</li>
            <li>file validation extension is case sensitive</li>
            <li>Fix the <a href="/guide/validators/file" class="blue dim link">file validator</a> issue on IE 8</li>
            <li>The <a href="/guide/validators/credit-card" class="blue dim link">creditCard validator</a> doesn't work on IE 8</li>
            <li>The cvv validator doesn't work on IE 8</li>
            <li>The <code>threshold</code> option doesn't work on IE 8</li>
            <li>The <a href="/guide/validators/zip-code" class="blue dim link">zipCode validator</a> doesn't work for Canadian zip code</li>
            <li>Added the letters 'H', 'W' and 'Z' in letter list for Canada postal code</li>
            <li>Don't submit form when the <a href="/guide/validators/callback" class="blue dim link">callback validator</a> completes and the submit button isn't clicked</li>
            <li>The <a href="/guide/validators/id" class="blue dim link">id</a>, <a href="/guide/validators/vat" class="blue dim link">vat</a> validators should return <code>false</code> if the country code is not supported</li>
            <li>When using multiple forms with HTML attributes on the same page, the plugin options will be the same as the last one</li>
            <li><a href="/guide/validators/string-length" class="blue dim link">stringLength validator</a> allows spaces after max length</li>
            <li>Fix the <a href="/guide/validators/ean" class="blue dim link">ean validator</a> when the check digit is zero</li>
            <li>IPv6 validator doesn't work</li>
            <li>Custom trigger event is ignored by field validators</li>
            <li>Skip the <code>_isExcluded()</code> when initializing the form</li>
            <li>Fixed Chilean ID (RUT/RUN) finished in 'K' or 'k'</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v0.5.0</Heading>
        <p class="lh-copy">From v0.5.0, we remove the <code>submitHandler</code> option. In v0.5.0, use the <code>success.form.bv</code> event instead.</p>
        <p class="lh-copy">In v0.4.5 and earlier versions:</p>
        <SampleCode lang="javascript" code={`
$(form).bootstrapValidator({
    submitHandler: function(form, validator, submitButton) {
        ...
    }
});
`} />
        <p class="lh-copy">In v0.5.0:</p>
        <SampleCode lang="javascript" code={`
$(form)
    .bootstrapValidator({
        // Removing submitHandler option
    })
    .on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();

        var $form        = $(e.target),
            validator    = $form.data('bootstrapValidator'),
            submitButton = validator.getSubmitButton();

        // Do whatever you want here ...
    });
`} />
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
</script>
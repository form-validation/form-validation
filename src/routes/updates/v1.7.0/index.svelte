<svelte:head>
	<title>FormValidation • v1.7.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version v1.7.0</h1>
    <h2 class="f4 fw4 tc">Released 01st October 2020</h2>

    <section class="mv5">
        <Heading>New features</Heading>

        <ul class="pa0 ma0 mt4 ml3 lh-copy">
            <li>Add new plugin <a href="/guide/plugins/recaptcha3-token" class="blue dim link">Recaptcha3Token</a> that sends the reCaptcha v3 token to the back-end when the form is valid</li>
            <li>Provide TypeScript definition files for es6 and UMD packages</li>
            <li><code>Core</code> provides new method <a href="/guide/api/set-field-options" class="blue dim link">setFieldOptions()</a> to set the options for given field</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Support new format of <a href="/guide/validators/vat/dutch-vat-number" class="blue dim link">Dutch VAT number</a></li>
            <li>
                The <a href="/guide/validators/not-empty" class="blue dim link">notEmpty validator</a> provides new 
                <code>trim</code> option which is <code>false</code> by default
            </li>
            <li>
                The <a href="/guide/plugins/declarative" class="blue dim link">Declarative plugin</a> parses validator options of element attributes when a field 
                is added via the <a href="/guide/api/add-field" class="blue dim link">addField()</a> method
            </li>
            <li>The <a href="/guide/plugins/submit-button" class="blue dim link">SubmitButton plugin</a> allows to define the submit buttons</li>
        </ul>

        <p class="lh-copy">It's useful in case we have an external button which is outside of the form:</p>

        <SampleCode lang="html" code={`
<form id="demoForm">...</form>

<!-- External button -->
<button type="button" id="externalButton" />
`} />

        <p class="lh-copy">
            We pass the new <code>buttons</code> option to the <a href="/guide/plugins/submit-button" class="blue dim link">SubmitButton plugin</a>. 
            It is a function that accepts the current form element, and returns the list of button elements.
        </p>

        <SampleCode lang="javascript" code={`
FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: ...,
        plugins: new FormValidation.plugins.SubmitButton({
            buttons: function(form) {
                return [].slice.call(document.getElementById('externalButton'));
            },
        }),
    }
);
`} />

        <p class="lh-copy">By default, the <code>buttons</code> option will query all submit buttons (<code>type="submit"</code>) inside the form.</p>
        <p class="lh-copy">The <code>selector</code> option is removed.</p>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 mt4 ml3 lh-copy">
            <li>The <a href="/guide/plugins/recaptcha" class="blue dim link">Recaptcha plugin</a> sends the back-end verification request twice</li>
            <li>The <a href="/guide/validators/id/south-african-identification-number" class="blue dim link">South African</a> <a href="/guide/validators/id" class="blue dim link">identification validator</a> doesn't work with the minified version</li>
            <li>The <a href="/guide/validators/cusip" class="blue dim link">cusip validator</a> doesn't work properly anymore</li>
            <li>
                <p class="lh-copy">The <a href="/guide/plugins/declarative" class="blue dim link">Declarative plugin</a> doesn't set the correct values for boolean options.</p>
                <p class="lh-copy">For example, it transformts <code>data-fv-between___inclusive="false"</code> to <code>inclusive: 'false'</code>, not <code>inclusive: false</code>.</p>
            </li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Breaking changes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <code>selector</code> option of the <a href="/guide/plugins/submit-button" class="blue dim link">SubmitButton plugin</a> is removed.</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v1.7.0</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>From v0.8.1 and older versions: Follow the <a href="/updates/v1.0.0/#upgrading-to-v1-0-0" class="blue dim link">Upgrading to v1.0.0</a> guide.</li>
            <li>From v1.0.0: Download the new version and replace the old files with new files in v1.7.0.</li>
        </ul>

        <p class="lh-copy">
            If you are using the <code>selector</code> of <a href="/guide/plugins/submit-button" class="blue dim link">SubmitButton plugin</a>, 
            then you need to replace it with the <code>buttons</code> option.
        </p>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
</script>

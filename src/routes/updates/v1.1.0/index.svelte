<svelte:head>
	<title>FormValidation • v1.1.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version v1.1.0</h1>
    <h2 class="f4 fw4 tc">Released 8 July 2018</h2>

    <section class="mv5">
        <p class="lh-copy">This verion brings support for Internet Explorer 11 (because the previous version is compiled to ES6 compatible code which doesn't work in Internet Explorer 11).</p>
        <p class="lh-copy">It also adds new plugins to support better user experience such as:</p>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Stop performing remaining validators if there is a validator that the field does not pass, via the <a href="/guide/plugins/sequence" class="blue dim link">Sequence</a> plugin</li>
            <li>Be able to postpone the validation for a given number of seconds from the moment user stops fill in the field via the <a href="/guide/plugins/trigger" class="blue dim link">Trigger</a> plugin</li>
        </ul>
        <p class="lh-copy">For more details, take a look at the next sections.</p>
    </section>

    <section class="mv5">
        <Heading>New features</Heading>

        <h3>New Sequence plugin</h3>
        <p class="lh-copy">By default, all validators for given field will perform their jobs after each key stroke. In the previous version, there is no way for us to control the order of their executions.</p>
        <p class="lh-copy">The <a href="/guide/plugins/sequence" class="blue dim link">Sequence</a> plugin allows us to pending the execution of a validator until all previous validators are pass.</p>
        <p class="lh-copy">In the following example, we use the <a href="/guide/validators/remote" class="blue dim link">remote</a> validator, which is an expensive validator because it will hit the server and takes time to perform and returns the result to our user. 
            By putting it at the end of field validators, we only send a request to server to check if the username is taken if it passes all other validators.</p>
        <Demo prefix="/guide/plugins/sequence/basic" frameworks={['tachyons']} />

        <h3>New StartEndDate plugin</h3>
        <p class="lh-copy">The <a href="/guide/plugins/start-end-date" class="blue dim link">StartEndDate</a> plugin is very handly if you want to validate start and end dates. We can use it with or without a date picker library.</p>
        <p class="lh-copy">The example below uses the <a href="https://flatpickr.js.org" class="blue dim link">flatpickr</a>, a lightweight and powerful datetime picker.</p>
        <Demo prefix="/guide/examples/using-flatpickr-for-start-and-end-dates" frameworks={['tachyons']} />

        <h3>Support invisible reCAPTCHA</h3>
        <p class="lh-copy">The <a href="/guide/plugins/recaptcha" class="blue dim link">Recaptcha</a> plugin now supports <a href="https://developers.google.com/recaptcha/docs/invisible" class="blue dim link">invisible reCAPTCHA</a>:</p>
        <Demo prefix="/guide/plugins/recaptcha/invisible" frameworks={['tachyons']} />

        <h3>Improve Trigger plugin</h3>
        <p class="lh-copy">The <a href="/guide/plugins/trigger" class="blue dim link">Trigger</a> plugin adds a new <code>delay</code> option that supports pending validation for a given number of seconds after user stops filling in the field.</p>
        <p class="lh-copy">In the following form, the username field validations will be postponed for 3 seconds after user stops filling in the field. Other field will be validated instantly right after each key stroke.</p>
        <Demo prefix="/guide/examples/pending-validation-for-a-given-number-of-seconds" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <code>min</code>, <code>max</code> options in the <a href="/guide/validators/date" class="blue dim link">date</a> validator accept a function returning a Date object or a string</li>
            <li>For each field, all validators are performed in a sequential order</li>
            <li>Remove the <code>timeout</code> option in the <a href="/guide/plugins/recaptcha" class="blue dim link">Recaptcha</a> plugin. The captcha expiration will be handled by the plugin automatically</li>
            <li>Remove unused <code>stoken</code> option in the <a href="/guide/plugins/recaptcha" class="blue dim link">Recaptcha</a> plugin</li>
            <li>Add new option in the <a href="/guide/plugins/recaptcha" class="blue dim link">Recaptcha</a> plugin to support back-end verification</li>
            <li>Hide the clear field icon on Internet Explorer. So you will not see two icons when using with the <a href="/guide/plugins/icon" class="blue dim link">Icon</a> plugin</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The library is now compatible with Internet Explorer 11. Behind the scene, we use <a href="https://babeljs.io" class="blue dim link">Babel</a> to compile the ES6 code into ES5 compatible code</li>
            <li>Fix an issue that the <a href="/guide/api/update-field-status" class="blue dim link">updateFieldStatus()</a> method ignores the <code>validator</code> parameter when setting the field status</li>
            <li>Fix an issue that the valid/invalid CSS classes aren't removed from field element when executing <a href="/guide/api/reset-form/">resetForm</a>, <a href="/guide/api/reset-field" class="blue dim link">resetField</a> methods</li>
            <li>Fix an issue that the field element doesn't reset value when executing <a href="/guide/api/reset-form/">resetForm</a>, <a href="/guide/api/reset-field" class="blue dim link">resetField</a> methods</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v1.1.0</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>From v0.8.1 and older versions: Follow the <a href="/updates/v1.0.0/#upgrading-to-v1-0-0" class="blue dim link">Upgrading to v1.0.0</a> guide</li>
            <li>From v1.0.0: Just download the new version and replace the old files in v1.0.0 with new files in v1.1.0.</li>
        </ul>
    </section>

    <section class="tc mv5">
        <a href="/download/" class="f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" title="Download">Download v1.1.0</a>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Demo from '../../../components/Demo.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
<svelte:head>
	<title>FormValidation • Examples</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">A collection of useful examples you can play with</h1>

    <Examples heading="Basic examples" examples={[
        'Can not submit form after validation',
        'Using Ajax to submit the form',
        'Validating form manually',
    ]} />

    <Examples heading="Advanced examples" examples={[
        'Adding dynamic field',
        'Asking fields to be unique',
        'Clearing field when clicking the icon',
        'Enabling validators on the fly',
        'Excluding field by given condition',
        'Multiple steps wizard',
        'Regenerating captcha when the form is invalid',
        'Requiring at least one field',
        'Switching validators on the same field',
        'Updating validator options',
        'Using HTML 5 inputs and attributes',
        'Validating checkbox list placed in multiple columns',
        'Validating multiple inputs as one',
    ]} />

    <Examples heading="Validators" examples={[
        'Accepting test credit card numbers',
        'Asking credit card number to match with selected type',
        'Creating a custom validator',
        'Disabling date',
        'Is a@b valid email address',
        'Preventing user to have same value as the placeholder',
        'Requiring all options to be selected',
        'Showing credit card icon',
        'Supporting custom date format',
        'Terms and conditions agreement validation',
        'Trimming a value',
        'Validating an avatar URL',
        'Validating credit card expiration date',
        'Validating date range',
        'Validating social account URL',
    ]} />

    <Examples heading="Customize icons and messages" examples={[
        'Adjusting icon position',
        'Changing success and error colors',
        'Hiding messages',
        'Hiding success class',
        'Showing all messages',
        'Showing custom message returned from server',
        'Showing dynamic message',
        'Showing icons in custom area',
        'Showing messages in custom area',
        'Showing only one message each time',
        'Using FontAwesome icons',
        'Using Glyphicons icons',
        'Using Material Design icons',
        'Using Semantic UI framework icons',
        'Using Spectre framework icons',
        'Using SVG icons',
    ]} />

    <Examples heading="Improve user experience" examples={[
        'Enabling submit button only when all fields are valid',
        'Getting notified while field is being validated',
        'Pending validation for a given number of seconds',
        'Performing validation if field value exceed given number of characters',
    ]} />

    <Examples heading="Integrate with JavaScript frameworks" examples={[
        'Bundling with Rollup',
        'Bundling with Webpack',
        'Integrating with Preact',
        'Integrating with React',
        'Integrating with Riot',
        'Integrating with Svelte',
        'Integrating with Vue',
    ]} />

    <Examples heading="Integrate with 3rd party libraries" examples={[
        'Integrating with 3rd party libraries',
        'Integrating with Bootbox',
        'Integrating with Bootstrap button group',
        'Integrating with Bootstrap Datepicker',
        'Integrating with flatpickr',
        'Integrating with Select2',
        'Integrating with Summernote',
        'Integrating with TinyMCE',
        'Using flatpickr for start and end dates',
    ]} />
</GuideLayout>

<script>
import Examples from '../../../components/Examples.svelte';
import GuideLayout from '../../../components/GuideLayout.svelte';
</script>
<svelte:head>
	<title>FormValidation • Examples</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">A collection of useful examples you can play with</h2>

    <Examples heading="Advanced examples" examples={[
        'Asking fields to be unique',
        'Excluding field by given condition',
        'Using HTML 5 inputs and attributes',
    ]} />

    <Examples heading="Validators" examples={[
        'Accepting test credit card numbers',
        'Asking credit card number to match with selected type',
        'Disabling date',
        'Is a@b valid email address',
        'Showing credit card icon',
        'Supporting custom date format',
        'Trimming a value',
        'Validating an avatar URL',
        'Validating date range',
        'Validating social account URL',
    ]} />

    <Examples heading="Customize icons and messages" examples={[
        'Adjusting icon position',
        'Showing all messages',
        'Showing dynamic message',
        'Showing icons in custom area',
        'Showing messages in custom area',
        'Using FontAwesome icons',
        'Using Glyphicons icons',
        'Using Material Design icons',
        'Using Semantic UI framework icons',
        'Using Spectre framework icons',
        'Using SVG icons',
    ]} />

    <Examples heading="Improve user experience" examples={[
        'Pending validation for a given number of seconds',
        'Performing validation if field value exceed given number of characters',
    ]} />

    <Examples heading="Integrate with 3rd party libraries" examples={[
        'Integrating with flatpickr',
        'Integrating with TinyMCE',
        'Using flatpickr for start and end dates',
    ]} />
</GuideLayout>

<script>
import Examples from '../../../components/Examples.svelte';
import GuideLayout from '../../../components/GuideLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
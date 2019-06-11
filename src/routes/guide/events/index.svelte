<svelte:head>
	<title>FormValidation • Events</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Events</h1>
    <h2 class="f4 fw4 tc">A collection of events that you can hook on</h2>

    <section class="mv5">
        <p class="lh-copy">After initializing the form with <code>FormValidation.formValidation()</code>, you can listen on events provided by <code>formValidation</code> or its plugins.</p>

        <h3>Using in the browser</h3>
<SampleCode lang="html" code={`
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            ...
        }
    );

    // Listen on the event
    fv.on(EVENT_NAME, function(event) {
        ...
    });
});
</script-tag>
`} />

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import formValidation from 'formvalidation/dist/es6/core/Core';

// Initialize somewhere depending on the JavaScript framework you are using
const fv = formValidation(
    document.getElementById('demoForm'),
    {
        ...
    }
);

// Listen on the event
fv.on(EVENT_NAME, function(event) {
    ...
});
`} />
        
        <p class="lh-copy">The next sections list all of events provided by library.</p>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/api/">API</PrevButton>
            <NextButton href="/guide/events/core.element.notvalidated/">core.element.notvalidated event</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Heading from '../../../components/Heading.svelte';
import GuideLayout from '../../../components/GuideLayout.svelte';
import NextButton from '../../../components/NextButton.svelte';
import PrevButton from '../../../components/PrevButton.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
</script>

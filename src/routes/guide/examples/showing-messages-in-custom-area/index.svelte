<svelte:head>
	<title>FormValidation • Showing messages in custom area</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Showing messages in custom area</h2>
    
    <section class="mv5">
        <p class="lh-copy">There is a few of scenarios which you might want to show messages in custom area, such as</p>
        <ul class="ma0 pl3 lh-copy">
            <li>Messages are shown above or below the form due to the limitation of form height</li>
            <li>Messages are shown in a help panel located at the right of form</li>
            <li>Messages are shown in the last step of a wizard</li>
        </ul>
        <p class="lh-copy">There are two ways to solve this requirement which are listed in the next sections. Both use different options provided by the <a href="/guide/plugins/message/" class="blue dim link">Message plugin</a>.</p>
    </section>

    <section class="mv5">
        <Heading>Using a CSS selector for the container</Heading>

        <p class="lh-copy">The contact form below shows messages in an element located at the bottom of form.</p>
<SampleCode lang="html" code={`
<form id="demoForm">
    ...
    <!-- Message container -->
    <div class="fl w-75" id="messages"></div>
</form>
<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {    
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                tachyons: new FormValidation.plugins.Tachyons({
                    // Do not show the error message in default area
                    defaultMessageContainer: false,
                }),
                // I want to display errors at my own areas
                message: new FormValidation.plugins.Message({
                    clazz: 'red lh-copy',
                    container: '#messages',
                }),
            },
        }
    );
});
</script-tag>
`} />
        <p class="lh-copy">We can also improve the user experience here by making the invalid element focused when clicking the error.</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
FormValidation
    .formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                message: new FormValidation.plugins.Message({
                    ...
                }),
            },
        }
    )
    .on('plugins.message.displayed', function(e) {
        e.messageElement.addEventListener('click', function() {
            e.element.focus();
        });
    });
`} />
        </div>
        <Demo prefix="/guide/examples/showing-messages-in-custom-area/container" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Using a callback for the container</Heading>
        <p class="lh-copy">If you want to place messages which their positions depend on the field, you can use a callback. The following form places messages in the right:</p>
        <Demo prefix="/guide/examples/showing-messages-in-custom-area/callback" frameworks={['Tachyons']} />
    </section>

    <Examples examples={[
        'Showing all messages',
        'Showing custom message returned from server',
        'Showing dynamic message',
        'Showing messages in custom area',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

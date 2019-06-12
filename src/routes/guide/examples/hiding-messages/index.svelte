<svelte:head>
	<title>FormValidation • Hiding messages</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Hiding messages</h1>

    <p class="lh-copy">In this example, you will learn how to hide the error messages.</p>

    <section class="mv5">
        <Heading>Overriding CSS</Heading>
        <p class="lh-copy">By default, all error messages are placed inside a container that has <code>.fv-plugins-message-container</code> class. We can hide the error messages by adding one CSS property for this class:</p>
        <div class="mb4">
<SampleCode lang="css" code={`
.fv-plugins-message-container {
    display: none;
}
`} />
        </div>
        <Demo prefix="/guide/examples/hiding-messages/overriding-css" frameworks={['Bootstrap']} />
    </section>

    <section class="mv5">
        <Heading>Handling the event</Heading>
        <p class="lh-copy">After executing a given validator, the <a class="blue dim link" href="/guide/plugins/message/">Message</a> plugin will emit the <code>plugins.message.displayed</code> event. This event is triggered after the error message is displayed.</p>
        <p class="lh-copy">We can listen on this event to hide the error message:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
FormValidation
    .formValidation(
        form,
        {
            fields: {
                ...
            },
            plugins: {
                ...
            },
        }
    )
    .on('plugins.message.displayed', function(e) {
        // e.messageElement presents the error message element
        // We can hide the message easily
        e.messageElement.style.display = 'none';
    });
`} />
        </div>
        <Demo prefix="/guide/examples/hiding-messages/event" frameworks={['Tachyons']} />
    </section>

    <Examples examples={[
        'Hiding messages',
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

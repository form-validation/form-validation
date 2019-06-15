<svelte:head>
	<title>FormValidation • Showing only one message each time</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Showing only one message each time</h1>
    
    <section class="mv5">
        <p class="lh-copy">By default, all messages are shown at the same time. It's also possible if you want only one message to be shown each time by triggering the <a href="/guide/events/core.validator.validated" class="blue dim link">core.validator.validated</a> event.</p>
        <p class="lh-copy">This event is triggered when the field doesn't pass a particular validator.</p>
        <p class="lh-copy">In the following registration form, the username field must pass three validators. But there is one message shown each time.</p>

        <div class="mb4">
<SampleCode lang="javascript" code={`
const demoForm = document.getElementById('demoForm');
FormValidation.formValidation(demoForm, {
    fields: {
        username: {
            validators: {
                ...
            }
        }
    },
    plugins: {
        ...
    },
}).on('core.validator.validated', function(e) {
    if (!e.result.valid) {
        // Query all messages
        const messages = [].slice.call(demoForm.querySelectorAll('[data-field="' + e.field + '"][data-validator]'));

        messages.forEach((messageEle) => {
            const validator = messageEle.getAttribute('data-validator');
            messageEle.style.display = validator === e.validator ? 'block' : 'none';
        });
    }
});
`} />
        </div>
        <Demo prefix="/guide/examples/showing-only-one-message-each-time" frameworks={['tachyons']} />
    </section>

    <Examples examples={[
        'Hiding messages',
        'Showing all messages',
        'Showing custom message returned from server',
        'Showing dynamic message',
        'Showing messages in custom area',
        'Showing only one message each time',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

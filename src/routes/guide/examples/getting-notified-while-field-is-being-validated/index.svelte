<svelte:head>
	<title>FormValidation • Getting notified while field is being validated</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Getting notified while field is being validated</h1>
    
    <section class="mv5">
        <p class="lh-copy">When using either <a href="/guide/validators/callback" class="blue dim link">callback</a>, <a href="/guide/validators/promise" class="blue dim link">promise</a> or <a href="/guide/validators/remote" class="blue dim link">remote</a>
            validator, your validation logic might take time. For instance, the <a href="/guide/validators/remote" class="blue dim link">remote</a> validator connects to the server side
            and executes a few of database queries to check whether or not the field is valid. These kind of process could force the user to wait for a busy processing.
            User even don't have idea about what is happening.</p>
        <p class="lh-copy">This example displays a progress bar when the validation is being processed. It enhances the user experience of the application.</p>
        <p class="lh-copy">First, prepare the progress bar in the markup:</p>
<SampleCode lang="html" code={`
<div class="form-group row">
    <label class="col-sm-3 col-form-label">Username</label>
    <div class="col-sm-6">
        <input type="text" class="form-control" name="username" autocomplete="off" />
        
        <!-- The progress bar is hidden initially -->
        <div class="progress mt-2" id="progressBar" style="opacity: 0;">
            <div class="progress-bar progress-bar-striped progress-bar-animate" style="width: 100%"></div>
        </div>
    </div>
</div>
`} />
        <Tip>
            The demo assume that you're using the <a href="http://getbootstrap.com" class="blue dim link">Bootstrap</a> framework.
            Of course, you can use other progress bar component provided by the <a href="https://foundation.zurb.com/sites/docs/progress-bar.html" class="blue dim link">Foundation</a>,
            <a href="http://semantic-ui.com/modules/progress.html" class="blue dim link">Semantic UI</a> or <a href="https://getuikit.com/docs/progress" class="blue dim link">UIKit</a> frameworks.
        </Tip>
        <p class="lh-copy">Next, display the progress bar when the field is being validated. Also, gide it when the validation is done.</p>
<SampleCode lang="javascript" code={`
FormValidation
    .formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        },
                        remote: {
                            message: 'The username is already taken',
                            method: 'GET',
                            url: '...',
                        },
                    }
                },
                ...
            },
            plugins: {
                ...
            },
        }
    )
    .on('core.validator.validating', function(e) {
        if (e.field === 'username' && e.validator === 'remote') {
            document.getElementById('progressBar').style.opacity = '1';
        }
    })
    .on('core.validator.validated', function(e) {
        if (e.field === 'username' && e.validator === 'remote') {
            document.getElementById('progressBar').style.opacity = '0';
        }
    });
`} />
        <p class="lh-copy">For testing purpose, the demo always answers that the username is already taken no matter what you input.</p>
        <Demo prefix="/guide/examples/getting-notified-while-field-is-being-validated" frameworks={['bootstrap']} />
    </section>

    <Examples examples={[
        'Getting notified while field is being validated',
        'Pending validation for a given number of seconds',
        'Performing validation if field value exceed given number of characters',
    ]} />

    <RelatedValidators validators={['remote']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

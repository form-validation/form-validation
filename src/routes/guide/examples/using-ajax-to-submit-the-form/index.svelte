<svelte:head>
	<title>FormValidation • Using Ajax to submit the form</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Using Ajax to submit the form</h2>
    
    <section class="mv5">
        <p class="lh-copy">After clicking the Submit button, all fields will be validated automatically if the <a href="/guide/plugins/submit-button/" class="blue dim link">SubmitButton</a> plugin is enabled. Usually you have two choices in the case all fields pass their validations:</p>
        <ul class="ma0 pl3 lh-copy">
            <li>Submit the form to the server. It can be done via the <a href="/guide/plugins/default-submit/" class="blue dim link">DefaultSubmit</a> plugin</li>
            <li>Send the form data to server via an Ajax request.</li>
        </ul>
        <p class="lh-copy">For the second scenario, you can handle the <code>core.form.valid</code> event as following</p>
<SampleCode lang="javascript" code={`
FormValidation
    .formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                ...
            },
        }
    )
    .on('core.form.valid', function() {
        // Send the form data to back-end
        // You need to grab the form data and create an Ajax request to send them
        
        FormValidation.utils.fetch('/path/to/your/back-end/', {
            method: 'POST',
            params: {
                fieldName: fieldValue,
                otherFieldName: otherFieldValue,
                ...
            },
        }).then(function(response) {
            // Depending on the response from server, you can display a notification
            // to let user know if the form is sent successfully
            ...
        });
    });
`} />
        <p class="lh-copy">The sample code above uses a built in method <code>FormValidation.utils.fetch(url, options)</code> to send data to given <code>url</code>. It's up to you to choose your favourite library for doing the same thing, such as <a href="https://github.com/axios/axios" class="blue dim link">axios</a>:</p>
<SampleCode lang="html" code={`
<script-tag src="https://unpkg.com/axios/dist/axios.min.js"></script-tag>
...
<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation
        .formValidation(
            document.getElementById('demoForm'),
            {
                ...
            }
        )
        .on('core.form.valid', function() {
            axios({
                method: 'post',
                url: '/path/to/your/back-end/',
                data: {
                    fieldName: fieldValue,
                    otherFieldName: otherFieldValue,
                    ...
                },
            }).then(function(response) {
                ...
            });
        });
});
</script-tag>    
`} />
    </section>

    <Examples examples={[
        'Multiple steps wizard',
        'Using Ajax to submit the form',
    ]} />
</GuideLayout>

<script>
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

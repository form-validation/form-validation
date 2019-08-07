<svelte:head>
	<title>FormValidation • Using Ajax to submit the form</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Using Ajax to submit the form</h1>
    
    <section class="mv5">
        <p class="lh-copy">After clicking the Submit button, all fields will be validated automatically if the <a href="/guide/plugins/submit-button" class="blue dim link">SubmitButton</a> plugin is enabled. Usually you have two choices in the case all fields pass their validations:</p>
        <ul class="ma0 pl3 lh-copy">
            <li>Submit the form to the server. It can be done via the <a href="/guide/plugins/default-submit" class="blue dim link">DefaultSubmit</a> plugin</li>
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
        <p class="lh-copy">The sample code above uses a built in method <code>FormValidation.utils.fetch(url, options)</code> to send data to given <code>url</code>. It's up to you to choose your favourite library for doing the same thing, such as <a href="https://github.com/axios/axios" target="_blank" class="blue dim link">axios</a>:</p>
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

    <section class="mv5">
        <Heading>Uploading file</Heading>

        <p class="lh-copy">You can use the <a href="https://github.com/axios/axios" target="_blank" class="blue dim link">axios</a> library to send file to your back-end as well.</p>
<SampleCode lang="html" code={`
<form id="demoForm" method="POST">
    <input type="file" name="avatar" />
    ...
</form>    

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
            var formData = new FormData();

            // Append the text fields
            formData.append('firstName', demoForm.querySelector('[name="firstName"]').value);
            formData.append('lastName', demoForm.querySelector('[name="lastName"]').value);
            formData.append('username', demoForm.querySelector('[name="username"]').value);
            formData.append('email', demoForm.querySelector('[name="email"]').value);

            // Append the file
            var avatarFiles = demoForm.querySelector('[name="avatar"]').files;
            if (avatarFiles.length > 0) {
                formData.append('avatar', avatarFiles[0]);
            }

            axios.post('/path/to/your/back-end/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function(response) {
                ...
            });
        });
});
</script-tag>
`} />        
        <p class="lh-copy">The back-end then can get the uploaded file. The following sample code in PHP demonstrates how we can do that:</p>
<SampleCode lang="php" code={`
&lt;?php
$targetFile = __DIR__ . '/uploads/' . basename($_FILES["avatar"]["name"]);
$success = move_uploaded_file($_FILES["avatar"]["tmp_name"], $targetFile);
...
`} />
    </section>

    <Examples examples={[
        'Multiple steps wizard',
        'Using Ajax to submit the form',
        'Validating form manually',
    ]} />
</GuideLayout>

<script>
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

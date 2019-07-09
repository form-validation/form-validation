<svelte:head>
	<title>FormValidation • FieldStatus plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">FieldStatus plugin</h1>
    <h2 class="f4 fw4 tc">Track the field status, and allow to perform an action when a field status is changed</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The following piece of code is the starting point to use the FieldStatus plugin:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                fieldStatus: new FormValidation.plugins.FieldStatus({
                    onStatusChanged: function(areFieldsValid) {
                        // areFieldsValid is true if all fields are valid
                    }
                }),
                ...
            },
        }
    );
});
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy">The sample code above assumes that the FormValidation files are placed inside the <code>vendors</code> directory. You might need to change the path depending on where you place them on the server.</p>
    </section>
    
    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.5.0: First release. It means that the FieldStatus plugin requires FormValidation v1.5.0 or newer.</li>
        </ul>
    </section>

    <Examples examples={[
        'Enabling submit button only when all fields are valid',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/excluded">Excluded plugin</PrevButton>
            <NextButton target="/guide/plugins/foundation">Foundation plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Examples from '../../../../components/Examples.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

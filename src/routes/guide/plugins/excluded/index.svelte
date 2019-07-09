<svelte:head>
	<title>FormValidation • Excluded plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Excluded plugin</h1>
    <h2 class="f4 fw4 tc">Ignore validations on particular field</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">This plugin allows you to indicate fields which won't be validated. By default, the plugin will not validate the following kind of fields:</p>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>disabled</li>
            <li>hidden</li>
            <li>invisible</li>
        </ul>
        <p class="lh-copy">The following piece of code is the starting point to use the Excluded plugin:</p>
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
                excluded: new FormValidation.plugins.Excluded({
                    excluded: function(field, element, elements) {
                        // field is the field name
                        // element is the field element
                        // elements is the list of field elements in case
                        // we have multiple elements with the same name

                        // return true if you want to exclude the field
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
        <Heading>Basic example</Heading>
        <p class="lh-copy">In the following form, there are two invisible fields called <span class="i">Job title</span> and <span class="i">Department</span>. Since they are not visible initially, they will not be validated when you click the <span class="i">Submit</span> button.</p>
        <p class="lh-copy">Clicking the <span class="i">More info</span> button will turn them into visible fields, and as result, they will be required due to their validation rules.</p>
        <Demo prefix="/guide/plugins/excluded/basic" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.3.0: First release. It means that the Excluded plugin requires FormValidation v1.3.0 or newer.</li>
        </ul>
    </section>

    <Examples examples={[
        'Excluding field by given condition',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/default-submit">DefaultSubmit plugin</PrevButton>
            <NextButton target="/guide/plugins/field-status">FieldStatus plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

<svelte:head>
	<title>FormValidation • Foundation plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Foundation plugin</h1>
    <h2 class="f4 fw4 tc lh-copy">Integrate with <a href="https://foundation.zurb.com" class="blue dim link">Foundation</a> framework. Support Foundation v6.5.3</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The following piece of code is the starting point to validate the form made in Foundation:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/css/foundation.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Foundation.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                foundation: new FormValidation.plugins.Foundation(),
                ...
            },
        }
    );
});
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy">There are some important things here:</p>
        <ul class="ma0 pl3 lh-copy">
            <li>The sample code above assumes that the FormValidation files are placed inside the <code>vendors</code> directory. You might need to change the path depending on where you place them on the server.</li>
            <li><code>Foundation.min.js</code> is the plugin provided by FormValidation. It is NOT the same as <code>Foundation(.min).js</code> file provided by the Foundation framework.</li>
        </ul>
        <p class="lh-copy">The next sections list out some examples of various forms made with Foundation.</p>
    </section>

    <section class="mv5">
        <Heading>Horizontal form</Heading>
        <Demo prefix="/guide/plugins/foundation/horizontal-form" frameworks={['foundation']} />
    </section>

    <section class="mv5">
        <Heading>Stacked form</Heading>
        <p class="lh-copy">You need to add the <code>fv-stacked-form</code> class to the <code>form</code> element such as:</p>
        <div class="mb4">
            <SampleCode lang="html" code={`
<form class="fv-stacked-form">
    <!-- The fields go here -->
    ...
</form>
`} />
        </div>
        <Demo prefix="/guide/plugins/foundation/stacked-form" frameworks={['foundation']} />
    </section>

    <section class="mv5">
        <Heading>Multiple fields on the same row</Heading>
        <p class="lh-copy">In order to add the correct class for error message and the field element when it is a valid or invalid, we need to specify the CSS selector of the field container.</p>
        <p class="lh-copy">By default, the Foundation plugin will look for the <code>.grid-x</code> element. In the following example, the <code>firstName</code> and <code>lastName</code>
            fields are placed inside <code>.small-4</code> containers. Meanwhile, the <code>city</code>, <code>state</code> and <code>zipcode</code> fields can be found inside the <code>.small-3</code> containers.
        </p>
        <p class="lh-copy">The <code>rowSelector</code> option will be used to help the plugin determine the field containers as following:</p>
        <div class="mb4">
            <SampleCode lang="javascript" code={`
foundation: new FormValidation.plugins.Foundation({
    rowSelector: function(field, ele) {
        // field is the field name
        // ele is the field element
        switch (field) {
            case 'firstName':
            case 'lastName':
                return '.small-4';
            
            case 'city':
            case 'state':
            case 'zipcode':
                return '.small-3';
            
            default:
                return '.form-group';
        }
    }
}),
`} />
        </div>
        <Demo prefix="/guide/plugins/foundation/multiple-fields" frameworks={['foundation']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/field-status">FieldStatus plugin</PrevButton>
            <NextButton target="/guide/plugins/icon">Icon plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

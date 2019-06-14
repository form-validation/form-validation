<svelte:head>
	<title>FormValidation • Semantic plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Semantic plugin</h1>
    <h2 class="f4 fw4 tc lh-copy">Integrate with <a href="https://semantic-ui.com" class="blue dim link">Semantic UI</a> framework. Support Semantic UI v2.4.1</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The following piece of code is the starting point to validate the form made in Semantic UI:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Semantic.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                semantic: new FormValidation.plugins.Semantic(),
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
            <li><code>Semantic.min.js</code> is the plugin provided by FormValidation. It is NOT the same as <code>Semantic(.min).js</code> file provided by the Semantic UI framework.</li>
        </ul>
        <p class="lh-copy">The next sections list out some examples of various forms made with Semantic UI.</p>
    </section>

    <section class="mv5">
        <Heading>Horizontal form</Heading>
        <Demo prefix="/guide/plugins/semantic/horizontal-form" frameworks={['Semantic']} />
    </section>

    <section class="mv5">
        <Heading>Stacked form</Heading>
        <p class="lh-copy">In order to add the correct class for error message and the field element when it is a valid or invalid, we need to specify the CSS selector of the field container.</p>
        <p class="lh-copy">By default, the Semantic plugin will look for the <code>.fields</code> element. But in the stacked form, evey field will be placed inside a <code>.field</code> container.</p>
        <p class="lh-copy">We need to use the <code>rowSelector</code> option to help the plugin determine the field containers as following:</p>
        <div class="mb4">
            <SampleCode lang="javascript" code={`
semantic: new FormValidation.plugins.Semantic({
    rowSelector: function(field, ele) {
        // field is the field name
        // ele is the field element
        return '.field';
    }

    // Or you can just simply pass it as a string:
    // rowSelector: '.field',
}),
`} />    
        </div>      
        <Demo prefix="/guide/plugins/semantic/stacked-form" frameworks={['Semantic']} />
    </section>

    <section class="mv5">
        <Heading>Multiple fields on the same row</Heading>
        <p class="lh-copy">Due to the same reason mentioned in the <span class="i">Stacked form</span> section above, the <code>rowSelector</code> option will be used to determine the field containers.</p>
        <p class="lh-copy">In the following example, the <code>firstName</code> and <code>lastName</code> fields are placed inside <code>.five.field</code> containers. Meanwhile, the <code>city</code>, <code>state</code> and <code>zipcode</code> fields can be found inside the <code>.four.field</code> containers.</p>
        <div class="mb4">
            <SampleCode lang="javascript" code={`
semantic: new FormValidation.plugins.Semantic({
    rowSelector: function(field, ele) {
        // field is the field name
        // ele is the field element
        switch (field) {
            case 'firstName':
            case 'lastName':
                return '.five.field';
            
            case 'city':
            case 'state':
            case 'zipcode':
                return '.four.field';
            
            default:
                return '.fields';
        }
    }
}),
`} />        
        </div>
        <Demo prefix="/guide/plugins/semantic/multiple-fields" frameworks={['Semantic']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.2.0: Supported Semantic UI v2.3.3</li>
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/recaptcha">Recaptcha plugin</PrevButton>
            <NextButton target="/guide/plugins/sequence">Sequence plugin</NextButton>
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

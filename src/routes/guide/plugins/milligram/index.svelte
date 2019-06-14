<svelte:head>
	<title>FormValidation • Milligram plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Milligram plugin</h1>
    <h2 class="f4 fw4 tc lh-copy">Integrate with <a href="https://milligram.io" class="blue dim link">Milligram</a> framework. Support Milligram v1.3.0</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The following piece of code is the starting point to validate the form made in Milligram:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Milligram.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                milligram: new FormValidation.plugins.Milligram(),
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
        <p class="lh-copy">The next sections list out some examples of various forms made with Milligram.</p>
    </section>

    <section class="mv5">
        <Heading>Horizontal form</Heading>
        <Demo prefix="/guide/plugins/milligram/horizontal-form" frameworks={['Milligram']} />
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
        <p class="lh-copy">In order to add the correct class for error message and the field element when it is a valid or invalid, we need to specify the CSS selector of the field container.</p>
        <p class="lh-copy">By default, the Milligram plugin will look for the <code>.row</code> element. But in the stacked form below, every field will be placed inside our own <code>.fv-row</code> container.</p>
        <p class="lh-copy">We need to use the <code>rowSelector</code> option to help the plugin determine the field containers as following:</p>
        <div class="mb4">
            <SampleCode lang="javascript" code={`
milligram: new FormValidation.plugins.Milligram({
    rowSelector: function(field, ele) {
        // field is the field name
        // ele is the field element
        return '.fv-row';
    }

    // Or you can just simply pass it as a string:
    // rowSelector: '.fv-row',
}),
`} />    
        </div>  
        <Demo prefix="/guide/plugins/milligram/stacked-form" frameworks={['Milligram']} />
    </section>

    <section class="mv5">
        <Heading>Multiple fields on the same row</Heading>
        <p class="lh-copy">In the following example, the <code>firstName</code> and <code>lastName</code>
            fields are placed inside <code>.column-25</code> containers. Meanwhile, the <code>city</code>, <code>state</code> and <code>zipcode</code> fields can be found inside the <code>.column-20</code> containers.
        </p>
        <p class="lh-copy">Again, we need to use the <code>rowSelector</code> option:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
milligram: new FormValidation.plugins.Milligram({
    rowSelector: function(field, ele) {
        // field is the field name
        // ele is the field element
        switch (field) {
            case 'firstName':
            case 'lastName':
                return '.column-25';
            
            case 'city':
            case 'state':
            case 'zipcode':
                return '.column-20';
            
            default:
                return '.row';
        }
    }
}),
`} />        
        </div>
        <Demo prefix="/guide/plugins/milligram/multiple-fields" frameworks={['Milligram']} />
    </section>
    
    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.2.0: First release. It means that the Milligram plugin requires FormValidation v1.2.0 or newer.</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/message">Message plugin</PrevButton>
            <NextButton target="/guide/plugins/mini">Mini plugin</NextButton>
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

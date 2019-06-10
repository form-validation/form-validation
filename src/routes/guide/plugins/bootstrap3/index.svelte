<svelte:head>
	<title>FormValidation • Bootstrap 3 plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Bootstrap 3 plugin</h1>
    <h2 class="f4 fw4 tc lh-copy">Integrate with <a href="https://getbootstrap.com/docs/3.4/" class="blue dim link">Bootstrap 3</a> framework. Support the latest version of Bootstrap 3 (v3.4.1)</h2>

    <Tip>Use the <a href="/guide/plugins/bootstrap/" class="blue dim link">Bootstrap</a> plugin if your form is made in Bootstrap 4</Tip>
    
    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The following piece of code is the starting point to validate the form made in Bootsrap 3:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap3.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                bootstrap3: new FormValidation.plugins.Bootstrap3(),
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
        <p class="lh-copy">The next sections list out some examples of various forms made with Bootstrap 3.</p>
    </section>

    <section class="mv5">
        <Heading>Horizontal form</Heading>
        <Demo prefix="/guide/plugins/bootstrap3/horizontal-form" frameworks={['Bootstrap3']} />
    </section>

    <section class="mv5">
        <Heading>Stacked form</Heading>
        <Demo prefix="/guide/plugins/bootstrap3/stacked-form" frameworks={['Bootstrap3']} />
    </section>

    <section class="mv5">
        <Heading>Inline form</Heading>
        <Demo prefix="/guide/plugins/bootstrap3/inline-form" frameworks={['Bootstrap3']} />
    </section>

    <section class="mv5">
        <Heading>Form without label</Heading>
        <Demo prefix="/guide/plugins/bootstrap3/without-label-form" frameworks={['Bootstrap3']} />
    </section>

    <section class="mv5">
        <Heading>Multiple fields on the same row</Heading>
        <p class="lh-copy">In order to add the correct class for error message and the field element when it is a valid or invalid, we need to specify the CSS selector of the field container.</p>
        <p class="lh-copy">By default, the Bootstrap3 plugin will look for the <code>.form-group</code> element. In the following example, the <code>firstName</code> and <code>lastName</code>
            fields are placed inside <code>.col-xs-4</code> containers. Meanwhile, the <code>city</code>, <code>state</code> and <code>zipcode</code> fields can be found inside the <code>.col-xs-3</code> containers.
        </p>
        <p class="lh-copy">The <code>rowSelector</code> option will be used to help the plugin determine the field containers as following:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
bootstrap3: new FormValidation.plugins.Bootstrap3({
    rowSelector: function(field, ele) {
        // field is the field name
        // ele is the field element
        switch (field) {
            case 'firstName':
            case 'lastName':
                return '.col-xs-4';
            
            case 'city':
            case 'state':
            case 'zipcode':
                return '.col-xs-3';
            
            default:
                return '.form-group';
        }
    }
}),
`} />        
        </div>
        <Demo prefix="/guide/plugins/bootstrap3/multiple-fields" frameworks={['Bootstrap3']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/plugins/bootstrap/">Bootstrap plugin</PrevButton>
            <NextButton href="/guide/plugins/bulma/">Bulma plugin</NextButton>
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
import Tip from '../../../../components/Tip.svelte';
</script>

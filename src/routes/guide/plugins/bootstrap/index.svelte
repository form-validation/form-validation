<svelte:head>
	<title>FormValidation • Bootstrap plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Bootstrap plugin</h1>
    <h2 class="f4 fw4 tc">Integrate with <a href="https://getbootstrap.com" class="blue dim link">Bootstrap</a> framework. Support Bootstrap v4.3.1</h2>

    <Tip>Use the <a href="/guide/plugins/bootstrap3" class="blue dim link">Bootstrap3</a> plugin if you are still using Bootstrap 3</Tip>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The following piece of code is the starting point to validate the form made in Bootsrap 4:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                bootstrap: new FormValidation.plugins.Bootstrap(),
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
            <li><code>Bootstrap.min.js</code> is the plugin provided by FormValidation. It is NOT the same as <code>Bootstrap(.min).js</code> file provided by Bootstrap framework.</li>
        </ul>
        <p class="lh-copy">The next sections list out some examples of various forms made with Bootstrap 4.</p>
    </section>

    <section class="mv5">
        <Heading>Horizontal form</Heading>
        <Demo prefix="/guide/plugins/bootstrap/horizontal-form" frameworks={['bootstrap']} />
    </section>

    <section class="mv5">
        <Heading>Stacked form</Heading>
        <Demo prefix="/guide/plugins/bootstrap/stacked-form" frameworks={['bootstrap']} />
    </section>

    <section class="mv5">
        <Heading>Inline form</Heading>
        <Demo prefix="/guide/plugins/bootstrap/inline-form" frameworks={['bootstrap']} />
    </section>

    <section class="mv5">
        <Heading>Form without label</Heading>
        <Demo prefix="/guide/plugins/bootstrap/without-label-form" frameworks={['bootstrap']} />
    </section>

    <section class="mv5">
        <Heading>Multiple fields on the same row</Heading>
        <p class="lh-copy">In order to add the correct class for error message and the field element when it is a valid or invalid, we need to specify the CSS selector of the field container.</p>
        <p class="lh-copy">By default, the Bootstrap plugin will look for the <code>.form-group</code> element. In the following example, the <code>firstName</code> and <code>lastName</code>
            fields are placed inside <code>.col-sm-4</code> containers. Meanwhile, the <code>city</code>, <code>state</code> and <code>zipcode</code> fields can be found inside the <code>.col-sm-3</code> containers.
        </p>
        <p class="lh-copy">The <code>rowSelector</code> option will be used to help the plugin determine the field containers as following:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
bootstrap: new FormValidation.plugins.Bootstrap({
    rowSelector: function(field, ele) {
        // field is the field name
        // ele is the field element
        switch (field) {
            case 'firstName':
            case 'lastName':
                return '.col-sm-4';
            
            case 'city':
            case 'state':
            case 'zipcode':
                return '.col-sm-3';
            
            default:
                return '.form-group';
        }
    }
}),
`} />        
        </div>
        <Demo prefix="/guide/plugins/bootstrap/multiple-fields" frameworks={['bootstrap']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/auto-focus">AutoFocus plugin</PrevButton>
            <NextButton target="/guide/plugins/bootstrap3">Bootstrap 3 plugin</NextButton>
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

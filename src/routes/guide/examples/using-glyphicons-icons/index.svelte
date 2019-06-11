<svelte:head>
	<title>FormValidation • Using Glyphicons icons</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Using Glyphicons icons</h2>
    
    <section class="mv5">
        <p class="lh-copy">The Glyphicons icon set is included with <a href="/guide/plugins/bootstrap3/" class="blue dim link">Bootstrap v3</a>, so you can use it as:</p>
        <div class="mb4">
<SampleCode lang="html" code={`
<!-- Put them in the head tag -->
<link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css">
<link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">

<form id="demoForm">
    ...
</form>

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
                icon: new FormValidation.plugins.Icon({
                    valid: 'glyphicon glyphicon-ok',
                    invalid: 'glyphicon glyphicon-remove',
                    validating: 'glyphicon glyphicon-refresh',
                }),
            },
        }
    );
});
</script-tag>
`} />
        </div>
        <Demo prefix="/guide/examples/using-glyphicons-icons" frameworks={['Bootstrap3']} />
    </section>

    <Examples examples={[
        'Adjusting icon position',
        'Showing icons in custom area',
        'Using FontAwesome icons',
        'Using Glyphicons icons',
        'Using Material Design icons',
        'Using Semantic UI framework icons',
        'Using Spectre framework icons',
        'Using SVG icons',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

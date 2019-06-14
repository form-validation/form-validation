<svelte:head>
	<title>FormValidation • Using FontAwesome icons</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Using FontAwesome icons</h1>
    
    <section class="mv5">
        <p class="lh-copy">Follow the sample code below to use the icons provided by <a href="https://fontawesome.com" class="blue dim link">FontAwesome</a>:</p>
        <div class="mb4">
<SampleCode lang="html" code={`
<!-- Put them in the head tag -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">

<form id="demoForm">
    ...
</form>

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
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },
        }
    );
});
</script-tag>
`} />
        </div>
        <p class="lh-copy">If you want to use the FontAwesome SVG icon instead of its CSS classes, take a look at the <a href="/guide/examples/using-svg-icons" class="blue dim link">Using SVG icons</a> example.</p>
        <Demo prefix="/guide/plugins/bootstrap/horizontal-form" frameworks={['Bootstrap']} />
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

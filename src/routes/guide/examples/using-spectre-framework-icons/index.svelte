<svelte:head>
	<title>FormValidation • Using Spectre framework icons</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Using Spectre framework icons</h1>
    
    <section class="mv5">
        <p class="lh-copy">The <a href="https://picturepan2.github.io/spectre/" class="blue dim link">Spectre framework</a> provides a built-in <a href="https://picturepan2.github.io/spectre/elements.html#icons" class="blue dim link">icons set</a> which can be used with <a href="/guide/plugins/spectre/" class="blue dim link">Spectre</a> plugin.</p>
        <p class="lh-copy">In order to use these icons, you have to wrap the field in a <code>has-icon-right</code> class:</p>
<SampleCode lang="html" code={`
<div class="has-icon-right">
    <input type="text" class="form-input" name="name" />
</div>
`} />
        <p class="lh-copy">Below is a starting point to use the <a href="/guide/plugins/icon/" class="blue dim link">Icon plugin</a> along with the <a href="/guide/plugins/spectre/" class="blue dim link">Spectre plugin</a>:</p>
        <div class="mb4">
<SampleCode lang="html" code={`
<!-- Put them in the head tag -->
<link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre.min.css">
<link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre-icons.min.css">
<link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">

<form id="demoForm">
    ...
</form>

<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Spectre.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                spectre: new FormValidation.plugins.Spectre(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'form-icon icon icon-check',
                    invalid: 'form-icon icon icon-cross',
                    validating: 'form-icon loading',
                }),
            },
        }
    );
});
</script-tag>
`} />
        </div>
        <Demo prefix="/guide/plugins/spectre/horizontal-form" frameworks={['Spectre']} />
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

<svelte:head>
	<title>FormValidation • Using Semantic UI framework icons</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Using Semantic UI framework icons</h2>
    
    <section class="mv5">
        <p class="lh-copy">The Semantic UI framework provides an <a href="https://semantic-ui.com/elements/icon.html" class="blue dim link">icon set</a> which can be used with the Icon plugin.</p>
        <p class="lh-copy">Followed by the <a href="https://semantic-ui.com/elements/input.html#icon" class="blue dim link">suggestion</a> from Semantic UI, the input must place inside <code>ui input icon</code> element:</p>
<SampleCode lang="html" code={`
<div class="ui input icon">
    <input type="text" name="name" />
</div>    
`} />
        <p class="lh-copy">Below is a starting point to use the <a href="/guide/plugins/icon/" class="blue dim link">Icon plugin</a> along with the <a href="/guide/plugins/semantic/" class="blue dim link">Semantic plugin</a>:</p>
        <div class="mb4">
<SampleCode lang="html" code={`
<!-- Put them in the head tag -->
<link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
<link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">

<form id="demoForm">
    ...
</form>

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
                icon: new FormValidation.plugins.Icon({
                    valid: 'checkmark icon',
                    invalid: 'remove icon',
                    validating: 'refresh icon',
                }),
            },
        }
    );
});
</script-tag>
`} />
        </div>
        <Demo prefix="/guide/plugins/semantic/horizontal-form" frameworks={['Semantic']} />
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

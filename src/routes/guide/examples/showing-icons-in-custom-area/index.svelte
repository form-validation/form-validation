<svelte:head>
	<title>FormValidation • Showing icons in custom area</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Showing icons in custom area</h1>
    
    <section class="mv5">
        <p class="lh-copy">In this example, I will help you how to show the feedback icons in custom area which are right after the labels. We're going to archive it by setting the <code>onPlaced</code> option which is called when the icon element is inserted to the document.</p>
<SampleCode lang="javascript" code={`
icon: new FormValidation.plugins.Icon({
    ...,
    onPlaced: function(e) {
        // e.classes is an object containing values 
        // for valid, invalid and validating CSS classes
        
        // e.element is the field element
        // e.field is the field name
        // e.iconElement is the icon element
    }
}),
`} />
        <p class="lh-copy">Despite that the feedback icons are placed at the particular area, you might need customized CSS styles to adjust their position:</p>
        <div class="mb4">
<SampleCode lang="html" code={`
<style>
.fv-plugins-icon[data-field="username"],
.fv-plugins-icon[data-field="email"] {
    display: inline-block;
    position: static;
    height: auto;
    line-height: normal;
}
</style>

<input name="username" />
...
<input name="email" />
`} />            
        </div>
        <Demo prefix="/guide/examples/showing-icons-in-custom-area" frameworks={['tachyons']} />
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

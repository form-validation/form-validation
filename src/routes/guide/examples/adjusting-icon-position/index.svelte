<svelte:head>
	<title>FormValidation • Adjusting icon position</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Adjusting icon position</h1>
    
    <section class="mv5">
        <p class="lh-copy">The Icon plugin generates the following markup for icon:</p>
<SampleCode lang="html" code={`
// FIELD_NAME is the name of field
// CSS_CLASSES is the list of CSS classes defined in the valid, invalid, validating options    
<i data-field="FIELD_NAME" class="fv-plugins-icon CSS_CLASSES"></i>
`} />
        <p class="lh-copy">In some cases, the icons aren't shown properly. Understanding the markup of icon and customizing the value of <code>top</code> and <code>right</code> properties for icon's class, you can adjust the feedback icon to deserved position.</p>
        <p class="lh-copy">The following example demonstrates this technique when using the Bootstrap's <a href="http://getbootstrap.com/docs/4.1/components/input-group/" class="blue dim link">Input Group</a> with the <a href="/docs/plugin/bootstrap/" class="blue dim link">Bootstrap</a> plugin:</p>

        <div class="mb4">
<SampleCode lang="html" code={`
<style>
// fv-plugins-bootstrap is CSS class that will be added to the form automatically
// when the Bootstrap plugin is used.
// You might need to change that if your form is made in other CSS frameworks

.fv-plugins-bootstrap .form-group.inputGroupContainer .fv-plugins-icon,
.fv-plugins-bootstrap .form-group.selectContainer .fv-plugins-icon {
    // Customize the icon's position
    right: -20px;
}
</style>

<div class="form-group row inputGroupContainer">
    <!-- Input group element -->
    ...
</div>

<div class="form-group row selectContainer">
    <!-- Select element -->
    ...
</div>
`} />
        </div>
        <Demo prefix="/guide/examples/adjusting-icon-position" frameworks={['Bootstrap']} />
    </section>

    <section class="mv5">
        <Heading>Hiding icon for particular field</Heading>

        <p class="lh-copy">Since each icon element for given field has <code>data-field="FIELD_NAME"</code> attribute, we can easily hide the icon by adding one more CSS property as:</p>
<SampleCode lang="html" code={`
<style>
// Hide the icon for phoneNumber field
.fv-plugins-icon[data-field="phoneNumber"] {
    display: none;
}    
</style>

<input name="phoneNumber" />
`} />
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
import Heading from '../../../../components/Heading.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

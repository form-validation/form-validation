<svelte:head>
	<title>FormValidation • Icon plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Icon plugin</h1>
    <h2 class="f4 fw4 tc">Display various icons based on the field validity</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">With this plugin, you can see the icon whenever the field is being validated, and after the validation completes, it also displays other icon depending on the field is valid or not. 
            The following piece of code is the starting point to use the Icon plugin:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
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
                    // Following is the default values
                    valid: 'fv-plugins-icon--valid',
                    invalid: 'fv-plugins-icon--invalid',
                    validating: 'fv-plugins-icon--validating',
                }),
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

        <p class="lh-copy">The <code>validating</code>, <code>valid</code> and <code>invalid</code> options present the list of CSS classes separated by a space that will be added to the icon when the field is being validated, valid or invalid.</p>
        <p class="lh-copy">The Icon plugin only supports the form made in the following CSS frameworks:</p>

        <Cards>
            {#each _frameworks as p}
            <Card target="/guide/plugins/{p.toLowerCase()}/" title="{p}"></Card>
            {/each}
        </Cards>

        <Tip>The <a href="/guide/plugins/mandatory-icon/" class="blue dim link">MandatoryIcon</a> plugin is useful when you want to display the mandatory icon for required fields</Tip>
    </section>
    
    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <Examples examples={[
        'Adjusting icon position',
        'Clearing field when clicking the icon',
        'Showing icons in custom area',
        'Using FontAwesome icons',
        'Using Glyphicons icons',
        'Using Material Design icons',
        'Using Semantic UI framework icons',
        'Using Spectre framework icons',
        'Using SVG icons',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/plugins/foundation/">Foundation plugin</PrevButton>
            <NextButton href="/guide/plugins/j/">J plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Card from '../../../../components/Card.svelte';
import Cards from '../../../../components/Cards.svelte';
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';

const _frameworks = [
    'Bootstrap', 'Bootstrap3', 'Bulma', 'Foundation', 'Materialize', 'Milligram', 'mini', 'MUI',
    'Pure', 'Semantic', 'Shoelace', 'Spectre', 'Tachyons', 'Turret', 'UIkit',
];
</script>

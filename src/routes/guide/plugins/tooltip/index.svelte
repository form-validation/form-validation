<svelte:head>
	<title>FormValidation • Tooltip plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Tooltip plugin</h1>
    <h2 class="f4 fw4 tc">Show error message in a tooltip</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">You have to use this plugin with <a href="/guide/plugins/icon/" class="blue dim link">Icon</a> plugin which displays different icons depending on the field validity. The error message then will be shown inside a tooltip when you click or hover on the icon.</p>
        <p class="lh-copy">The following piece of code is the starting point to use the Tooltip plugin:</p>
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
                // You have to register the Tooltip plugin before Icon plugin
                tooltip: new FormValidation.plugins.Tooltip({
                    placement: ...,
                    trigger: ...,
                }),
                icon: new FormValidation.plugins.Icon(),
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
    </section>

    <section class="mv5">
        <Heading>Options</Heading>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Option</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>placement</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">Indicate where the tooltip will be displayed over the icon. Can be one of the following values:</p>
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>top</code> (the default value)</li>
                        <li><code>top-left</code></li>
                        <li><code>top-right</code></li>
                        <li><code>bottom</code></li>
                        <li><code>bottom-left</code></li>
                        <li><code>bottom-right</code></li>
                        <li><code>left</code></li>
                        <li><code>right</code></li>
                    </ul>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>trigger</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">Indicate when the tooltip will be displayed. Can be one of the following values:</p>
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>click</code> (the default value): Clicking on the icon will show up the tooltip.</li>
                        <li><code>hover</code>: Hovering the mouse over the icon will show up the tooltip.</li>
                    </ul>
                </td>
            </tr>
        </table>

        <p class="lh-copy">Same as the <a href="/guide/plugins/icon/" class="blue dim link">Icon</a> plugin, the Tooltip plugin only supports the form made in the following CSS frameworks:</p>

        <div style="display: grid; grid-column-gap: 2em; grid-row-gap: 2em; grid-template-columns: repeat(3, 1fr);">
            {#each _frameworks as p, i}
            <div class="br2" class:bg-blue={i % 4 === 0} class:bg-red={i % 4 === 1} class:bg-gold={i % 4 === 2} class:bg-green={i % 4 === 3}>
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/plugins/{p.toLowerCase()}/" class="link pointer white db h-100">
                        <div class="f4 fw6">{p}</div>
                    </a>
                </div>
            </div>
            {/each}
        </div>

        <p class="lh-copy">If you don't want the plugin supporting given CSS framework above to show the error message, you can set <code>defaultMessageContainer: false</code> as following:</p>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            ...
        },
        plugins: {
            bootstrap: new FormValidation.plugins.Bootstrap({
                // Do not show the error message in default area
                defaultMessageContainer: false,
            }),
            // Again, remember to register the Tooltip plugin before Icon plugin
            tooltip: new FormValidation.plugins.Tooltip(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        },
    }
);
`} />
    </section>
    
    <section class="mv5">
        <Heading>Basic example</Heading>
        <p class="lh-copy">In the following form, try to press the <span class="i">Add product</span> button, and then click on the any icon that is attached to any invalid field.</p>
        <Demo prefix="/guide/plugins/tooltip/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/plugins/tachyons/">Tachyons plugin</PrevButton>
            <NextButton href="/guide/plugins/transformer/">Transformer plugin</NextButton>
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

const _frameworks = [
    'Bootstrap', 'Bootstrap3', 'Bulma', 'Foundation', 'Materialize', 'Milligram', 'mini', 'MUI',
    'Pure', 'Semantic', 'Shoelace', 'Spectre', 'Tachyons', 'Turret', 'UIkit',
];
</script>

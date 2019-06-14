<svelte:head>
	<title>FormValidation • Message plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Message plugin</h1>
    <h2 class="f4 fw4 tc">Display error message</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">This plugin displays error message taken from the <code>message</code> option of each validator.</p>
        <p class="lh-copy">The following piece of code is the starting point to use the Message plugin:</p>
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
                message: new FormValidation.plugins.Message({
                    clazz: ...,
                    container: ...,
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
                <td class="pv2 ph3"><code>clazz</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The CSS class added to the message element</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>container</code></td>
                <td class="pv2 ph3">String or Function</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">Define where the message is displayed. It can be a CSS selector or a function as </p>
<SampleCode lang="html" code={`
function(field, element) {
    // field is the field name
    // element is the field element

    // Returns an element that will be used as message container
}    
`} />
                    <p class="lh-copy">By default, all messages are shown at the end of form.</p>
                </td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>Events</Heading>
        <p class="lh-copy">This plugin provides 2 events that you can listen on:</p>
<SampleCode lang="javascript" code={`
FormValidation
    .formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                message: new FormValidation.plugins.Message({
                    ...
                }),
            },
        }
    );
    .on('plugins.message.placed', function(e) {
        // This event is triggered after the Message plugin 
        // prepares the message elements for all fields
        
        // e.element: The field element
        // e.field: The field name
        // e.elements: The field elements
        // e.messageElement: The message element
    })
    .on('plugins.message.displayed', function(e) {
        // This event is triggered after the Message plugin displays the error
        
        // e.element: The field element
        // e.field: The field name
        // e.message: The error
        // e.messageElement: The message element
        // e.meta: The meta data returned by validation result if available
        // e.validator: The validator name
    });
`} />
    </section>

    <section class="mv5">
        <Heading>Using with supported CSS frameworks</Heading>
        <p class="lh-copy">The Message plugin is enabled automatically when you use any of following plugins that support form made in particular CSS frameworks:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Framework</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Using with plugin</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Bootstrap 3 framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/bootstrap3" class="blue dim link">Bootstrap 3</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Bootstrap 4 framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/bootstrap" class="blue dim link">Bootstrap</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Bulma framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/bulma" class="blue dim link">Bulma</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Foundation framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/foundation" class="blue dim link">Foundation</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Materialize framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/materialize" class="blue dim link">Materialize</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Milligram framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/milligram" class="blue dim link">Milligram</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">mini.css framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/mini" class="blue dim link">Mini</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">MUI framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/mui" class="blue dim link">Mui</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Pure library</td>
                <td class="pv2 ph3"><a href="/guide/plugins/pure" class="blue dim link">Pure</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Semantic UI framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/semantic" class="blue dim link">Semantic</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Shoelace library</td>
                <td class="pv2 ph3"><a href="/guide/plugins/shoelace" class="blue dim link">Shoelace</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Spectre framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/spectre" class="blue dim link">Spectre</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Tachyons library</td>
                <td class="pv2 ph3"><a href="/guide/plugins/tachyons" class="blue dim link">Tachyons</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">turretcss framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/turret" class="blue dim link">Turret</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">UIkit framework</td>
                <td class="pv2 ph3"><a href="/guide/plugins/uikit" class="blue dim link">Uikit</a></td>
            </tr>
        </table>
        <p class="lh-copy">These plugins set the <code>clazz</code> and <code>container</code> options and then display the error message at the desired position. If you want the error messages to be shown at another area, set the <code>defaultMessageContainer</code> option as following snippet:</p>
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
            // I want to display errors at my own areas
            message: new FormValidation.plugins.Message({
                container: ...,
            }),
        },
    }
);
`} />        
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.4.0: Fix an issue that the Message plugin doesn't ignore field on IE11</li>
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <Examples examples={[
        'Hiding messages',
        'Showing all messages',
        'Showing custom message returned from server',
        'Showing dynamic message',
        'Showing messages in custom area',
        'Validating checkbox list placed in multiple columns',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/materialize">Materialize plugin</PrevButton>
            <NextButton target="/guide/plugins/milligram">Milligram plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

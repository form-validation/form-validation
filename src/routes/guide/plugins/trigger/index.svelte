<svelte:head>
	<title>FormValidation • Trigger plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Trigger plugin</h1>
    <h2 class="f4 fw4 tc lh-copy">Indicate the events which the validation will be executed when these events are triggered</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">By default, the field will be validated automatically when the <code>input</code> event is triggered. This plugin allows to set the specific events for given field as fllowing:</p>
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
                trigger: new FormValidation.plugins.Trigger({
                    event: ...,
                    threshold: ...,
                    delay: ...,
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
                <td class="pv2 ph3"><code>event</code></td>
                <td class="pv2 ph3">String or Object</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">Define the events. Can be one of the following formats:</p>
<SampleCode lang="javascript" code={`
// Validate fields when the blur events are triggered
event: 'blur',

// If you need multiple events are fired,
// then separate them by a space
event: 'blur change',

// We can indicate different events for 
// each particular field
event: {
    fullName: 'blur',
    email: 'change',
},

// If we do not want the field to be validated 
// automatically, set the associate value to false
event: {
    // The field is only validated when we click the 
    // submit button of form 
    // (if the SubmitButton plugin is used)
    email: false,
},
`} />
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>threshold</code></td>
                <td class="pv2 ph3">Number or Object</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">Only perform the validation if the field value exceed this number of characters. By default, it's set to 0.</p>
<SampleCode lang="javascript" code={`
// Validate fields when they have at least 5 characters
threshold: 5,

// We can indicate different threshold for 
// each particular field
threshold: {
    fullName: 15,
    email: 10,
},
`} />
                    <p class="lh-copy">This option does not effect to the elements which user cannot type, such as radio, checkbox, select one.</p>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>delay</code></td>
                <td class="pv2 ph3">Number or Object</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">Pending validation for a given number of seconds after user stops filling in the field. By default, it's set to 0.
                        It's really useful if the field needs to perform validation in server side, such as the <a href="/guide/validators/remote" class="blue dim link">remote</a> validator.</p>
<SampleCode lang="javascript" code={`
// Validate fields after 5 seconds from the moment
// user stops filling in the field
delay: 5,

// We can indicate different delay for 
// each particular field
delay: {
    fullName: 0,
    username: 5,
},
`} />                    
                </td>
            </tr>
        </table>
    </section>
    
    <section class="mv5">
        <Heading>Basic example</Heading>
        <p class="lh-copy">In the following form, the <span class="i">Title</span> field will be validated while user type any character (<code>trigger="keyup"</code>). The <span class="i">Summary</span> field will be validated when user lose the focus (<code>trigger="blur"</code>).</p>
        <Demo prefix="/guide/plugins/trigger/basic" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.1.0: Added new <code>delay</code> option</li>
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <Examples examples={[
        'Pending validation for a given number of seconds',
        'Performing validation if field value exceed given number of characters',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/transformer">Transformer plugin</PrevButton>
            <NextButton target="/guide/plugins/turret">Turret plugin</NextButton>
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

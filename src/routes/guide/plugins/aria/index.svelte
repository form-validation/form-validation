<svelte:head>
	<title>FormValidation • Aria plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Aria plugin</h1>
    <h2 class="f4 fw4 tc">Add ARIA attributes based on the field validity</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The list of ARIA attributes are:</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>aria-invalid</code>, <code>aria-describedby</code> for field element</li>
            <li><code>aria-hidden</code>, <code>role</code> for associated error message element</li>
        </ul>
        <p class="lh-copy">The following piece of code is the starting point to use the Aria plugin:</p>
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
                aria: new FormValidation.plugins.Aria(),
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
        <Heading>Basic example</Heading>
        <p class="lh-copy">Try to press the <span class="i">Add product</span> button and inspect the field and error message elements using your browser <span class="i">Developer Tools</span> to see how the ARIA attributes above are added to them.</p>
        <Demo prefix="/guide/plugins/aria/basic" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/alias">Alias plugin</PrevButton>
            <NextButton target="/guide/plugins/auto-focus">AutoFocus plugin</NextButton>
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
</script>

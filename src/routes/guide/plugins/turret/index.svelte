<svelte:head>
	<title>FormValidation • Turret plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Turret plugin</h1>
    <h2 class="f4 fw4 tc lh-copy">Integrate with <a href="https://turretcss.com" class="blue dim link">turretcss</a> framework. Support turretcss v5.1.3</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The following piece of code is the starting point to validate the form made in turretcss:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bigfishtv-turret/5.1.3/turretcss.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Turret.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                turret: new FormValidation.plugins.Turret(),
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
        <p class="lh-copy">The next sections list out some examples of various forms made with turretcss.</p>
    </section>

    <section class="mv5">
        <Heading>Stacked form</Heading>
        <p class="lh-copy">You need to add the <code>fv-stacked-form</code> class to the <code>form</code> element such as:</p>
        <div class="mb4">
            <SampleCode lang="html" code={`
<form class="fv-stacked-form">
    <!-- The fields go here -->
    ...
</form>
`} />
        </div> 
        <Demo prefix="/guide/plugins/turret/stacked-form" frameworks={['turret']} />
    </section>
    
    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.4.0: Support Turret CSS v5.1.3.</li>
            <li>v1.2.0: First release. It means that the Turret plugin requires FormValidation v1.2.0 or newer.</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/trigger">Trigger plugin</PrevButton>
            <NextButton target="/guide/plugins/uikit">Uikit plugin</NextButton>
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

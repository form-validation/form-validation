<svelte:head>
	<title>FormValidation • v0.8.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.8.0</h1>
    <h2 class="f4 fw4 tc">Released 27 June 2016</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <p class="lh-copy">This version of <a class="blue dim link" href="/download/">FormValidation</a> works with the latest versions of supported frameworks, including:</p>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Foundation v6</li>
            <li><a class="blue dim link" href="http://v4-alpha.getbootstrap.com/">Bootstrap v4 (alpha 2)</a> by setting <code>framework: 'bootstrap4'</code></li>
            <li>PureCSS v0.6.0</li>
            <li>Semantic UI v2.1.8</li>
            <li>UIKit v2.26.3</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Changes</Heading>
        <p class="lh-copy">If you want to try <a class="blue dim link" href="http://v4-alpha.getbootstrap.com/">Bootstrap 4 alpha 2</a> or still want to use <a class="blue dim link" href="http://foundation.zurb.com/sites/docs/v/5.5.3/">Foundation 5</a>, you need to follow the Upgrading to v0.8.0 section below.</p>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <a class="blue dim link" href="/guide/validators/credit-card/">creditCard</a> validator now supports more card types (Dankort, Elo, Forbrugsforeningen, Maestro International, Visa Electron)</li>
            <li>The <a class="blue dim link" href="/guide/validators/ip/">ip</a> validator now supports <a class="blue dim link" href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing">CIDR notation</a></li>
            <li>Return more information of the <a class="blue dim link" href="/guide/validators/file/">file</a> validator result, so user can display associated message if the selected file doesn't match given extension, type or size</li>
            <li>Pass <code>validator</code> along to the <code>status.field.fv</code> event</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Using <code>formnovalidate</code> attribute causes IE to send two postbacks to server</li>
            <li>Form cannot submit with <code>live</code> mode disabled (<code>live: 'disabled'</code>) and form has some radios/checkboxes</li>
            <li>Fix an exception when calling <code>destroy()</code> if a field is replaced manually</li>
            <li>The <a class="blue dim link" href="/guide/validators/cvv/">cvv</a> validator doesn't work properly if we transform the credit card value</li>
            <li>The <a class="blue dim link" href="/guide/validators/phone/">phone</a> validator should accept valid US phones such as 999 999 9999</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v0.8.0</Heading>
        <p class="lh-copy">You need to perform the following changes if you want to try Bootstrap 4 (alpha) or still want to use Foundation 5:</p>

        <h3>Step 1: Including the correct files</h3>
        <p class="lh-copy">This section is already mentioned in the Including library section:</p>
        <p class="lh-copy">Use with Bootstrap:</p>
        <SampleCode lang="html" code={`
<!-- Bootstrap CSS v4.0.0 alpha -->
<link-tag rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css">

<!-- FormValidation CSS file -->
<link-tag rel="stylesheet" href="/vendor/formvalidation/dist/css/formValidation.min.css">

<!-- jQuery v1.9.1 or higher -->
<script-tag src="/vendor/jquery/jquery.min.js"></script-tag>

<!-- Tether library, which is required if you want to use Bootstrap tooltip -->
<script-tag src="/vendor/tether/js/tether.min.js"></script-tag>

<!-- Bootstrap JS -->
<script-tag src="/vendor/bootstrap/js/bootstrap.min.js"></script-tag>

<!-- FormValidation plugin and the class supports validating Bootstrap form -->
<script-tag src="/vendor/formvalidation/dist/js/formValidation.min.js"></script-tag>
<script-tag src="/vendor/formvalidation/dist/js/framework/bootstrap4.min.js"></script-tag>        
`} />

        <Tip heading="Note">
            Don't confuse <code>bootstrap(.min).js</code> file provided by the Bootstrap framework with
            <code>bootstrap4(.min).js</code> provided by FormValidation which is placed inside the <code>formvalidation/dist/js/framework</code> directory.
            They are two different files and both of them need to be included as mentioned above.
        </Tip>

        <p class="lh-copy">Use with Foundation:</p>
        <SampleCode lang="html" code={`
<!-- Foundation v5 CSS -->
<link-tag rel="stylesheet" href="/vendor/foundation/css/normalize.min.css">
<link-tag rel="stylesheet" href="/vendor/foundation/css/foundation.min.css">

<!-- FormValidation CSS file -->
<link-tag rel="stylesheet" href="/vendor/formvalidation/dist/css/formValidation.min.css">

<!-- jQuery v1.9.1 or higher -->
<script-tag src="/vendor/jquery/jquery.min.js"></script-tag>

<!-- Foundation JS file -->
<script-tag src="/vendor/foundation/js/vendor/modernizr.js"></script-tag>
<script-tag src="/vendor/foundation/js/foundation/foundation.js"></script-tag>
<script-tag src="/vendor/foundation/js/foundation/foundation.tooltip.js"></script-tag>

<!-- FormValidation plugin and the class supports validating Foundation form -->
<script-tag src="/vendor/formvalidation/dist/js/formValidation.min.js"></script-tag>
<script-tag src="/vendor/formvalidation/dist/js/framework/foundation5.min.js"></script-tag>
`} />

        <Tip heading="Note">
            Don't confuse <code>foundation(.min).js</code> file provided by the Foundation framework with <code>foundation5(.min).js</code> provided by FormValidation which is placed inside the <code>formvalidation/dist/js/framework</code> directory.
            They are two different files and both of them need to be included as mentioned above
        </Tip>

        <h3>Step 2: Setting the framework option</h3>
        <p class="lh-copy">You need to set the <code>framework</code> option as following:</p>

        <SampleCode lang="javascript" code={`
// If your form uses Bootstrap 4 alpha
$(yourForm).formValidation({
    framework: 'bootstrap4',
    ...
});      

// If your form uses Foundation 5
$(yourForm).formValidation({
    framework: 'foundation5',
    ...
});      
`} />
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
import Tip from '../../../components/Tip.svelte';
</script>
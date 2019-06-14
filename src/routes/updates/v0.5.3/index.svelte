<svelte:head>
	<title>FormValidation • v0.5.3</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.5.3</h1>
    <h2 class="f4 fw4 tc">Released 05 November 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Add <code>min</code>, <code>max</code> options for the <a href="/guide/validators/date" class="blue dim link">date</a> validator</li>
            <li>Add <a href="/guide/validators/color" class="blue dim link">color</a> validator</li>
            <li>The <a href="/guide/validators/string-length" class="blue dim link">stringLength</a> validator adds option to evaluate length in UTF-8 bytes</li>
            <li>Add <code>trim</code> option for the <a href="/guide/validators/string-length" class="blue dim link">stringLength</a> validator</li>
            <li>Add <code>minFiles</code>, <code>maxFiles</code>, <code>minTotalSize</code>, <code>maxTotalSize</code> options for the <a href="/guide/validators/file" class="blue dim link">file</a> validator</li>
            <li>Add France <a href="/guide/validators/zip-code" class="blue dim link">postal code</a> validator</li>
            <li>Add Ireland <a href="/guide/validators/zip-code" class="blue dim link">postal code</a> validator</li>
            <li>Add German <a href="/guide/validators/phone" class="blue dim link">phone number</a> and <a href="/guide/validators/zip-code" class="blue dim link">postal code</a> validators</li>
            <li>Add Portugal <a href="/guide/validators/zip-code" class="blue dim link">postal code</a> validator</li>
            <li>Add <code>autoFocus</code> option</li>
            <li>Add Austria and Switzerland <a href="/guide/validators/zip-code" class="blue dim link">postal code</a> validators</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <a href="/guide/validators/color" class="blue dim link">color</a> validator only accepts 6 hex character values when using HTML 5 <code>type='color'</code> attribute</li>
            <li>Comma separator handling in <a href="/guide/validators/greater-than/">greaterThan</a>, <a href="/guide/validators/less-than" class="blue dim link">lessThan</a> validators</li>
            <li>Replace ',' with '.' to validate decimal numbers correct</li>
            <li>Put tooltip/popover on bottom if there is not enough space on top</li>
            <li>The <a href="/guide/validators/remote" class="blue dim link">remote</a> validator allows to set <code>data</code> options via HTML attributes</li>
            <li>Enable validator when setting <code>data-bv-validatorname="data-bv-validatorname"</code></li>
            <li>Requires jQuery 1.9.1 or higher</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Fix double submit with defered validators</li>
            <li>Tooltip/popover isn't destroyed when the field is valid</li>
            <li>The field is validated only one time when setting <code>trigger: 'blur'</code>, <code>container: 'tooltip'</code></li>
            <li>Fix <code>isValidField()</code> and <code>validateField()</code> methods for fields without validators</li>
            <li>Fix the issue when using multiple fields with same name, the tooltip of the last element is always shown</li>
            <li>The <code>error.field.bv</code> event isn't triggered if verbose is set to <code>false</code></li>
            <li>The <code>verbose</code> option for field doesn't override the form level</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
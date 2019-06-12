<svelte:head>
	<title>FormValidation • v0.4.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.4.0</h1>
    <h2 class="f4 fw4 tc">Released 03 April 2014</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li><i class="fa fa-star"></i> Set validator option by using HTML 5 attributes</li>
            <li><i class="fa fa-star"></i> Support HTML 5 input types:</li>
        </ul>

        <table class="collapse ba br2 b--black-10 pv2 ph3">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6">HTML 5 attribute</th>
                <th class="pv2 ph3 tl f6 fw6">Equivalent validator</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>min="..."</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/validators/greater-than/">greaterThan validator</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>max="..."</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/validators/less-than/">lessThan validator</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>maxlength="..."</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/validators/string-length/">stringLength validator</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>pattern="..."</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/validators/regexp/">regexp validator</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>required</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/validators/not-empty/">notEmpty validator</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>type="color"</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/validators/color/">color validator</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>type="email"</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/validators/email-address/">emailAddress validator</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>type="range"</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/validators/between/">between validator</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>type="url"</code></td>
                <td class="pv2 ph3"><a class="blue dim link" href="/guide/validators/uri/">uri validator</a></td>
            </tr>
        </table>

        <ul class="pa0 ma0 ml3 lh-copy">
            <li><i class="fa fa-star"></i> Set the custom trigger event. It's possible to use <code>data-bv-trigger</code> attribute or <code>trigger</code> option.</li>
            <li>Add <code>setLiveMode()</code> method to turn on/off the live validating mode</li>
            <li>Add <a class="blue dim link" href="/guide/validators/iban/">iban validator</a> for validating IBAN (International Bank Account Number)</li>
            <li>Add <a class="blue dim link" href="/guide/validators/uuid/">uuid validator</a>, support UUID v3, v4, v5</li>
            <li>Add <a class="blue dim link" href="/guide/validators/numeric/">numeric validator</a></li>
            <li>Add <a class="blue dim link" href="/guide/validators/integer/">integer validator</a></li>
            <li>Add <a class="blue dim link" href="/guide/validators/hex/">hex validator</a></li>
            <li>Add <a class="blue dim link" href="/guide/validators/string-case/">stringCase validator</a> to check a string is lower or upper case</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Changes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li><code>disableSubmitButtons()</code> is now marked as a public API</li>
            <li>The first parameter of <code>updateStatus()</code> method now accepts the field name only</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>The <a class="blue dim link" href="/guide/validators/regexp/">regexp validator</a> allows to pass a string</li>
            <li><i class="fa fa-star"></i> Support multiple elements with the same name</li>
            <li>Do not validate hidden (<code>type="hidden"</code>) and invisible element</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Submit button remains disabled after calling custom <code>submitHandler</code> and the form is valid</li>
            <li>The <code>fields.[fieldName].message</code> option is not used when showing the error message</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
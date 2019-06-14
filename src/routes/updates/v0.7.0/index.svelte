<svelte:head>
	<title>FormValidation • v0.7.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version 0.7.0</h1>
    <h2 class="f4 fw4 tc">Released 01 August 2015</h2>

    <section class="mv5">
        <Heading>New features</Heading>
        <p class="lh-copy">Allow to use multiple instance of validators via new alias option.</p>
        <p class="lh-copy">You can registry a new validator which is actually a built-in validator as following:</p>
        <SampleCode lang="javascript" code={`
$(form).formValidation({
    framework: '...',
    fields: {
        username: {
            validators: {
                required: {
                    alias: 'notEmpty',
                    message: 'The username is required'
                }
            }
        }
    }
});
`} />

        <p class="lh-copy">or use multiple instance of same validators (for example, <a href="/guide/validators/callback" class="blue dim link">callback</a>, as following piece of code):</p>
        <SampleCode lang="javascript" code={`
$(form).formValidation({
    framework: '...',
    fields: {
        password: {
            validators: {
                checkUppercase: {
                    alias: 'callback',
                    message: 'The password must have at least one uppercase character',
                    callback: function(value, validator, $field) {
                        ...
                    }
                },
                checkLowercase: {
                    alias: 'callback',
                    message: 'The password must have at least one lowercase character',
                    callback: function(value, validator, $field) {
                        ...
                    }
                },
                checkDigits: {
                    alias: 'callback',
                    message: 'The password must have at least one digit',
                    callback: function(value, validator, $field) {
                        ...
                    }
                },
                checkSpecial: {
                    alias: 'callback',
                    message: 'The password must have at least one special character',
                    callback: function(value, validator, $field) {
                        ...
                    }
                }
            }
        }
    }
});
`} />
    </section>

    <section class="mv5">
        <Heading>Changes</Heading>
        <p class="lh-copy">Change the file name and definition of some language packages:</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Old</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">New</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">be_FR</td>
                <td class="pv2 ph3">fr_BE</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">be_NL</td>
                <td class="pv2 ph3">nl_BE</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">gr_EL</td>
                <td class="pv2 ph3">el_GR</td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li><a href="/guide/validators/integer" class="blue dim link">integer</a> validator accepts leading zeros</li>
            <li><a href="/guide/validators/between" class="blue dim link">between</a>, <a href="/guide/validators/greater-than/">greaterThan</a>, <a href="/guide/validators/less-than" class="blue dim link">lessThan</a> validators
                now show the message where <code>%s</code> are replaced with the <code>min</code>, <code>max</code>, <code>value</code> options when the input isn't a number</li>
            <li><a href="/guide/validators/integer" class="blue dim link">integer</a> and <a href="/guide/validators/numeric" class="blue dim link">numeric</a> validators support more locales by providing new thousands and decimal separator options</li>
            <li>When using tooltip for multiple fields, it always shows on the last field</li>
            <li>Adjust the default messages when using the <a href="/guide/validators/string-length" class="blue dim link">stringLength</a> validator</li>
            <li>The Spanish <a href="/guide/validators/id" class="blue dim link">id</a>, <a href="/guide/validators/vat" class="blue dim link">vat</a> validators add <code>type</code> to the return value. The type can be <code>DNI</code>, <code>NIE</code> or <code>CIF</code>.</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Fix an issue on IE 10/11 that causes an input element with placeholder attribute to be validated automatically when it's focused</li>
            <li>Fix the bug that the <code>isValidContainer()</code> method doesn't ignore field which validators are totally disabled</li>
            <li>The field's <code>enabled</code> option doesn't work in declarative mode</li>
            <li>Fix the bug causing the <code>message</code> option for form isn't used. The plugin uses default message provided by each validator instead</li>
        </ul>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Heading from '../../../components/Heading.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
</script>
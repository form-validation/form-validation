<svelte:head>
	<title>FormValidation • Declarative plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Declarative plugin</h1>
    <h2 class="f4 fw4 tc">Provide the ability of declaring validator options via HTML attributes</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">As you know, you can declare the field validators in programmatic way:</p>
<SampleCode lang="html" code={`
<!-- Field -->
<input name="userName" />

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                userName: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        },
                        stringLength: {
                            min: 6,
                            message: 'The name must be more than 6 characters long'
                        },
                    }
                }
            },
        }
    );
});
</script-tag>
`} />
        <p class="lh-copy">This plugin allows to set the validator options by using equivalent HTML attributes. The following piece of code demonstrates how the Declarative plugin does it:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...
        <!-- Declare the validator rules -->
        <input name="userName"
            data-fv-not-empty="true"
            data-fv-not-empty___message="The username is required"

            data-fv-string-length="true"
            data-fv-string-length___min="6"
            data-fv-string-length___message="The name must be more than 6 characters long"
        />
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            // You don't need to declare the field validator here anymore
            plugins: {
                ...,
                declarative: new FormValidation.plugins.Declarative({
                    html5Input: ...,
                    prefix: ...,
                }),
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
        <Heading>Options for field declarations</Heading>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Option</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>html5Input</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3 lh-copy">Set it to <code>true</code> to enable the validators automatically based on the input type or particular HTML 5 attributes. By default, it's set to <code>false</code>. Look at the <span class="i">HTML 5 example</span> below for more information.</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>prefix</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The prefix of attributes. By default, it is set to <code>data-fv-</code></td>
            </tr>
        </table>

        <p class="lh-copy">The HTML attribute is a combination of <code>prefixName-validatorName___optionName</code>, where</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>prefixName</code> is replaced with the <code>prefix</code> option above</li>
            <li><code>validatorName</code> is replaced with the lowercase of validator's name. Any uppercase characters found in validator's name has to be turned into a dash (<code>-</code>) followed by its lowsercase</li>
            <li><code>optionName</code> is replaced with the lowsercase of validator's option. Any uppercase characters found in validator's option has to be turned into a dash (<code>-</code>) followed by its lowsercase</li>
        </ul>
        
        <p class="lh-copy">Below is a few examples of declaring validator options in both programmatic and declarative modes:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Validator</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Programmatic mode</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Declarative mode</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/validators/not-empty" class="blue dim link">notEmpty</a></td>
                <td class="pv2 ph3">
<SampleCode lang="javascript" code={`
notEmpty: {
    message: ...,
}    
`} />
                </td>
                <td class="pv2 ph3">
<SampleCode lang="html" code={`
data-fv-not-empty="true"
data-fv-not-empty___message="..."
`} />
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/validators/string-length" class="blue dim link">stringLength</a></td>
                <td class="pv2 ph3">
<SampleCode lang="javascript" code={`
stringLength: {
    min: ...,
    max: ...,
    utf8Bytes: ...,
}    
`} />
                </td>
                <td class="pv2 ph3">
<SampleCode lang="html" code={`
data-fv-string-length="true"
data-fv-string-length___min="..."
data-fv-string-length___max="..."
data-fv-string-length___utf8-bytes="..."
`} />
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/validators/uri" class="blue dim link">uri</a></td>
                <td class="pv2 ph3">
<SampleCode lang="javascript" code={`
uri: {
    allowLocal: ...,
    message: ...,
    allowEmptyProtocol: ...,
}    
`} />
                </td>
                <td class="pv2 ph3">
<SampleCode lang="html" code={`
data-fv-uri="true"
data-fv-uri___allow-local="..."
data-fv-uri___message="..."
data-fv-uri___allow-empty-protocol="..."
`} />
                </td>
            </tr>
        </table>
        
        <p class="lh-copy">If there are multiple elements having the same name, you just need to set the HTML attribute to one of them. For example:</p>
<SampleCode lang="html" code={`
<div class="mb2">
    <label>
        <input type="checkbox" name="size[]" value="s" 
            data-fv-not-empty="true"
            data-fv-not-empty___message="The size is required" /> S
    </label>
</div>
<div class="mb2">
    <label><input type="checkbox" name="size[]" value="m" /> M</label>
</div>
<div class="mb2">
    <label><input type="checkbox" name="size[]" value="l" /> L</label>
</div>
<div class="mb2">
    <label><input type="checkbox" name="size[]" value="xl" /> XL</label>
</div>    
`} />
        <p class="lh-copy">There are some validators which not all options are configurable via HTML attribute. Refer to each validator documentation to see exactly the equivalent HTML attribute for each option.</p>
        <p class="lh-copy">In that case, you can use both programmatic and declarative modes to set the validator options.</p>
    </section>

    <section class="mv5">
        <Heading>Options for plugin declarations</Heading>

        <Tip heading="Notice">The plugin declaration isn't supported when using with ES6 module.</Tip>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Option</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>pluginPrefix</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The prefix of plugin declaration attributes. By default, it is set to <code>data-fvp-</code></td>
            </tr>
        </table>

        <p class="lh-copy">The HTML attribute is a combination of <code>prefixName-pluginName___optionName</code>, where</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>prefixName</code> is replaced with the <code>pluginPrefix</code> option above</li>
            <li><code>pluginName</code> is replaced with the lowercase of plugin's name. Any uppercase characters found in plugin's name has to be turned into a dash (<code>-</code>) followed by its lowsercase</li>
            <li><code>optionName</code> is replaced with the lowsercase of plugin's option. Any uppercase characters found in plugin's option has to be turned into a dash (<code>-</code>) followed by its lowsercase</li>
        </ul>

        <p class="lh-copy">Each plugin declaration requires an attribute named <code>prefixName-pluginName___class</code> which indicates the plugin class. All the plugin declarations need to be set for the form element.</p>
        <p class="lh-copy">Following is a simple code that demonstrates how to declare the attributes for plugins:</p>

<SampleCode lang="html" code={`
<form id="demoForm" method="POST"
    data-fvp-trigger="true"
    data-fvp-trigger___class="FormValidation.plugins.Trigger"
    
    data-fvp-tachyons="true"
    data-fvp-tachyons___class="FormValidation.plugins.Tachyons"

    data-fvp-submit-button="true"
    data-fvp-submit-button___class="FormValidation.plugins.SubmitButton"

    data-fvp-icon="true"
    data-fvp-icon___class="FormValidation.plugins.Icon"
    data-fvp-icon___valid="fa fa-check"
    data-fvp-icon___invalid="fa fa-times"
    data-fvp-icon___validating="fa fa-refresh">
...
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    FormValidation.formValidation(form, {
        plugins: {
            // You have to register the Declarative plugin only
            declarative: new FormValidation.plugins.Declarative()
        }
    });
});
</script-tag>
`} />

        <p class="lh-copy">It serves the same functionalities such as declaring plugins as</p>

<SampleCode lang="html" code={`
<form id="demoForm">
...
</form>
    
<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    FormValidation.formValidation(form, {
        plugins: {
            declarative: new FormValidation.plugins.Declarative(),
            // Other plugins
            trigger: new FormValidation.plugins.Trigger(),
            tachyons: new FormValidation.plugins.Tachyons(),
            submitButton: new FormValidation.plugins.SubmitButton(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
        }
    });  
});
</script-tag>
`} />         
    </section>
    
    <section class="mv5">
        <Heading>Basic example</Heading>
        <Demo prefix="/guide/plugins/declarative/basic" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.7.0: 
                <ul class="pa0 ma0 ml3 lh-copy">
                    <li>Parse validator options of element attributes when a field is added via the <a href="/guide/api/add-field" class="blue dim link">addField()</a> method</li>
                    <li>
                        <p class="lh-copy">Fixed an issue that the plugin doesn't set the correct values for boolean options.</p>
                        <p class="lh-copy">For example, it transformts <code>data-fv-between___inclusive="false"</code> to <code>inclusive: 'false'</code>, not <code>inclusive: false</code>.</p>
                    </li>
                </ul>
            </li>
            <li>v1.4.0: Support the plugin declarations</li>
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <Examples examples={[
        'Using HTML 5 inputs and attributes',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/bulma">Bulma plugin</PrevButton>
            <NextButton target="/guide/plugins/default-submit">DefaultSubmit plugin</NextButton>
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
import Tip from '../../../../components/Tip.svelte';
</script>

<svelte:head>
	<title>FormValidation • Usage</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Usage</h1>
    <h2 class="f4 fw4 tc">Steps to use FormValidation</h2>

    <section class="mv5">
        <Heading>1. Uploading required files to server</Heading>
        <p class="lh-copy">You need to upload entire <code>dist/css</code> and <code>dist/js</code> folders to your server. The next steps assume that these folders are placed inside <code>vendors/formvalidation</code>.</p>
    </section>

    <section class="mv5">
        <Heading>2. Including necessary files</Heading>
        <p class="lh-copy">Add library's CSS and JavaScript files to the <code>head</code> and right before the <code>body</code> tags:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <!-- Your form goes here -->
    ...
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
</body>
</html>
`} />
        <p class="lh-copy">Since the library is written completely in ECMAScript 6 (ES 6), we need <a href="https://github.com/paulmillr/es6-shim" class="blue dim link">es6-shim.min.js</a> to help the older browsers understand the mordern features in ES6.</p>
        <p class="lh-copy">As mentioned in the previous section, <code>FormValidation.min.js</code> provides the most popular validators. You have to replaced it with <code>FormValidation.full.min.js</code> if you want to use all validators.</p>
        <p class="lh-copy">To reduce the page loading time:</p>
        <ul class="ma0 pl3 lh-copy">
            <li>Use the minified versions (<code>.min.css</code> and <code>min.js</code> files)</li>
            <li>Insert the JavaScript files right before the <code>body</code> tag</li>
        </ul>        
    </section>

    <section class="mv5">
        <Heading>3. Writing form and declaring validator rules</Heading>

        <p class="lh-copy">The library allows to define the validator for field that is taken from the value of <code>name</code> attribute. The following snippet is a basic example of a logging in form:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="loginForm" method="POST">
        <div>
            <label>Username</label>
            <input type="text" name="username" />
        </div>

        <div>
            <label>Password</label>
            <input type="password" name="password" />
        </div>

        <button type="submit">Submit</button>
    </form>
    
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('loginForm'),
        {
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long',
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The username can only consist of alphabetical, number and underscore',
                        },
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password must have at least 8 characters',
                        },
                    }
                },
            }
        }
    );
});    
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy">As you can see, <code>FormValidation.formValidation</code> accepts two parameters:</p>
        <ul class="ma0 pl3">
            <li class="lh-copy">The first parameter is the form element, which can be retrieved by the <code>document.getElementById()</code> method</li>
            <li class="lh-copy">The second parameter contains the options which is actually a JavaScript object. Its <code>fields</code> property maps the field name to the validator rules. 
                    The field name is defined by the <code>name</code> attribute, while the validator rules are defined by mapping the validator name to its options.
            </li>
        </ul>
        <Tip>If the field name contains special characters such as ., [, ], you must wrap it between single or double quote. See the <a href="/guide/getting-started/special-field-name/" class="blue dim link">Special field name</a> page</Tip>
        <Tip>If the field doesn't have the <code>name</code> attribute, you can use a <a href="/guide/getting-started/field-selector/" class="blue dim link">CSS selector</a> to specify it</Tip>
        <p class="lh-copy">All validators provides a common option named <code>message</code> that will be used to inform user if the associated field is invalid.</p>
        <Tip>The options can be updated on the fly with the <a href="/guide/api/update-validator-option/" class="blue dim link">updateValidatorOption()</a> method</Tip>
        <p class="lh-copy">You don't need to remember the options of any validator, because you can refer to them in each <a href="/guide/validators/" class="blue dim link">validator</a> page.</p>
        <p class="lh-copy">Here is what we have been following so far:</p>
        <Demo prefix="/guide/getting-started/usage/writing-form" selected="Native" frameworks={['Native']} />
        <p class="lh-copy"><span class="b">Hey, I try to play with the form</span>. Neither clicking the <span class="i">Submit</span> button nor typing on the username or password field does perform any validations.</p>
        <p class="lh-copy">That is the time to register plugins.</p>
    </section>

    <section class="mv5">
        <Heading>4. Adding plugins</Heading>

        <p class="lh-copy">FormValidation is developed on plugin based architecture. Its solid, lighweight core libary only implements needed <a href="/guide/api/" class="blue dim link">methods</a> and connects <a href="/guide/plugins/" class="blue dim link">all plugins</a> together. We need to enable some basic plugins to
            make the validation works.</p>
        <p class="lh-copy">In order to enable a particular plugin, you need to insert the plugin script (if required) and map a name with its instance in the <code>plugins</code> option:</p>
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
<!--
Some additional plugins are not included in FormValidation(.min).js.
You have to insert it here after FormValidation(.min).js
-->
<script-tag src="/vendors/formvalidation/dist/js/plugins/PluginNameHere.min.js"></script-tag>
<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                pluginName: new FormValidation.plugins.PluginNameHere({
                    // The plugin options. Some plugins don't require any options
                    ... 
                }),
                // Other plugins can be enabled here, of course
                ...
            },
        }
    );
});    
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy">We are going to enable some plugins to make the validations happen:</p>
        <ul class="list pa0 flex flex-wrap">
            <li class="w-50 ph3 mv3">
                <div class="pa3 br2 shadow-4 h-100 bg-blue">
                    <a href="/guide/plugins/message/" class="link pointer white db h-100">
                        <div class="f4 fw6 tc">Message</div>
                        <p class="lh-copy">Display error message that is defined in each validator options</p>
                    </a>
                </div>
            </li>
            <li class="w-50 ph3 mv3">
                <div class="pa3 br2 shadow-4 h-100 bg-red">
                    <a href="/guide/plugins/trigger/" class="link pointer white db h-100">
                        <div class="f4 fw6 tc">Trigger</div>
                        <p class="lh-copy">Indicate the events which the validation will be executed.</p>
                        <p class="lh-copy">For example, perform validations whenever user focus on field and press any key</p>
                    </a>
                </div>
            </li>
            <li class="w-50 ph3 mv3">
                <div class="pa3 br2 shadow-4 h-100 bg-gold">
                    <a href="/guide/plugins/submit-button/" class="link pointer white db h-100">
                        <div class="f4 fw6 tc">SubmitButton</div>
                        <p class="lh-copy">Automatically validate the form when pressing its Submit button</p>
                    </a>
                </div>
            </li>
            <li class="w-50 ph3 mv3">
                <div class="pa3 br2 shadow-4 h-100 bg-green">
                    <a href="/guide/plugins/default-submit/" class="link pointer white db h-100">
                        <div class="f4 fw6 tc">DefaultSubmit</div>
                        <p class="lh-copy">Submit the form if all fields are valid after validating</p>
                    </a>
                </div>
            </li>
        </ul>
        
        <p class="lh-copy">Our demo page now looks like:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="signinForm" method="POST">
        ...
    </form>
    
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<!--
The Message, Trigger, SubmitButton and DefaultSubmit are core plugins. They are already included
in FormValidation(.min).js. Hence, you don't need to insert external plugin scripts here.
-->
<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('signinForm'),
        {
            fields: {
                ...
            },
            plugins: {
                message: new FormValidation.plugins.Message({
                    clazz: '...',
                }),
                trigger: new FormValidation.plugins.Trigger(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
            },
        }
    );
});    
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy">Finally, you can try it in the following form to see how the validation works. Either clicking the <span class="i">Submit</span> button or filling in the fields to see it in action.</p>
        <Demo prefix="/guide/getting-started/usage/adding-plugins" selected="Native" frameworks={['Native']} />
    </section>

    <section class="mv5">
        <Heading>5. Using with popular CSS frameworks</Heading>

        <p class="lh-copy">In the previous section, you learn how to use FormValidation with a native form. Nowadays, it's very common that you rely on a CSS framework to speed up the development. FormValidation brings support for a lot of popular CSS frameworks.
            Each of them is supported by specific plugin which helps you minimize the integration parts such as automatically enabling the <a href="/guide/plugins/message/" class="blue dim link">Message</a> plugin, displaying the error messages at desired area instead of putting them at the bottom of form, etc.
        </p>
        <p class="lh-copy">The following sample code is a starter page for using the <a href="/guide/plugins/bootstrap/" class="blue dim link">Bootstrap</a> plugin to validate a form made in the <a href="https://getbootstrap.com/" class="blue dim link">Bootstrap 4</a> framework:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <!-- FontAwesome is used to show the feedback icons -->
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Bootstrap CSS has to be inserted before FormValidation CSS -->
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="yourForm" method="POST">
        ...
    </form>
    
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<!-- 
You need to insert the plugin that supports CSS framework.
It has to be inserted after FormValidation.min.js
-->
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>
<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('yourForm'),
        {
            fields: {
                ...
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                defaultSubmit: new FormValidation.plugins.DefaultSubmit(),
                // Support the form made in Bootstrap 4
                bootstrap: new FormValidation.plugins.Bootstrap(),
                // Show the feedback icons taken from FontAwesome
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },
        }
    );
});    
</script-tag>
</body>
</html>
`} /> 
        <Tip heading="Note"><code>Bootstrap.min.js</code> is the plugin provided by FormValidation. It is NOT the same as <code>Bootstrap(.min).js</code> file provided by Bootstrap framework.</Tip>
        <p class="lh-copy">You can see the sample code demonstrating for each plugin in the following example:</p>
        <Demo prefix="/guide/getting-started/usage/frameworks" selected="Bootstrap" frameworks={['Bootstrap', 'Bootstrap3', 'Bulma', 'Foundation', 'Materialize', 'Milligram', 'Mini', 'Mui', 'Pure', 'Semantic', 'Shoelace', 'Spectre', 'Tachyons', 'Turret', 'Uikit', 'Native']} />
        
        <p class="lh-copy">Refer to each plugin below if you want to get supports for particular CSS framework:</p>

        <div class="list pa0 flex flex-wrap">
        {#each ['Bootstrap', 'Bootstrap3', 'Bulma', 'Foundation', 'Materialize', 'Milligram', 'Mini', 'Mui', 'Pure', 'Semantic', 'Shoelace', 'Spectre', 'Tachyons', 'Turret', 'Uikit'] as framework, i}
            <div class="w-33 ph3 mv3 tc">
                <div class="pa3 br2 shadow-4 h-100" class:bg-blue={i % 4 === 0} class:bg-red={i % 4 === 1} class:bg-gold={i % 4 === 2} class:bg-green={i % 4 === 3}>
                    <a href="/guide/plugins/{framework.toLowerCase()}/" class="link pointer white db h-100">
                        <div class="f4 fw6">{framework}</div>
                    </a>
                </div>
            </div>
        {/each}
        </div>
    </section>

    <section class="cf mb4">
        <div class="fl w-50 tl">
            <a href="/guide/getting-started/" class="f3 pointer blue dim link pa2">&larr; Overview</a>
        </div>
        <div class="fl w-50 tr">
            <a href="/guide/getting-started/localization/" class="f3 pointer blue dim link pa2">Localization &rarr;</a>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

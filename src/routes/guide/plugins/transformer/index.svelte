<svelte:head>
	<title>FormValidation • Transformer plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Transformer plugin</h1>
    <h2 class="f4 fw4 tc">Modify the field value before doing validation</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">By default, the value of field will be taken by using the <code>value</code> property. In some case, you might want to adjust the value before performing validations.
            For example, the <a href="/guide/validators/numeric/" class="blue dim link">numeric</a> validator doesn't allow to use a comma (,) for thousand separator.</p>
        <p class="lh-copy">The Transformer plugin allows to filter the value of field. The following piece of code is the starting point to use the Transformer plugin:</p>
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
<script-tag src="/vendors/formvalidation/dist/js/plugins/Transformer.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                transformer: new FormValidation.plugins.Transformer({
                    // Replace FIELD_NAME and VALIDATOR_NAME with the real names
                    FIELD_NAME: {
                        VALIDATOR_NAME: function(field, element, validator) {
                            // field is the field name
                            // element is the field element
                            // validator is the name of validator

                            // Get the field value
                            let value = element.value;
        
                            // Modify the field value
                            // ...
                            
                            // Returns a string which will be used as field value to be validated
                            return value;
                        }
                    }
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
        <p class="lh-copy">FormValidation only uses the value returned by the Transformer plugin for validating. It does NOT send the modified value to the server when submitting the form.</p>
        <p class="lh-copy">The next sections introduce some examples demonstrating how to apply this option for popular validators.</p>
    </section>
    
    <section class="mv5">
        <Heading>Using with uri validator</Heading>
        <p class="lh-copy">The following form accepts a website address without <span class="i">http://</span> or <span class="i">https://</span> prefix.</p>
        <p class="lh-copy">By default, these kind of URLs don't pass the <a href="/guide/validators/uri/" class="blue dim link">uri</a> validators. Using the Transformer plugin for the uri validator, we can make it pass.</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
transformer: new FormValidation.plugins.Transformer({
    website: {
        // I want to modify the website field before executing uri validator
        uri: function(field, element, validator) {
            // Get the field value
            let value = element.value;

            // Check if it does not start with http:// or https://
            if (value && value.substr(0, 7) !== 'http://' && value.substr(0, 8) !== 'https://') {
                // then prefix with http://
                value = 'http://' + value;
            }

            // Return new value
            return value;
        },
    },
}),
`} />
        </div>
        <Demo prefix="/guide/plugins/transformer/uri" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Using with numeric validator</Heading>
        <p class="lh-copy">By default, the <a href="/guide/validators/numeric/" class="blue dim link">numeric</a> validator doesn't accept the comma. In the form below, the <span class="i">Price</span> field now accepts value using comma for thousand separator, such as <span class="i">12,570.634</span></p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
transformer: new FormValidation.plugins.Transformer({
    price: {
        numeric: (field, element, validator) => {
            // Get the field value
            const value = element.value;

            // Replace all commas by empty space
            return value.replace(',', '');
        },
    },
}),
`} />
        </div>        
        <Demo prefix="/guide/plugins/transformer/numeric" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Using with phone validator</Heading>
        <p class="lh-copy">The <a href="/guide/validators/phone/" class="blue dim link">phone</a> validator supports phone number in various countries. Despite the fact that it try to support many possible formats of a phone number, it can't cover all or special one which you want it to be a valid phone number.</p>
        <p class="lh-copy">For instance, a number containing the spaces such as XXX    XXX   XXXX (where X presents a digit from 0-9) is treated as invalid US phone number.</p>
        <p class="lh-cop">By using the Transformer plugin, we can turn this kind of number into a valid one by removing all spaces.</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
transformer: new FormValidation.plugins.Transformer({
    phoneNumber: {
        phone: function(field, element, validator) {
            // Get the field value
            const value = element.value;

            // Check if the value has format of XXX   XXX   XXXX
            if (/^(\d){3}(\s+)(\d){3}(\s+)(\d){4}$/.test(value)) {
                // Remove all spaces
                return value.replace(/\s/g, '');
            } else {
                // Otherwise, return the original value
                return value;
            }
        },
    },
}),
`} />
        </div>        
        <Demo prefix="/guide/plugins/transformer/phone" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Using with WYSIWYG editors</Heading>
        <p class="lh-copy">WYSIWYG stands for What You See Is What You Get. A WYSIWYG editor provides a visual way to edit the content of input which mostly is a textarea element.</p>
        <p class="lh-copy">Since these editors usually generate additional HTML tags, the raw content of input might be different with the value returned by the editor. The <a href="/guide/validators/not-empty/" class="blue dim link">notEmpty</a>,
            <a href="/guide/validators/string-length/" class="blue dim link">stringLength</a> validators maybe don't work correctly with the field using a WYSIWYG editor.</p>
        <p class="lh-cop">The following form uses the Transformer plugin to get raw text of a <a href="https://www.tinymce.com/" class="blue dim link">TinyMCE</a> editor before doing validations.</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
transformer: new FormValidation.plugins.Transformer({
    comment: {
        stringLength: function(field, element, validator) {
            // Get the plain text without HTML
            return tinyMCE.activeEditor.getContent({ format: 'text' });
        },
    },
}),
`} />
        </div>        
        <Demo prefix="/guide/plugins/transformer/tinymce" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.0.0: First release</li>
        </ul>
    </section>

    <Examples examples={[
        'Integrating with TinyMCE',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/plugins/tooltip/">Tooltip plugin</PrevButton>
            <NextButton href="/guide/plugins/trigger/">Trigger plugin</NextButton>
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

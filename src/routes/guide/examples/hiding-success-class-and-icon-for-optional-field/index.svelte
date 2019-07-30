<svelte:head>
	<title>FormValidation • Hiding success class and icon for optional field</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Hiding success class and icon for optional field</h1>

    <section class="mv5">
        <p class="lh-copy">FormValidation will not execute validators (except the <a href="/guide/validators/not-empty" class="blue dim link">notEmpty validator</a>) when a field is empty.
        But the library still adds some CSS classes and <a href="/guide/plugins/icon" class="blue dim link">icon</a> to the field element and its container to let user know that the field is valid.</p>
        <p class="lh-copy">For example, if your form uses the <a href="/guide/plugins/bootstrap" class="blue dim link">Bootstrap plugin</a>, 
        the plugin will add <code>.has-success</code> or <code>.has-danger</code> class to the container element. It also adds <code>.is-valid</code> or <code>.is-invalid</code> class to the field element.</p>

        <p class="lh-copy">If you want to remove the success class and feedback icon when a field is empty, then follow the next sections.</p>
    </section>

    <section class="mv5">
        <Heading>Hiding the success class</Heading>
        <p class="lh-copy">We can listen on the <a href="/guide/events/core.element.validated" class="blue dim link">core.element.validated</a> event as following:</p>
<SampleCode lang="javascript" code={`
const fv = FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        ...
    },
})
.on('core.element.validated', function(e) {
    // e.element presents the field element
    // e.valid indicates the field is valid or not
    
    // Get the validator options
    const validators = fv.getFields()[e.field].validators;

    // Check if the field has 'notEmpty' validator
    if (validators && validators['notEmpty']
        && validators['notEmpty'].enabled !== false) {
        return;
    }

    // Get the field value
    const value = fv.getElementValue(e.field, e.element);
    if (e.valid && value === '') {
        // Now the field is empty and valid
        // Remove the success color from the container
        const container = FormValidation.utils.closest(e.element, '.has-success');
        FormValidation.utils.classSet(container, {
            'has-success': false
        });

        // Remove 'is-valid' class from the field element
        FormValidation.utils.classSet(e.element, {
            'is-valid': false
        });
    }
});
`} />
    </section>

    <section class="mv5">
        <Heading>Hiding the valid icon</Heading>
        <p class="lh-copy">It's possible to get the icon element for a particular field element. First, we need to retrieve the Icon plugin instance via the <a href="/guide/api/get-plugin" class="blue dim link">getPlugin() method</a>,
        and then get the icon for given element:</p>
<SampleCode lang="javascript" code={`
const fv = FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        icon: new FormValidation.plugins.Icon({
            ...
        }),
    },
})

// Get the icon plugin instance
// fv is the FormValidation instance created above
// Assume that you're using the Icon plugin under the name 'icon'
const iconPlugin = fv.getPlugin('icon');
const iconElement = iconPlugin && iconPlugin.icons.has(e.element)
                    ? iconPlugin.icons.get(e.element)
                    : null;
`} />   

        <p class="lh-copy">Inside the <code>core.element.validated</code>'s event handler, we can hide the icon element when the field is valid and empty. Don't forget to show it when the field isn't valid or field isn't empty:</p>

<SampleCode lang="javascript" code={`    
const iconPlugin = fv.getPlugin('icon');
const iconElement = iconPlugin && iconPlugin.icons.has(e.element)
                    ? iconPlugin.icons.get(e.element)
                    : null;

// Get the field value
const value = fv.getElementValue(e.field, e.element);
if (e.valid && value === '') {
    ...
    // Hide the icon
    iconElement && (iconElement.style.display = 'none');
} else {
    // Show the icon
    iconElement && (iconElement.style.display = 'block');
}
`} />

        <p class="lh-copy">Here is a demonstration for the steps above. The <span class="i">Middle name</span> and <span class="i">Secondary email address</span> fields are optional.</p>
        <Demo prefix="/guide/examples/hiding-success-class-and-icon-for-optional-field" frameworks={['bootstrap']} />
    </section>

    <Examples examples={[
        'Changing success and error colors',
        'Hiding success class',
        'Hiding success class and icon for optional field',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>
<svelte:head>
	<title>FormValidation • Clearing field when clicking the icon</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Clearing field when clicking the icon</h1>
    
    <section class="mv5">
        <p class="lh-copy">The following example shows how to clear the field when clicking the <a href="/guide/plugins/icon/" class="blue dim link">feedback icon</a>.</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
const fv = FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            ...
        },
        plugins: {
            ...
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
                onPlaced: function(e) {
                    // e.field is the field name
                    // e.iconElement presents the icon element

                    e.iconElement.addEventListener('click', function() {
                        // Reset field when clicking on the associated icon
                        fv.resetField(e.field);
                    });
                },
            }),
        },
    }
);
`} />
        </div>
        <Demo prefix="/guide/examples/clearing-field-when-clicking-the-icon" frameworks={['Tachyons']} />
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

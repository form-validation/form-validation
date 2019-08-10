<svelte:head>
	<title>FormValidation • Validating fields placed in table cells</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Validating fields placed in table cells</h1>

    <section class="mv5">
        <p class="lh-copy">This example demonstrates how we can validate fields which are placed in table cells. It would like to know five projects you have done recently.</p>
        <p class="lh-copy">The form is available in both <a href="/guide/plugins/bootstrap" class="blue dim link">Bootstrap</a> and <a href="/guide/plugins/tachyons" class="blue dim link">Tachyons</a> frameworks, but you can use the same principle for other library or framework.</p>
        <p class="lh-copy">By default, the Bootstrap plugin will look for the <code>.form-group</code> element and determine where it can display the error message and feedback icons.
        In our case, since the fields are placed inside a table cell which is a <code>td</code> element, we need to let the plugin know about it:</p>

<SampleCode lang="javascript" code={`
const form = document.getElementById('demoForm');
const fv = FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        bootstrap: new FormValidation.plugins.Bootstrap({
            rowSelector: function(field, ele) {
                return 'td';
            },
        }),
    },
});
`} />
        <p class="lh-copy">It requires us to modify the CSS a little bit to <a href="/guide/examples/adjusting-icon-position" class="blue dim link">adjust icon position</a>:</p>

<SampleCode lang="css" code={`
td .fv-plugins-icon {
    right: 10px;
    top: 10px;
}
`} />        

        <p class="lh-copy">Here is the final result:</p>
        <Demo prefix="/guide/examples/validating-fields-placed-in-table-cells" frameworks={['bootstrap', 'tachyons']} />
    </section>

    <Examples examples={[
        'Validating checkbox list placed in multiple columns',
        'Validating fields placed in table cells',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>
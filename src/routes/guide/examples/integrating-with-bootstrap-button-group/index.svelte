<svelte:head>
	<title>FormValidation • Integrating with Bootstrap button group</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Integrating with Bootstrap button group</h1>

    <section class="mv5">
        <p class="lh-copy">In the following example, you will see how to use FormValidation with the <a href="https://getbootstrap.com/docs/4.3/components/buttons/#checkbox-and-radio-buttons" target="_blank" class="blue dim link">Bootstrap button group</a>.</p>
        <p class="lh-copy">Basically, we have multiple radios which are wrapper inside a <code>data-toggle="buttons"</code> element:</p>

<SampleCode lang="html" code={`
<div class="form-group row">
    <label class="col-sm-3 col-form-label">Gender</label>
    <div class="col-sm-9" id="genderContainer">
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-secondary">
                <input type="radio" name="gender" value="male"> Male
            </label>
            <label class="btn btn-secondary">
                <input type="radio" name="gender" value="female"> Female
            </label>
            <label class="btn btn-secondary">
                <input type="radio" name="gender" value="other"> Other
            </label>
        </div>
    </div>
</div>
`} />
    </section>

    <section class="mv5">
        <Heading>Customizing icon position</Heading>
        <p class="lh-copy">You can ignore this section if you don't use the <a href="/guide/plugins/icon" class="blue dim link">Icon plugin</a>. In order to show the feedback icon at the desired position, we need to hook on the <code>onPlaced</code> event:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
icon: new FormValidation.plugins.Icon({
    ...
    onPlaced: function(e) {
        if (e.field === 'gender') {
            // Place the icon for "gender" element 
            // at the end of "genderContainer" element
            document.getElementById('genderContainer').appendChild(e.iconElement);
        }
    }
}),
`} />
        </div>
    </section>

    <section class="mv5">
        <Heading>Revalidating the field</Heading>
        <p class="lh-copy">Bootstrap 4.3.1 prevents the default action of radio buttons when being used with <code>data-toggle="buttons"</code>. So, we need to revalidate the field when it's changed manually:</p>

<SampleCode lang="javascript" code={`
const demoForm = document.getElementById('demoForm');

const fv = FormValidation.formValidation(demoForm, {
    fields: {
        gender: {
            validators: {
                notEmpty: {
                    message: 'The gender is required'
                }
            }
        },
    },
    plugins: {
        ...
    }
});

$(demoForm).find('[name="gender"]').on('change', function() {
    fv.revalidateField('gender');
});
`} />
        <Tip>You should look at the <a href="/guide/examples/integrating-with-3rd-party-libraries" class="blue dim link">basic principle</a> when integrating FormValidation with 3rd party libraries</Tip>
        <Demo prefix="/guide/examples/integrating-with-bootstrap-button-group" frameworks={['bootstrap']} />
    </section>

    <Examples examples={[
        'Showing icons in custom area',
    ]} />

    <RelatedValidators validators={['notEmpty']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>
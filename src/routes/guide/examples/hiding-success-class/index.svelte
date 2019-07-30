<svelte:head>
	<title>FormValidation • Hiding success class</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Hiding success class</h1>

    <section class="mv5">
        <p class="lh-copy">Based on the field status, the field and its container are marked as success or error element. For <a href="/guide/plugins/bootstrap" class="blue dim link">Bootstrap</a> form,
            the plugin will add <code>.has-success</code> or <code>.has-danger</code> class to the container element. It also adds <code>.is-valid</code> or <code>.is-invalid</code> class to the field element.</p>
        <p class="lh-copy">If you think that it's better to indicate error status only due to the similarity of these status colors, you can remove <code>.has-success</code> class from the container.</p>
        <p class="lh-copy">It can be done by triggering the <a href="/guide/events/core.element.validated" class="blue dim link">core.element.validated</a> event as below:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
FormValidation
    .formValidation(
        form,
        {
            fields: {
                ...
            },
            plugins: {
                ...
            },
        }
    )
    .on('core.element.validated', function(e) {
        // e.element presents the field element
        // e.valid indicates the field is valid or not
        if (e.valid) {
            // Remove has-success from the container
            const groupEle = FormValidation.utils.closest(e.element, '.form-group');
            if (groupEle) {
                FormValidation.utils.classSet(groupEle, {
                    'has-success': false,
                });
            }

            // Remove is-valid from the element
            FormValidation.utils.classSet(e.element, {
                'is-valid': false,
            });
        }
    });
`} />
        </div>
        <Demo prefix="/guide/examples/hiding-success-class" frameworks={['bootstrap']} />
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
import SampleCode from '../../../../components/SampleCode.svelte';
</script>
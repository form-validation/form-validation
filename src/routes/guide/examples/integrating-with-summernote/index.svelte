<svelte:head>
	<title>FormValidation • Integrating with Summernote</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Integrating with Summernote</h1>

    <section class="mv5">
        <p class="lh-copy">This example shows how to use FormValidation with <a href="http://summernote.org" class="blue dim link">Summernote</a> plugin.</p>
        <Tip>You should look at the <a href="/guide/examples/integrating-with-3rd-party-libraries" class="blue dim link">basic principle</a> when integrating FormValidation with 3rd party libraries</Tip>
        <p class="lh-copy">You have to revalidate the editor field when it's changed by Summernote:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
$('[name="content"]')
    .summernote({
        height: 400
    })
    .on('summernote.change', function(customEvent, contents, $editable) {
        // Revalidate the content when its value is changed by Summernote
        fv.revalidateField('content');
    });
`} />        
        </div>
        <Demo prefix="/guide/examples/integrating-with-summernote" frameworks={['bootstrap']} />
    </section>

    <Examples examples={[
        'Integrating with Summernote',
        'Integrating with TinyMCE',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

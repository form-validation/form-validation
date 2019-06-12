<svelte:head>
	<title>FormValidation • Validating social account URL</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Validating social account URL</h1>
    
    <section class="mv5">
        <p class="lh-copy">Instead of using the <a href="/guide/validators/uri/" class="blue dim link">uri validator</a>, this example uses the <a href="/guide/validators/regexp/" class="blue dim link">regexp validator</a> to validate Facebook account URL, such as <code>http(s)://facebook.com/account</code>:</p>
        <Demo prefix="/guide/examples/validating-social-account-url" frameworks={['Tachyons']} />
    </section>

    <Examples examples={[
        'Validating an avatar URL',
        'Validating social account URL',
    ]} />

    <RelatedValidators validators={['regexp', 'uri']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
</script>

<svelte:head>
	<title>FormValidation • Validating an avatar URL</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Validating an avatar URL</h1>
    
    <section class="mv5">
        <p class="lh-copy">The following example is a combination usage of the <a href="/guide/validators/uri/" class="blue dim link">uri validator</a> and <a href="/guide/validators/regexp/" class="blue dim link">regexp validator</a>. It asks user to enter a valid URL which ends with .jpg, .jpeg, or .png.</p>
        <Demo prefix="/guide/examples/validating-an-avatar-url" frameworks={['Tachyons']} />
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

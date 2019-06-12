<svelte:head>
	<title>FormValidation • Is a@b valid email address?</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Is a@b valid email address?</h1>
    
    <section class="mv5">
        <p class="lh-copy">Yes! It's valid email address. If you want to treat these kind of email addresses as invalid one, you can use the <a href="/guide/validators/regexp/" class="blue dim link">regexp</a> validator to define expression of email address.</p>
        <Demo prefix="/guide/examples/is-a@b-valid-email-address" frameworks={['Tachyons']} />
    </section>

    <RelatedValidators validators={['callback', 'emailAddress', 'regexp']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
</script>

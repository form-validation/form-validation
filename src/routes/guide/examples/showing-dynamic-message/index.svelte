<svelte:head>
	<title>FormValidation • Showing dynamic message</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Showing dynamic message</h2>
    
    <section class="mv5">
        <p class="lh-copy">The form below ask to enter a secure password, which must satisfies all the following conditions:</p>
        <ul class="ma0 mb4 pl3 lh-copy">
            <li>Must be more than 8 characters long</li>
            <li>Must contain at least one upper case character</li>
            <li>Must contain at least one lower case character</li>
            <li>Must contain at least one digit</li>
        </ul>

        <Demo prefix="/guide/examples/showing-dynamic-message" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <Examples examples={['Showing all messages', 'Showing dynamic message']} />

    <RelatedValidators validators={['callback']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
</script>

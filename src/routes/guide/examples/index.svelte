<svelte:head>
	<title>FormValidation • Examples</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">A collection of useful examples you can play with</h2>

    <Examples heading="Customize icons and messages" examples={['Showing all messages', 'Showing dynamic message']} />
</GuideLayout>

<script>
import Examples from '../../../components/Examples.svelte';
import GuideLayout from '../../../components/GuideLayout.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
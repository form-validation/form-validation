<svelte:head>
	<title>FormValidation • destroy() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">destroy()</h1>
    <h2 class="f4 fw4 tc">Destroy everything created by the library.</h2>

    <section class="mv5">
        <p class="lh-copy">It will remove all error messages, feedback icons as well as turning off the events. All the registered plugins and filters are removed too.</p>
        <div class="mb3">
            <SampleCode lang="javascript" code={`destroy(): Core`} />
        </div>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/api/deregister-plugin/">deregisterPlugin() method</PrevButton>
            <NextButton href="/guide/api/disable-validator/">disableValidator() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Heading from '../../../components/Heading.svelte';
import GuideLayout from '../../../components/GuideLayout.svelte';
import NextButton from '../../../components/NextButton.svelte';
import PrevButton from '../../../components/PrevButton.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
</script>

<svelte:head>
	<title>FormValidation • Plugins</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Plugins</h1>
    <h2 class="f4 fw4 tc">A collection of useful plugins that do additional jobs</h2>

    <p class="lh-copy">FormValidation comes with various built-in plugins listed in the alphabetical order, split into two groups as following:</p>

    <section class="mv5"> 
        <Heading>Core plugins</Heading>
        <p class="lh-copy">These plugins are often used and included in the <code>dist/js/FormValidation(.min).js</code> file. You don't need to include any external plugin file to use them.</p>

        <Cards>
            {#each CorePlugins as p}
            <Card target="/guide/plugins/{camelCaseToDash(p.name)}/" title="{p.name}">{p.desc}</Card>
            {/each}
        </Cards>
    </section>

    <section class="mv5">
        <Heading>External plugins</Heading>
        <p class="lh-copy">You don't need all external plugins most of the times. So, you have to include them right after the <code>dist/js/FormValidation(.min).js</code> file in your page.</p>
        <div class="mb3">
<SampleCode lang="html" code={`
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<!-- 
You need to insert external plugin (Bootstrap in this case) 
after FormValidation.min.js
-->
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>
`} />
        </div>  

        <Cards>
            {#each ExternalPlugins as p}
            <Card target="/guide/plugins/{camelCaseToDash(p.name)}/" title="{p.name}">{p.desc}</Card>
        {/each}
        </Cards>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/">Validators</PrevButton>
            <NextButton href="/guide/plugins/alias/">Alias plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Plugins from '../../../components/constants/Plugins';
import camelCaseToDash from '../../../components/helpers/camelCaseToDash';

import Card from '../../../components/Card.svelte';
import Cards from '../../../components/Cards.svelte';
import Heading from '../../../components/Heading.svelte';
import GuideLayout from '../../../components/GuideLayout.svelte';
import NextButton from '../../../components/NextButton.svelte';
import PrevButton from '../../../components/PrevButton.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
import Tip from '../../../components/Tip.svelte';

const CorePlugins = Plugins.filter((p) => p.isCorePlugin);
const ExternalPlugins = Plugins.filter((p) => !p.isCorePlugin);
</script>

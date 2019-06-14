<svelte:head>
	<title>FormValidation • Validators</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Validators</h1>
    <h2 class="f4 fw4 tc">The richest validators in the class</h2>

    <section class="mv5">
        <p class="lh-copy">FormValidation comes with various built-in validators listed in the alphabetical order, split into two groups as following:</p>
    </section>

    <section class="mv5">
        <Heading>Popular validators</Heading>
        <p class="lh-copy">In most cases, this list covers validators you often need. All these validators are included in the <code>dist/js/FormValidation(.min).js</code> file.</p>

        <Cards>
        {#each PopularValidators as v}
            <Card target="/guide/validators/{camelCaseToDash(v.name)}/" title="{v.name}">{v.description}</Card>            
        {/each}
        </Cards>
    </section>

    <section class="mv5">
        <Heading>Special validators</Heading>
        <p class="lh-copy">The following list includes special validators which you often don't need most of the times. In order to use them, you have to include the <code>dist/js/FormValidation.full(.min).js</code> file to your page.</p>
        
        <Cards>
        {#each SpecialValidators as v}
            <Card target="/guide/validators/{camelCaseToDash(v.name)}/" title="{v.name}">{v.description}</Card>
        {/each}
        </Cards>

        <Tip>Look at the <a href="/guide/examples/creating-a-custom-validator/" class="blue dim link">custom validator</a> page to see how you can create and reuse your own validator</Tip>
    </section>

    <section class="mv5">
        <Heading>Using validator globally</Heading>

        <p class="lh-copy">You can use any validator globally under the namespace <code>FormValidation.validators</code> in browser if the page includes the <code>FormValidation.min.js</code> or <code>FormValidation.full.min.js</code> script.</p>
        <p class="lh-copy">The following sample code demonstrates how to use the <a href="/guide/validators/credit-card/" class="blue dim link">creditCard</a> validator to validate a credit card number:</p>

<SampleCode lang="html" code={`
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    // Now you can access the creditCard validator from 
    const result = FormValidation.validators.creditCard().validate({
        value: '340653705597107',
        options: {
            message: 'The credit card number is not valid',
        },
    });

    // result.valid === true
    // result.meta.type === 'AMERICAN_EXPRESS'
});
</script-tag>
`} />
    </section>

    <section class="mv5">
        <Heading>Using validator in ES6 module</Heading>

        <p class="lh-copy">All validators are able to be imported and used with ES6 module. It's super useful if you want to use validator with front-end frameworks (such as <a href="https://reactjs.org/" class="blue dim link">React</a>, 
            <a href="https://vuejs.org/" class="blue dim link">VueJS</a>, <a href="https://svelte.technology/" class="blue dim link">Svelte</a>, .etc), or in server environment with NodeJS frameworks (such as <a href="https://expressjs.com/" class="blue dim link">Express</a>).
        </p>
        <p class="lh-copy">The following snippet shows how to use the creditCard validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import creditCard from 'formvalidation/dist/es6/validators/creditCard';

const result = creditCard().validate({
    value: '340653705597107',
    options: {
        message: 'The credit card number is not valid',
    },
});
// result.valid === true
// result.meta.type === 'AMERICAN_EXPRESS'
`} />
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/getting-started/">Getting started</PrevButton>
            <NextButton href="/guide/validators/base64/">base64 validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Validators from '../../../components/constants/Validators';
import camelCaseToDash from '../../../components/helpers/camelCaseToDash';

import Card from '../../../components/Card.svelte';
import Cards from '../../../components/Cards.svelte';
import Heading from '../../../components/Heading.svelte';
import GuideLayout from '../../../components/GuideLayout.svelte';
import NextButton from '../../../components/NextButton.svelte';
import PrevButton from '../../../components/PrevButton.svelte';
import SampleCode from '../../../components/SampleCode.svelte';
import Tip from '../../../components/Tip.svelte';

const PopularValidators = Validators.filter((v) => !v.requireFullVersion);
const SpecialValidators = Validators.filter((v) => v.requireFullVersion);
</script>

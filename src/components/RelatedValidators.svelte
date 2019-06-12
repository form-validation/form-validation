<section class="mv5">
    <Heading>Related validators</Heading>
    <p class="lh-copy">The following validators might be useful to you.</p>

    <Cards>
    {#each _relatedValidators as v}
        <Card target="/guide/validators/{camelCaseToDash(v.name)}/" title="{v.name}">{v.description}</Card>
    {/each}
    </Cards>
</section>

<script>
import AllValidators from './constants/Validators';
import camelCaseToDash from './helpers/camelCaseToDash';

import Card from './Card.svelte';
import Cards from './Cards.svelte';
import Heading from './Heading.svelte';

let validators;
const _relatedValidators = AllValidators.filter((v) => {
    return validators.indexOf(v.name) >= 0;   
});

export {
    validators,
};
</script>

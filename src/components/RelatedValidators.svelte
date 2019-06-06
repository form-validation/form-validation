<section class="mv5">
    <Heading>Related validators</Heading>
    <p class="lh-copy">The following validators are similar to this one and might be useful to you.</p>

    <div class="list pa0 flex flex-wrap">
    {#each _relatedValidators as v, i}
        <div class="w-33 ph3 mv3">
            <div class="pa3 br2 shadow-4 h-100" class:bg-blue={i % 4 === 0} class:bg-red={i % 4 === 1} class:bg-gold={i % 4 === 2} class:bg-green={i % 4 === 3}>
                <a href="/guide/validators/{camelCaseToDash(v.name)}/" title="{v.description}" class="link pointer white db h-100">
                    <div class="f4 fw6">{v.name}</div>
                    <p class="lh-copy">{v.description}</p>
                </a>
            </div>
        </div>
    {/each}
    </div>
</section>

<script>
import AllValidators from './constants/Validators';
import camelCaseToDash from './helpers/camelCaseToDash';

import Heading from './Heading.svelte';

let validators;
const _relatedValidators = AllValidators.filter((v) => {
    return validators.indexOf(v.name) >= 0;   
});

export {
    validators,
};
</script>

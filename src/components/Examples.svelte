<section class="mv5">
    <Heading>{heading}</Heading>
    <Cards>
        {#each _examples as example}
        <Card target="/guide/examples/{slug(example)}/" title="{example}"></Card>
        {/each}
    </Cards>
</section>

<script>
import { onMount } from 'svelte';

import slug from './helpers/slug';

import Card from './Card.svelte';
import Cards from './Cards.svelte';
import Heading from './Heading.svelte';

let _examples = [];

let examples;
let heading = 'More examples';

onMount(() => {
    const path = window.location.pathname;
    _examples = examples.filter((item) => `/guide/examples/${slug(item)}/` !== path);
});

export {
    examples,
    heading,
};
</script>

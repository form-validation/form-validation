<section class="mv5">
    <Heading>{heading}</Heading>
    <div style="display: grid; grid-column-gap: 2em; grid-row-gap: 2em; grid-template-columns: repeat(3, 1fr);">
        {#each _examples as example, i}
        <div class="br2" class:bg-blue={i % 4 === 0} class:bg-red={i % 4 === 1} class:bg-gold={i % 4 === 2} class:bg-green={i % 4 === 3}>
            <div class="pa3 shadow-4 h-100">
                <a href="/guide/examples/{slug(example)}/" title="{example}" class="link pointer white db h-100">
                    <div class="f4 fw6">{example}</div>
                </a>
            </div>
        </div>
        {/each}
    </div>
</section>

<script>
import { onMount } from 'svelte';

import slug from './helpers/slug';
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

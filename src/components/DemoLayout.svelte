<main style="width: 100%; margin-left: auto; margin-right: auto;">
    <ResourceLoader urls={_urls} on:loaded={onLoaded}><slot></slot></ResourceLoader>
</main>

<script>
import { onMount } from 'svelte';

import SupporedFramework from './constants/SupportedFramework';
import ResourceLoader from './ResourceLoader.svelte';

// Props
let framework = 'tachyons';
let onLoaded = () => {};

let _urls = [];

onMount(() => {
    const fr = (framework === 'native') ? 'tachyons' : framework;
    if (!SupporedFramework[fr]) {
        return;
    }

    // By default, we use tachyons framework
    const defaultStyle = document.querySelector(`link[rel="stylesheet"][href="${SupporedFramework['tachyons'].urls[0]}"]`);

    if (fr === 'tachyons') {
        _urls = [];
    } else {
        defaultStyle.setAttribute('disabled', 'true');
        _urls = SupporedFramework[fr].urls;
    }
});

export {
    framework,
    onLoaded,
};
</script>

<Loader isDone={_loaded}>{#if _loaded}<slot></slot>{/if}</Loader>

<script>
import { onMount } from 'svelte';

import Loader from './Loader.svelte';

let _loaded = false;

// Props
let urls = [];

onMount(() => {
    const js = [];
    const css = [];
    urls.forEach(url => {
        if (url.endsWith('.js')) {
            // The resource is a JavaScript file
            js.push(url);
        } else if (url.endsWith('.css') || url.startsWith('https://fonts.googleapis.com/')) {
            // The resource is a CSS file
            css.push(url);
        }
    });

    let numLoaded = 0;
    const total = css.length + js.length;
    const onLoaded = () => {
        if (numLoaded === total) {
            _loaded = true;
        }
    };
    
    // Load CSS
    const head = document.querySelector('head');
    css.forEach(url => {
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', url);
        link.addEventListener('load', () => {
            numLoaded++;
            onLoaded();
        });
        head.appendChild(link);
    });

    const loadScript = () => {
        if (js.length == 0) {
            onLoaded();
        } else {
            const script = document.createElement('script');
            script.onload = () => {
                numLoaded++;
                loadScript();
            };
            script.src = js.shift();
            head.appendChild(script);
        }
    };

    loadScript();
});
</script>

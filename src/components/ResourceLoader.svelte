<Loader isDone={_loaded}><slot></slot></Loader>

<script>
import { onMount } from 'svelte';

import Loader from './Loader.svelte';

let _loaded = false;

const defaultCss = '';

// Props
let useExternalFramework = false;
let urls = [];
let onLoaded = () => {};

onMount(() => {
    // Get the default style which is defined by `data-default-framework="true"` in `template.html`
    const defaultStyle = document.querySelector('link[rel="stylesheet"][data-default-framework="true"]');

    // Disable the default style
    if (useExternalFramework) {
        defaultStyle.setAttribute('disabled', 'true');
    }

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
    const checkResourcesLoaded = () => {
        if (numLoaded === total) {
            _loaded = true;
            onLoaded();
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
            checkResourcesLoaded();
        });

        // Add new style right after the default one (which is now disabled)
        // We don't append it to `head` because we need the `formValidation.css` is loaded lastly
        defaultStyle.parentElement.insertBefore(link, defaultStyle.nextSibling);
    });

    const loadScript = () => {
        if (js.length == 0) {
            checkResourcesLoaded();
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

export {
    useExternalFramework,
    urls,
    onLoaded,
};
</script>

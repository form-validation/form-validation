{#if items.length > 0}
<ul class="list pa0 ma0 f5 lh-copy">
    {#each items as item}
    <li><a class="pl5 pr2 pv1 link db {`#${item.target}` === hash ? 'br b--gray bw2' : ''}" href="{path}#{item.target}">{item.text}</a></li>
    {/each}
</ul>
{/if}

<script>
import { createEventDispatcher, onMount } from 'svelte';

// Private
let _path = '';
let _hash = '';
let _items = [];
const dispatch = createEventDispatcher();

// Props
let selector = 'h2';
let content;

onMount(() => {
    const contentNode = content();

    // Jump to another section when the hash changes
    const hashChangeHandler = (e) => {
        const parts = e.newURL.split('#');
        const newHash = parts[parts.length - 1];

        // Scroll to the section
        const section = contentNode.querySelector(`[id="${newHash}"]`);
        if (section) {
            section.scrollIntoView();
        }

        _hash = `#${newHash}`;
        dispatch('click', {
            hash: `#${newHash}`,
        });
    };
    window.addEventListener('hashchange', hashChangeHandler);

    // Query the headings in the content
    const path = window.location.pathname;
    const hash = window.location.hash;
    const headings = [...contentNode.querySelectorAll(selector)];

    const generateAnchors = () => {
        return headings.map((heading) => {
            const text = heading.textContent;
            const anchor = text
                .replace(/\./g, '-')
                .replace(':', '')
                .replace(/\s+|\/|\\/g, '-')
                .replace(/([a-z])([A-Z])/g, '$1-$2') // camelCase --> camel-case
                .toLowerCase();
            heading.setAttribute('id', anchor);
            
            const a = document.createElement('a');
            a.setAttribute('href', `${path}#${anchor}`)
            a.setAttribute('class', 'fl no-underline');
            a.setAttribute('style', 'margin-left: -20px');
            a.setAttribute('aria-hidden', 'true');
            a.innerHTML = '#';
            heading.prepend(a);

            return {
                text: text,
                target: anchor,
            };
        });
    };

    const iframes = [...contentNode.querySelectorAll('iframe')];
    const numFrames = iframes.length;
    let numFrameLoaded = 0;

    if (numFrames === 0) {
        // If there's no iframe, then generate anchors
        _path = path;
        _hash = hash;
        _items = generateAnchors();
    } else {
        for (const i in iframes) {
            iframes[i].addEventListener('load', () => {
                numFrameLoaded++;
                if (numFrameLoaded === numFrames) {
                    // All iframe are loaded
                    _path = path;
                    _hash = hash;
                    _items = generateAnchors();

                    // Scroll to the section
                    if (hash !== '') {
                        const section = contentNode.querySelector(`[id="${hash.substring(1)}"]`);            
                        if (section) {
                            section.scrollIntoView();
                        }
                    }
                }
            });
        }
    }

    return () => {
        window.removeEventListener('hashchange', hashChangeHandler);
    };
});

export {
    content,
    selector,
};
</script>

<SidebarLink url={url} title={title} isActive={isActive}><slot></slot></SidebarLink>
{#if enabled}
<TableOfContents content={content} selector={selector} />
{/if}

<script>
import { onMount } from 'svelte';

import SidebarLink from './SidebarLink.svelte';
import TableOfContents from './TableOfContents.svelte';

// Private
let enabled = false;

// Props
let content;
let url = '';
let title = '';
let selector = 'section h2';
let isActive = (p, url) => (p === url);

onMount(() => {
    const path = window.location.pathname;
    enabled = path === url || path.startsWith(`${url}#`);
});

export {
    content,
    url,
    title,
    selector,
    isActive,
};
</script>

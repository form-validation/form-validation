<style>
.active {
    background: linear-gradient(270deg, #ccc 25%, #f4f4f4 100%);
}    
</style>

<a href="{url}" class="db link {customClasses} {isActive(path, url) ? 'br b--gray bw2 bg-light-gray active' : ''}" title="{title}"><slot></slot></a>

<script>
import { onMount } from 'svelte';

// Private
let path = '';

// Props
let url = '';
let title = '';
let customClasses = 'pv1 pl4';
let isActive = (p, url) => (p === url);

onMount(() => {
    path = window.location.pathname;
});

export {
    url,
    title,
    customClasses,
    isActive,
};
</script>

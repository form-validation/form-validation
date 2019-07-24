<script>
import { onMount } from 'svelte';
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

onMount(() => {
    document.body.style.backgroundColor = '#fff';
});

export {
    onLoaded,
};
</script>

<style>
:global(form) {
    padding: 0;
}
</style>

<ResourceLoader useExternalFramework="true" urls={['https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css']} onLoaded={onLoaded}><div style="padding: 16px;"><slot></slot></div></ResourceLoader>
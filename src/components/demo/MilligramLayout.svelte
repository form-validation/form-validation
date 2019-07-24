<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<style>
:global(body) {
    margin: 0;
}
:global(form) {
    margin-bottom: 0;
    padding: 0 1rem;
}
</style>

<ResourceLoader useExternalFramework="true" urls={['https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css']} onLoaded={onLoaded}><div style="padding: 16px;"><slot></slot></div></ResourceLoader>
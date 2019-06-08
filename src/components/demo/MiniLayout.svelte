<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<style>
:global(form) {
    padding: 0;
}
</style>

<ResourceLoader useExternalFramework="true" urls={['https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css']} onLoaded={onLoaded}><slot></slot></ResourceLoader>
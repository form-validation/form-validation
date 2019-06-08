<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<ResourceLoader useExternalFramework="true" urls={['https://cdnjs.cloudflare.com/ajax/libs/pure/1.0.0/pure-min.css']} onLoaded={onLoaded}><slot></slot></ResourceLoader>
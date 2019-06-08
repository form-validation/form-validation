<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<ResourceLoader useExternalFramework="true" urls={['https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/css/foundation.min.css']} onLoaded={onLoaded}><slot></slot></ResourceLoader>
<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css']} onLoaded={onLoaded}><slot></slot></ResourceLoader>
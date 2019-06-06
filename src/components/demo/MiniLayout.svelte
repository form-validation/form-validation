<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css']} onLoaded={onLoaded}><slot></slot></ResourceLoader>
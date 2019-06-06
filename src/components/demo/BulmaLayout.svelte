<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css']} onLoaded={onLoaded}><slot></slot></ResourceLoader>
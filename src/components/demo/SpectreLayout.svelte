<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<ResourceLoader
    urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre.min.css',
        // To use with Icon plugin
        'https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre-icons.min.css',
    ]}
    onLoaded={onLoaded}><slot></slot></ResourceLoader>
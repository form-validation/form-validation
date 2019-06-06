<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};
const onResourceLoaded = () => {
     M.AutoInit();
     onLoaded();
};

export {
    onLoaded,
};
</script>

<ResourceLoader 
    urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
    ]}
    onLoaded={onResourceLoaded}><slot></slot></ResourceLoader>
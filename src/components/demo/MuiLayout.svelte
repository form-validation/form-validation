<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css']} onLoaded={onLoaded}><div style="padding: 0 15px;"><slot></slot></div></ResourceLoader>
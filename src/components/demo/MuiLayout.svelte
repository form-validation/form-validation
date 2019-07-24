<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<ResourceLoader useExternalFramework="true" urls={['https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.41/css/mui.min.css']} onLoaded={onLoaded}><div style="padding: 16px;"><slot></slot></div></ResourceLoader>
<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<style>
:global(.uk-form-horizontal .uk-form-label) {
    width: 200px;
    margin-top: 7px;
    float: left;
}

:global(.uk-form-horizontal .uk-form-controls) {
    margin-left: 215px;
}
</style>

<ResourceLoader useExternalFramework="true" urls={['https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css']} onLoaded={onLoaded}><div style="padding: 16px;"><slot></slot></div></ResourceLoader>
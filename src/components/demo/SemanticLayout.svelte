<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<style>
:global(.ui.form .fields) {
    margin: 0 -.5em 1em;
}
:global(.ui.form:not(.unstackable) .fields:not(.unstackable)>.four.wide.field) {
    width: 25%!important;
}
:global(.ui.form:not(.unstackable) .fields:not(.unstackable)>.eight.wide.field) {
    width: 50%!important;
}
</style>

<ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css']} onLoaded={onLoaded}><slot></slot></ResourceLoader>
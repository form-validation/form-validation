<script>
import ResourceLoader from '../ResourceLoader.svelte';

let onLoaded = () => {};

export {
    onLoaded,
};
</script>

<style>
:global(form) {
    padding: 0 1rem;
}
</style>

<ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/bigfishtv-turret/5.1.3/turretcss.min.css']} onLoaded={onLoaded}><slot></slot></ResourceLoader>
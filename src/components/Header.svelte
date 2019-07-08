<header bind:this={container} class="dn fixed w-100 pa3 top-0 f4 bg-dark-blue white z-9999">
    <div class="flex justify-around items-center">
        <a href="/guide" class="link white">Guide</a>
        <a href="/guide/validators" class="link white">Validators</a>
        <a href="/guide/plugins" class="link white">Plugins</a>
        <a href="/guide/examples" class="link white">Examples</a>
        <a href="/updates" class="link white">Updates</a>
        <a href="/download" title="Download" class="fw6 bg-red white ph3 pv2 br2 grow no-underline">Download v1.5.0</a>
    </div>
</header>

<svelte:window on:scroll={onScroll} />

<script>
let container;

const onScroll = () => {
    container.classList.remove('dn');
};
</script>

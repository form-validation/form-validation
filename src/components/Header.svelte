<header bind:this={container} class="dn fixed w-100 pa3 top-0 f4 bg-dark-blue white z-9999">
    <div class="flex justify-around items-center">
        <div>Guide</div>
        <div>Validators</div>
        <div>Plugins</div>
        <div>Examples</div>
        <div>Updates</div>
        <a href="/download" title="Download" class="fw6 bg-red white ph3 pv2 br2 grow no-underline">Download v1.4.0</a>
    </div>
</header>

<svelte:window on:scroll={onScroll} />

<script>
let container;

const onScroll = () => {
    container.classList.remove('dn');
};
</script>

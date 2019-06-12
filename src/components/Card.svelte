<style>
:global(.card:nth-child(4n)) {
    background-color: #357edd;
}
:global(.card:nth-child(4n+1)) {
    background-color: #ff4136;
}
:global(.card:nth-child(4n+2)) {
    background-color: #ffb700;
}
:global(.card:nth-child(4n+3)) {
    background-color: #19a974;
}
</style>

<div class="card br2">
    <div class="pa3 shadow-4 h-100 white">
        {#if target === ''}
        <div class="f4 fw6 mb3">{title}</div>
        <div class="lh-copy"><slot></slot></div>
        {:else}
        <a href="{target}" class="link pointer white db h-100">
            <div class="f4 fw6 mb3">{title}</div>
            <div class="lh-copy"><slot></slot></div>
        </a>
        {/if}
    </div>
</div>

<script>
// Props
let target = '';
let title = '';

export {
    target,
    title,
};
</script>

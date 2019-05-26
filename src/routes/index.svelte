<script>
import Typed from '../_demo/typed/Tachyons.svelte';
</script>

<style>
.hero-bg {
    transform: skewY(-10deg);
    transform-origin: top left;
}
</style>

<svelte:head>
	<title>FormValidation • The best validation library for JavaScript</title>
</svelte:head>

<div class="absolute top-0 left-0 h-75 w-100 hero-bg bg-dark-blue"></div>

<div class="w-100 vh-100 tc">
    <div class="mw9 center pv6 relative near-white">
        <h1 class="f1 fw9 lh-copy ma0 lh-title f-headline-l">all new FormValidation</h1>
        <h2 class="f2 mv5">best validation library for JavaScript. zero dependencies.</h2>
        <div class="f3 center mv5"><span class="bg-gold br-pill pa2 near-black">v1.4.0</span></div>
    </div>

    <div class="w-100 center mw7"><Typed /></div>
</div>
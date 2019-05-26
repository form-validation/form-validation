<script>
import Typed from '../_demo/typed/Tachyons.svelte';
import Testimonial from '../components/Testimonial.svelte';
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

<section class="w-100 vh-100 tc">
    <div class="mw9 center pv6 relative near-white">
        <h1 class="f1 fw9 lh-copy ma0 lh-title f-headline-l">all new FormValidation</h1>
        <h2 class="f2 mv5">best validation library for JavaScript. zero dependencies.</h2>
        <div class="f3 center mv5"><span class="bg-gold br-pill pa2 near-black">v1.4.0</span></div>
    </div>

    <div class="w-100 center mw7"><Typed /></div>
</section>

<section class="mw8 center">
    <h3 class="f3 tc">Used by thousand developers and designers like you</h3>

    <div class="cf ph2-ns">
		<Testimonial user="CreativeTim" avatar="CreativeTim.jpg">Validation plugin for Bootstrap from @formvalidation. Give it a try, looks great!</Testimonial>
		<Testimonial user="scokmen" avatar="scokmen.jpg">You saved my day @formvalidation</Testimonial>
		<Testimonial user="CurtStaubach" avatar="CurtStaubach.jpeg">Be sure to check out Bootstrap Validator. It's the best I've found.</Testimonial>
	</div>

	<div class="cf ph2-ns">
		<Testimonial user="Agarney" avatar="Agarney.jpg">Money well spent. A must have plug-in if you use Bootstrap regularly.</Testimonial>
		<Testimonial user="timkinnane" avatar="timkinnane.jpg">Just grabbed FormValidation license. It's perfect for #bootstrap projects. Very worth.</Testimonial>
		<Testimonial user="RC_Programmers" avatar="RC_Programmers.jpeg">Buy a license for @formvalidation. It's best tool I ever used.</Testimonial>
	</div>

	<div class="cf ph2-ns">
		<Testimonial user="sitesbyjoe" avatar="sitesbyjoe.jpeg">Just bought a copy of <a href="/" class="blue dim link">formvalidation.io</a> - looks extremely well built and is designed to work with bootstrap!</Testimonial>
		<Testimonial user="barrylangdon1" avatar="barrylangdon1.jpg">Awesome jQuery plugin for form validation <a href="/" class="blue dim link">http://formvalidation.io</a> @formvalidation #jquery #FormValidation.</Testimonial>
		<Testimonial user="Mahdixco" avatar="Mahdixco.jpg">Wow, Its Very Awesome for Form Validation I Recommend use it &lt;3 @formvalidation</Testimonial>
	</div>

	<div class="cf ph2-ns">
		<Testimonial user="imagineteamsol" avatar="imagineteamsol.png">Just had a fantastic development experience with @formvalidation using <a href="https://twitter.com/twbootstrap" class="blue dim link">@twbootstrap</a> and <a href="https://twitter.com/jquery" class="blue dim link">@jquery</a>. You're a champion!</Testimonial>
		<Testimonial user="JonStanton" avatar="JonStanton.jpg">Fantastic support from @formvalidation. Several emails back and forth and completely sorted within a couple of hours. #worthpraising</Testimonial>
		<Testimonial user="johnnydriesen" avatar="johnnydriesen.jpg">AMAZING solution and very declarative source code. This is TOP support! Keep on doing the good work. I became a fan!</Testimonial>
	</div>
</section>
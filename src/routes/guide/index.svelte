<svelte:head>
	<title>FormValidation • Guide</title>
</svelte:head>

<GuideLayout>
	<h1 class="f3 f2-m f1-l tc">Guide</h1>
    <h2 class="f4 fw4 tc">Welcome to the user manual for FormValidation</h2>

	<section class="mv5">
		<Heading>Latest updates</Heading>

		<p class="lh-copy">From v1.0.0, the library is rewritten in Typescript and ES6 completely. The giant and old jQuery plugin doesn't exist anymore. With the new plugin based architectue, the library has really small core.
            Everything else is built around as a plugin.</p>
		<p class="lh-copy">Following is the most recently updated plugins:</p>

		<div style="display: grid; grid-column-gap: 2em; grid-row-gap: 2em; grid-template-columns: repeat(3, 1fr);">
            <div class="br2 bg-blue">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/plugins/declarative/" class="link pointer white db h-100">
                        <div class="f4 fw6">Declarative</div>
                        <p class="lh-copy">Provide the ability of declaring validator options via HTML attributes</p>
                    </a>
                </div>
            </div>
			<div class="br2 bg-red">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/plugins/excluded/" class="link pointer white db h-100">
                        <div class="f4 fw6">Excluded</div>
                        <p class="lh-copy">Ignore validations on particular field</p>
                    </a>
                </div>
            </div>
			<div class="br2 bg-gold">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/plugins/sequence/" class="link pointer white db h-100">
                        <div class="f4 fw6">Sequence</div>
                        <p class="lh-copy">Stop performing remaining validators if there is a validator that the field does not pass</p>
                    </a>
                </div>
            </div>
			<div class="br2 bg-green">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/plugins/start-end-date/" class="link pointer white db h-100">
                        <div class="f4 fw6">StartEndDate</div>
                        <p class="lh-copy">Validate start and end dates</p>
                    </a>
                </div>
            </div>
			<div class="br2 bg-blue">
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/plugins/wizard/" class="link pointer white db h-100">
                        <div class="f4 fw6">Wizard</div>
                        <p class="lh-copy">Support validating multiple steps form</p>
                    </a>
                </div>
            </div>
		</div>

		<p class="lh-copy">We also bring more supports for popular CSS frameworks. If your form is made with the following frameworks, then use the associated plugin which is built up everything such as showing <a href="/guide/plugins/icon/" class="blue dim link">Icon</a>
            and <a href="/guide/plugins/message/" class="blue dim link">Message</a> at desired areas.</p>

		<div style="display: grid; grid-column-gap: 2em; grid-row-gap: 2em; grid-template-columns: repeat(3, 1fr);">
        {#each ['Bootstrap', 'Bootstrap3', 'Bulma', 'Foundation', 'Materialize', 'Milligram', 'Mini', 'Mui', 'Pure', 'Semantic', 'Shoelace', 'Spectre', 'Tachyons', 'Turret', 'Uikit'] as framework, i}
            <div class="br2" class:bg-blue={i % 4 === 0} class:bg-red={i % 4 === 1} class:bg-gold={i % 4 === 2} class:bg-green={i % 4 === 3}>
                <div class="pa3 shadow-4 h-100">
                    <a href="/guide/plugins/{framework.toLowerCase()}/" class="link pointer white db h-100">
                        <div class="f4 fw6">{framework}</div>
                    </a>
                </div>
            </div>
        {/each}
        </div>
	</section>

	<section class="mv5">
        <div class="flex">
            <NextButton href="/guide/getting-started/">Getting Started</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../components/GuideLayout.svelte';
import Heading from '../../components/Heading.svelte';
import NextButton from '../../components/NextButton.svelte';
</script>

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

		<Cards>
			<Card target="/guide/plugins/declarative" title="Declarative">Provide the ability of declaring validator options via HTML attributes</Card>
			<Card target="/guide/plugins/excluded" title="Excluded">Ignore validations on particular field</Card>
			<Card target="/guide/plugins/sequence" title="Sequence">Stop performing remaining validators if there is a validator that the field does not pass</Card>
			<Card target="/guide/plugins/start-end-date" title="StartEndDate">Validate start and end dates</Card>
			<Card target="/guide/plugins/wizard" title="Wizard">Support validating multiple steps form</Card>
		</Cards>

		<p class="lh-copy">We also bring more supports for popular CSS frameworks. If your form is made with the following frameworks, then use the associated plugin which is built up everything such as showing <a href="/guide/plugins/icon" class="blue dim link">Icon</a>
            and <a href="/guide/plugins/message" class="blue dim link">Message</a> at desired areas.</p>

		<Cards>
        {#each ['Bootstrap', 'Bootstrap3', 'Bulma', 'Foundation', 'Materialize', 'Milligram', 'Mini', 'Mui', 'Pure', 'Semantic', 'Shoelace', 'Spectre', 'Tachyons', 'Turret', 'Uikit'] as framework, i}
			<Card target="/guide/plugins/{framework.toLowerCase()}" title="{framework}"></Card>
        {/each}
        </Cards>
	</section>

	<section class="mv5">
        <div class="flex">
            <NextButton target="/guide/getting-started">Getting Started</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Card from '../../components/Card.svelte';
import Cards from '../../components/Cards.svelte';
import GuideLayout from '../../components/GuideLayout.svelte';
import Heading from '../../components/Heading.svelte';
import NextButton from '../../components/NextButton.svelte';
</script>

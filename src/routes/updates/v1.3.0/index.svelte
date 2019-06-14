<svelte:head>
	<title>FormValidation • v1.3.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version v1.3.0</h1>
    <h2 class="f4 fw4 tc">Released 10 August 2018</h2>

    <section class="mv5">
        <Heading>New features</Heading>

        <h3>New Excluded plugin</h3>
        <p class="lh-copy">The <a href="/guide/plugins/excluded" class="blue dim link">Excluded</a> plugin allows you to indicate fields which won't be validated. It severs the same functionality as the <code>excluded</code> option in v0.8.1 and earlier versions.</p>
        <Demo prefix="/guide/examples/excluding-field-by-given-condition" frameworks={['Bootstrap']} />

        <h3>New Wizard plugin</h3>
        <p class="lh-copy">The <a href="/guide/plugins/wizard" class="blue dim link">Wizard</a> plugin supports validating multiple steps form:</p>
        <Demo prefix="/guide/plugins/wizard/basic" frameworks={['Tachyons']} />

        <p class="lh-copy">This version provides new <code>onPrefocus</code> option in the <a href="/guide/plugins/auto-focus" class="blue dim link">AutoFocus</a>. This option is useful when you want to activate the tab containing the first invalid field.</p>
    </section>

    <section class="mv5">
        <Heading>Bug fixes</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>Fix an issue that the <a href="/guide/api/reset-form/">resetForm</a>, <a href="/guide/api/reset-field" class="blue dim link">resetField</a> methods don't reset value for textarea element</li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v1.3.0</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>From v0.8.1 and older versions: Follow the <a href="/updates/v1.0.0/#upgrading-to-v1-0-0" class="blue dim link">Upgrading to v1.0.0</a> guide</li>
            <li>From v1.0.0: Just download the new version and replace the old files in v1.0.0 with new files in v1.3.0.</li>
        </ul>
    </section>

    <section class="tc mv5">
        <a href="/download/" class="f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" title="Download">Download v1.3.0</a>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Demo from '../../../components/Demo.svelte';
import Heading from '../../../components/Heading.svelte';
</script>
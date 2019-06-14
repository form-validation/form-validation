<svelte:head>
	<title>FormValidation • v1.2.0</title>
</svelte:head>

<ChangelogLayout>
    <h1 class="f3 f2-m f1-l tc">Version v1.2.0</h1>
    <h2 class="f4 fw4 tc">Released 15 July 2018</h2>

    <section class="mv5">
        <p class="lh-copy">This version supports more CSS frameworks:</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Plugin</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Supported CSS framework</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/materialize" class="blue dim link">Materialize</a></td>
                <td class="pv2 ph3">MaterializeCSS v1.0.0-rc.2</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/milligram" class="blue dim link">Milligram</a></td>
                <td class="pv2 ph3">milligram v1.3.0</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/mini" class="blue dim link">Mini</a></td>
                <td class="pv2 ph3">mini.css v3.0.0</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/mui" class="blue dim link">Mui</a></td>
                <td class="pv2 ph3">MUI v0.9.39</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/turret" class="blue dim link">Turret</a></td>
                <td class="pv2 ph3">turretcss v4.1.4</td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>New features</Heading>

        <h3>New Materialize plugin</h3>
        <p class="lh-copy">The <a href="/guide/plugins/materialize" class="blue dim link">Materialize</a> plugin allows to validate form made in the <a href="https://materializecss.com" class="blue dim link">Materialize</a> framework:</p>
        <Demo prefix="/guide/plugins/materialize/stacked-form" frameworks={['materialize']} />

        <h3>New Milligram plugin</h3>
        <p class="lh-copy">The <a href="/guide/plugins/milligram" class="blue dim link">Milligram</a> plugin allows to validate form made in the <a href="https://milligram.io" class="blue dim link">milligram</a> framework:</p>
        <Demo prefix="/guide/plugins/milligram/horizontal-form" frameworks={['milligram']} />

        <h3>New Mini plugin</h3>
        <p class="lh-copy">The <a href="/guide/plugins/mini" class="blue dim link">Mini</a> plugin allows to validate form made in the <a href="https://minicss.org" class="blue dim link">mini.css</a> framework:</p>
        <Demo prefix="/guide/plugins/mini/horizontal-form" frameworks={['mini']} />

        <h3>New Mui plugin</h3>
        <p class="lh-copy">The <a href="/guide/plugins/mui" class="blue dim link">Mui</a> plugin allows to validate form made in the <a href="https://muicss.com" class="blue dim link">MUI CSS</a> framework:</p>
        <Demo prefix="/guide/plugins/mui/stacked-form" frameworks={['mui']} />

        <h3>New Turret plugin</h3>
        <p class="lh-copy">The <a href="/guide/plugins/turret" class="blue dim link">Turret</a> plugin allows to validate form made in the <a href="https://turretcss.com" class="blue dim link">turretcss</a> framework:</p>
        <Demo prefix="/guide/plugins/turret/stacked-form" frameworks={['turret']} />
    </section>

    <section class="mv5">
        <Heading>Improvements</Heading>
        <p class="lh-copy">Supports the latest verfions of the following CSS frameworks:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Plugin</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Supported CSS framework</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/bootstrap" class="blue dim link">Bootstrap</a></td>
                <td class="pv2 ph3">Bootstrap v4.1.2</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/semantic" class="blue dim link">Semantic</a></td>
                <td class="pv2 ph3">Semantic UI v2.3.3</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/spectre" class="blue dim link">Spectre</a></td>
                <td class="pv2 ph3">Spectre v0.5.3</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/tachyons" class="blue dim link">Tachyons</a></td>
                <td class="pv2 ph3">Tachyons v4.10.0</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/uikit" class="blue dim link">Uikit</a></td>
                <td class="pv2 ph3">UIKit v3.0.0-rc.8</td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>Upgrading to v1.2.0</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>From v0.8.1 and older versions: Follow the <a href="/updates/v1.0.0/#upgrading-to-v1-0-0" class="blue dim link">Upgrading to v1.0.0</a> guide</li>
            <li>From v1.0.0: Just download the new version and replace the old files in v1.0.0 with new files in v1.2.0.</li>
        </ul>
    </section>

    <section class="tc mv5">
        <a href="/download/" class="f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" title="Download">Download v1.2.0</a>
    </section>
</ChangelogLayout>

<script>
import ChangelogLayout from '../../../components/ChangelogLayout.svelte';
import Demo from '../../../components/Demo.svelte';
import Heading from '../../../components/Heading.svelte';
</script>

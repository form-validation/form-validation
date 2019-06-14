<svelte:head>
	<title>FormValidation • Using HTML 5 inputs and attributes</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Using HTML 5 inputs and attributes</h1>
    
    <section class="mv5">
        <p class="lh-copy">When the <code>html5Input</code> option is set to <code>true</code>, the <a href="/guide/plugins/declarative" class="blue dim link">Declarative plugin</a> will automatically enable the validators for the following input type and HTML 5 attributes:</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML 5 attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Equivalent validator</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>max="..."</code></td>
                <td class="pv2 ph3"><a href="/guide/validators/less-than" class="blue dim link">lessThan</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>min="..."</code></td>
                <td class="pv2 ph3"><a href="/guide/validators/greater-than" class="blue dim link">greaterThan</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>maxlength="..."</code></td>
                <td class="pv2 ph3"><a href="/guide/validators/string-length" class="blue dim link">stringLength</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>minlength="..."</code></td>
                <td class="pv2 ph3"><a href="/guide/validators/string-length" class="blue dim link">stringLength</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>pattern="..."</code></td>
                <td class="pv2 ph3"><a href="/guide/validators/regexp" class="blue dim link">regexp</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>required</code></td>
                <td class="pv2 ph3"><a href="/guide/validators/not-empty" class="blue dim link">notEmpty</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>type="color"</code></td>
                <td class="pv2 ph3"><a href="/guide/validators/color" class="blue dim link">color</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>type="email"</code></td>
                <td class="pv2 ph3"><a href="/guide/validators/email-address" class="blue dim link">emailAddress</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>type="range"</code></td>
                <td class="pv2 ph3"><a href="/guide/validators/between" class="blue dim link">between</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>type="url"</code></td>
                <td class="pv2 ph3"><a href="/guide/validators/uri" class="blue dim link">uri</a></td>
            </tr>
        </table>

        <Demo prefix="/guide/examples/using-html-5-inputs-and-attributes" frameworks={['Tachyons']} />
    </section>

    <RelatedValidators validators={['between', 'color', 'emailAddress', 'greaterThan', 'lessThan', 'notEmpty', 'stringLength', 'regexp', 'uri']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
</script>

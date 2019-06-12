<svelte:head>
	<title>FormValidation • Using Material Design icons</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Using Material Design icons</h1>
    
    <section class="mv5">
        <p class="lh-copy">If you are a fan of using Google's <a href="https://material.io/" class="blue dim link">material design</a>, then you might prefer to use <a href="https://material.io/tools/icons/" class="blue dim link">its icons set</a>.</p>
        <p class="lh-copy">It's up to you to choose suitable icons from Google material design icons for the feedback icons. The following table is just an example of three icons taken from the set:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Field status</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Icon</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Valid</td>
                <td class="pv2 ph3"><code>&lt;i class="material-icons"&gt;check&lt;/i&gt;</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Invalid</td>
                <td class="pv2 ph3"><code>&lt;i class="material-icons"&gt;clear&lt;/i&gt;</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Being validated</td>
                <td class="pv2 ph3"><code>&lt;i class="material-icons"&gt;graphic_eq&lt;/i&gt;</code></td>
            </tr>
        </table>
        <p class="lh-copy">As you see, each Google material design icon uses pre-defined content instead of a different CSS class. Meanwhile, the Icon's plugin options only accept CSS classes that are added to the icon based on the field validity.</p>
        <p class="lh-copy">The next section introduces two approaches to solve this problem.</p>
    </section>

    <section class="mv5">
        <Heading>Defining icon content by CSS</Heading>

        <p class="lh-copy">By using the <code>:after</code> CSS selector, we can indicated content of icons as following:</p>
<SampleCode lang="css" code={`
.material-icons.valid-icon:after {
    content: 'check';
    font-size: 24px;
}
.material-icons.invalid-icon:after {
    content: 'clear';
    font-size: 24px;
}
.material-icons.validating-icon:after {
    content: 'graphic_eq';
    font-size: 24px;
}
`} />
        <p class="lh-copy">Lastly, you just set the icons for each status of field:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
icon: new FormValidation.plugins.Icon({
    valid: 'material-icons valid-icon',
    invalid: 'material-icons invalid-icon',
    validating: 'material-icons validating-icon',
}),
`} />
        </div>
        <Demo prefix="/guide/examples/using-material-design-icons/material-design" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Triggering the event</Heading>

        <p class="lh-copy">In order to update the content of icon based on the field validity status, we can trigger the event <code>plugins.icon.set</code> as mentioned in the <span class="i">Using SVG icons</span> section above.</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
FormValidation
    .formValidation(document.getElementById('demoForm'), {
        plugins: {
            icon: new FormValidation.plugins.Icon({
                valid: 'material-icons icon-valid',
                invalid: 'material-icons icon-invalid',
                validating: 'material-icons icon-validating',
            }),
        },
    })
    .on('plugins.icon.set', function(e) {
        if (e.iconElement) {
            switch (e.status) {
                case 'Validating':
                    e.iconElement.innerHTML = 'graphic_eq';
                    break;

                case 'Invalid':
                    e.iconElement.innerHTML = 'clear';
                    break;

                case 'Valid':
                    e.iconElement.innerHTML = 'check';
                    break;

                default:
                    e.iconElement.innerHTML = '';
                    break;
            }
        }     
    });
`} />    
        </div>
        <Demo prefix="/guide/examples/using-material-design-icons/material-design-event" frameworks={['Tachyons']} />
    </section>

    <Examples examples={[
        'Adjusting icon position',
        'Showing icons in custom area',
        'Using FontAwesome icons',
        'Using Glyphicons icons',
        'Using Material Design icons',
        'Using Semantic UI framework icons',
        'Using Spectre framework icons',
        'Using SVG icons',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

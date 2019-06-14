<svelte:head>
	<title>FormValidation • Using SVG icons</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Using SVG icons</h1>
    
    <section class="mv5">
        <p class="lh-copy">For more customization, you might want to use SVG icons in additonal to the CSS classes. Fortunately, the Icon plugin provides an event named <code>plugins.icon.set</code> that you can hook on when the field is being validated, valid or invalid:</p>
<SampleCode lang="javascript" code={`
FormValidation
    .formValidation(document.getElementById('demoForm'), {
        fields: {
            ...
        },
        plugins: {
            icon: new FormValidation.plugins.Icon({
                ...
            }),
        },
    })
    .on('plugins.icon.set', function(e) {
        // e.element presents the field element
        // e.field is the field name
        // e.status is the validation status which 
        // can be 'NotValidated', 'Validating', 'Valid' or 'Invalid'
        // e.iconElement presents the icon element that associates with the field element
        if (e.iconElement) {
            switch (e.status) {
                case 'Validating':
                    e.iconElement.innerHTML = '...';
                    break;

                case 'Invalid':
                    e.iconElement.innerHTML = '...';
                    break;

                case 'Valid':
                    e.iconElement.innerHTML = '...';
                    break;

                default:
                    e.iconElement.innerHTML = '';
                    break;
            }
        }
    });
`} />
        <p class="lh-copy">We can use the SVG icon by setting <code>e.iconElement.innerHTML</code>.</p>
        <p class="lh-copy">You might need to set the <code>width</code>, <code>height</code> attributes for the SVG element to make it fit in the field. Also, the icon color can be adjusted by setting the <code>stroke</code> attribute:</p>
<SampleCode lang="html" code={`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.333 512" width="16" height="16">
    <path d="" stroke="#ff4136" />
</svg>
`} />
    </section>

    <section class="mv5">
        <Heading>Using with FontAwesome SVG icons</Heading>

        <p class="lh-copy">The following example shows how to listen on this event and display SVG icons provided by <a href="https://fontawesome.com" class="blue dim link">FontAwesome</a>:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">FontAwesome Icon</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">SVG code</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="https://fontawesome.com/icons/sync?style=solid" class="blue dim link">sync</a></td>
                <td class="pv2 ph3">
<SampleCode lang="html" code={`
<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512.333 512" width="16" height="16">
    <path d="M440.935 12.574l3.966 82.766C399.416 
    41.904 331.674 8 256 8 134.813 8 33.933 94.924 
    12.296 209.824 10.908 217.193 16.604 224 24.103 
    224h49.084c5.57 0 10.377-3.842 11.676-9.259C103.407 
    137.408 172.931 80 256 80c60.893 0 114.512 30.856 
    146.104 77.801l-101.53-4.865c-6.845-.328-12.574 
    5.133-12.574 11.986v47.411c0 6.627 5.373 12 12 
    12h200.333c6.627 0 12-5.373 
    12-12V12c0-6.627-5.373-12-12-12h-47.411c-6.853 
    0-12.315 5.729-11.987 12.574zM256 432c-60.895 
    0-114.517-30.858-146.109-77.805l101.868 4.871c6.845.327 
    12.573-5.134 
    12.573-11.986v-47.412c0-6.627-5.373-12-12-12H12c-6.627 
    0-12 5.373-12 12V500c0 6.627 5.373 12 12 
    12h47.385c6.863 0 12.328-5.745 
    11.985-12.599l-4.129-82.575C112.725 470.166 180.405 
    504 256 504c121.187 0 222.067-86.924 243.704-201.824 
    1.388-7.369-4.308-14.176-11.807-14.176h-49.084c-5.57 
    0-10.377 3.842-11.676 9.259C408.593 374.592 339.069 
    432 256 432z" />
</svg>
`} />
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="https://fontawesome.com/icons/times?style=solid" class="blue dim link">times</a></td>
                <td class="pv2 ph3">
<SampleCode lang="html" code={`
<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 352 512" width="16" height="16">
    <path d="M242.72 256l100.07-100.07c12.28-12.28 
    12.28-32.19 
    0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 
    0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 
    0L9.21 111.45c-12.28 12.28-12.28 32.19 0 
    44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 
    32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 
    12.28 44.48 0L176 322.72l100.07 100.07c12.28 
    12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 
    12.28-32.19 0-44.48L242.72 256z" />
</svg>
`} />
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="https://fontawesome.com/icons/check?style=solid" class="blue dim link">check</a></td>
                <td class="pv2 ph3">
<SampleCode lang="html" code={`
<svg xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512" width="16" height="16">
    <path d="M173.898 
    439.404l-166.4-166.4c-9.997-9.997-9.997-26.206
    0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 
    36.204 0L192 312.69 432.095 72.596c9.997-9.997 
    26.207-9.997 36.204 0l36.203 36.204c9.997 
    9.997 9.997 26.206 0 36.204l-294.4 
    294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
</svg>
`} />
                </td>
            </tr>
        </table>
        <Demo prefix="/guide/examples/using-svg-icons/fontawesome-svg" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Using with UIKit framework</Heading>

        <p class="lh-copy">The following example shows how to use <a href="https://getuikit.com/docs/icon" class="blue dim link">SVG icons</a> provided by <a href="https://getuikit.com" class="blue dim link">UIKit framework</a>:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">UIKit Icon</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">SVG code</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>refresh</code></td>
                <td class="pv2 ph3">
<SampleCode lang="html" code={`
<svg xmlns="http://www.w3.org/2000/svg" 
    width="20" height="20" viewBox="0 0 20 20">
    <path fill="none" stroke="#000" stroke-width="1.1" 
        d="M17.08,11.15 C17.09,11.31 17.1,11.47 
        17.1,11.64 C17.1,15.53 13.94,18.69 
        10.05,18.69 C6.16,18.68 3,15.53 3,11.63 
        C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 
        11.71,4.73 12.46,5"></path>
    <polyline fill="none" stroke="#000"
        points="9.9 2 12.79 4.89 9.79 7.9"></polyline>
</svg>
`} />
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>close</code></td>
                <td class="pv2 ph3">
<SampleCode lang="html" code={`
<svg xmlns="http://www.w3.org/2000/svg" 
    width="20" height="20" viewBox="0 0 20 20">
    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>
    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>
</svg>
`} />
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>check</code></td>
                <td class="pv2 ph3">
<SampleCode lang="html" code={`
<svg xmlns="http://www.w3.org/2000/svg" 
    width="20" height="20" viewBox="0 0 20 20">
    <polyline fill="none" stroke="#000" stroke-width="1.1" 
        points="4,10 8,15 17,4"></polyline>
</svg>
`} />
                </td>
            </tr>
        </table>
        <Demo prefix="/guide/examples/using-svg-icons/svg" frameworks={['uikit']} />
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

<svelte:head>
	<title>FormValidation • color validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">color validator</h1>
    <h2 class="f4 fw4 tc">Validate a color in different formats</h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i">The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative/" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>type</code></td>
                <td class="pv2 ph3"><code>data-fv-color___type</code></td>
                <td class="pv2 ph3">String or String[]</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">The type of color. It can be:</p>
                    <ul class="ma0 pl3 lh-copy">
                        <li>One of supported types listed below</li>
                        <li>Array of supported types</li>
                        <li>A string consists of supported types, separated by a comma</li>
                    </ul>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-color___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>
        
        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import color from 'formvalidation/dist/es6/validators/color';

const result = color().validate({
    value: ...,
    options: {
        type: ...,
        message: ...,
    },
});
/*
result is an object of
{
    valid: true or false,
    message: The error message
}
*/
`} />

        <h3>Supported types</h3>
        <p class="lh-copy">Following is the list of supported types:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is it valid?</th>
            </tr>
            {#each Object.entries(_types) as [type, samples]}
                {#each samples as sample, i}
                <tr class="striped--light-gray">
                    <td class="pv2 ph3">{#if i === 0}{type}{/if}</td>
                    <SampleData sample={sample} sender="/guide/validators/color/basic" />
                </tr>
                {/each}
            {/each}
        </table>

        <p class="lh-copy">The <code>keyword</code> type accepts the following colors:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Starting with</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Colors</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">A</td>
                <td class="pv2 ph3"><pre><code>aliceblue, antiquewhite, aqua, aquamarine, azure</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">B</td>
                <td class="pv2 ph3"><pre><code>beige, bisque, black, blanchedalmond, blue,
blueviolet, brown, burlywood</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">C</td>
                <td class="pv2 ph3"><pre><code>cadetblue, chartreuse, chocolate, coral, cornflowerblue,
cornsilk, crimson, cyan</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">D</td>
                <td class="pv2 ph3">
<pre><code>darkblue, darkcyan, darkgoldenrod, darkgray, darkgreen,
darkgrey, darkkhaki, darkmagenta, darkolivegreen, darkorange,
darkorchid, darkred, darksalmon, darkseagreen, darkslateblue,
darkslategray, darkslategrey, darkturquoise, darkviolet, deeppink,
deepskyblue, dimgray, dimgrey, dodgerblue</code></pre>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">F</td>
                <td class="pv2 ph3"><pre><code>firebrick, floralwhite, forestgreen, fuchsia</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">G</td>
                <td class="pv2 ph3"><pre><code>gainsboro, ghostwhite, gold, goldenrod, gray,
green, greenyellow, grey</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">H</td>
                <td class="pv2 ph3"><pre><code>honeydew, hotpink</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">I</td>
                <td class="pv2 ph3"><pre><code>indianred, indigo, ivory</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">K</td>
                <td class="pv2 ph3"><pre><code>khaki</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">L</td>
                <td class="pv2 ph3">
<pre><code>lavender, lavenderblush, lawngreen, lemonchiffon, lightblue,
lightcoral, lightcyan, lightgoldenrodyellow, lightgray, lightgreen,
lightgrey, lightpink, lightsalmon, lightseagreen, lightskyblue,
lightslategray, lightslategrey, lightsteelblue, lightyellow,
lime, limegreen, linen</code></pre>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">M</td>
                <td class="pv2 ph3">
<pre><code>magenta, maroon, mediumaquamarine, mediumblue, mediumorchid,
mediumpurple, mediumseagreen, mediumslateblue, mediumspringgreen,
mediumturquoise, mediumvioletred, midnightblue, mintcream,
mistyrose, moccasin</code></pre>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">N</td>
                <td class="pv2 ph3"><pre><code>navajowhite, navy</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">O</td>
                <td class="pv2 ph3"><pre><code>oldlace, olive, olivedrab, orange, orangered,
orchid</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">P</td>
                <td class="pv2 ph3">
<pre><code>palegoldenrod, palegreen, paleturquoise, palevioletred, papayawhip,
peachpuff, peru, pink, plum, powderblue,
purple</code></pre>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">R</td>
                <td class="pv2 ph3"><pre><code>red, rosybrown, royalblue</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">S</td>
                <td class="pv2 ph3">
<pre><code>saddlebrown, salmon, sandybrown, seagreen, seashell,
sienna, silver, skyblue, slateblue, slategray,
slategrey, snow, springgreen, steelblue</code></pre>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">T</td>
                <td class="pv2 ph3"><pre><code>tan, teal, thistle, tomato, transparent, turquoise</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">V</td>
                <td class="pv2 ph3"><pre><code>violet</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">W</td>
                <td class="pv2 ph3"><pre><code>wheat, white, whitesmoke</code></pre></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">Y</td>
                <td class="pv2 ph3"><pre><code>yellow, yellowgreen</code></pre></td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>

        <Demo prefix="/guide/validators/color/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>HTML5 Example</Heading>

        <p class="lh-copy">When the <a href="/guide/plugins/declarative" class="blue dim link">Declarative</a> plugin is used, the color validator will be turned on automatically if the input uses HTML 5 <code>type="color"</code> attribute</p>
        <p class="lh-copy">According to the <a href="http://www.w3.org/TR/html-markup/input.color.html#input.color.attrs.value" class="blue dim link">W3C specification</a>, the color input only accepts 6 hex character values. 3 hex character values as #FFF is not valid.</p>
        <Demo prefix="/guide/validators/color/html5" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the color validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import color from 'formvalidation/dist/es6/validators/color';

const res1 = color().validate({
    value: '#0000FF',
    options: {
        type: 'hex',
        message: 'The value is not valid color',
    },
});
// res1.valid === true

const res2 = color().validate({
    value: 'hsl (120,50%,50%)',
    options: {
        type: 'hsl',
        message: 'The value is not valid color',
    },
});
// res2.valid === false

const res3 = color().validate({
    value: 'blue',
    options: {
        type: 'keyword',
        message: 'The value is not valid color',
    },
});
// res3.valid === true
`} />
    </section>

    <RelatedValidators validators={['regexp']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/choice/">choice validator</PrevButton>
            <NextButton href="/guide/validators/credit-card/">creditCard validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import SampleData from '../../../../components/SampleData.svelte';

const _types = {
    hex: [
        // Valid
        '#0000FF', '#00F',
        // Invalid
        '123', '112233', '#4567',
    ],
    hsl: [
        // Valid
        'hsl(120,50%,50%)', 'hsl( 120 , 50% , 50% )', 'hsl(  120,  50%,       50%  )', 'hsl(-120,50%,50%)', 'hsl(480,50%,50%)',
        // Invalid
        'hsl(10,-50%,50%)', 'hsl(10,50%,-50%)', '120,50%,50%', 'hsl(120,100%,101%)', 'hsl (120,50%,50%)', 
        'hsl(50%, 50%, 100%)', 'hsl(120, 50, 100%)', 'hsl(120, 50%, 100)',
    ],
    hsla: [
        // Valid
        'hsla(120,50%,50%,1)', 'hsla( 120 , 50% , 50%, 1 )', 'hsla(  120,  50%,       50% ,   1  )', 'hsla(-120,50%,50%,1)', 'hsla(480,50%,50%,1)',
        'hsla(120,50%,100%,0)', 'hsla(120,50%,100%,1)', 'hsla(120,50%,100%,0.5)', 'hsla(120,50%,100%,.5)', 'hsla(120,50%,100%,.524141)',
        // Invalid
        'hsla(120,50%,100%,50%)', 'hsla(120,50%,100%,2)', 'hsla(120,50%,100%,-1)', 'hsla(120,50%,100%,1.000000000001)', 'hsla(120,50%,100%,-0.5)',
        'hsla(120,50%,100%,2.3)', 'hsla(10,-50%,50%,1)', 'hsla(10,50%,-50%,1)', '120,50%,50%,1', 'hsla(120,100%,101%,1)',
        'hsla (120,50%,50%,1)', 'hsla(50%, 50%, 100%,1)', 'hsla(120, 50, 100%,1)', 'hsla(120, 50%, 100,1)',
    ],
    keyword: [
        // Valid
        'transparent', 'blue',
        // Invalid
        'blueviolet red', 'shady', 'blueish',
    ],
    rgb: [
        // Valid
        'rgb(255,255,255)', 'rgb( 255 , 255 , 255 )', 'rgb(  255,  255,       255  )', 'rgb(100%,100%,100%)',
        // Invalid
        'rgb(255,255,100%)', 'rgb(-10,255,255)', 'rgb(-10%,100%,100%)', '255,255,255', 'rgb(255,255,256)',
        'rgb(100%,100%,101%)', 'rgb (255,255,255)',
    ],
    rgba: [
        // Valid
        'rgba(255,255,255,1)', 'rgba( 255 , 255 , 255 , 1 )', 'rgba(  255  ,  255    ,       255 ,  1     )', 'rgba(100%,100%,100%,1)', 'rgba(255,255,255,0)',
        'rgba(255,255,255,0.5)', 'rgba(255,255,255,.5)', 'rgba(255,255,255,.524141)', 'rgba(100%,100%,100%,0)', 'rgba(100%,100%,100%,0.5)',
        'rgba(100%,100%,100%,.5)', 'rgba(100%,100%,100%,.524141)',
        // Invalid
        'rgba(100%,100%,100%,50%)', 'rgba(255,255,255,2)', 'rgba(255,255,255,-1)', 'rgba(255,255,255,1.000000000001)', 'rgba(255,255,255,-0.5)',
        'rgba(255,255,255,2.3)', 'rgba(255,255,100%,1)', 'rgba(-10,255,255,1)', 'rgba(-10%,100%,100%,1)', '255,255,255,1',
        'rgba(255,255,256),1', 'rgba(100%,100%,101%,1)', 'rgba (255,255,255,1)',
    ],
};
</script>

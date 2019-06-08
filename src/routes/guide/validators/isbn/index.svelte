<svelte:head>
	<title>FormValidation • isbn validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">isbn validator</h1>
    <h2 class="f4 fw4 tc lh-copy">Validate an <a href="https://en.wikipedia.org/wiki/International_Standard_Book_Number" class="blue dim link">ISBN (International Standard Book Number)</a>. Support both ISBN 10 and ISBN 13</h2>

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
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-isbn___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import isbn from 'formvalidation/dist/es6/validators/isbn';

const result = isbn().validate({
    value: ...,
    options: {
        message: ...,
    },
});
/*
result is an object of
{
    valid: true or false,
    message: The error message,
    meta: {
        // Can be null (in case the value is not a valid ISBN) or ISBN10, ISBN13
        type: ...
    }    
}
*/
`} />
    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>

        <p class="lh-copy">You can click on sample to see if it's a valid or invalid ISBN.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is valid?</th>
            </tr>
            {#each _samples as sample}
            <tr class="striped--light-gray">
                <SampleData sample={sample} sender="/guide/validators/isbn/basic" />
            </tr>
            {/each}
        </table>

        <Demo prefix="/guide/validators/isbn/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the isbn validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import isbn from 'formvalidation/dist/es6/validators/isbn';

const res1 = isbn().validate({
    value: '9971502100',
    options: {
        message: 'The value is not valid ISBN',
    },
});
// res1.valid === true
// res1.meta.type === 'ISBN10'

const res2 = isbn().validate({
    value: '99921-58-10-6',
    options: {
        message: 'The value is not valid ISBN',
    },
});
// res2.valid === false
// res2.meta.type === null
`} />
    </section>

    <RelatedValidators validators={['ean', 'issn']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/ip/">ip validator</PrevButton>
            <NextButton href="/guide/validators/isin/">isin validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import SampleData from '../../../../components/SampleData.svelte';

const _samples = ['9971502100', '99921-58-10-7', '960 425 059 0', '99921-58-10-6', '9780306406157', '978-0-306-40615-7', '978 0 306 40615 7', '978-0-306-40615-6'];
</script>

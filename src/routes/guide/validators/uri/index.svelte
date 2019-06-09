<svelte:head>
	<title>FormValidation • uri validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">uri validator</h1>
    <h2 class="f4 fw4 tc">Validate an URL address</h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i">The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative/" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>allowLocal</code></td>
                <td class="pv2 ph3"><code>data-fv-uri___allow-local</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3 lh-copy">Allow the private and local network IP. It is <code>false</code>, by default.</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-uri___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>protocol</code></td>
                <td class="pv2 ph3"><code>data-fv-uri___protocol</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The protocols, separated by a comma. By default, it is set to <code>http, https, ftp</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>allowEmptyProtocol</code></td>
                <td class="pv2 ph3"><code>data-fv-uri___allow-empty-protocol</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3 lh-copy">Allow the URI without protocol. Default to <code>false</code></td>
            </tr>
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import uri from 'formvalidation/dist/es6/validators/uri';

const result = uri().validate({
    value: ...,
    options: {
        allowLocal: ...,
        message: ...,
        protocol: ...,
        allowEmptyProtocol: ...,
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
    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>
        
        <p class="lh-copy">You can click on sample to see if it's a valid or invalid URL.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is valid?</th>
            </tr>
            {#each _samples as sample}
            <tr class="striped--light-gray">
                <SampleData sample={sample} sender="/guide/validators/uri/basic" />
            </tr>
            {/each}
        </table>

        <Demo prefix="/guide/validators/uri/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>HTML5 Example</Heading>
        <p class="lh-copy">When the <a href="/guide/plugins/declarative/" class="blue dim link">Declarative</a> plugin is used, the uri validator will be turned on automatically if the input uses HTML 5 <code>type="url"</code> attribute.</p>
        <Demo prefix="/guide/validators/uri/html5" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the uri validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import uri from 'formvalidation/dist/es6/validators/uri';

const res1 = uri().validate({
    value: 'http://foo.com/blah_blah_(wikipedia)',
    options: {
        message: 'The input is not a valid URL',
    },
});
// res1.valid === true

const res2 = uri().validate({
    value: 'http://foo.bar?q=Spaces should be encoded',
    options: {
        allowLocal: true,
        message: 'The input is not a valid URL',
    },
});
// res2.valid === false

const res3 = uri().validate({
    value: 'news://foo.com/blah_blah',
    options: {
        allowEmptyProtocol: true,
        message: 'The input is not a valid URL',
    },
});
// res3.valid === true
`} />
    </section>

    <Examples examples={['Validating an avatar URL']} />

    <RelatedValidators validators={['ip', 'mac']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/string-length/">stringLength validator</PrevButton>
            <NextButton href="/guide/validators/uuid/">uuid validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import SampleData from '../../../../components/SampleData.svelte';

const _samples = [
    // Valid
    'http://foo.com/blah_blah', 'http://foo.com/blah_blah/', 'http://foo.com/blah_blah_(wikipedia)',
    'http://foo.com/blah_blah_(wikipedia)_(again)', 'http://www.example.com/wpstyle/?p=364',
    'https://www.example.com/foo/?bar=baz&inga=42&quux', 'http://✪df.ws/123',
    'http://userid:password@example.com:8080', 'http://userid:password@example.com:8080/', 'http://userid@example.com',
    'http://userid@example.com/', 'http://userid@example.com:8080', 'http://userid@example.com:8080/',
    'http://userid:password@example.com', 'http://userid:password@example.com/', 'http://142.42.1.1/',
    'http://142.42.1.1:8080/', 'http://➡.ws/䨹', 'http://⌘.ws', 'http://⌘.ws/',
    'http://foo.com/blah_(wikipedia)#cite-1', 'http://foo.com/blah_(wikipedia)_blah#cite-1',
    'http://foo.com/unicode_(✪)_in_parens', 'http://foo.com/(something)?after=parens', 'http://☺.damowmow.com/',
    'http://code.google.com/events/#&product=browser', 'http://j.mp', 'ftp://foo.bar/baz',
    'http://foo.bar/?q=Test%20URL-encoded%20stuff', 'http://مثال.إختبار', 'http://例子.测试', 'http://उदाहरण.परीक्षा',
    'http://-.~_!$&()*+,;=:%40:80%2f::::::@example.com', 'http://1337.net', 'http://a.b-c.de',
    'http://223.255.255.254',
    // Invalid
    'http://', 'http://.', 'http://..', 'http://../', 'http://?', 'http://??',
    'http://??/', 'http://#', 'http://##', 'http://##/', 'http://foo.bar?q=Spaces should be encoded',
    '//', '//a', '///a', '///', 'http:///a', 'foo.com', 'rdar://1234', 'h://test',
    'http:// shouldfail.com', ':// should fail', 'http://foo.bar/foo(bar)baz quux',
    'ftps://foo.bar/', 'http://-error-.invalid/', 'http://a.b--c.de/', 'http://-a.b.co',
    'http://a.b-.co', 'http://0.0.0.0', 'http://10.1.1.0', 'http://10.1.1.255',
    'http://224.1.1.1', 'http://1.1.1.1.1', 'http://123.123.123', 'http://3628126748',
    'http://.www.foo.bar/', 'http://www.foo.bar./', 'http://.www.foo.bar./',
    'http://10.1.1.1', 'http://10.1.1.254',
];
</script>

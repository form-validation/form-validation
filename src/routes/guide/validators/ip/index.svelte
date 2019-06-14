<svelte:head>
	<title>FormValidation • ip validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">ip validator</h1>
    <h2 class="f4 fw4 tc">Validate an IP address. Support both IPv4 and IPv6</h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i">The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>ipv4</code></td>
                <td class="pv2 ph3"><code>data-fv-ip___ipv4</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3">Enable IPv4 validator, default to <code>true</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>ipv6</code></td>
                <td class="pv2 ph3"><code>data-fv-ip___ipv6</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3">Enable IPv6 validator, default to <code>true</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-ip___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import ip from 'formvalidation/dist/es6/validators/ip';

const result = ip().validate({
    value: ...,
    options: {
        ipv4: ...,
        ipv6: ...,
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
    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>

        <p class="lh-copy">You can click on sample to see if it's a valid or invalid IP address.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is valid?</th>
            </tr>
            {#each _samples as sample}
            <tr class="striped--light-gray">
                <SampleData sample={sample} sender="/guide/validators/ip/basic" />
            </tr>
            {/each}
        </table>

        <p class="lh-copy">It also supports <a href="https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing" class="blue dim link">CIDR notation</a>:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is valid?</th>
            </tr>
            {#each _cidrSamples as sample}
            <tr class="striped--light-gray">
                <SampleData sample={sample} sender="/guide/validators/ip/basic" />
            </tr>
            {/each}
        </table>

        <Demo prefix="/guide/validators/ip/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the ip validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import ip from 'formvalidation/dist/es6/validators/ip';

const res1 = ip().validate({
    value: '1FAHP26W49G252740',
    options: {
        ipv6: false,
        message: 'The value is not valid IP v4',
    },
});
// res1.valid === true

const res2 = ip().validate({
    value: 'fe80::217:f2ff:fe07:ed62',
    options: {
        ipv4: false,
        message: 'The value is not valid IP v6',
    },
});
// res2.valid === true

const res3 = ip().validate({
    value: '192.168.1.1/01',
    options: {
        ipv4: false,
        message: 'The value is not valid IP',
    },
});
// res3.valid === false
`} />
    </section>

    <RelatedValidators validators={['mac', 'uri']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/integer">integer validator</PrevButton>
            <NextButton target="/guide/validators/isbn">isbn validator</NextButton>
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

const _samples = [
    // Valid
    '0.0.0.0', '192.168.1.1', '255.255.255.255', '0000:0000:0000:0000:0000:0000:0000:0000', 'fe00::1',
    'fe80::217:f2ff:fe07:ed62', 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff', '2001:0db8:0000:85a3:0000:0000:ac1f:8001',
    // Invalid
    '10.168.0001.100', '0.0.0.256', '256.255.255.255', '256.0.0.0', '192.168. 224.0',
    '192.168.224.0 1', '02001:0000:1234:0000:0000:C1C0:ABCD:0876', '2001:0000:1234:0000:00001:C1C0:ABCD:0876', '2001:0000:1234: 0000:0000:C1C0:ABCD:0876',
    '2001:0000:1234:0000:0000:C1C0:ABCD:0876 0', '3ffe:0b00:0000:0001:0000:0000:000a', 'FF02:0000:0000:0000:0000:0000:0000:0000:0001',
    '::1111:2222:3333:4444:5555:6666::', '3ffe:b00::1::a',
];
const _cidrSamples = [
    // Valid
    '192.168.1.1/12', '192.168.1.1/32', '0000:0000:0000:0000:0000:0000:0000:0000/01', '0000:0000:0000:0000:0000:0000:0000:0000/19',
    '0000:0000:0000:0000:0000:0000:0000:0000/99', '0000:0000:0000:0000:0000:0000:0000:0000/100', '0000:0000:0000:0000:0000:0000:0000:0000/119',
    '0000:0000:0000:0000:0000:0000:0000:0000/128', '::1/128', '2001:db8::/48',
    // Invalid
    '192.168.1.1/', '192.168.1.1/12.34', '192.168.1.1/01', '192.168.1.1/33',
    '0000:0000:0000:0000:0000:0000:0000:0000/', '0000:0000:0000:0000:0000:0000:0000:0000/012', '0000:0000:0000:0000:0000:0000:0000:0000/129',
    '0000:0000:0000:0000:0000:0000:0000:0000/130',
];
</script>

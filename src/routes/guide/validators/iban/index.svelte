<svelte:head>
	<title>FormValidation • iban validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">iban validator</h1>
    <h2 class="f4 fw4 tc">Validate an <a href="https://en.wikipedia.org/wiki/International_Bank_Account_Number" class="blue dim link">International Bank Account Number (IBAN)</a></h2>

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
                <td class="pv2 ph3"><code>country</code></td>
                <td class="pv2 ph3"><code>data-fv-iban___country</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">An ISO-3166 country code</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-iban___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>sepa</code></td>
                <td class="pv2 ph3"><code>data-fv-iban___sepa</code></td>
                <td class="pv2 ph3">Boolean</td>
                <td class="pv2 ph3 lh-copy">Set it to true (false) to indicate that the IBAN number must be (not be) from SEPA countries. The list of SEPA countries are indicated in the table below. By default, this option is not defined</td>
            </tr>
        </table>
        <p class="lh-copy">If the <code>country</code> is not defined, it will be parsed from the IBAN number. The validator supports the following countries (sorted by the country code in alphabetical order):</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Country</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Code</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Sample IBAN</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is it valid?</th>
            </tr>
            {#each _samples as sample}
            <tr class="striped--light-gray">
                <td class="pv2 ph3">{sample.country} {#if sample.sepa}(SEPA){/if}</td>
                <td class="pv2 ph3">{sample.code}</td>
                <SampleData sample={sample.example} sender="/guide/validators/iban/basic" />
            </tr>
            {/each}
        </table>

        <h3>Using with ES6 module</h3>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import iban from 'formvalidation/dist/es6/validators/iban';

const result = iban().validate({
    value: ...,
    options: {
        country: ...,
        message: ...,
        sepa: ...,
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
        <p class="lh-copy">You can click on sample from the table above to see if it's a valid or invalid IBAN.</p>
        <Demo prefix="/guide/validators/iban/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <Heading>ES6 Module Example</Heading>

        <p class="lh-copy">The following snippet shows how to use the iban validator with ES6 module:</p>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import iban from 'formvalidation/dist/es6/validators/iban';

const res1 = iban().validate({
    value: 'AT611904300234573201',
    options: {
        message: 'The value is not a valid IBAN',
    },
});
// res1.valid === true

const res2 = iban().validate({
    value: 'GB29NWBK6016133192681',
    options: {
        message: 'The value is not a valid IBAN',
    },
});
// res2.valid === false
`} />
    </section>

    <RelatedValidators validators={['bic', 'creditCard', 'rtn']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/validators/hex">hex validator</PrevButton>
            <NextButton target="/guide/validators/id">id validator</NextButton>
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
    { country: 'Albania', code: 'AL', example: 'AL47212110090000000235698741' },
    { country: 'Algeria', code: 'DZ', example: 'DZ4000400174401001050486' },
    { country: 'Andorra', code: 'AD', example: 'AD1200012030200359100100' },
    { country: 'Angola', code: 'AO', example: 'AO06000600000100037131174' },
    { country: 'Austria', code: 'AT', sepa: true, example: 'AT611904300234573201' },
    { country: 'Azerbaijan', code: 'AZ', example: 'AZ21NABZ00000000137010001944' },
    { country: 'Bahrain', code: 'BH', example: 'BH29BMAG1299123456BH00' },
    { country: 'Bosnia and Herzegovina', code: 'BA', example: 'BA391290079401028494' },
    { country: 'Belgium', code: 'BE', sepa: true, example: 'BE68539007547034' },
    { country: 'Benin', code: 'BJ', example: 'BJ11B00610100400271101192591' },
    { country: 'Brazil', code: 'BR', example: 'BR9700360305000010009795493P1' },
    { country: 'Bulgaria', code: 'BG', sepa: true, example: 'BG80BNBG96611020345678' },
    { country: 'Burkina Faso', code: 'BF', example: 'BF1030134020015400945000643' },
    { country: 'Burundi', code: 'BI', example: 'BI43201011067444' },
    { country: 'Cameroon', code: 'CM', example: 'CM2110003001000500000605306' },
    { country: 'Cape Verde', code: 'CV', example: 'CV64000300004547069110176' },
    { country: 'Costa Rica', code: 'CR', example: 'CR0515202001026284066' },
    { country: 'Croatia', code: 'HR', sepa: true, example: 'HR1210010051863000160' },
    { country: 'Cyprus', code: 'CY', sepa: true, example: 'CY17002001280000001200527600' },
    { country: 'Czech Republic', code: 'CZ', sepa: true, example: 'CZ6508000000192000145399' },
    { country: 'Denmark', code: 'DK', sepa: true, example: 'DK5000400440116243' },
    { country: 'Dominican Republic', code: 'DO', example: 'DO28BAGR00000001212453611324' },
    { country: 'East Timor', code: 'TL', example: 'TL380080012345678910157' },
    { country: 'Estonia', code: 'EE', sepa: true, example: 'EE382200221020145685' },
    { country: 'Faroe Islands', code: 'FO', example: 'FO1464600009692713' },
    { country: 'Finland', code: 'FI', sepa: true, example: 'FI2112345600000785' },
    { country: 'France', code: 'FR', sepa: true, example: 'FR1420041010050500013M02606' },
    { country: 'Guatemala', code: 'GT', example: 'GT82TRAJ01020000001210029690' },
    { country: 'Georgia', code: 'GE', example: 'GE29NB0000000101904917' },
    { country: 'Germany', code: 'DE', sepa: true, example: 'DE89370400440532013000' },
    { country: 'Gibraltar', code: 'GI', sepa: true, example: 'GI75NWBK000000007099453' },
    { country: 'Greece', code: 'GR', sepa: true, example: 'GR1601101250000000012300695' },
    { country: 'Greenland', code: 'GL', example: 'GL8964710001000206' },
    { country: 'Hungary', code: 'HU', sepa: true, example: 'HU42117730161111101800000000' },
    { country: 'Iceland', code: 'IS', sepa: true, example: 'IS140159260076545510730339' },
    { country: 'Iran', code: 'IR', example: 'IR580540105180021273113007' },
    { country: 'Ireland', code: 'IE', sepa: true, example: 'IE29AIBK93115212345678' },
    { country: 'Israel', code: 'IL', example: 'IL620108000000099999999' },
    { country: 'Italy', code: 'IT', sepa: true, example: 'IT60X0542811101000000123456' },
    { country: 'Ivory Coast', code: 'CI', example: 'CI05A00060174100178530011852' },
    { country: 'Jordan', code: 'JO', example: 'JO94CBJO0010000000000131000302' },
    { country: 'Kazakhstan', code: 'KZ', example: 'KZ176010251000042993' },
    { country: 'Kuwait', code: 'KW', example: 'KW74NBOK0000000000001000372151' },
    { country: 'Latvia', code: 'LV', sepa: true, example: 'LV80BANK0000435195001' },
    { country: 'Lebanon', code: 'LB', example: 'LB30099900000001001925579115' },
    { country: 'Liechtenstein', code: 'LI', sepa: true, example: 'LI21088100002324013AA' },
    { country: 'Lithuania', code: 'LT', sepa: true, example: 'LT121000011101001000' },
    { country: 'Luxembourg', code: 'LU', sepa: true, example: 'LU280019400644750000' },
    { country: 'Macedonia', code: 'MK', example: 'MK07300000000042425' },
    { country: 'Madagascar', code: 'MG', example: 'MG4600005030010101914016056' },
    { country: 'Malta', code: 'MT', sepa: true, example: 'MT84MALT011000012345MTLCAST001S' },
    { country: 'Mauritania', code: 'MR', example: 'MR1300012000010000002037372' },
    { country: 'Mauritius', code: 'MU', example: 'MU17BOMM0101101030300200000MUR' },
    { country: 'Mali', code: 'ML', example: 'ML03D00890170001002120000447' },
    { country: 'Moldova', code: 'MD', example: 'MD24AG000225100013104168' },
    { country: 'Monaco', code: 'MC', sepa: true, example: 'MC5813488000010051108001292' },
    { country: 'Montenegro', code: 'ME', example: 'ME25505000012345678951' },
    { country: 'Mozambique', code: 'MZ', example: 'MZ59000100000011834194157' },
    { country: 'Netherlands', code: 'NL', sepa: true, example: 'NL91ABNA0417164300' },
    { country: 'Norway', code: 'NO', sepa: true, example: 'NO9386011117947' },
    { country: 'Pakistan', code: 'PK', example: 'PK24SCBL0000001171495101' },
    { country: 'Palestine', code: 'PS', example: 'PS92PALS000000000400123456702' },
    { country: 'Poland', code: 'PL', sepa: true, example: 'PL27114020040000300201355387' },
    { country: 'Portugal', code: 'PT', sepa: true, example: 'PT50000201231234567890154' },
    { country: 'Qatar', code: 'QA', example: 'QA58DOHB00001234567890ABCDEFG' },
    { country: 'Republic of Kosovo', code: 'XK', example: 'XK051212012345678906' },
    { country: 'Romania', code: 'RO', sepa: true, example: 'RO49AAAA1B31007593840000' },
    { country: 'San Marino', code: 'SM', sepa: true, example: 'SM86U0322509800000000270100' },
    { country: 'Saudi Arabia', code: 'SA', example: 'SA0380000000608010167519' },
    { country: 'Senegal', code: 'SN', example: 'SN12K00100152000025690007542' },
    { country: 'Serbia', code: 'RS', example: 'RS35260005601001611379' },
    { country: 'Slovakia', code: 'SK', sepa: true, example: 'SK3112000000198742637541' },
    { country: 'Slovenia', code: 'SI', sepa: true, example: 'SI56191000000123438' },
    { country: 'Spain', code: 'ES', sepa: true, example: 'ES9121000418450200051332' },
    { country: 'Sweden', code: 'SE', sepa: true, example: 'SE3550000000054910000003' },
    { country: 'Switzerland', code: 'CH', sepa: true, example: 'CH9300762011623852957' },
    { country: 'Tunisia', code: 'TN', example: 'TN5914207207100707129648' },
    { country: 'Turkey', code: 'TR', example: 'TR330006100519786457841326' },
    { country: 'United Arab Emirates', code: 'AE', example: 'AE260211000000230064016' },
    { country: 'United Kingdom', code: 'GB', sepa: true, example: 'GB29NWBK60161331926819' },
    { country: 'Virgin Islands, British', code: 'VG', example: 'VG96VPVG0000012345678901' },
];
</script>

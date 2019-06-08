<svelte:head>
	<title>FormValidation • Localization</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Localization</h1>
    <h2 class="f4 fw4 tc">Using a language package</h2>

    <section class="mb4">
        <p class="lh-copy">In the previous section, the error message for each validator is configured by the <code>message</code> option:</p>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(
    document.getElementById('loginForm'),
    {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        message: 'The username must be more than 6 and less than 30 characters long',
                        ...
                    },
                    regexp: {
                        message: 'The username can only consist of alphabetical, number and underscore',
                        ...
                    },
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        message: 'The password must have at least 8 characters',
                        ...
                    },
                }
            },
        },
        plugins: {
            ...
        }
    }
);
`} />
        <p class="lh-copy">It is posible to use the default message from a language package. The following piece of code show how to use messages from English package:</p>
<SampleCode lang="html" code={`
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<!-- The language package has to be loaded after FormValidation(.min).js -->
<script-tag src="/vendors/formvalidation/dist/js/locales/en_US.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            // Set the default locale
            locale: 'en_US',
            localization: FormValidation.locales.en_US,
            
            // Ignore the message option
            // It will be taken from the language package
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9]+$/
                        },
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 8
                        },
                    }
                },
            },
            plugins: {
                ...
            },
        }
    );
});
</script-tag>
`} />        
        <p class="lh-copy">FormValidation has been translated into the following languages which are available in the <code>dist/js/locales</code> folder (and the <code>dist/es6/locales</code> folder if you want to use with ES6 module).</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Language</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">File name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Translated by</th>
            </tr>
            {#each _locales as locale}
            <tr class="striped--light-gray">
                <td class="pv2 ph3">{locale.name}</td>
                <td class="pv2 ph3"><code>{locale.file}</code></td>
                <td class="pv2 ph3">
                    {#if typeof locale.author === 'string'}
                    {locale.author}
                    {:else}
                    {locale.author.join(', ')}
                    {/if}
                </td>
            </tr>
            {/each}
        </table>
        <p class="lh-copy">From v1.0.0, <code>FormValidation(.min).js</code> will not contain any language package including the English one. You have to load them manually as seen in the sample code above.</p>
        <p class="lh-copy">The working example below shows an usage of English language package:</p>
        <Demo prefix="/guide/getting-started/localization/basic" frameworks={['Tachyons']} />

        <Tip>Look at the <a href="/guide/plugins/l10n/" class="blue dim link">L10n</a> plugin if you want to use multiple language packages and be able to switch between them</Tip>
    </section>

    <section class="cf mb4">
        <div class="fl w-50 tl">
            <PrevButton href="/guide/getting-started/usage/">Usage</PrevButton>
        </div>
        <div class="fl w-50 tr">
            <NextButton href="/guide/getting-started/special-field-name/">Special field name</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';

const _locales = [
    { name: 'English', file: 'en_US.js', author: 'nghuuphuoc' },
    { name: 'Albanian', file: 'sq_AL.js', author: 'desaretiuss' },
    { name: 'Arabic', file: 'ar_MA.js', author: 'Arkni' },
    { name: 'Basque', file: 'eu_ES.js', author: 'xabikip' },
    { name: 'Belgium (French)', file: 'fr_BE.js', author: 'neilime' },
    { name: 'Belgium (Netherland)', file: 'nl_BE.js', author: 'dokterpasta' },
    { name: 'Bulgarian', file: 'bg_BG.js', author: 'mraiur' },
    { name: 'Catalan', file: 'ca_ES.js', author: 'ArnauAregall' },
    { name: 'Chilean Spanish', file: 'es_CL.js', author: 'marceloampuerop6' },
    { name: 'Chinese', file: 'zh_CN.js', author: 'shamiao' },
    { name: 'Czech', file: 'cs_CZ.js', author: ['AdwinTrave', 'budik21', 'cuchac'] },
    { name: 'Danish', file: 'da_DK.js', author: 'Djarnis' },
    { name: 'Dutch (Netherland)', file: 'nl_NL.js', author: 'JvanderHeide' },
    { name: 'Finnish', file: 'fi_FI.js', author: 'traone' },
    { name: 'French', file: 'fr_FR.js', author: ['dlucazeau', 'jazzzz', 'neilime'] },
    { name: 'German', file: 'de_DE.js', author: 'logemann' },
    { name: 'Greek', file: 'el_GR.js', author: 'pRieStaKos' },
    { name: 'Hebrew', file: 'he_IL.js', author: 'yakidahan' },
    { name: 'Hindi', file: 'hi_IN.js', author: 'gladiatorAsh' },
    { name: 'Hungarian', file: 'hu_HU.js', author: 'blackfyre' },
    { name: 'Indonesian', file: 'id_ID.js', author: 'egig' },
    { name: 'Italian', file: 'it_IT.js', author: 'maramazza' },
    { name: 'Japanese', file: 'ja_JP.js', author: 'tsuyoshifujii' },
    { name: 'Norwegian', file: 'no_NO.js', author: 'trondulseth' },
    { name: 'Persian (Farsi)', file: 'fa_IR.js', author: 'i0' },
    { name: 'Polish', file: 'pl_PL.js', author: ['grzesiek', 'lukaszbanasiak'] },
    { name: 'Portuguese (Brazil)', file: 'pt_BR.js', author: ['marcuscarvalho6', 'dgmike'] },
    { name: 'Portuguese (Portugal)', file: 'pt_PT.js', author: 'rtbfreitas' },
    { name: 'Romanian', file: 'ro_RO.js', author: 'filipac' },
    { name: 'Russian', file: 'ru_RU.js', author: ['cylon-v', 'stepin'] },
    { name: 'Serbian', file: 'sr_RS.js', author: 'markocrni' },
    { name: 'Slovak', file: 'sk_SK.js', author: 'filipac' },
    { name: 'Spanish', file: 'es_ES.js', author: 'vadail' },
    { name: 'Swedish', file: 'sv_SE.js', author: 'ulsa' },
    { name: 'Taiwanese', file: 'zh_TW.js', author: 'tureki' },
    { name: 'Thai', file: 'th_TH.js', author: 'figgaro' },
    { name: 'Turkish', file: 'sr_RS.js', author: 'CeRBeR666' },
    { name: 'Ukrainian', file: 'ua_UA.js', author: 'oleg-voloshyn' },
    { name: 'Vietnamese', file: 'vi_VN.js', author: 'nghuuphuoc' },
];
</script>

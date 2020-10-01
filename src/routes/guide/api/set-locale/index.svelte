<svelte:head>
	<title>FormValidation • setLocale() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">setLocale()</h1>
    <h2 class="f4 fw4 tc">Set the locale and the localization data</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`setLocale(locale: String, localization: Object): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3">
            <li class="lh-copy"><code>locale</code> <sup>*</sup> — The locale in the format of countrycode_LANGUAGECODE. en_US, de_DE, fr_FR, vi_VN, for example</li>
            <li class="lh-copy"><code>localization</code> <sup>*</sup> — An object containing the translation of all validators</li>
        </ul>
        <p class="lh-copy">This method is useful when you want to switch to another locale. See the <a href="/guide/plugins/l10n" class="blue dim link">L10n</a> plugin for an example.</p>
        <p class="lh-copy">You can access the translation directly from the packages located in the <code>dist/js/locates</code> folder:</p>
<SampleCode lang="html" code={`
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>

<!--
You can include many language packages as you want. Their order don't matter
as you ensure that they are loaded after FormValidation(.min).js
-->
<script-tag src="/vendors/formvalidation/dist/js/locales/en_US.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/locales/fr_FR.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/locales/vi_VN.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            ...
        }
    );

    // Access the English translation package
    const englishTranslation = FormValidation.locales.en_US;

    // Switch error messages to English
    fv.setLocale('en_US', englishTranslation);
});
</script-tag>
`} />
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/set-field-options">setFieldOptions() method</PrevButton>
            <NextButton target="/guide/api/update-element-status">updateElementStatus() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

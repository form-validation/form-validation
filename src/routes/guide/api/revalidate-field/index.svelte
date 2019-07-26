<svelte:head>
	<title>FormValidation • revalidateField() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">revalidateField()</h1>
    <h2 class="f4 fw4 tc">Revalidate a particular field</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`revalidateField(field: String): Promise`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
        </ul>
        <p class="lh-copy">This method is useful when the field value is effected by third parties (for example, attach another UI library to the field).</p>
        <p class="lh-copy">Since there isn't an automatic way for FormValidation to know when the field value is modified in those cases, we need to revalidate the field manually.</p>
<SampleCode lang="javascript" code={`
fv
    .revalidateField('userName')
    .then(function(status) {
        // status can be one of the following value
        // 'NotValidated': The field is not yet validated
        // 'Valid': The field is valid
        // 'Invalid': The field is invalid
        ...
    });
`} />
        <p class="lh-copy">Look at the <a href="/guide/examples/integrating-with-3rd-party-libraries" class="blue dim link">Integration</a> page to see more examples.</p>
    </section>

    <Examples examples={[
        'Integrating with 3rd party libraries',
        'Setting dynamic regular expression',
        'Terms and conditions agreement validation',
        'Updating validator options',
        'Validating multiple inputs as one',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/api/reset-form">resetForm() method</PrevButton>
            <NextButton target="/guide/api/set-locale">setLocale() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

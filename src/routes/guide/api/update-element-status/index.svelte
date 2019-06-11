<svelte:head>
	<title>FormValidation • updateElementStatus() method</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">updateElementStatus()</h1>
    <h2 class="f4 fw4 tc">Update the element status</h2>

    <section class="mv5">
        <div class="mb3">
            <SampleCode lang="javascript" code={`updateElementStatus(field: String, ele: HTMLElement, status: String, validator: String): Core`} />
        </div>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <ul class="ma0 pl3 lh-copy">
            <li><code>field</code> <sup>*</sup> — The field name</li>
            <li><code>ele</code> <sup>*</sup> — The field element</li>
            <li><code>status</code> <sup>*</sup> — The new status. It can be one of the following value
                <ul class="ma0 pl3 lh-copy">
                    <li><code>'NotValidated'</code> or <code>FormValidation.Status.NotValidated</code>: The field is not yet validated</li>
                    <li><code>'Valid'</code> or <code>FormValidation.Status.Valid</code>: The field is valid</li>
                    <li><code>'Invalid'</code> or <code>FormValidation.Status.Invalid</code>: The field is invalid</li>
                </ul>
            </li>
            <li><code>validator</code> — The validator name. If it isn't specified, all validators will be updated</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/api/set-locale/">setLocale() method</PrevButton>
            <NextButton href="/guide/api/update-field-status/">updateFieldStatus() method</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

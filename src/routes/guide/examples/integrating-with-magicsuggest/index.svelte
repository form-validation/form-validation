<svelte:head>
	<title>FormValidation • Integrating with MagicSuggest</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Integrating with MagicSuggest</h1>

    <section class="mv5">
        <p class="lh-copy">This example demonstrates how to integrate FormValidation with <a href="https://github.com/Magicsuggest/magicsuggest" target="_blank" class="blue dim link">MagicSuggest</a>.</p>
        <p class="lh-copy">It's a jQuery plugin that shows a multiple selection dropdown which options can be passed from a given data source.</p>

        <p class="lh-copy">The MagicSuggest plugin attaches a given element, not an input. That's why we need to prepare a hidden field to track which options are chosen:</p>

<SampleCode lang="html" code={`
<form id="demoForm">
    <!-- The hidden field -->
    <input type="hidden" name="dest" />

    <!-- The area that MagicSuggest attaches to -->
    <div id="destination"></div>
    ...
</form>
`} />

        <p class="lh-copy">We can apply a few of <a href="/guide/validators" class="blue dim link">validators</a> for the hidden field. Let's say that it can't be empty:</p>

<SampleCode lang="javascript" code={`
const demoForm = document.getElementById('demoForm');

const fv = FormValidation.formValidation(demoForm, {
    fields: {
        dest: {
            validators: {
                notEmpty: {
                    message: 'Please choose one city'
                }
            }
        },
    },
    plugins: {
        ...
    },
});
`} />

        <p class="lh-copy">Now, all the preparations are done. It's the time for us to integrate MagicSuggest with the <code>destination</code> element above:</p>

<SampleCode lang="javascript" code={`
const destinationEle = jQuery('#destination').magicSuggest({
    data: [
        'Amsterdam', 'Barcelona', 'Hanoi', 'London', 'New York',
        'Paris', 'Rome', 'San Francisco', 'Seoul', 'Tokyo'
    ],
    maxSelection: 1
});
`} />       
        <p class="lh-copy">To make the demonstration simple, the data source is just a list of string. In reality, it can be an URL that fetches data from your back-end.</p>
        <p class="lh-copy">Currently there is no connection between the hidden field and our destination dropdown. What we wish are</p>
        <ul class="lh-copy ma0 pa0 ml3">
            <li>Update the value for hidden field after choosing an option</li>
            <li>Then revalidate the hidden field</li>
        </ul>

        <p class="lh-copy">It can be done by triggering the MagicSuggest's <code>selectionchange</code> event and the FormValidation's <a href="/guide/api/revalidate-field" class="blue dim link">revalidateField() method</a>. The following piece of code
        illustrates that approach:</p>

<SampleCode lang="javascript" code={`
jQuery(destinationEle).on('selectionchange', function(e, m) {
    // Get the selected item
    const data = this.getSelection();
    
    // Update the value for hidden field
    destField.value = (data.length == 0) ? '' : data[0].name;

    // Revalidate the field
    fv.revalidateField('dest');
});
`} />

        <Tip>You should look at the <a href="/guide/examples/integrating-with-3rd-party-libraries" class="blue dim link">basic principle</a> when integrating FormValidation with 3rd party libraries</Tip>
        <Demo prefix="/guide/examples/integrating-with-magicsuggest" frameworks={['bootstrap3']} />
        <Tip>The demonstration also uses the technique introduced in the <a href="/guide/examples/adjusting-icon-position" class="blue dim link">Adjusting icon position</a> example, so the feedback icon is displayed at the desired position.</Tip>
    </section>

    <Examples examples={[
        'Integrating with MagicSuggest',
        'Integrating with Select2',
    ]} />

    <RelatedValidators validators={['choice']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

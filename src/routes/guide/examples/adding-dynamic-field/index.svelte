<svelte:head>
	<title>FormValidation • Adding dynamic field</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Adding dynamic field</h1>
    
    <section class="mv5">
        <p class="lh-copy">When working with complex form, the fields might be added to (or remove from) the form dynamically. The newly added fields also need to be validated.</p>
        <p class="lh-copy">This example demonstrates a sample scenario where you have to solve validating dynamic fields problem.</p>
        <p class="lh-copy">Before going to the details, there are some methods and events you need to know:</p>

        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Method/Event</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/api/add-field" class="blue dim link">addField() method</a></td>
                <td class="pv2 ph3">Adding new field</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/api/remove-field" class="blue dim link">removeField() method</a></td>
                <td class="pv2 ph3">Removing new field</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/events/core.field.added" class="blue dim link">core.field.added event</a></td>
                <td class="pv2 ph3">Called after adding new field</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/events/core.field.removed" class="blue dim link">core.field.removed event</a></td>
                <td class="pv2 ph3">Called after removing given field</td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>Adding fields with different names</Heading>

        <p class="lh-copy">The following form manages the wish list of books you would love to buy. Each book must have three properties which are title, ISBN number and price (in dollar).</p>
        <p class="lh-copy">Assume that, due to the required naming convention from server, the fields for these properties
            are named as <code>book[i].title</code>, <code>book[i].isbn</code> and <code>book[i].price</code>,
            where <code>i</code> is the index number of book which can be 0, 1, 2, and so forth.</p>

        <Demo prefix="/guide/examples/adding-dynamic-field/different-name" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Using other library for added fields</Heading>

        <p class="lh-copy">Sometime, the added fields aren't just simply a normal input such as text box, text area. They can be used with other plugins such as a date picker, an auto-completed control, etc.</p>
        <p class="lh-copy">In this case, the field should be initially as a normal text input, and then integrated with other plugin after being added.</p>
        <p class="lh-copy">The following sample code attaches a date picker to newly added input by triggering the <a href="/guide/events/core.field.added" class="blue dim link">core.field.added event</a>:</p>

        <div class="mb4">
<SampleCode lang="javascript" code={`
// The index of row
let rowIndex = 0;

const demoForm = document.getElementById('demoForm');

const fv = FormValidation.formValidation(demoForm, {
    fields: {
        'task[0].title': titleValidators,
        'task[0].dueDate': dueDateValidators,
    },
    plugins: {
        ...
    },
}).on('core.field.added', function(e) {
    if (e.field === 'task[' + rowIndex + '].dueDate') {
        // The added field is due date
        attachPickAdayPicker(e.field);
    }
});

const attachPickAdayPicker = function(fieldName) {
    new Pikaday({
        field: demoForm.querySelector('[name="' + fieldName + '"]'),
        onSelect: function() {
            // Revalidate the date field
            if (fv) {
                fv.revalidateField(fieldName);
            }
        }
    });
};

// Attach pickaday to the first existing due date
attachPickAdayPicker('task[0].dueDate');
`} />
        </div>
        <Tip>You should look at the <a href="/guide/examples/integrating-with-3rd-party-libraries" class="blue dim link">principles</a> when integrating FormValidation with other plugins</Tip>
        <Demo prefix="/guide/examples/adding-dynamic-field/using-other-library" frameworks={['tachyons']} />
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

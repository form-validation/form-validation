<svelte:head>
	<title>FormValidation • Validating checkbox list placed in multiple columns</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Validating checkbox list placed in multiple columns</h1>

    <p class="lh-copy">In this example, you will see how to validate a list of checkboxes which are placed in multiple columns.</p>
    <p class="lh-copy">The following form asks us to choose at least one day that we will be notified when the event is going to happen.
        The list of days are placed inside two columns which have the same <code>w-50</code> class (assuming you're using the <a href="/guide/plugins/tachyons" class="blue dim link">Tachyons</a> framework).</p>
    <p class="lh-copy">We need to define the elements that display the feedback icon and error message:</p>
<SampleCode lang="html" code={`
<div class="cf mb2">
    <div class="fl w-100">
        <div class="fl w-25 pa2">Alert on</div>
        <div class="fl w-75">
            <div class="w-100 js-alert-field-container">
                <div class="fl w-50">
                    <!-- The first three checkboxes ... -->
                </div>
                <div class="fl w-50">
                    <!-- The other three checkboxes ... -->
                </div>

                <!-- The feedback icon will be placed here -->
                <div id="alertDayIcon"></div>
            </div>
        </div>
    </div>
</div>

<div class="cf mb2">
    <div class="fl w-100">
        <div class="fl w-25 pa2"></div>
        <div class="fl w-75">
            <!-- The container to show the error of checkboxes -->
            <div id="alertDayMessage"></div>
        </div>
    </div>
</div>   
`} />
    <p class="lh-copy">The checkboxes are placed in the same row, inside <code>.js-alert-field-container</code> element. We need to let the <a href="/guide/plugins/tachyons" class="blue dim link">Tachyons</a> plugin know how it can find these fields:</p>
<SampleCode lang="javascript" code={`
const form = document.getElementById('demoForm');
const fv = FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        tachyons: new FormValidation.plugins.Tachyons({
            rowSelector: function(field, ele) {
                return field === 'alertDay' ? '.js-alert-field-container' : '.fl';
            },
        }),
    },
});
`} />
    <Tip>
        You should look at the <code>rowSelector</code> option when using multiple fields on the same row. Refer to the <span class="i">Multiple fields on the same row</span> section when using with plugin supports popular CSS framework, such as 
        <a href="/guide/plugins/bootstrap#multiple-fields-on-the-same-row">Bootstrap</a>, <a href="/guide/plugins/tachyons#multiple-fields-on-the-same-row" class="blue dim link">Tachyons</a>, .etc
    </Tip>
    <p class="lh-copy">To show the feedback icon at the element <code>#alertDayIcon</code>, we need to use <a href="/guide/examples/showing-icons-in-custom-area" class="blue dim link">onPlaced</a> option which is called when the icon element is inserted to the document:</p>
<SampleCode lang="javascript" code={`
const fv = FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        icon: new FormValidation.plugins.Icon({
            valid: 'fa fa-check',
            invalid: 'fa fa-times',
            validating: 'fa fa-refresh',
            onPlaced: function(e) {
                if (e.field === 'alertDay') {
                    document.getElementById('alertDayIcon').appendChild(e.iconElement);
                }
            },
        }),
    },
});
`} />
    <p class="lh-copy">The last step is to indicate the container where the associated messages are shown:</p>
<SampleCode lang="javascript" code={`
const fv = FormValidation.formValidation(form, {
    fields: {
        ...
    },
    plugins: {
        message: new FormValidation.plugins.Message({
            clazz: 'red lh-copy',
            container: function(field, ele) {
                return field === 'alertDay'
                        ? document.getElementById('alertDayMessage')
                        : FormValidation.plugins.Message.getClosestContainer(ele, form, /^(.*)fl(.*)$/);
            },
        }),        
    },
});
`} />
    <p class="lh-copy">Look at the <a href="/guide/plugins/message/#example-showing-messages-in-custom-area" class="blue dim link">Showing messages in custom area</a> section for more details.</p>
    <Demo prefix="/guide/examples/validating-checkbox-list-placed-in-multiple-columns" frameworks={['bootstrap', 'tachyons']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

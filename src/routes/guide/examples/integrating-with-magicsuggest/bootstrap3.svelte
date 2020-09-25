<style>
/* See https://formvalidation.io/guide/examples/adjusting-icon-position */
:global(.form-horizontal .destination-container .form-control-feedback) {
    right: -20px;
}
</style>

<Bootstrap3Layout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/magicsuggest/2.1.4/magicsuggest-min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/magicsuggest/2.1.4/magicsuggest.js',
    ]} onLoaded={onLoaded}>
        <form id="demoForm" class="form-horizontal" method="POST" style="height: 380px;">
            <div class="form-group">
                <label class="col-xs-3 control-label">Choose the destination</label>
                <div class="col-xs-5 destination-container">
                    <input type="hidden" name="dest" />
                    <div id="destination"></div>
                </div>
            </div>
        
            <div class="form-group">
                <div class="col-xs-9 col-xs-offset-3">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </form>
    </ResourceLoader>
</Bootstrap3Layout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap3 from 'formvalidation/plugins/Bootstrap3';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './bootstrap3.programmatic';
import Bootstrap3Layout from '../../../../components/demo/Bootstrap3Layout.svelte';
import ResourceLoader from '../../../../components/ResourceLoader.svelte';

let fv;

const onLoaded = () => {
    const demoForm = document.getElementById('demoForm');
    const fv = formValidation(demoForm, {
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
            trigger: new Trigger(),
            submitButton: new SubmitButton(),
            bootstrap3: new Bootstrap3(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/integrating-with-magicsuggest/bootstrap3',
                sampleCode: sampleCode,
            }),
        }
    });

    // The hidden field
    const destField = demoForm.querySelector('[name="dest"]');

    const destinationEle = jQuery('#destination').magicSuggest({
        data: ['Amsterdam', 'Barcelona', 'Hanoi', 'London', 'New York', 'Paris', 'Rome', 'San Francisco', 'Seoul', 'Tokyo'],
        maxSelection: 1
    });
    jQuery(destinationEle).on('selectionchange', function(e, m) {
        // Get the selected item
        const data = this.getSelection();
        
        // Update the value for hidden field
        destField.value = (data.length == 0) ? '' : data[0].name;

        // Revalidate the field
        fv.revalidateField('dest');
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

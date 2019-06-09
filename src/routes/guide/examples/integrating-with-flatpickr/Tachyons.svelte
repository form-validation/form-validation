<TachyonsLayout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.js',
    ]} onLoaded={onLoaded}>
        <form id="demoForm" method="post" style="height: 380px;">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Meeting time</div>
                    <div class="fl w-50">
                        <input type="text" name="meetingTime" placeholder="YYYY/MM/DD h:m A" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>
                </div>
            </div>
        </form>
    </ResourceLoader>
</TachyonsLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';

import sampleCode from './Tachyons.programmatic';
import ResourceLoader from '../../../../components/ResourceLoader.svelte';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

let fv;

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            meetingTime: {
                validators: {
                    date: {
                        format: 'YYYY/MM/DD h:m A',
                        message: 'The value is not a valid date',
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/integrating-with-flatpickr/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    flatpickr(form.querySelector('[name="meetingTime"]'), {
        enableTime: true,
        // See https://flatpickr.js.org/formatting/
        dateFormat: 'Y/m/d H:i K',
        // After selecting a date, we need to revalidate the field
        onChange: () => {
            fv.revalidateField('meetingTime');
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

<TachyonsLayout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/flatpickr/4.5.0/flatpickr.min.js',
    ]} onLoaded={onLoaded}>
        <form id="demoForm" method="post" style="height: 420px;">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Event</div>
                    <div class="fl w-50">
                        <input type="text" name="name" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>
                </div>
            </div>
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Date</div>
                    <div class="fl w-50">
                        <input type="text" name="eventDate" placeholder="YYYY/MM/DD" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
import date from 'formvalidation/dist/es6/validators/date';

import sampleCode from './tachyons.programmatic';
import ResourceLoader from '../../../../components/ResourceLoader.svelte';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

let fv;

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            eventDate: {
                validators: {
                    notEmpty: {
                        message: 'The date is required'
                    },
                    callback: {
                        message: 'The date is not a valid',
                        callback: (input) => {
                            const value = input.value;
                            if (value === '') {
                                return true;
                            }    

                            // Check if the input is a valid date
                            const result = date().validate({
                                value: input.value,
                                options: {
                                    format: 'YYYY/MM/DD',
                                }
                            });
                            if (!result.valid) {
                                return false;
                            } else {
                                // Get the valid date object from result of validation
                                const selectedDate = result.meta.date;
                                const day = selectedDate.getDay();
                                // Treat the field as invalid if the selected date is Sunday
                                return (day === 0) ? { valid: false, message: 'Please choose a day except Sunday' } : true;
                            }
                        }
                    },
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
                sender: '/guide/examples/disabling-date/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    flatpickr(form.querySelector('[name="eventDate"]'), {
        // See https://flatpickr.js.org/formatting/
        dateFormat: 'Y/m/d',
        // After selecting a date, we need to revalidate the field
        onChange: () => {
            fv.revalidateField('eventDate');
        },
    });
};

onDestroy(() => {
    if (fv) {
        fv.destroy();
    }
});
</script>

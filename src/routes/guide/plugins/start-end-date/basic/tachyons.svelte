<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Event</div>
                <div class="fl w-75">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Start date</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="startDate" placeholder="YYYY/MM/DD" />
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">End date</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="endDate" placeholder="YYYY/MM/DD" />
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import StartEndDate from 'formvalidation/plugins/StartEndDate';
import SubmitButton from 'formvalidation/plugins/SubmitButton';
import Tachyons from 'formvalidation/plugins/Tachyons';
import Trigger from 'formvalidation/plugins/Trigger';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The event name is required'
                    },
                }
            },
            startDate: {
                validators: {
                    notEmpty: {
                        message: 'The start date is required'
                    },
                }
            },
            endDate: {
                validators: {
                    notEmpty: {
                        message: 'The end date is required'
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
                validating: 'fa fa-refresh',
            }),
            startEndDate: new StartEndDate({
                format: 'YYYY/MM/DD',
                startDate: {
                    field: 'startDate',
                    message: 'The start date must be a valid date and ealier than the end date'
                },
                endDate: {
                    field: 'endDate',
                    message: 'The end date must be a valid date and later than the start date'
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/start-end-date/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

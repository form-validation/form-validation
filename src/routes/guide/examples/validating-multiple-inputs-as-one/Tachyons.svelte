<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Birthday</div>
                <div class="fl w-75">
                    <div class="fl w-100">
                        <div class="fl w-20">
                            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="date" placeholder="Date" />
                        </div>
                        <div class="fl w-20">
                            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="month" placeholder="Month" />
                        </div>
                        <div class="fl w-20">
                            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="year" placeholder="Year" />
                        </div>
                    </div>
                    
                    <!-- Create a hidden field which is combined by 3 fields above -->
                    <input type="hidden" name="dob" />
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import date from 'formvalidation/dist/es6/validators/date';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
        fields: {
            dob: {
                validators: {
                    notEmpty: {
                        message: 'Please fill out each field'
                    },
                    date: {
                        format: 'YYYY/MM/DD',
                        message: 'Please enter a valid date',
                    },
                }
            }
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/validating-multiple-inputs-as-one/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    const keyupHandler = () => {
        const y = form.querySelector('[name="year"]').value;
        const m = form.querySelector('[name="month"]').value;
        const d = form.querySelector('[name="date"]').value;

        // Set the dob field value
        const dob = y === '' || m === '' || d === '' ? '' : [y, m, d].join('/');
        form.querySelector('[name="dob"]').value = dob;

        // Revalidate it
        fv.revalidateField('dob');
    };

    form.querySelector('[name="year"]').addEventListener('keyup', keyupHandler);
    form.querySelector('[name="month"]').addEventListener('keyup', keyupHandler);
    form.querySelector('[name="date"]').addEventListener('keyup', keyupHandler);

    return () => {
        fv.destroy();
    };
});
</script>

<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-50 pa2">Brazilian ID or VAT number</div>
                <div class="fl w-40 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="yourId" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-50 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
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
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';
import id from 'formvalidation/dist/es6/validators/id/index';
import vat from 'formvalidation/dist/es6/validators/vat/index';

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
        fields: {
            yourId: {
                validators: {
                    notEmpty: {
                        message: 'The ID is required and cannot be empty'
                    },
                    id: {
                        // The id validator is enabled by default
                        enabled: true,
                        country: 'BR',
                        message: 'Please enter a valid Brazilian ID number',
                    },
                    vat: {
                        // The vat validator is disabled initially
                        enabled: false,
                        country: 'BR',
                        message: 'Please enter a valid Brazilian VAT number',
                    },
                },
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/switching-validators-on-the-same-field/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    })
    .registerValidator('id', id)
    .registerValidator('vat', vat);

    form.querySelector('[name="yourId"]').addEventListener('keyup', (e) => {
        switch (e.target.value.length) {
            // User is trying to put a VAT number
            case 14:
                fv
                    // Disable the id validator
                    .disableValidator('yourId', 'id')
                    // Enable the vat one
                    .enableValidator('yourId', 'vat')
                    // Revalidate field
                    .revalidateField('yourId');
                break;

            // User is trying to put an ID number
            case 11:
            default:
                fv
                    .enableValidator('yourId', 'id')
                    .disableValidator('yourId', 'vat')
                    .revalidateField('yourId');
                break;
        }
    });

    return () => {
        fv.destroy();
    };
});
</script>

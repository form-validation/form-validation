<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">US phone number</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="phoneNumber" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
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
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import Transformer from 'formvalidation/dist/es6/plugins/Transformer';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import phone from 'formvalidation/dist/es6/validators/phone';

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            phoneNumber: {
                validators: {
                    phone: {
                        message: 'The phone number is not valid',
                        country: 'US',
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
            transformer: new Transformer({
                phoneNumber: {
                    phone: (field, element, validator) => {
                        // Get the field value
                        const value = element.value;

                        // Check if the value has format of XXX   XXX   XXXX
                        if (/^(\d){3}(\s+)(\d){3}(\s+)(\d){4}$/.test(value)) {
                            // Remove all spaces
                            return value.replace(/\s/g, '');
                        } else {
                            // Otherwise, return the original value
                            return value;
                        }
                    },
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/transformer/phone/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('phone', phone);

    return () => {
        fv.destroy();
    };
});
</script>

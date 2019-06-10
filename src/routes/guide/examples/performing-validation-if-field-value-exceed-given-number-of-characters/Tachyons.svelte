<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Full name</div>
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="fullName" />
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Phone</div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="phoneNumber" />
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Gender</div>
                <div class="fl w-75">
                    <div class="mb2">
                        <label><input type="radio" name="gender" value="male" /> Male</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="gender" value="female" /> Female</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="gender" value="other" /> Other</label>
                    </div>
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
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import phone from 'formvalidation/dist/es6/validators/phone';

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            fullName: {
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
                }
            },
            phoneNumber: {
                validators: {
                    notEmpty: {
                        message: 'The phone number is required'
                    },
                    phone: {
                        message: 'The phone number is not valid',
                        country: 'US'
                    },
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The summary is required'
                    }
                }
            },
        },
        plugins: {
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            trigger: new Trigger({
                threshold: {
                    fullName: 10,
                    phoneNumber: 5,
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/performing-validation-if-field-value-exceed-given-number-of-characters/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('phone', phone);

    return () => {
        fv.destroy();
    };
});
</script>

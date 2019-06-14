<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">New password</div>
                <div class="fl w-40 mr2">
                    <input type="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="pwd" />
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
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const strongPassword = () => {
        return {
            validate: input => {
                const value = input.value;
                if (value === '') {
                    return {
                        valid: true,
                    };
                }

                // Check the password strength
                if (value.length < 8) {
                    return {
                        valid: false,
                    };
                }

                // The password does not contain any uppercase character
                if (value === value.toLowerCase()) {
                    return {
                        valid: false,
                    };
                }

                // The password does not contain any uppercase character
                if (value === value.toUpperCase()) {
                    return {
                        valid: false,
                    };
                }

                // The password does not contain any digit
                if (value.search(/[0-9]/) < 0) {
                    return {
                        valid: false,
                    };
                }

                return {
                    valid: true,
                };
            },
        };
    };

    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            pwd: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    checkPassword: {
                        message: 'The password is too weak'
                    },
                }
            }
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
                sender: '/guide/examples/creating-a-custom-validator/validators-namespace',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('checkPassword', strongPassword);

    return () => {
        fv.destroy();
    };
});
</script>

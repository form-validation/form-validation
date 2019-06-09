<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Password</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="password" />
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
import Alias from 'formvalidation/dist/es6/plugins/Alias';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            password: {
                validators: {
                    required: {
                        message: 'The password is required'
                    },
                    checkStrength: {
                        message: 'It must be more than 8 characters long',
                        callback: (input) => {
                            return input.value.length >= 8;
                        },
                    },
                    checkUppercase: {
                        message: 'It must contain at least one uppercase character',
                        callback: (input) => {
                            return input.value != input.value.toLowerCase();
                        },
                    },
                    checkLowercase: {
                        message: 'It must contain at least one lowercase character',
                        callback: (input) => {
                            return input.value != input.value.toUpperCase();
                        },
                    },
                    checkDigit: {
                        message: 'It must contain at least one digit',
                        callback: (input) => {
                            return input.value.search(/[0-9]/) >= 0;
                        },
                    },
                }
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
            alias: new Alias({
                required: 'notEmpty',
                checkStrength: 'callback',
                checkUppercase: 'callback',
                checkLowercase: 'callback',
                checkDigit: 'callback',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/alias/basic/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

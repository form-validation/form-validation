<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"><div id="captchaOperation"></div></div>
                <div class="fl w-40">
                    <input type="text" name="captcha" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    // Generate a simple captcha
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const captchaEle = document.getElementById('captchaOperation');
    const generateCaptcha = () => {
        const random = [randomNumber(1, 100), randomNumber(1, 200)];
        captchaEle.innerHTML = [random[0], '+', random[1], '='].join(' ');
    };

    generateCaptcha();

    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            captcha: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: (input) => {
                            const items = captchaEle.innerHTML.split(' ');
                            const sum = parseInt(items[0]) + parseInt(items[2]);
                            return input.value == sum;
                        }
                    }
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
                sender: '/guide/examples/regenerating-captcha-when-the-form-is-invalid/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).on('core.form.invalid', () => {
        generateCaptcha();
    });

    return () => {
        fv.destroy();
    };
});
</script>

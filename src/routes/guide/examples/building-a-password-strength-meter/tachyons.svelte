<TachyonsLayout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js',
    ]} onLoaded={onLoaded}>
        <form id="demoForm" method="POST">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Password</div>
                    <div class="fl w-50">
                        <input type="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="pwd" />
                    </div>
                </div>
            </div>
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2"></div>
                    <div class="fl w-50 ba b--black-10 h1" style="height: 0.25rem">
                        <div id="passwordMeter" class="h-100"></div>
                    </div>
                </div>
            </div>
        </form>
    </ResourceLoader>
</TachyonsLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import PasswordStrength from 'formvalidation/plugins/PasswordStrength';
import Trigger from 'formvalidation/plugins/Trigger';
import Tachyons from 'formvalidation/plugins/Tachyons';

import sampleCode from './tachyons.programmatic';
import ResourceLoader from '../../../../components/ResourceLoader.svelte';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

let fv;

const onLoaded = () => {
    const passwordMeter = document.getElementById('passwordMeter');

    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            pwd: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            passwordStrength: new PasswordStrength({
                field: 'pwd',
                message: 'The password is weak',
                minimalScore: 3,
                onValidated: (valid, message, score) => {
                    switch (score) {
                        case 0:
                            passwordMeter.style.width = `${randomNumber(1, 20)}%`;
                            passwordMeter.style.backgroundColor = '#ff4136';
                        case 1:
                            passwordMeter.style.width = `${randomNumber(20, 40)}%`;
                            passwordMeter.style.backgroundColor = '#ff4136';
                            break;
                        case 2:
                            passwordMeter.style.width = `${randomNumber(40, 60)}%`;
                            passwordMeter.style.backgroundColor = '#ff4136';
                            break;
                        case 3:
                            passwordMeter.style.width = `${randomNumber(60, 80)}%`;
                            passwordMeter.style.backgroundColor = '#ffb700';
                            break;
                        case 4:
                            passwordMeter.style.width = '100%';
                            passwordMeter.style.backgroundColor = '#19a974';
                            break;
                        default:
                            break;
                    }
                },
            }),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/building-a-password-strength-meter/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

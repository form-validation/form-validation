<TachyonsLayout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js',
    ]} onLoaded={onLoaded}>
        <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/plugins/password-strength/basic" on:received={receive}>
            <form id="demoForm" method="POST">
                <div class="cf mb2">
                    <div class="fl w-100">
                        <div class="fl w-25 pa2">Password</div>
                        <div class="fl w-50">
                            <input type="password" bind:this={inputEle} class="input-reset ba b--black-20 pa2 mb2 db w-100" name="pwd" />
                        </div>
                    </div>
                </div>
            </form>
        </ReceiveMessage>
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
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';
import ResourceLoader from '../../../../../components/ResourceLoader.svelte';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

let fv;
let inputEle;

const receive = (e) => {
    const v = e.detail.data;
    inputEle.value = v;

    if (fv) {
        fv.revalidateField('pwd').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/plugins/password-strength/basic',
                data: {
                    input: v,
                    output: result
                },
            }, '*');
        });
    }
};

const onLoaded = () => {
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
                minimalScore: 3
            }),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/password-strength/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

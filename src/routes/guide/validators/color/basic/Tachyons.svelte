<TachyonsLayout>
    <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender='/guide/validators/color/basic' on:received={receive}>
        <form id="demoForm" method="post">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Color</div>
                    <div class="fl w-50">
                        <input type="text" bind:this={inputEle} name="color" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>
                </div>
            </div>
        </form>
    </ReceiveMessage>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/es6/core/Core';
import DemoFrame from 'formvalidation/es6/plugins/DemoFrame';
import Icon from 'formvalidation/es6/plugins/Icon';
import Trigger from 'formvalidation/es6/plugins/Trigger';
import Tachyons from 'formvalidation/es6/plugins/Tachyons';
import color from 'formvalidation/es6/validators/color';

import sampleCode from './Tachyons.programmatic';
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

let fv;
let inputEle;

const receive = (e) => {
    const v = e.detail.data;
    inputEle.value = v;

    if (fv) {
        fv.revalidateField('color').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/validators/color/basic',
                data: {
                    input: v,
                    output: result
                },
            }, '*');
        });
    }
};

onMount(() => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            color: {
                validators: {
                    color: {
                        type: ['hex', 'hsl', 'hsla', 'keyword', 'rgb', 'rgba'],  // The default value for type
                        message: 'The value is not valid color'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/color/basic/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('color', color);

    return () => {
        fv.destroy();
    };
});
</script>

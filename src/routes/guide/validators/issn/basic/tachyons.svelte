<TachyonsLayout>
    <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/issn/basic" on:received={receive}>
        <form id="demoForm" method="post">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">ISSN</div>
                    <div class="fl w-50">
                        <input type="text" bind:this={inputEle} name="issn" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>
                </div>
            </div>
        </form>
    </ReceiveMessage>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Tachyons from 'formvalidation/plugins/Tachyons';
import issn from 'formvalidation/validators/issn';

import sampleCode from './tachyons.programmatic';
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

let fv;
let inputEle;

const receive = (e) => {
    const v = e.detail.data;
    inputEle.value = v;

    if (fv) {
        fv.revalidateField('issn').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/validators/issn/basic',
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
            issn: {
                validators: {
                    issn: {
                        message: 'The value is not valid ISSN'
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
                sender: '/guide/validators/issn/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('issn', issn);

    return () => {
        fv.destroy();
    };
});
</script>

<BootstrapLayout onLoaded={onLoaded}>
    <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/imo/basic" on:received={receive}>
        <form id="demoForm" method="POST">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">IMO</label>
                <div class="col-sm-5">
                    <input type="text" bind:this={inputEle} class="form-control" name="imo" />
                </div>
            </div>
        </form>
    </ReceiveMessage>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Bootstrap from 'formvalidation/dist/es6/plugins/Bootstrap';
import imo from 'formvalidation/dist/es6/validators/imo';

import sampleCode from './Bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';

let fv;
let inputEle;

const receive = (e) => {
    const v = e.detail.data;
    inputEle.value = v;

    if (fv) {
        fv.revalidateField('imo').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/validators/imo/basic',
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
            imo: {
                validators: {
                    imo: {
                        message: 'The value is not valid IMO'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/imo/basic/Bootstrap',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('imo', imo);
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

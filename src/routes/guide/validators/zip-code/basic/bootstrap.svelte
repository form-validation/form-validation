<BootstrapLayout onLoaded={onLoaded}>
    <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/zip-code/basic" on:received={receive}>
        <form id="demoForm" method="POST">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Country</label>
                <div class="col-sm-5">
                    <select class="form-control" name="country" on:change={changeCountry}>
                        <option value="US">United States</option>
                        <option value="AT">Austria</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BR">Brazil</option>
                        <option value="CA">Canada</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="FR">French</option>
                        <option value="DE">Germany</option>
                        <option value="IN">India</option>
                        <option value="IT">Italy</option>
                        <option value="IE">Ireland</option>
                        <option value="MA">Morocco</option>
                        <option value="NL">Netherlands</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="SG">Singapore</option>
                        <option value="SK">Slovakia</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="GB">United Kingdom</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Postal code</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" name="postalCode" />
                </div>
            </div>
        </form>
    </ReceiveMessage>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap from 'formvalidation/plugins/Bootstrap';
import zipCode from 'formvalidation/validators/zipCode';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';

let fv;

const receive = (e) => {
    const v = e.detail.data;

    const form = document.getElementById('demoForm');
    form.querySelector('[name="country"]').value = v.country;
    form.querySelector('[name="postalCode"]').value = v.sample;

    if (fv) {
        fv.revalidateField('postalCode').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/validators/zip-code/basic',
                data: {
                    input: v,
                    output: result
                },
            }, '*');
        });
    }
};

const changeCountry = () => {
    if (fv) {
        fv.revalidateField('postalCode');
    }
};

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            postalCode: {
                validators: {
                    zipCode: {
                        country: () => {
                            return form.querySelector('[name="country"]').value;
                        },
                        message: 'The value is not a valid postal code'
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
                sender: '/guide/validators/zip-code/basic/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('zipCode', zipCode);
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

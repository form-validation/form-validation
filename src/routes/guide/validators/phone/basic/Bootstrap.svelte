<BootstrapLayout onLoaded={onLoaded}>
    <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/phone/basic" on:received={receive}>
        <form id="demoForm" method="POST">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Country</label>
                <div class="col-sm-5">
                    <select class="form-control" name="country" on:change={changeCountry}>
                        <option value="US">United States</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BR">Brazil</option>
                        <option value="CN">China</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="IN">India</option>
                        <option value="MA">Morocco</option>
                        <option value="NL">Netherlands</option>
                        <option value="PK">Pakistan</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="SK">Slovakia</option>
                        <option value="ES">Spain</option>
                        <option value="TH">Thailand</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="VE">Venezuela</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Phone number</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" name="phoneNumber" />
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
import phone from 'formvalidation/dist/es6/validators/phone';

import sampleCode from './Bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';

let fv;

const receive = (e) => {
    const v = e.detail.data;

    const form = document.getElementById('demoForm');
    form.querySelector('[name="country"]').value = v.country;
    form.querySelector('[name="phoneNumber"]').value = v.sample;

    if (fv) {
        fv.revalidateField('phoneNumber').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/validators/phone/basic',
                data: {
                    input: v,
                    output: result
                },
            }, '*');
        });
    }
};

const changeCountry = () => {
    // Revalidate the phone number field whenever user changes the country
    if (fv) {
        fv.revalidateField('phoneNumber');
    }
};

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            phoneNumber: {
                validators: {
                    phone: {
                        country: () => {
                            return form.querySelector('[name="country"]').value;
                        },
                        message: 'The value is not a valid phone number'
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
                sender: '/guide/validators/phone/basic/Bootstrap',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('phone', phone);
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

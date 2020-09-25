<TachyonsLayout>
    <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/phone/basic" on:received={receive}>
        <form id="demoForm" method="post">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Country</div>
                    <div class="fl w-50">
                        <select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="country" on:change={changeCountry}>
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
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Phone number</div>
                    <div class="fl w-50">
                        <input type="text" name="phoneNumber" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
import phone from 'formvalidation/validators/phone';

import sampleCode from './tachyons.programmatic';
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

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

onMount(() => {
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
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/phone/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('phone', phone);

    return () => {
        fv.destroy();
    };
});
</script>

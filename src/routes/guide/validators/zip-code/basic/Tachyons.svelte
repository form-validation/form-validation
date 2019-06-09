<TachyonsLayout>
    <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/zip-code/basic" on:received={receive}>
        <form id="demoForm" method="post">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Country</div>
                    <div class="fl w-50">
                        <select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="country" on:change={changeCountry}>
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
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Postal code</div>
                    <div class="fl w-50">
                        <input type="text" name="postalCode" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>
                </div>
            </div>
        </form>
    </ReceiveMessage>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import zipCode from 'formvalidation/dist/es6/validators/zipCode';

import sampleCode from './Tachyons.programmatic';
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

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

onMount(() => {
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
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/zip-code/basic/Bootstrap',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('zipCode', zipCode);

    return () => {
        fv.destroy();
    };
});
</script>

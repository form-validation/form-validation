<TachyonsLayout>
    <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/id/basic" on:received={receive}>
        <form id="demoForm" method="post">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Country</div>
                    <div class="fl w-50">
                        <select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="country" on:change={changeCountry}>
                            <option value="AR">Argentina</option>
                            <option value="BA">Bosnia and Herzegovina</option>
                            <option value="BR">Brazil</option>
                            <option value="BG">Bulgari</option>
                            <option value="CL">Chile</option>
                            <option value="CN">China</option>
                            <option value="CO">Colombia</option>
                            <option value="HR">Croatia</option>
                            <option value="CZ">Czech</option>
                            <option value="DK">Denmark</option>
                            <option value="EE">Estonia</option>
                            <option value="FI">Finland</option>
                            <option value="FR">France</option>
                            <option value="HK">Hong Kong</option>
                            <option value="IS">Iceland</option>
                            <option value="ID">India</option>
                            <option value="IE">Ireland</option>
                            <option value="KR">Korea</option>
                            <option value="LV">Latvia</option>
                            <option value="LT">Lithuania</option>
                            <option value="MK">Macedonia</option>
                            <option value="MY">Malaysia</option>
                            <option value="MX">Mexico</option>
                            <option value="ME">Montenegro</option>
                            <option value="NL">Netherlands</option>
                            <option value="NO">Norway</option>
                            <option value="PE">Peru</option>
                            <option value="PL">Poland</option>
                            <option value="RO">Romania</option>
                            <option value="SM">San Marino</option>
                            <option value="RS">Serbia</option>
                            <option value="SK">Slovakia</option>
                            <option value="SI">Slovenia</option>
                            <option value="ZA">South Africa</option>
                            <option value="ES">Spain</option>
                            <option value="SE">Sweden</option>
                            <option value="CH">Switzerland</option>
                            <option value="TW">Taiwan</option>
                            <option value="TH">Thailand</option>
                            <option value="UY">Uruguay</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">ID number</div>
                    <div class="fl w-50">
                        <input type="text" name="idNumber" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
import id from 'formvalidation/dist/es6/validators/id/index';

import sampleCode from './Tachyons.programmatic';
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

let fv;

const receive = (e) => {
    const v = e.detail.data;

    const form = document.getElementById('demoForm');
    form.querySelector('[name="country"]').value = v.country;
    form.querySelector('[name="idNumber"]').value = v.sample;

    if (fv) {
        fv.revalidateField('idNumber').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/validators/id/basic',
                data: {
                    input: v,
                    output: result
                },
            }, '*');
        });
    }
};

const changeCountry = () => {
    // Revalidate the ID field whenever user changes the country
    if (fv) {
        fv.revalidateField('idNumber');
    }
};

onMount(() => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            idNumber: {
                validators: {
                    id: {
                        country: () => {
                            return form.querySelector('[name="country"]').value;
                        },
                        message: 'The value is not a valid ID'
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
                sender: '/guide/validators/id/basic/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).registerValidator('id', id);

    return () => {
        fv.destroy();
    };
});
</script>

<TachyonsLayout>
    <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/numeric/basic" on:received={receive}>
        <form id="demoForm" method="post">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Country</div>
                    <div class="fl w-50">
                        <select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="country" on:change={changeCountry}>
                            <option value="">Choose a country</option>
                            <option value="en_US">United States</option>
                            <option value="fr_FR">France</option>
                            <option value="it_IT">Italy</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Type a number</div>
                    <div class="fl w-50">
                        <input type="text" name="number" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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

import sampleCode from './Tachyons.programmatic';
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

let fv;

const receive = (e) => {
    const v = e.detail.data;

    const form = document.getElementById('demoForm');
    form.querySelector('[name="country"]').value = v.country;
    form.querySelector('[name="number"]').value = v.sample;

    if (fv) {
        fv
        .updateValidatorOption('number', 'numeric', 'thousandsSeparator', v.thousandsSeparator)
        .updateValidatorOption('number', 'numeric', 'decimalSeparator', v.decimalSeparator)
        .revalidateField('number').then((result) => {
            window.parent.postMessage({
                channel: 'DEMO_VALIDATE_RESULT',
                sender: '/guide/validators/numeric/basic',
                data: {
                    input: v,
                    output: result
                },
            }, '*');
        });
    }
};

const changeCountry = (event) => {
    let thousandsSeparator = '';
    let decimalSeparator = '.';

    switch (event.target.value) {
        case 'en_US':
            thousandsSeparator = ',';
            decimalSeparator = '.';
            break;

        case 'fr_FR':
            thousandsSeparator = ' ';
            decimalSeparator = ',';
            break;

        case 'it_IT':
            thousandsSeparator = '.';
            decimalSeparator = ',';
            break;

        case '':
        default:
            thousandsSeparator = '';
            decimalSeparator   = '.';
            break;
    }

    // Revalidate the number whenever user changes the country
    if (fv) {
        fv
        .updateValidatorOption('number', 'numeric', 'thousandsSeparator', thousandsSeparator)
        .updateValidatorOption('number', 'numeric', 'decimalSeparator', decimalSeparator)
        .revalidateField('number');
    }
};

onMount(() => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            number: {
                validators: {
                    numeric: {
                        message: 'The value is not a number',
                        // The default separators
                        thousandsSeparator: '',
                        decimalSeparator: '.'
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
                sender: '/guide/validators/numeric/basic/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

<BootstrapLayout onLoaded={onLoaded}>
    <ReceiveMessage channel="SAMPLE_FIELD_VALUE" sender="/guide/validators/numeric/basic" on:received={receive}>
        <form id="demoForm" method="POST">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Country</label>
                <div class="col-sm-5">
                    <select class="form-control" name="country" on:change={changeCountry}>
                        <option value="">Choose a country</option>
                        <option value="en_US">United States</option>
                        <option value="fr_FR">France</option>
                        <option value="it_IT">Italy</option>
                    </select>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Type a number</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" name="number" />
                </div>
            </div>
        </form>
    </ReceiveMessage>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import Bootstrap from 'formvalidation/plugins/Bootstrap';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';
import ReceiveMessage from '../../../../../components/ReceiveMessage.svelte';

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

const onLoaded = () => {
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
            bootstrap: new Bootstrap(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/numeric/basic/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

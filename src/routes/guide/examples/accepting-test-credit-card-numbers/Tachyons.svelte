<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Credit card number</div>
                <div class="fl w-50">
                    <input type="text" name="cc" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import Transformer from 'formvalidation/dist/es6/plugins/Transformer';

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

// List of test credit card numbers that you want it to be passed
// although they can be invalid one
const TEST_CARD_NUMBERS = ['3333222233332222', '30030008444444'];

// We will transform those test card numbers into a valid one as below
const VALID_CARD_NUMBER = '4444111144441111';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            cc: {
                validators: {
                    creditCard: {
                        message: 'The credit card number is not valid'
                    },
                }
            }
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            transformer: new Transformer({
                cc: {
                    creditCard: function(field, element, validator) {
                        // Get the field value
                        const value = element.value;
    
                        // Check if it's one of test card numbers
                        if (value !== '' && TEST_CARD_NUMBERS.indexOf(value) !== -1) {
                            // then turn it to be a valid one defined by VALID_CARD_NUMBER
                            return VALID_CARD_NUMBER;
                        } else {
                            // Otherwise, just return the initial value
                            return value;
                        }
                    }
                }
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/accepting-test-credit-card-numbers/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

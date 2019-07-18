<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Credit card type</div>
                <div class="fl w-50">
                    <select name="cardType" class="input-reset ba b--black-20 pa2 mb2 db w-100" on:change={changeType}>
                        <option value="">Select a type</option>
                        <option value="Ae">American Express</option>
                        <option value="Master">Master</option>
                        <option value="Visa">Visa</option>
                    </select>
                </div>
            </div>
        </div>

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
import creditCard from 'formvalidation/dist/es6/validators/creditCard';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

let fv;
onMount(() => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            cardType: {
                validators: {
                    notEmpty: {
                        message: 'The type is required'
                    }
                }
            },
            cc: {
                validators: {
                    notEmpty: {
                        message: 'The credit card number is required'
                    },
                    callback: {
                        message: 'The credit card number is not valid',
                        callback: (input) => {
                            const value = input.value;
                            if (value === '') {
                                return true;
                            }    

                            // Check if the input is valid credit card number
                            const result = creditCard().validate({ value });
                            if (!result.valid) {
                                return false;
                            } else {
                                let currentType = null;
                                // result.meta.type can be one of
                                // AMERICAN_EXPRESS, DINERS_CLUB, DINERS_CLUB_US, DISCOVER, JCB, LASER,
                                // MAESTRO, MASTERCARD, SOLO, UNIONPAY, VISA
                                switch (result.meta.type) {
                                    case 'AMERICAN_EXPRESS':
                                        currentType = 'Ae';     // Ae is the value of American Express card in the select box
                                        break;

                                    case 'MASTERCARD':
                                    case 'DINERS_CLUB_US':
                                        currentType = 'Master'; // Master is the value of Master card in the select box
                                        break;

                                    case 'VISA':
                                        currentType = 'Visa';   // Visa is the value of Visa card in the select box
                                        break;

                                    default:
                                        currentType = null;
                                        break;
                                }

                                // Get the selected type
                                const selectedType = form.querySelector('[name="cardType"]').value;
                                if (currentType == null || currentType !== selectedType) {
                                    return {
                                        valid: false,
                                        message: 'The credit card number does not match with selected type'
                                    }
                                }
                            }

                            return true;
                        }
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
            demoFrame: new DemoFrame({
                sender: '/guide/examples/asking-credit-card-number-to-match-with-selected-type/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});

const changeType = () => {
    // Whenever user changes the card type,
    // we need to revalidate the credit card number
    fv.revalidateField('cc');
};
</script>

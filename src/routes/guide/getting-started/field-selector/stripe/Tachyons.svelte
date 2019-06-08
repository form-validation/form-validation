<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Product name</div>
                <div class="fl w-40">
                    <input type="text" name="productName" value="T-Shirt" readonly="readonly" class="input-reset ba b--black-20 pa2 mb2 db w-100 bg-black-10" />
                </div>
                <div class="fl w-20 pa2">(readonly)</div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Price ($)</div>
                <div class="fl w-40">
                    <input type="text" name="price" value="25" readonly="readonly" class="input-reset ba b--black-20 pa2 mb2 db w-100 bg-black-10" />
                </div>
                <div class="fl w-20 pa2">(readonly)</div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Your full name</div>
                <div class="fl w-50 mr2">
                    <input type="text" name="fullName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Credit card number</div>
                <div class="fl w-40 mr2">
                    <input type="text" data-stripe="number" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Expiration</div>
                <div class="fl w-20">
                    <input type="text" placeholder="Month" data-stripe="exp-month" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
                <div class="fl w-20">
                    <input type="text" placeholder="Year" data-stripe="exp-year" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">CVV</div>
                <div class="fl w-20">
                    <input type="text" data-stripe="cvc" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Purchase</button>
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
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const currentYear = new Date().getFullYear();
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            fullName: {
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
                }
            },
            ccNumber: {
                selector: '[data-stripe="number"]',
                validators: {
                    notEmpty: {
                        message: 'The credit card number is required'
                    },
                    creditCard: {
                        message: 'The credit card number is not valid'
                    },
                },
            },
            expMonth: {
                selector: '[data-stripe="exp-month"]',
                validators: {
                    notEmpty: {
                        message: 'The expiration month is required'
                    },
                    digits: {
                        message: 'The expiration month can contain digits only'
                    },
                    between: {
                        min: 1,
                        max: 12,
                        message: 'The expiration month must be between 1 and 12',
                    },
                },
            },
            expYear: {
                selector: '[data-stripe="exp-year"]',
                validators: {
                    notEmpty: {
                        message: 'The expiration year is required'
                    },
                    digits: {
                        message: 'The expiration year can contain digits only'
                    },
                    between: {
                        min: currentYear,
                        // A simple rule to limit the range of expiration year
                        max: currentYear + 20,
                        message: 'The expiration year is not valid',
                    },
                },
            },
            cvvNumber: {
                selector: '[data-stripe="cvc"]',
                validators: {
                    notEmpty: {
                        message: 'The CVV number is required'
                    },
                    stringLength: {
                        min: 3,
                        max: 3,
                        message: 'The CVV number is not valid',
                    },
                },
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/getting-started/field-selector/stripe/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

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

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            cc: {
                validators: {
                    notEmpty: {
                        message: 'The credit card number is required'
                    },
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
            demoFrame: new DemoFrame({
                sender: '/guide/examples/showing-credit-card-icon/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('core.validator.validated', (e) => {
        if (e.field === 'cc' && e.validator === 'creditCard' && e.result.valid) {
            let icon = '';
            // e.result.meta.type can be one of
            // AMERICAN_EXPRESS, DINERS_CLUB, DINERS_CLUB_US, DISCOVER, JCB, LASER,
            // MAESTRO, MASTERCARD, SOLO, UNIONPAY, VISA
            switch (e.result.meta.type) {
                case 'AMERICAN_EXPRESS':
                    icon = 'fa fa-cc-amex';
                    break;
                
                case 'DISCOVER':
                    icon = 'fa-cc-discover';
                    break;
                
                case 'MASTERCARD':
                case 'DINERS_CLUB_US':
                    icon = 'fa-cc-mastercard';
                    break;
                
                case 'VISA':
                    icon = 'fa-cc-visa';
                    break;
                
                default:
                    icon = 'fa-credit-card';
                    break;
            }

            // Query the icon element
            const iconEle = e.element.nextSibling;
            iconEle.setAttribute('class', `fv-plugins-icon ${icon}`);
        }
    })
    .on('core.element.validated', (e) => {
        if (e.field === 'cc' && !e.valid) {
            const iconEle = e.element.nextSibling;
            iconEle.setAttribute('class', 'fv-plugins-icon fa fa-times');
        }
    });

    return () => {
        fv.destroy();
    };
});
</script>

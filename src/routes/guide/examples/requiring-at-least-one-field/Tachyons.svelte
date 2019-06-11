<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Email address</div>
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100 js-email-address" name="primaryEmail" placeholder="Primary email" />
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100 js-email-address" name="secondaryEmail" placeholder="Secondary email" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
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
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            email: {
                // All the email address field have js-email-address class
                selector: '.js-email-address',
                validators: {
                    callback: {
                        message: 'You must enter at least one email address',
                        callback: (input) => {
                            let isEmpty = true;
                            const emailElements = fv.getElements('email');
                            for (const i in emailElements) {
                                if (emailElements[i].value !== '') {
                                    isEmpty = false;
                                    break;
                                }
                            }

                            if (!isEmpty) {
                                // Update the status of callback validator for all fields
                                fv.updateFieldStatus('email', 'Valid', 'callback');
                                return true;
                            }

                            return false;
                        }
                    },
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    },
                },
            }
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
                sender: '/guide/examples/requiring-at-least-one-field/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

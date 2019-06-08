<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Email address</div>
                <div class="fl w-50">
                    <input type="text" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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

import emailAddress from 'formvalidation/dist/es6/validators/emailAddress';
import regexp from 'formvalidation/dist/es6/validators/regexp';

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            email: {
                validators: {
                    callback: {
                        message: 'The value is not a valid email address',
                        callback: (input) => {
                            const value = input.value;
                            if (value === '') {
                                return true;
                            }

                            // I want the value has to pass both emailAddress and regexp validators
                            return emailAddress().validate({ value }).valid &&
                                regexp().validate({
                                    value,
                                    options: {
                                        regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                                    },
                                }).valid;
                        },
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
                sender: '/guide/examples/is-a@b-valid-email-address/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });
    
    return () => {
        fv.destroy();
    };
});
</script>

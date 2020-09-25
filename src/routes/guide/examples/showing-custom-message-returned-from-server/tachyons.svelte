<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Username</div>
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" autocomplete="off" name="username" />
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Email address</div>
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" autocomplete="off" name="email" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Password</div>
                <div class="fl w-40">
                    <input type="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" autocomplete="off" name="password" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Signup</button>
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Tachyons from 'formvalidation/plugins/Tachyons';
import SubmitButton from 'formvalidation/plugins/SubmitButton';
import fetch from 'formvalidation/utils/fetch';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long',
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore',
                    },
                    blank: {},
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    },
                    blank: {},
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    blank: {},
                }
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
                sender: '/guide/examples/showing-custom-message-returned-from-server/tachyons',
                sampleCode: sampleCode,
            }),
        },
    }).on('core.form.valid', () => {
        // For demonstrating purpose, the url is generated randomly
        // to get different response each time
        // In fact, it should be /path/to/your/back-end/
        const url = [
            'http://www.mocky.io/v2/5b1b9c7430000062002a47ec',
            'http://www.mocky.io/v2/5b1b9c953000005a002a47ed',
        ][Math.floor(Math.random() * 2)];

        fetch(url, {
            params: {
                username: form.querySelector('[name="username"]').value,
                email: form.querySelector('[name="email"]').value,
                password: form.querySelector('[name="password"]').value,
            }
        }).then((response) => {
            // res consists of
            //  {
            //      "result": "error",
            //      "fields": {
            //          "username": "..."
            //      }
            //  }
            // If there is error returned from server
            if (response.result === 'error') {
                for (const field in response.fields) {
                    fv
                        // Update the message option
                        .updateValidatorOption(field, 'blank', 'message', response.fields[field])
                        // Set the field as invalid
                        .updateFieldStatus(field, 'Invalid', 'blank');
                }
            } else {
                // Do whatever you want here
                // such as showing a modal ...
            }
        });
    });

    return () => {
        fv.destroy();
    };
});
</script>

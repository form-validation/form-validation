<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Full name <sup>*</sup></div>
                <div class="fl w-40 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="fullName" />
                </div>
            </div>
        </div>
        
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">New password</div>
                <div class="fl w-40 mr2">
                    <input type="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="password" />
                </div>
            </div>
        </div>
        
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Confirm password</div>
                <div class="fl w-40 mr2">
                    <input type="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="confirmPassword" />
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
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
        fields: {
            fullName: {
                validators: {
                    notEmpty: {
                        message: 'The full name is required and cannot be empty'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        enabled: false,
                        message: 'The password is required and cannot be empty'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    notEmpty: {
                        enabled: false,
                        message: 'The confirm password is required and cannot be empty'
                    },
                    identical: {
                        enabled: false,
                        compare: () => {
                            return form.querySelector('[name="password"]').value;
                        },
                        message: 'The password and its confirm must be the same',
                    }
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
                sender: '/guide/examples/enabling-validators-on-the-fly/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    // Enable the password/confirm password validators if the password is not empty
    let enabled = false;
    form.querySelector('[name="password"]').addEventListener('input', (e) => {
        const password = e.target.value;
        if (password === '' && enabled) {
            enabled = false;
            fv.disableValidator('password').disableValidator('confirmPassword');
        } else if (password != '' && !enabled) {
            enabled = true;
            fv.enableValidator('password').enableValidator('confirmPassword');
        }
        
        // Revalidate the confirmation password when the new password is changed
        if (password != '' && enabled) {
            fv.revalidateField('confirmPassword');
        }
    });

    return () => {
        fv.destroy();
    };
});
</script>

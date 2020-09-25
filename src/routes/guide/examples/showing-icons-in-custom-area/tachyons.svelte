<style>
:global(.fv-plugins-icon[data-field="username"]),
:global(.fv-plugins-icon[data-field="email"]) {
    display: inline-block;
    position: static;
    height: auto;
    line-height: normal;
}
</style>

<TachyonsLayout>
    <form id="demoForm" method="POST" class="fv-stacked-form">
        <div class="row mb2">
            <label class="db pv2">Username</label>
            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-50" name="username" />
        </div>
    
        <div class="row mb2">
            <label class="db pv2">Email address</label>
            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-50" name="email" />
        </div>

        <div class="row mb2">
            <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import SubmitButton from 'formvalidation/plugins/SubmitButton';
import Tachyons from 'formvalidation/plugins/Tachyons';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email is required and cannot be empty'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons({
                rowSelector: '.row',
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
                onPlaced: (e) => {
                    if (e.field === 'username' || e.field === 'email') {
                        const parent = e.iconElement.parentNode;
                        const label = parent.querySelector('label');
                        label.appendChild(e.iconElement);
                    }
                }
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/showing-icons-in-custom-area/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

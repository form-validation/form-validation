<DemoLayout framework="mini">
    <form id="demoForm" method="post" style="background: #FFF; border: none; margin: 0;">
        <div class="row">
            <div class="col-sm-3">
                <label>Username</label>
            </div>
            <div class="col-sm-6">
                <input type="text" name="username" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Password</label>
            </div>
            <div class="col-sm-6">
                <input type="password" name="password" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-9 col-sm-offset-3">
                <button type="submit" class="primary">Submit</button>
            </div>
        </div>
    </form>
</DemoLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/es6/core/Core';
import DemoFrame from 'formvalidation/es6/plugins/DemoFrame';
import Icon from 'formvalidation/es6/plugins/Icon';
import Trigger from 'formvalidation/es6/plugins/Trigger';
import Mini from 'formvalidation/es6/plugins/Mini';
import SubmitButton from 'formvalidation/es6/plugins/SubmitButton';

import sampleCode from './Mini.programmatic';
import DemoLayout from '../../../../../components/DemoLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
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
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    },
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            mini: new Mini(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/getting-started/usage/frameworks/Mini',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

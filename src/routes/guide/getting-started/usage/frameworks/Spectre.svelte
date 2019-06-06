<SpectreLayout onLoaded={onLoaded}>
    <form id="demoForm" class="form-horizontal" method="POST">
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Username</label>
            </div>
            <div class="col-9">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="username" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Password</label>
            </div>
            <div class="col-9">
                <div class="has-icon-right">
                    <input type="password" class="form-input" name="password" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3"></div>
            <div class="col-9">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</SpectreLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/es6/core/Core';
import DemoFrame from 'formvalidation/es6/plugins/DemoFrame';
import Icon from 'formvalidation/es6/plugins/Icon';
import Trigger from 'formvalidation/es6/plugins/Trigger';
import Spectre from 'formvalidation/es6/plugins/Spectre';
import SubmitButton from 'formvalidation/es6/plugins/SubmitButton';

import sampleCode from './Spectre.programmatic';
import SpectreLayout from '../../../../../components/demo/SpectreLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
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
            spectre: new Spectre(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'form-icon icon icon-check',
                invalid: 'form-icon icon icon-cross',
                validating: 'form-icon loading',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/getting-started/usage/frameworks/Spectre',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

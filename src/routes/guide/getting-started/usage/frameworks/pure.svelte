<PureLayout onLoaded={onLoaded}>
    <div class="pure-g">
        <div class="pure-u-1">
            <form id="demoForm" class="pure-form pure-form-aligned" method="POST">
                <div class="pure-control-group">
                    <label>Username</label>
                    <input name="username" type="text" placeholder="Username" />
                </div>

                <div class="pure-control-group">
                    <label>Password</label>
                    <input name="password" type="password" placeholder="Password" />
                </div>

                <div class="pure-control-group">
                    <label></label>
                    <button type="submit" class="pure-button pure-button-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</PureLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Pure from 'formvalidation/plugins/Pure';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './pure.programmatic';
import PureLayout from '../../../../../components/demo/PureLayout.svelte';

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
            pure: new Pure(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/getting-started/usage/frameworks/pure',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>
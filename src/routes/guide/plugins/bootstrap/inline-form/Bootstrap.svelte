<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="form-inline">
        <div class="form-group mr-sm-2" style="width: 40%;">
            <label class="sr-only">Username</label>
            <input type="text" class="form-control" name="username" placeholder="Username" style="width: 100%;" />
        </div>
    
        <div class="form-group mr-sm-2" style="width: 40%;">
            <label class="sr-only">Password</label>
            <input type="password" class="form-control" name="password" placeholder="Password" style="width: 100%;" />
        </div>
    
        <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Bootstrap from 'formvalidation/dist/es6/plugins/Bootstrap';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';

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
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bootstrap/inline-form/Bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });    
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

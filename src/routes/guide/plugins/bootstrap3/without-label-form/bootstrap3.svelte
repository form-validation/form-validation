<Bootstrap3Layout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group">
            <input type="text" class="form-control" name="username" placeholder="Username" />
        </div>
    
        <div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" />
        </div>
    
        <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
        <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
</Bootstrap3Layout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap3 from 'formvalidation/plugins/Bootstrap3';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './bootstrap3.programmatic';
import Bootstrap3Layout from '../../../../../components/demo/Bootstrap3Layout.svelte';

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
            bootstrap3: new Bootstrap3(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bootstrap3/without-label-form/bootstrap3',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

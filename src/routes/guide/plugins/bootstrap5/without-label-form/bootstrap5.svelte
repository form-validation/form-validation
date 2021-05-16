<Bootstrap5Layout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="mb-3">
            <input type="text" class="form-control" name="username" placeholder="Username" style="width: 100%;" />
        </div>
        <div class="mb-3">
            <input type="password" class="form-control" name="password" placeholder="Password" style="width: 100%;" />
        </div>
        <div class="mb-3">           
            <button type="submit" class="btn btn-primary">Sign in</button>
        </div>
    </form>
</Bootstrap5Layout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap5 from 'formvalidation/plugins/Bootstrap5';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './bootstrap5.programmatic';
import Bootstrap5Layout from '../../../../../components/demo/Bootstrap5Layout.svelte';

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
            bootstrap5: new Bootstrap5({
                rowSelector: '.mb-3',
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bootstrap5/without-label-form/bootstrap5',
                sampleCode: sampleCode,
            }),
        },
    });    
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

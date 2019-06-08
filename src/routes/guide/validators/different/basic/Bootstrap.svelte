<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Username</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="username" on:input={changeUsername} />
            </div>
        </div>
        
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Password</label>
            <div class="col-sm-5">
                <input type="password" class="form-control" name="password" />
            </div>
        </div>
    </form>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Bootstrap from 'formvalidation/dist/es6/plugins/Bootstrap';

import sampleCode from './Bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';

let fv;

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    different: {
                        compare: () => {
                            return form.querySelector('[name="username"]').value;
                        },
                        message: 'The username and password cannot be the same as each other'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/different/basic/Bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });
};

const changeUsername = () => {
    // Revalidate the password when changing the username
    fv.revalidateField('password');
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

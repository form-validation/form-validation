<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Password</label>
            <div class="col-sm-5">
                <input type="password" class="form-control" name="password" on:input={changePassword} />
            </div>
        </div>
        
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Retype password</label>
            <div class="col-sm-5">
                <input type="password" class="form-control" name="confirmPassword" />
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
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    }
                }
            },
            confirmPassword: {
                validators: {
                    identical: {
                        compare: () => {
                            return form.querySelector('[name="password"]').value;
                        },
                        message: 'The password and its confirm are not the same'
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
                sender: '/guide/validators/identical/basic/Bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });
};

const changePassword = () => {
    // Revalidate the confirmation password when changing the password
    fv.revalidateField('confirmPassword');
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

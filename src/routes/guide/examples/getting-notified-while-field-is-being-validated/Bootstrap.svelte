<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" style="height: 85px;">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Username</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" name="username" autocomplete="off" />
                
                <!-- The progress bar is hidden initially -->
                <div class="progress mt-2" id="progressBar" style="opacity: 0;">
                    <div class="progress-bar progress-bar-striped progress-bar-animate" style="width: 100%"></div>
                </div>
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
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../components/demo/BootstrapLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    remote: {
                        message: 'The username is already taken',
                        method: 'GET',
                        url: 'http://www.mocky.io/v2/5b12508a30000052008610b9&mocky-delay=5000ms',
                    },
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
                sender: '/guide/examples/getting-notified-while-field-is-being-validated/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('core.validator.validating', (e) => {
        if (e.field === 'username' && e.validator === 'remote') {
            document.getElementById('progressBar').style.opacity = '1';
        }
    })
    .on('core.validator.validated', (e) => {
        if (e.field === 'username' && e.validator === 'remote') {
            document.getElementById('progressBar').style.opacity = '0';
        }
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

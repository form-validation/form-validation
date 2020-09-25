<style>
:global(.modal-sm) {
    margin: 30px auto;
    width: 300px;
}
</style>

<Bootstrap3Layout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js',
    ]} onLoaded={onLoaded}>
        <div style="height: 500px;">
            <button type="submit" class="btn btn-default" id="loginButton">Login</button>

            <form id="loginForm" method="POST" class="form-horizontal" style="display: none;">
                <div class="form-group">
                    <label class="col-xs-3 control-label">Username</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" name="username" />
                    </div>
                </div>
            
                <div class="form-group">
                    <label class="col-xs-3 control-label">Password</label>
                    <div class="col-xs-9">
                        <input type="text" class="form-control" name="password" />
                    </div>
                </div>
            
                <div class="form-group">
                    <div class="col-xs-9 col-xs-offset-3">
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </ResourceLoader>
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
import Bootstrap3Layout from '../../../../components/demo/Bootstrap3Layout.svelte';
import ResourceLoader from '../../../../components/ResourceLoader.svelte';

let fv;

const onLoaded = () => {
    const loginForm = document.getElementById('loginForm');
    fv = formValidation(loginForm, {
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
                    }
                }
            }
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
                sender: '/guide/examples/integrating-with-bootbox/bootstrap3',
                sampleCode: sampleCode,
            }),
        },
    });

    document.getElementById('loginButton').addEventListener('click', () => {
        bootbox
            .dialog({
                title: 'Login',
                message: loginForm,
                size: 'small',
                show: false // We will show it manually later
            })
            .on('shown.bs.modal', () => {
                // Show the login form
                loginForm.style.display = 'block';
                
                // Reset form
                fv.resetForm(true);
            })
            .on('hide.bs.modal', () => {
                // Bootbox will remove the modal (including the body which contains the login form)
                // after hiding the modal
                // Therefor, we need to backup the form

                loginForm.style.display = 'none';
                document.body.appendChild(loginForm);
            })
            .modal('show');
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

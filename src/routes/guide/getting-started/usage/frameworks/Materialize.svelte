<DemoLayout framework="materialize">
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js',
    ]}>
        <form id="demoForm" method="post">
            <div class="row">
                <div class="input-field col s12">
                    <input type="text" name="username" />
                    <label>Username</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s12">
                    <input type="password" name="password" />
                    <label>Password</label>
                </div>
            </div>

            <div class="row">
                <div class="col s12">
                    <button type="submit" class="btn waves-effect waves-light">Submit</button>
                </div>
            </div>
        </form>
    </ResourceLoader>
</DemoLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/es6/core/Core';
import DemoFrame from 'formvalidation/es6/plugins/DemoFrame';
import Icon from 'formvalidation/es6/plugins/Icon';
import Trigger from 'formvalidation/es6/plugins/Trigger';
import Materialize from 'formvalidation/es6/plugins/Materialize';
import SubmitButton from 'formvalidation/es6/plugins/SubmitButton';

import sampleCode from './Materialize.programmatic';
import DemoLayout from '../../../../../components/DemoLayout.svelte';
import ResourceLoader from '../../../../../components/ResourceLoader.svelte';

onMount(() => {
    window.addEventListener('load', () => {
        M.AutoInit();
    });

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
            materialize: new Materialize(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/getting-started/usage/frameworks/Materialize',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };        
});
</script>
    
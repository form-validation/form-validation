<SemanticLayout onLoaded={onLoaded}>
    <form id="demoForm" class="ui form" method="POST">
        <div class="fields">
            <label class="four wide field">Username</label>
            <div class="eight wide field">
                <div class="ui input icon">
                    <input name="username" type="text" placeholder="Username" />
                </div>
            </div>
        </div>

        <div class="fields">
            <label class="four wide field">Password</label>
            <div class="eight wide field">
                <div class="ui input icon">
                    <input name="password" type="password" placeholder="Password" />
                </div>
            </div>
        </div>

        <div class="fields">
            <label class="four wide field"></label>
            <div class="eight wide field">
                <button type="submit" class="ui primary button">Submit</button>
            </div>
        </div>
    </form>
</SemanticLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/es6/core/Core';
import DemoFrame from 'formvalidation/es6/plugins/DemoFrame';
import Icon from 'formvalidation/es6/plugins/Icon';
import Trigger from 'formvalidation/es6/plugins/Trigger';
import Semantic from 'formvalidation/es6/plugins/Semantic';
import SubmitButton from 'formvalidation/es6/plugins/SubmitButton';

import sampleCode from './Semantic.programmatic';
import SemanticLayout from '../../../../../components/demo/SemanticLayout.svelte';

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
            semantic: new Semantic(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'checkmark icon',
                invalid: 'remove icon',
                validating: 'refresh icon',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/getting-started/usage/frameworks/Semantic',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

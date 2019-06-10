<MiniLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" style="background: #FFF; border: none; margin: 0; padding: 0 10px;">
        <div class="row">
            <div class="col-sm-3">
                <label>Full name</label>
            </div>
            <div class="col-sm-4">
                <input type="text" name="firstName" style="width: 100%" placeholder="First name" />
            </div>
            <div class="col-sm-4">
                <input type="text" name="lastName" style="width: 100%" placeholder="Last name" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Address</label>
            </div>
            <div class="col-sm-3">
                <input type="text" name="city" style="width: 100%" placeholder="City" />
            </div>
            <div class="col-sm-3">
                <input type="text" name="state" style="width: 100%" placeholder="State" />
            </div>
            <div class="col-sm-3">
                <input type="text" name="zipcode" style="width: 100%" placeholder="Zipcode" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-9 col-sm-offset-3">
                <button type="submit" class="primary">Submit</button>
            </div>
        </div>
    </form>
</MiniLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Mini from 'formvalidation/dist/es6/plugins/Mini';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Mini.programmatic';
import MiniLayout from '../../../../../components/demo/MiniLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'The first name can only consist of alphabetical and space'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'The last name can only consist of alphabetical and space'
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: 'The city is required'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'The state is required'
                    }
                }
            },
            zipcode: {
                validators: {
                    notEmpty: {
                        message: 'The zipcode is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            mini: new Mini({
                rowSelector: (field, ele) => {
                    switch (field) {
                        case 'firstName': 
                        case 'lastName':
                            return '.col-sm-4';
                        
                        case 'city': 
                        case 'state':
                        case 'zipcode':
                            return '.col-sm-3';
                        
                        default:
                            return '.row';
                    }
                }
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/mini/multiple-fields/Mini',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

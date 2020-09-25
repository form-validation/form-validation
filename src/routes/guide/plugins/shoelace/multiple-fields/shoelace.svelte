<ShoelaceLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="row input-field">
            <label class="col-3 control-label">Full name</label>
            <div class="col-4">
                <input type="text" name="firstName" placeholder="First name" />
            </div>
            <div class="col-4">
                <input type="text" name="lastName" placeholder="Last name" />
            </div>
        </div>
    
        <div class="row input-field">
            <label class="col-3 control-label">Address</label>
            <div class="col-3">
                <input type="text" name="city" placeholder="City" />
            </div>
            <div class="col-3">
                <input type="text" name="state" placeholder="State" />
            </div>
            <div class="col-3">
                <input type="text" name="zipcode" placeholder="Zipcode" />
            </div>
        </div>
    
        <div class="row input-field">
            <div class="col-9 offset-3">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Add product</button>
            </div>
        </div>
    </form>
</ShoelaceLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Shoelace from 'formvalidation/plugins/Shoelace';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './shoelace.programmatic';
import ShoelaceLayout from '../../../../../components/demo/ShoelaceLayout.svelte';

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
            shoelace: new Shoelace({
                rowSelector: (field, ele) => {
                    // field is the field name
                    // ele is the field element
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.col-4';
                        
                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.col-3';
                        
                        default:
                            return '.input-field';
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
                sender: '/guide/plugins/shoelace/multiple-fields/shoelace',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

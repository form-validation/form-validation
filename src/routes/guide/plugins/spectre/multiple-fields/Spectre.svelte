<SpectreLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="form-horizontal">
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Full name</label>
            </div>
            <div class="column col-4">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="firstName" placeholder="First name" />
                </div>
            </div>
            <div class="column col-4">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="lastName" placeholder="Last name" />
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Address</label>
            </div>
            <div class="column col-3">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="city" placeholder="City" />
                </div>
            </div>
            <div class="column col-3">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="state" placeholder="State" />
                </div>
            </div>
            <div class="column col-3">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="zipcode" placeholder="Zipcode" />
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3"></div>
            <div class="column col-9">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</SpectreLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Spectre from 'formvalidation/dist/es6/plugins/Spectre';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Spectre.programmatic';
import SpectreLayout from '../../../../../components/demo/SpectreLayout.svelte';

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
            spectre: new Spectre({
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
                            return '.form-group';
                    }
                }
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'form-icon icon icon-check',
                invalid: 'form-icon icon icon-cross',
                validating: 'form-icon loading',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/spectre/multiple-fields/Spectre',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

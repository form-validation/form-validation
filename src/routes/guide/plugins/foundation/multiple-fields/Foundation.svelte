<FoundationLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="grid-x grid-padding-x">
            <div class="small-3 cell">
                <label class="text-right middle">Full name</label>
            </div>
            <div class="small-4 cell">
                <input type="text" name="firstName" placeholder="First name" />
            </div>
            <div class="small-4 cell">
                <input type="text" name="lastName" placeholder="Last name" />
            </div>
        </div>

        <div class="grid-x grid-padding-x">
            <div class="small-3 cell">
                <label class="text-right middle">Address</label>
            </div>
            <div class="small-3 cell">
                <input type="text" name="city" placeholder="City" />
            </div>
            <div class="small-3 cell">
                <input type="text" name="state" placeholder="State" />
            </div>
            <div class="small-3 cell">
                <input type="text" name="zipcode" placeholder="Zipcode" />
            </div>
        </div>

        <div class="grid-x grid-padding-x">
            <div class="small-9 small-offset-3 cell">
                <button type="submit" class="button" name="signup" value="Sign up">Submit</button>
            </div>
        </div>
    </form>
</FoundationLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Foundation from 'formvalidation/dist/es6/plugins/Foundation';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Foundation.programmatic';
import FoundationLayout from '../../../../../components/demo/FoundationLayout.svelte';

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
            foundation: new Foundation({
                rowSelector: (field, ele) => {
                    // field is the field name
                    // ele is the field element
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.small-4';
                        
                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.small-3';
                        
                        default:
                            return '.form-group';
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
                sender: '/guide/plugins/foundation/multiple-fields/Foundation',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

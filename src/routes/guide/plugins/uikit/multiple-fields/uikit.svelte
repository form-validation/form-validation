<style>
:global(.uk-form-horizontal .uk-form-label) {
    width: 200px;
    margin-top: 7px;
    float: left;
}

:global(.uk-form-horizontal .uk-form-controls) {
    margin-left: 215px;
}
</style>

<UikitLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="uk-form-horizontal">
        <div class="uk-margin uk-grid">
            <div class="uk-width-1-5">Full name</div>
            <div class="uk-width-2-5">
                <input type="text" class="uk-input" name="firstName" placeholder="First name" />
            </div>
            <div class="uk-width-2-5">
                <input type="text" class="uk-input" name="lastName" placeholder="Last name" />
            </div>
        </div>
    
        <div class="uk-margin uk-grid">
            <label class="uk-width-1-5">Address</label>
            <div class="uk-width-1-5">
                <input type="text" class="uk-input" name="city" placeholder="City" />
            </div>
            <div class="uk-width-1-5">
                <input type="text" class="uk-input" name="state" placeholder="State" />
            </div>
            <div class="uk-width-1-5">
                <input type="text" class="uk-input" name="zipcode" placeholder="Zipcode" />
            </div>
        </div>
    
        <div class="uk-margin uk-grid">
            <label class="uk-width-1-5"></label>
            <div class="uk-width-4-5">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="uk-button uk-button-primary">Add product</button>
            </div>
        </div>
    </form>
</UikitLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Uikit from 'formvalidation/plugins/Uikit';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './uikit.programmatic';
import UikitLayout from '../../../../../components/demo/UikitLayout.svelte';

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
            uikit: new Uikit({
                rowSelector: (field, ele) => {
                    // field is the field name
                    // ele is the field element
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.uk-width-2-5';
                        
                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.uk-width-1-5';
                        
                        default:
                            return '.uk-margin';
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
                sender: '/guide/plugins/uikit/multiple-fields/uikit',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

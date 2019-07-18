<style>
:global(.ui.form .fields) {
    margin: 0 -.5em 1em;
}
:global(.ui.form:not(.unstackable) .fields:not(.unstackable)>.four.wide.field) {
    width: 25%!important;
}
:global(.ui.form:not(.unstackable) .fields:not(.unstackable)>.five.wide.field) {
    width: 31.25%!important;
}
</style>

<SemanticLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="ui form">
        <div class="fields">
            <label class="four wide field">Full name</label>
            <div class="five wide field">
                <!--
                When using feedback icon, the input must place inside 'ui input icon' element
                <div class="ui input icon">
                    <input type="text" />
                </div>
                See http://semantic-ui.com/elements/input.html#icon
                -->
                <div class="ui input icon">
                    <input type="text" name="firstName" placeholder="First name" />
                </div>
            </div>
            <div class="five wide field">
                <div class="ui input icon">
                    <input type="text" name="lastName" placeholder="Last name" />
                </div>
            </div>
        </div>
    
        <div class="fields">
            <label class="four wide field">Address</label>
            <div class="four wide field">
                <div class="ui input icon">
                    <input type="text" name="city" placeholder="City" />
                </div>
            </div>
            <div class="four wide field">
                <div class="ui input icon">
                    <input type="text" name="state" placeholder="State" />
                </div>
            </div>
            <div class="four wide field">
                <div class="ui input icon">
                    <input type="text" name="zipcode" placeholder="Zipcode" />
                </div>
            </div>
        </div>
    
        <div class="fields">
            <label class="four wide field"></label>
            <div class="four wide field">
                <button type="submit" class="ui primary button">Submit</button>
            </div>
        </div>
    </form>
</SemanticLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Semantic from 'formvalidation/dist/es6/plugins/Semantic';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './semantic.programmatic';
import SemanticLayout from '../../../../../components/demo/SemanticLayout.svelte';

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
            semantic: new Semantic({
                rowSelector: (field, ele) => {
                    // field is the field name
                    // ele is the field element
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.five.field';
                        
                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.four.field';
                        
                        default:
                            return '.fields';
                    }
                }
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'checkmark icon',
                invalid: 'remove icon',
                validating: 'refresh icon'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/semantic/multiple-fields/semantic',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

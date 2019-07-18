<MaterializeLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="row">
            <div class="input-field col s6">
                <input type="text" name="firstName" />
                <label>First name</label>
            </div>
            <div class="input-field col s6">
                <input type="text" name="lastName" />
                <label>Last name</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s4">
                <input type="text" name="city" />
                <label>City</label>
            </div>
            <div class="input-field col s4">
                <input type="text" name="state" />
                <label>State</label>
            </div>
            <div class="input-field col s4">
                <input type="text" name="zipcode" />
                <label>Zipcode</label>
            </div>
        </div>
    
        <div class="row">
            <div class="col s12">
                <button type="submit" class="btn waves-effect waves-light">Submit</button>
            </div>
        </div>
    </form>
</MaterializeLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Materialize from 'formvalidation/dist/es6/plugins/Materialize';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './materialize.programmatic';
import MaterializeLayout from '../../../../../components/demo/MaterializeLayout.svelte';

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
            materialize: new Materialize({
                rowSelector: (field, ele) => {
                    // field is the field name
                    // ele is the field element
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.s6';

                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.s4';
                        
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
                sender: '/guide/plugins/materialize/multiple-fields/materialize',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

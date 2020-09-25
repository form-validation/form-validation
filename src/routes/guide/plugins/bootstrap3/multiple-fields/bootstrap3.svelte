<Bootstrap3Layout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="form-horizontal">
        <div class="form-group">
            <label class="col-xs-3 control-label">Full name</label>
            <div class="col-xs-4">
                <input type="text" class="form-control" name="firstName" placeholder="First name" />
            </div>
            <div class="col-xs-4">
                <input type="text" class="form-control" name="lastName" placeholder="Last name" />
            </div>
        </div>

        <div class="form-group">
            <label class="col-xs-3 control-label">Address</label>
            <div class="col-xs-3">
                <input type="text" class="form-control" name="city" placeholder="City" />
            </div>
            <div class="col-xs-3">
                <input type="text" class="form-control" name="state" placeholder="State" />
            </div>
            <div class="col-xs-3">
                <input type="text" class="form-control" name="zipcode" placeholder="Zipcode" />
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-xs-9 col-xs-offset-3">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
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
import Bootstrap3Layout from '../../../../../components/demo/Bootstrap3Layout.svelte';

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
            bootstrap3: new Bootstrap3({
                rowSelector: (field, ele) => {
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.col-xs-4';
                        
                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.col-xs-3';
                        
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
                sender: '/guide/plugins/bootstrap3/multiple-fields/bootstrap3',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

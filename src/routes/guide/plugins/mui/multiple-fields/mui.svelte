<style>
:global(.mui-col-md-6) {
    float: left;
    width: 50%;
}

:global(.mui-col-md-4) {
    float: left;
    width: 33.33333%;
}
</style>

<MuiLayout onLoaded={onLoaded}>
    <div class="mui-container-fluid">
        <form id="demoForm" method="POST">
            <div class="mui-row">
                <div class="mui-col-md-6 mui-textfield">
                    <input type="text" name="firstName" />
                    <label>First name</label>
                </div>
                <div class="mui-col-md-6 mui-textfield">
                    <input type="text" name="lastName" />
                    <label>Last name</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-4 mui-textfield">
                    <input type="text" name="city" />
                    <label>City</label>
                </div>
                <div class="mui-col-md-4 mui-textfield">
                    <input type="text" name="state" />
                    <label>State</label>
                </div>
                <div class="mui-col-md-4 mui-textfield">
                    <input type="text" name="zipcode" />
                    <label>Zipcode</label>
                </div>
            </div>
        
            <div class="mui-row">
                <div class="mui-col-md-12">
                    <button type="submit" class="mui-btn mui-btn--primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</MuiLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Mui from 'formvalidation/plugins/Mui';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './mui.programmatic';
import MuiLayout from '../../../../../components/demo/MuiLayout.svelte';

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
            mui: new Mui({
                rowSelector: (field, ele) => {
                    // field is the field name
                    // ele is the field element
                    switch (field) {
                        case 'firstName':
                        case 'lastName':
                            return '.mui-col-md-6';

                        case 'city':
                        case 'state':
                        case 'zipcode':
                            return '.mui-col-md-4';
                        
                        default:
                            return '.mui-row';
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
                sender: '/guide/plugins/mui/multiple-fields/mui',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

<MilligramLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="row">
            <div class="column column-25">
                <label>Full name</label>
            </div>
            <div class="column column-25">
                <input type="text" name="firstName" placeholder="First name" />
            </div>
            <div class="column column-25">
                <input type="text" name="lastName" placeholder="Last name" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Address</label>
            </div>
            <div class="column column-20">
                <input type="text" name="city" placeholder="City" />
            </div>
            <div class="column column-20">
                <input type="text" name="state" placeholder="State" />
            </div>
            <div class="column column-20">
                <input type="text" name="zipcode" placeholder="Zipcode" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25"></div>
            <div class="column column-75">
                <button type="submit" class="button-primary">Submit</button>
            </div>
        </div>
    </form>
</MilligramLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Milligram from 'formvalidation/plugins/Milligram';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './milligram.programmatic';
import MilligramLayout from '../../../../../components/demo/MilligramLayout.svelte';

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
            milligram: new Milligram({
                rowSelector: (field, ele) => {
                    switch (field) {
                        case 'firstName': 
                        case 'lastName':
                            return '.column-25';

                        case 'city': 
                        case 'state':
                        case 'zipcode':
                            return '.column-20';

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
                sender: '/guide/plugins/milligram/multiple-fields/milligram',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

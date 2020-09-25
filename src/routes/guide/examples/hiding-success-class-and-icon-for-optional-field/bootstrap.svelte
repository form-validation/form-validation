<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Full name</label>
            <div class="col-sm-3">
                <input type="text" class="form-control" name="firstName" placeholder="First name" />
            </div>
            <div class="col-sm-3">
                <input type="text" class="form-control" name="middleName" placeholder="Middle name" />
            </div>
            <div class="col-sm-3">
                <input type="text" class="form-control" name="lastName" placeholder="Last name" />
            </div>
        </div>
    
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Phone number</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="phoneNumber" />
            </div>
        </div>
    
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Email address</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="email" />
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Secondary email address</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="secondaryEmail" />
            </div>
        </div>
    
        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap from 'formvalidation/plugins/Bootstrap';
import SubmitButton from 'formvalidation/plugins/SubmitButton';
import phone from 'formvalidation/validators/phone';

import classSet from 'formvalidation/utils/classSet';
import closest from 'formvalidation/utils/closest';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../components/demo/BootstrapLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            middleName: {
                validators: {
                    stringLength: {
                        max: 20,
                        message: 'The middle name must be less than 20 characters long'
                    },
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
            phoneNumber: {
                validators: {
                    notEmpty: {
                        message: 'The phone number is required'
                    },
                    phone: {
                        country: 'US',
                        message: 'The phone number is not valid',
                    },
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            secondaryEmail: {
                validators: {
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap({
                rowSelector: function(field, ele) {
                    switch (field) {
                        case 'firstName': 
                        case 'middleName':
                        case 'lastName':
                            return '.col-sm-3';
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
                sender: '/guide/examples/hiding-success-class-and-icon-for-optional-field/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    })
    .registerValidator('phone', phone)
    .on('core.element.validated', (e) => {
        const validators = fv.getFields()[e.field].validators;

        // Check if the field has 'notEmpty' validator
        if (validators && validators['notEmpty'] && validators['notEmpty'].enabled !== false) {
            return;
        }

        // Get the icon plugin instance
        const iconPlugin = fv.getPlugin('icon');        
        const iconElement = iconPlugin && iconPlugin.icons.has(e.element) ? iconPlugin.icons.get(e.element) : null;
        
        // Get the field value
        const value = fv.getElementValue(e.field, e.element);
        if (e.valid && value === '') {
            // Now the field is empty and valid
            // Remove the success color from the container
            const container = FormValidation.utils.closest(e.element, '.has-success');
            FormValidation.utils.classSet(container, {
                'has-success': false
            });

            // Remove 'is-valid' class from the field element
            FormValidation.utils.classSet(e.element, {
                'is-valid': false
            });

            // Hide the icon
            iconElement && (iconElement.style.display = 'none');
        } else {
            iconElement && (iconElement.style.display = 'block');
        }
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
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

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag> 
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(document.getElementById('demoForm'), {
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
            trigger: new FormValidation.plugins.Trigger(),
            bootstrap: new FormValidation.plugins.Bootstrap({
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
            submitButton: new FormValidation.plugins.SubmitButton(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
        },
    })
    .on('core.element.validated', function(e) {
        // e.element presents the field element
        // e.valid indicates the field is valid or not
        
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
});
</script-tag>
</body>
</html>
`;
export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/css/foundation.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
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

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Foundation.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
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
                trigger: new FormValidation.plugins.Trigger(),
                foundation: new FormValidation.plugins.Foundation({
                    rowSelector: function(field, ele) {
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
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;
export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.3/css/uikit.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
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

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Uikit.min.js"></script-tag>

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
                uikit: new FormValidation.plugins.Uikit({
                    rowSelector: function(field, ele) {
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
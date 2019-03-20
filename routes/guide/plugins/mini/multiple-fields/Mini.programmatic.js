export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.0/mini-default.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="row">
            <div class="col-sm-3">
                <label>Full name</label>
            </div>
            <div class="col-sm-4">
                <input type="text" name="firstName" style="width: 100%" placeholder="First name" />
            </div>
            <div class="col-sm-4">
                <input type="text" name="lastName" style="width: 100%" placeholder="Last name" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Address</label>
            </div>
            <div class="col-sm-3">
                <input type="text" name="city" style="width: 100%" placeholder="City" />
            </div>
            <div class="col-sm-3">
                <input type="text" name="state" style="width: 100%" placeholder="State" />
            </div>
            <div class="col-sm-3">
                <input type="text" name="zipcode" style="width: 100%" placeholder="Zipcode" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-9 col-sm-offset-3">
                <button type="submit" class="primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Mini.min.js"></script-tag>

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
                mini: new FormValidation.plugins.Mini({
                    rowSelector: function(field, ele) {
                        switch (field) {
                            case 'firstName':
                            case 'lastName':
                                return '.col-sm-4';
                            
                            case 'city':
                            case 'state':
                            case 'zipcode':
                                return '.col-sm-3';
                            
                            default:
                                return '.row';
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
        }
    );
});
</script-tag>
</body>
</html>
`;
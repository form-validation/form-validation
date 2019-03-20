export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.39/css/mui.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <div class="mui-container-fluid">
        <form id="demoForm" method="post">
            <div class="mui-row">
                <div class="mui-col-md-12 mui-textfield">
                    <input type="text" name="username" />
                    <label>Username</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12 mui-textfield">
                    <input type="password" name="password" />
                    <label>Password</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <button type="submit" class="mui-btn mui-btn--primary">Submit</button>
                </div>
            </div>
        </form>
    </div>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/muicss/0.9.39/js/mui.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Mui.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The username can only consist of alphabetical, number and underscore'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password must have at least 8 characters'
                        },
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                mui: new FormValidation.plugins.Mui({
                    rowSelector: function(field, ele) {
                        switch (field) {
                            case 'firstName': 
                            case 'lastName':
                                return '.mui-col-md-6';
                            default:
                                return '.mui-row';
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
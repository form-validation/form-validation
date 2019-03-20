export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.3/spectre.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.3/spectre-icons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" class="form-horizontal" method="POST">
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Username</label>
            </div>
            <div class="col-9">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="username" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Password</label>
            </div>
            <div class="col-9">
                <div class="has-icon-right">
                    <input type="password" class="form-input" name="password" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3"></div>
            <div class="col-9">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Spectre.min.js"></script-tag>

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
                            message: 'The username must be more than 6 and less than 30 characters long',
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The username can only consist of alphabetical, number and underscore',
                        },
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password must have at least 8 characters',
                        },
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                spectre: new FormValidation.plugins.Spectre(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'form-icon icon icon-check',
                    invalid: 'form-icon icon icon-cross',
                    validating: 'form-icon loading',
                }),
            },
        }
    ); 
});
</script-tag>
</body>
</html>
`;
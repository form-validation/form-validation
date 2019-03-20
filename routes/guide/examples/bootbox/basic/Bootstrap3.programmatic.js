export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <button type="submit" class="btn btn-default" id="loginButton">Login</button>

    <form id="loginForm" method="POST" class="form-horizontal" style="display: none;">
        <div class="form-group">
            <label class="col-xs-3 control-label">Username</label>
            <div class="col-xs-9">
                <input type="text" class="form-control" name="username" />
            </div>
        </div>

        <div class="form-group">
            <label class="col-xs-3 control-label">Password</label>
            <div class="col-xs-9">
                <input type="text" class="form-control" name="password" />
            </div>
        </div>

        <div class="form-group">
            <div class="col-xs-9 col-xs-offset-3">
                <button type="submit" class="btn btn-primary">Login</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/bootbox.js/4.4.0/bootbox.min.js"></script-tag>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag> 
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap3.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const loginForm = document.getElementById('loginForm');
    const fv = FormValidation.formValidation(
        loginForm,
        {
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        }
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstra3p: new FormValidation.plugins.Bootstrap3(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },
        }
    );

    document.getElementById('loginButton').addEventListener('click', function() {
        bootbox
            .dialog({
                title: 'Login',
                message: loginForm,
                size: 'small',
                show: false // We will show it manually later
            })
            .on('shown.bs.modal', function() {
                // Show the login form
                loginForm.style.display = 'block';
                
                // Reset form
                fv.resetForm(true);
            })
            .on('hide.bs.modal', function() {
                // Bootbox will remove the modal (including the body which contains the login form)
                // after hiding the modal
                // Therefor, we need to backup the form

                loginForm.style.display = 'none';
                document.body.appendChild(loginForm);
            })
            .modal('show');
    });
});
</script-tag>
</body>
</html>
`;
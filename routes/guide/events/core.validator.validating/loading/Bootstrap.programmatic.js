export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Username</label>
            <div class="col-sm-6">
                <input type="text" class="form-control" name="username" autocomplete="off" />
                
                <!-- The progress bar is hidden initially -->
                <div class="progress mt-2" id="progressBar" style="opacity: 0;">
                    <div class="progress-bar progress-bar-striped progress-bar-animate" style="width: 100%"></div>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation
        .formValidation(
            document.getElementById('demoForm'),
            {
                fields: {
                    username: {
                        validators: {
                            notEmpty: {
                                message: 'The username is required'
                            },
                            remote: {
                                message: 'The username is already taken',
                                method: 'GET',
                                url: '...',
                            },
                        }
                    },
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap(),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    icon: new FormValidation.plugins.Icon({
                        valid: 'fa fa-check',
                        invalid: 'fa fa-times',
                        validating: 'fa fa-refresh'
                    }),
                },
            }
        )
        .on('core.validator.validating', function(e) {
            if (e.field === 'username' && e.validator === 'remote') {
                document.getElementById('progressBar').style.opacity = '1';
            }
        })
        .on('core.validator.validated', function(e) {
            if (e.field === 'username' && e.validator === 'remote') {
                document.getElementById('progressBar').style.opacity = '0';
            }
        });
});
</script-tag>
</body>
</html>
`;
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
            <label class="col-sm-3 col-form-label">New password</label>
            <div class="col-sm-6">
                <input type="password" class="form-control" name="pwd" autocomplete="off" />
                
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
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const strongPassword = function {
        return {
            validate: function(input) {
                // input.value is the field value
                // input.options are the validator options

                const value = input.value;
                if (value === '') {
                    return {
                        valid: true,
                    };
                }

                const result = zxcvbn(value);
                const score = result.score;
                const message = result.feedback.warning || 'The password is weak';

                // By default, the password is treat as invalid if the score is smaller than 3
                // We allow user to change this number via options.minimalScore
                const minimalScore = input.options && input.options.minimalScore
                                    ? input.options.minimalScore
                                    : 3;

                if (score < minimalScore) {
                    return {
                        valid: false,
                        // Yeah, this will be set as error message
                        message: message,
                        meta: {
                            // This meta data will be used later
                            score: score,
                        },
                    }
                }
            },
        };
    };

    FormValidation
        .formValidation(
            document.getElementById('demoForm'),
            {
                fields: {
                    pwd: {
                        validators: {
                            notEmpty: {
                                message: 'The password is required and cannot be empty'
                            },
                            checkPassword: {
                                message: 'The password is too weak',
                                minimalScore: 3,
                            },
                        }
                    }
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    bootstrap: new FormValidation.plugins.Bootstrap(),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    icon: new FormValidation.plugins.Icon({
                        valid: 'fa fa-check',
                        invalid: 'fa fa-times',
                        validating: 'fa fa-refresh',
                    }),
                },
            }
        )
        .registerValidator('checkPassword', strongPassword)
        .on('core.validator.validating', function(e) {
            if (e.field === 'pwd' && e.validator === 'checkPassword') {
                document.getElementById('progressBar').style.opacity = '1';
            }
        })
        .on('core.validator.validated', function(e) {
            if (e.field === 'pwd' && e.validator === 'checkPassword') {
                const progressBar = document.getElementById('progressBar');

                if (e.result.meta) {
                    // Get the score which is a number between 0 and 4
                    const score = e.result.meta.score;
                    
                    // Update the width of progress bar
                    const width = (score == 0) ? '1%' : score * 25 + '%';
                    progressBar.style.opacity = 1;
                    progressBar.style.width = width;
                } else {
                    progressBar.style.opacity = 0;
                    progressBar.style.width = '0%';
                }
            }
        });
});
</script-tag>
</body>
</html>
`;
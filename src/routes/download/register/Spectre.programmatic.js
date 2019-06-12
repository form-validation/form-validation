export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.8/spectre-icons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" class="form-horizontal" method="POST">
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Full name</label>
            </div>
            <div class="col-4">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="firstName" placeholder="First name" />
                </div>
            </div>
            <div class="col-4">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="lastName" placeholder="Last name" />
                </div>
            </div>
        </div>

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
                <label class="form-label">Email address</label>
            </div>
            <div class="col-9">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="email" />
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
            <div class="col-3">
                <label class="form-label">Gender</label>
            </div>
            <div class="col-9">
                <label class="form-radio">
                    <input type="radio" name="gender" value="male" />
                    <i class="form-icon"></i>
                    Male
                </label>
                <label class="form-radio">
                    <input type="radio" name="gender" value="female" />
                    <i class="form-icon"></i>
                    Female
                </label>
                <label class="form-radio">
                    <input type="radio" name="gender" value="other" />
                    <i class="form-icon"></i>
                    Other
                </label>
            </div>
        </div>

        <div class="form-group">
            <div class="col-3">
                <label class="form-label" id="captchaOperation"></label>
            </div>
            <div class="col-9">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="captcha" />
                </div>
            </div>
        </div>

        <div class="form-group">
            <div class="col-9 col-ml-auto">
                <label class="form-checkbox">
                    <input type="checkbox" name="agree" value="agree" />
                    <i class="form-icon"></i>
                    Agree with the terms and conditions
                </label>
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
    // Generate a simple captcha
    const randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

    const form = document.getElementById('demoForm');
    FormValidation.formValidation(form, {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
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
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    },
                    different: {
                        message: 'The password cannot be the same as username',
                        compare: function() {
                            return form.querySelector('[name="username"]').value;
                        }
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            captcha: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: function(input) {
                            const items = document.getElementById('captchaOperation').innerHTML.split(' ');
                            const sum = parseInt(items[0]) + parseInt(items[2]);
                            return input.value == sum;
                        }
                    }
                }
            },
            agree: {
                validators: {
                    notEmpty: {
                        message: 'You must agree with the terms and conditions'
                    }
                }
            }
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
    });  
});
</script-tag>
</body>
</html>
`;
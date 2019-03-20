export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bigfishtv-turret/4.1.4/turretcss.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post" class="fv-stacked-form">
        <div class="field">
            <label>First name</label>
            <input type="text" name="firstName" />
        </div>

        <div class="field">
            <label>Last name</label>
            <input type="text" name="lastName" />
        </div>

        <div class="field">
            <label>Username</label>
            <input type="text" name="username" />
        </div>

        <div class="field">
            <label>Email</label>
            <input type="text" name="email" />
        </div>

        <div class="field">
            <label>Password</label>
            <input type="password" name="password" />
        </div>

        <div class="field">
            <label>Gender</label>
            <div>
                <label class="control radio">
                    <input type="radio" name="gender" value="male" />
                    <span class="control-indicator"></span>
                    <span class="control-label">Male</span>
                </label>
                <label class="control radio">
                    <input type="radio" name="gender" value="female" />
                    <span class="control-indicator"></span>
                    <span class="control-label">Female</span>
                </label>
                <label class="control radio">
                    <input type="radio" name="gender" value="other" />
                    <span class="control-indicator"></span>
                    <span class="control-label">Other</span>
                </label>
            </div>
        </div>

        <div class="field">
            <label id="captchaOperation"></label>
            <input type="text" name="captcha" />
        </div>

        <div class="field">
            <label class="control checkbox">
                <input type="checkbox" name="agree" value="agree" />
                <span class="control-indicator"></span>
                <span class="control-label">Agree with the terms and conditions</span>
            </label>
        </div>

        <div class="field">
            <button type="submit" class="button button-primary">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Turret.min.js"></script-tag>

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
            turret: new FormValidation.plugins.Turret(),
            submitButton: new FormValidation.plugins.SubmitButton(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        }
    });  
});
</script-tag>
</body>
</html>
`;
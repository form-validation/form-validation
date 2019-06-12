export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.5.3/css/foundation.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm">
        <div class="grid-container">
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
                    <label class="text-right middle">Username</label>
                </div>
                <div class="small-6 cell">
                    <input type="text" name="username" />
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right middle">Email address</label>
                </div>
                <div class="small-6 cell">
                    <input type="text" name="email" />
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right middle">Password</label>
                </div>
                <div class="small-6 cell">
                    <input type="password" name="password" />
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right">Gender</label>
                </div>
                <div class="small-6 cell">
                    <input type="radio" id="maleRadio" name="gender" value="male" /><label for="maleRadio">Male</label>
                    <input type="radio" id="femaleRadio" name="gender" value="female" /><label for="femaleRadio">Female</label>
                    <input type="radio" id="otherRadio" name="gender" value="other" /><label for="otherRadio">Other</label>
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-3 cell">
                    <label class="text-right middle" id="captchaOperation"></label>
                </div>
                <div class="small-3 cell">
                    <input type="text" name="captcha" />
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-6 small-offset-3 cell">
                    <input type="checkbox" id="agreeCheckbox" name="agree" value="agree" />
                    <label for="agreeCheckbox">Agree with the terms and conditions</label>
                </div>
            </div>

            <div class="grid-x grid-padding-x">
                <div class="small-9 small-offset-3 cell">
                    <button type="submit" class="button" name="signup" value="Sign up">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Foundation.min.js"></script-tag>

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
            foundation: new FormValidation.plugins.Foundation(),
            submitButton: new FormValidation.plugins.SubmitButton(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        },
    });  
});
</script-tag>
</body>
</html>
`;
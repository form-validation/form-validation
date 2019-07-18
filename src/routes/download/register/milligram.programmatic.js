export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="row">
            <div class="column column-25">
                <label>Full name</label>
            </div>
            <div class="column column-25">
                <input type="text" name="firstName" />
            </div>
            <div class="column column-25">
                <input type="text" name="lastName" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Username</label>
            </div>
            <div class="column column-40">
                <input type="text" name="username" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Email</label>
            </div>
            <div class="column column-40">
                <input type="text" name="email" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Password</label>
            </div>
            <div class="column column-40">
                <input type="password" name="password" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Gender</label>
            </div>
            <div class="column column-40">
                <div>
                    <input type="radio" name="gender" value="male" id="genderMale" />
                    <label class="label-inline" for="genderMale">Male</label>
                </div>
                <div>
                    <input type="radio" name="gender" value="female" id="genderFemale" />
                    <label class="label-inline" for="genderFemale">Female</label>
                </div>
                <div>
                    <input type="radio" name="gender" value="other" id="genderOther" />
                    <label class="label-inline" for="genderOther">Other</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label id="captchaOperation"></label>
            </div>
            <div class="column column-40">
                <input type="text" name="captcha" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label></label>
            </div>
            <div class="column column-50">
                <div>
                    <input type="checkbox" name="agree" value="agree" />
                    <label class="label-inline">Agree with the terms and conditions</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="column column-25"></div>
            <div class="column column-75">
                <button type="submit" class="button-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Milligram.min.js"></script-tag>

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
            milligram: new FormValidation.plugins.Milligram({
                rowSelector: function(field, ele) {
                    switch (field) {
                        case 'firstName': 
                        case 'lastName':
                            return '.column';
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
        }
    });  
});
</script-tag>
</body>
</html>
`;
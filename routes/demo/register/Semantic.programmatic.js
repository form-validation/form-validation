export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <div class="ui grid">
        <div class="sixteen wide column">
            <form id="demoForm" class="ui form" method="POST">
                <div class="fields">
                    <label class="four wide field">Full name</label>
                    <div class="six wide field">
                        <!--
                        When using feedback icon, the input must place inside 'ui input icon' element
                        <div class="ui input icon">
                            <input type="text" />
                        </div>
                        See http://semantic-ui.com/elements/input.html#icon
                        -->
                        <div class="ui input icon">
                            <input name="firstName" type="text" placeholder="First name" />
                        </div>
                    </div>
                    <div class="six wide field">
                        <div class="ui input icon">
                            <input name="lastName" type="text" placeholder="Last name" />
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field">Username</label>
                    <div class="eight wide field">
                        <div class="ui input icon">
                            <input name="username" type="text" placeholder="Username" />
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field">Email address</label>
                    <div class="eight wide field">
                        <div class="ui input icon">
                            <input name="email" type="text" placeholder="Email address" />
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field">Password</label>
                    <div class="eight wide field">
                        <div class="ui input icon">
                            <input name="password" type="password" placeholder="Password" />
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field">Gender</label>
                    <div class="ten wide field">
                        <div class="field">
                            <div class="ui radio">
                                <input name="gender" type="radio" value="male" />
                                <label>Male</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio">
                                <input name="gender" type="radio" value="female" />
                                <label>Female</label>
                            </div>
                        </div>
                        <div class="field">
                            <div class="ui radio">
                                <input name="gender" type="radio" value="other" />
                                <label>Other</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field">
                        <span class="right" id="captchaOperation"></span>
                    </label>
                    <div class="four wide field">
                        <div class="ui input icon">
                            <input type="text" name="captcha" />
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field"></label>
                    <div class="ten wide field">
                        <div class="ui checkbox">
                            <input name="agree" type="checkbox" /> <label>Agree with the terms and conditions</label>
                        </div>
                    </div>
                </div>

                <div class="fields">
                    <label class="four wide field"></label>
                    <div class="eight wide field">
                        <button type="submit" class="ui primary button">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Semantic.min.js"></script-tag>

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
            semantic: new FormValidation.plugins.Semantic(),
            icon: new FormValidation.plugins.Icon({
                valid: 'checkmark icon',
                invalid: 'remove icon',
                validating: 'refresh icon'
            }),
        }
    });  
});
</script-tag>
</body>
</html>
`;
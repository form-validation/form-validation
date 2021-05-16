<Bootstrap5Layout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">Full name</label>
            <div class="col-md-4">
                <input type="text" class="form-control" name="firstName" placeholder="First name" />
            </div>
            <div class="col-md-4">
                <input type="text" class="form-control" name="lastName" placeholder="Last name" />
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">Username</label>
            <div class="col-md-5">
                <input type="text" class="form-control" name="username" />
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">Email address</label>
            <div class="col-md-5">
                <input type="text" class="form-control" name="email" />
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">Password</label>
            <div class="col-md-5">
                <input type="password" class="form-control" name="password" />
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-md-3 col-form-label">Gender</label>
            <div class="col-md-6">
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="gender" value="male" />
                    <label class="form-check-label">Male</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="gender" value="female" />
                    <label class="form-check-label">Female</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="gender" value="other" />
                    <label class="form-check-label">Other</label>
                </div>
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-md-3 col-form-label" id="captchaOperation"></label>
            <div class="col-md-4">
                <input type="text" class="form-control" name="captcha" />
            </div>
        </div>

        <div class="mb-3 row">
            <div class="col-md-6 offset-md-3">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="agree" value="agree" />
                    <label class="form-check-label">Agree with the terms and conditions</label>
                </div>
            </div>
        </div>

        <div class="mb-3 row">
            <div class="col-md-9 offset-md-3">
                <button type="submit" class="btn btn-primary" name="signup" value="Sign up">Submit</button>
            </div>
        </div>
    </form>
</Bootstrap5Layout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap5 from 'formvalidation/plugins/Bootstrap5';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './bootstrap5.programmatic';
import Bootstrap5Layout from '../../../components/demo/Bootstrap5Layout.svelte';

let fv;

const onLoaded = () => {
    // Generate a simple captcha
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
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
                        compare: () => {
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
                        callback: (input) => {
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
            trigger: new Trigger(),
            bootstrap: new Bootstrap5({
                rowSelector: function(field, ele) {
                    switch (field) {
                        case 'firstName': 
                        case 'lastName':
                            return '.col-md-4';
                        default:
                            return '.row';
                    }
                }
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/bootstrap5',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

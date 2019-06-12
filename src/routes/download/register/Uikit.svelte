<UikitLayout onLoaded={onLoaded}>
    <form id="demoForm" class="uk-form-horizontal" method="post">
        <div class="uk-margin">
            <label class="uk-form-label">Full name</label>
            <div class="uk-form-controls">
                <input class="uk-input" name="firstName" type="text" placeholder="First name" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label"></label>
            <div class="uk-form-controls">
                <input class="uk-input" name="lastName" type="text" placeholder="Last name" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Username</label>
            <div class="uk-form-controls">
                <input class="uk-input" name="username" type="text" placeholder="Username" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Email address</label>
            <div class="uk-form-controls">
                <input class="uk-input" name="email" type="text" placeholder="Email address" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Password</label>
            <div class="uk-form-controls">
                <input class="uk-input" name="password" type="password" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Gender</label>
            <div class="uk-form-controls">
                <label><input class="uk-radio" name="gender" type="radio" value="male" /> Male</label>
                <label><input class="uk-radio" name="gender" type="radio" value="female" /> Female</label>
                <label><input class="uk-radio" name="gender" type="radio" value="other" /> Other</label>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label" id="captchaOperation"></label>
            <div class="uk-form-controls">
                <input class="uk-input" type="text" name="captcha" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label"></label>
            <div class="uk-form-controls">
                <label><input class="uk-checkbox" name="agree" type="checkbox" /> Agree with the terms and conditions</label>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label"></label>
            <div class="uk-form-controls">
                <button type="submit" class="uk-button uk-button-primary">Submit</button>
            </div>
        </div>
    </form>
</UikitLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Uikit from 'formvalidation/dist/es6/plugins/Uikit';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Uikit.programmatic';
import UikitLayout from '../../../components/demo/UikitLayout.svelte';

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
            submitButton: new SubmitButton(),
            uikit: new Uikit(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/Uikit',
                sampleCode: sampleCode,
            }),
        }
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

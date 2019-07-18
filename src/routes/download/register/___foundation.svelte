<FoundationLayout onLoaded={onLoaded}>
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
</FoundationLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Foundation from 'formvalidation/dist/es6/plugins/Foundation';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './foundation.programmatic';
import FoundationLayout from '../../../components/demo/FoundationLayout.svelte';

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
            foundation: new Foundation(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/foundation',
                sampleCode: sampleCode,
            }),
        }
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

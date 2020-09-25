<TurretLayout onLoaded={onLoaded}>
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
</TurretLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import SubmitButton from 'formvalidation/plugins/SubmitButton';
import Trigger from 'formvalidation/plugins/Trigger';
import Turret from 'formvalidation/plugins/Turret';

import sampleCode from './turret.programmatic';
import TurretLayout from '../../../components/demo/TurretLayout.svelte';

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
            turret: new Turret(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/turret',
                sampleCode: sampleCode,
            }),
        }
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

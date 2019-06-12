<PureLayout onLoaded={onLoaded}>
    <div class="pure-g">
        <div class="pure-u-1">
            <form id="demoForm" class="pure-form pure-form-aligned" method="POST">
                <div class="pure-control-group">
                    <label>Full name</label>
                    <input name="firstName" type="text" placeholder="First name" />
                </div>

                <div class="pure-control-group">
                    <label></label>
                    <input name="lastName" type="text" placeholder="Last name" />
                </div>

                <div class="pure-control-group">
                    <label>Username</label>
                    <input name="username" type="text" placeholder="Username" />
                </div>

                <div class="pure-control-group">
                    <label>Email address</label>
                    <input name="email" type="text" placeholder="Email address" />
                </div>

                <div class="pure-control-group">
                    <label>Password</label>
                    <input name="password" type="password" placeholder="Password" />
                </div>

                <div class="pure-control-group">
                    <label>Gender</label>
                    <input name="gender" type="radio" value="male" /> Male<br/>
                    <label></label>
                    <input name="gender" type="radio" value="female" /> Female<br/>
                    <label></label>
                    <input name="gender" type="radio" value="other" /> Other<br/>
                </div>

                <div class="pure-control-group">
                    <label id="captchaOperation"></label>
                    <input type="text" name="captcha" />
                </div>

                <div class="pure-control-group">
                    <label></label>
                    <input name="agree" id="agreeCheckbox" type="checkbox" /> Agree with the terms and conditions
                </div>

                <div class="pure-control-group">
                    <label></label>
                    <button type="submit" class="pure-button pure-button-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
</PureLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';
import Pure from 'formvalidation/dist/es6/plugins/Pure';

import sampleCode from './Pure.programmatic';
import PureLayout from '../../../components/demo/PureLayout.svelte';

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
            pure: new Pure(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/Pure',
                sampleCode: sampleCode,
            }),
        }
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

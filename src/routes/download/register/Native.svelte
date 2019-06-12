<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="mb2">
            <label>Full name</label>
            <div>
                <input type="text" name="firstName" class="input-reset ba b--black-20 pa2 mb2 db w-30" />
                <input type="text" name="lastName" class="input-reset ba b--black-20 pa2 mb2 db w-30" />
            </div>
        </div>

        <div class="mb2">
            <label>Username</label>
            <input type="text" name="username" class="input-reset ba b--black-20 pa2 mb2 db w-30" />
        </div>

        <div class="mb2">
            <label>Email</label>
            <input type="text" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-30" />
        </div>

        <div class="mb2">
            <label>Password</label>
            <input type="password" name="password" class="input-reset ba b--black-20 pa2 mb2 db w-30" />
        </div>

        <div class="mb2">
            <label>Gender</label>
            <div><label for="genderMale"><input class="mr2" type="radio" name="gender" id="genderMale" value="male" /> Male</label></div>
            <div><label for="genderFemale"><input class="mr2" type="radio" name="gender" id="genderFemale" value="female" /> Female</label></div>
            <div><label for="genderOther"><input class="mr2" type="radio" name="gender" id="genderOther" value="other" /> Other</label></div>
        </div>

        <div class="mb2">
            <label id="captchaOperation"></label>
            <input type="text" name="captcha" class="input-reset ba b--black-20 pa2 mb2 db w-30" />
        </div>
        
        <div class="mb2">
            <label class="lh-copy"><input class="mr2" type="checkbox" name="agree" value="agree" /> Agree with the terms and conditions</label>
        </div>

        <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Message from 'formvalidation/dist/es6/plugins/Message';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';

import sampleCode from './Native.programmatic';
import TachyonsLayout from '../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    // Generate a simple captcha
    const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    document.getElementById('captchaOperation').innerHTML = [random[0], '+', random[1], '='].join(' ');

    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
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
            message: new Message({
                clazz: 'dark-red lh-copy'
            }),
            demoFrame: new DemoFrame({
                sender: '/download/register/Native',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

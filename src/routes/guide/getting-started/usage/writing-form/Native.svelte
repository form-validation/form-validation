<TachyonsLayout>
    <form id="loginForm" method="POST">
        <div class="mb2">
            <label>Username</label>
            <input type="text" name="username" class="input-reset ba b--black-20 pa2 mb2 db w-30" />
        </div>

        <div class="mb2">
            <label>Password</label>
            <input type="password" name="password" class="input-reset ba b--black-20 pa2 mb2 db w-30" />
        </div>

        <button class="ba b--black-20 bg-blue white ph3 pv2 br2" type="submit">Submit</button>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/es6/core/Core';
import DemoFrame from 'formvalidation/es6/plugins/DemoFrame';

import sampleCode from './Native.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const form = document.getElementById('loginForm');

    const fv = formValidation(form, {
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long',
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore',
                    },
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters',
                    },
                }
            },
        },
        plugins: {
            demoFrame: new DemoFrame({
                sender: '/guide/getting-started/usage/writing-form/Native',
                sampleCode: sampleCode,
            }),
        },
    });

    // For demo purpose
    form.querySelector('[type="submit"]').addEventListener('click', (e) => {
        e.preventDefault();
    });

    return () => {
        fv.destroy();
    };
});
</script>

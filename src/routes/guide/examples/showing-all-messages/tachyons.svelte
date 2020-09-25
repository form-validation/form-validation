<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Password</div>
                <div class="fl w-50">
                    <div>
                        <input type="password" name="pwd" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>

                    <!-- The message container -->
                    <ul id="messageContainer" class="red pa0 ma3">
                        {#each _rules as rule}
                        <li data-rule="{rule.name}">{rule.message}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Tachyons from 'formvalidation/plugins/Tachyons';
import classSet from 'formvalidation/utils/classSet';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

// The rules that a secure password need to follow
const PASSWORD_RULES = [
    {
        name: 'length',
        message: 'It must be more than 8 characters long',
        check: function(value) {
            return value.length >= 8;
        }
    },
    {
        name: 'upperCase',
        message: 'It must contain at least one upper case character',
        check: function(value) {
            return value !== value.toLowerCase();
        }
    },
    {
        name: 'lowerCase',
        message: 'It must contain at least one lower case character',
        check: function(value) {
            return value !== value.toUpperCase();
        }
    },
    {
        name: 'digit',
        message: 'It must contain at least one digit',
        check: function(value) {
            return value.search(/[0-9]/) >= 0;
        }
    }
];

const _rules = PASSWORD_RULES;

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            pwd: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    callback: {
                        message: 'The password is not valid',
                        callback: (input) => {
                            const value = input.value;
                            if (value === '') {
                                return true;
                            }

                            const passedRules = [];

                            // Loop over the rules
                            for (let i = 0; i < PASSWORD_RULES.length; i++) {
                                if (PASSWORD_RULES[i].check(value)) {
                                    passedRules.push(PASSWORD_RULES[i].name);
                                }
                            }

                            if (passedRules.length < PASSWORD_RULES.length) {
                                return {
                                    valid: false,
                                    meta: {
                                        passedRules: passedRules,
                                    },
                                }
                            }

                            return true;
                        }
                    },
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/showing-all-messages/tachyons',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('plugins.message.displayed', (e) => {
        if (e.field === 'pwd' && e.validator === 'callback') {
            // Hide the default message
            classSet(e.messageElement, {
                'dn': true,
            });
        }
    })
    .on('core.validator.validated', (e) => {
        if (e.field === 'pwd' && e.validator === 'callback') {
            const result = e.result;
            const container = document.getElementById('messageContainer');

            if (result.valid) {
                // The password passes all checks
                // Hide all error messages
                container.querySelectorAll('[data-rule]').forEach((ele) => {
                    ele.setAttribute('class', 'dn');
                });
            } else {
                const passedRules = result.meta.passedRules;
                PASSWORD_RULES.forEach(r => {
                    const ele = container.querySelector(`[data-rule="${r.name}"]`);
                    ele.setAttribute('class', passedRules.indexOf(r.name) === -1 ? '' : 'dn');
                });
            }
        }
    });

    return () => {
        fv.destroy();
    };
});
</script>

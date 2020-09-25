<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Emails</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email[]" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email[]" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email[]" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email[]" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email[]" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
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
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
        fields: {
            'email[]': {
                validators: {
                    emailAddress: {
                        message: 'The value is not a valid email address'
                    },
                    callback: {
                        callback: (input) => {
                            const emailElements    = fv.getElements('email[]');
                            let notEmptyCount      = 0;
                            const obj              = {};
                            const duplicateRemoved = [];

                            for (const i in emailElements) {
                                const v = emailElements[i].value;
                                if (v !== '') {
                                    obj[v] = 0;
                                    notEmptyCount++;
                                }
                            }

                            for (const i in obj) {
                                duplicateRemoved.push(obj[i]);
                            }

                            if (duplicateRemoved.length === 0) {
                                return {
                                    valid: false,
                                    message: 'You must fill at least one email address',
                                };
                            } else if (duplicateRemoved.length !== notEmptyCount) {
                                return {
                                    valid: false,
                                    message: 'The email address must be unique',
                                };
                            }

                            fv.updateFieldStatus('email[]', 'Valid', 'callback');
                            return {
                                valid: true,
                            };
                        }
                    },
                }
            }
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/asking-fields-to-be-unique/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

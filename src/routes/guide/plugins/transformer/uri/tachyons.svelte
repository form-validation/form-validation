<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Website</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="website" />
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
import SubmitButton from 'formvalidation/plugins/SubmitButton';
import Tachyons from 'formvalidation/plugins/Tachyons';
import Transformer from 'formvalidation/plugins/Transformer';
import Trigger from 'formvalidation/plugins/Trigger';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            website: {
                validators: {
                    uri: {
                        message: 'The website address is not valid'
                    }
                }
            },
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
            transformer: new Transformer({
                website: {
                    uri: (field, element, validator) => {
                        // Get the field value
                        let value = element.value;

                        // Check if it doesn't start with http:// or https://
                        if (value && value.substr(0, 7) !== 'http://' && value.substr(0, 8) !== 'https://') {
                            // then prefix with http://
                            value = `http://${value}`;
                        }

                        // Return new value
                        return value;
                    },
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/transformer/uri/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

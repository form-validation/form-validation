<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Full name</div>
                <div class="fl w-50">
                    <input type="text" name="fullName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    <p class="lh-copy">Try to press the <span class="i">Space</span> bar to see</p>
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
import Transformer from 'formvalidation/plugins/Transformer';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            fullName: {
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
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
            transformer: new Transformer({
                fullName: {
                    notEmpty: (field, element, validator) => {
                        // Get the field value
                        const value = element.value;
    
                        // Remove the spaces from beginning and ending
                        return value.trim();
                    },
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/trimming-a-value/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

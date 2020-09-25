<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Full name</div>
                <div class="fl w-50">
                    <input type="text" name="fullName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Bio</div>
                <div class="fl w-50">
                    <textarea rows="5" name="bio" class="input-reset ba b--black-20 pa2 mb2 db w-100"></textarea>
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

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            fullName: {
                validators: {
                    stringLength: {
                        max: 50,
                        message: 'The full name must be less than 50 characters'
                    }
                }
            },
            bio: {
                validators: {
                    stringLength: {
                        max: 200,
                        message: 'The bio must be less than 200 characters'
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
            demoFrame: new DemoFrame({
                sender: '/guide/validators/string-length/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

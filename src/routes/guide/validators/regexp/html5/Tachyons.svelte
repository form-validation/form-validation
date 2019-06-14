<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Meeting time</div>
                <div class="fl w-50">
                    <input name="time" class="input-reset ba b--black-20 pa2 mb2 db w-100"
                        pattern="{_pattern}"
                        data-fv-regexp___message="The meeting time must be between 09:00 and 17:59" />
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import Declarative from 'formvalidation/dist/es6/plugins/Declarative';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

// Don't put this on the form directly, because Sapper will turn {1} to `1`
// and then we will have a different pattern
const _pattern = "^(09|1[0-7]{1}):[0-5]{1}[0-9]{1}$";

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        plugins: {
            declarative: new Declarative({
                html5Input: true,
            }),
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/regexp/html5/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

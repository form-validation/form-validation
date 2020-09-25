<TachyonsLayout>
    <ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js']} onLoaded={onLoaded}>
        <form id="demoForm" method="post">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-50 pa2">What's US independence day?</div>
                    <div class="fl w-50">
                        <input type="text" name="independenceDay" placeholder="MMM D" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>
                </div>
            </div>
        </form>
    </ResourceLoader>
</TachyonsLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Tachyons from 'formvalidation/plugins/Tachyons';

import sampleCode from './tachyons.programmatic';
import ResourceLoader from '../../../../components/ResourceLoader.svelte';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            independenceDay: {
                validators: {
                    callback: {
                        message: 'Wrong answer',
                        callback: (input) => {
                            const value = input.value;
                            const m = new moment(value, 'MMMM D', true);
                            return m.isValid() && m.month() === 6 && m.date() === 4;
                        }
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
                sender: '/guide/examples/supporting-custom-date-format/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    if (fv) {
        fv.destroy();
    }
});
</script>

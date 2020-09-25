<TachyonsLayout>
    <ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.1/moment.min.js']} onLoaded={onLoaded}>
        <form id="demoForm" method="post">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Enter a date</div>
                    <div class="fl w-50">
                        <input type="text" name="date" placeholder="YYYY/MM/DD" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
import ResourceLoader from '../../../../../components/ResourceLoader.svelte';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            date: {
                validators: {
                    date: {
                        message: 'The date is not valid',
                        format: 'YYYY/MM/DD'
                    },
                    callback: {
                        message: 'The date is not in the range',
                        callback: (input) => {
                            const value = input.value;
                            const m = new moment(value, 'YYYY/MM/DD', true);
                            return m.isValid() && m.isAfter('2000/01/01') && m.isBefore('2020/12/30');
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
                sender: '/guide/examples/validating-date-range/range-moment/tachyons',
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

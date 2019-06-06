<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Latitude</div>
                <div class="fl w-50">
                    <input type="text" name="latitude" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Longitude</div>
                <div class="fl w-50">
                    <input type="text" name="longitude" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/es6/core/Core';
import DemoFrame from 'formvalidation/es6/plugins/DemoFrame';
import Icon from 'formvalidation/es6/plugins/Icon';
import Trigger from 'formvalidation/es6/plugins/Trigger';
import Tachyons from 'formvalidation/es6/plugins/Tachyons';

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            latitude: {
                validators: {
                    between: {
                        min: -90,
                        max: 90,
                        message: 'The latitude must be between -90.0 and 90.0'
                    }
                }
            },
            longitude: {
                validators: {
                    between: {
                        min: -180,
                        max: 180,
                        message: 'The longitude must be between -180.0 and 180.0'
                    }
                }
            }
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
                sender: '/guide/validators/between/basic/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

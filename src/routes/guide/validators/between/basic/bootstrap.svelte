<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Latitude</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="latitude" />
            </div>
        </div>
    
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Longitude</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="longitude" />
            </div>
        </div>
    </form>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap from 'formvalidation/plugins/Bootstrap';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
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
            bootstrap: new Bootstrap(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/between/basic/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

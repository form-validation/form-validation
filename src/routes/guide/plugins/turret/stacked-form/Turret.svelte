<TurretLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="fv-stacked-form">
        <div class="field">
            <label>Product name</label>
            <input type="text" name="name" />
        </div>

        <div class="field">
            <label>Price ($)</label>
            <input type="text" name="price" />
        </div>
            
        <div class="field">
            <label>Size</label>
            <div>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="s" />
                    <span class="control-indicator"></span>
                    <span class="control-label">S</span>
                </label>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="m" />
                    <span class="control-indicator"></span>
                    <span class="control-label">M</span>
                </label>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="l" />
                    <span class="control-indicator"></span>
                    <span class="control-label">L</span>
                </label>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="xl" />
                    <span class="control-indicator"></span>
                    <span class="control-label">XL</span>
                </label>
            </div>
        </div>

        <div class="field">
            <label>Available in store</label>
            <div>
                <label class="control radio">
                    <input type="radio" name="availability" value="yes" />
                    <span class="control-indicator"></span>
                    <span class="control-label">Yes</span>
                </label>
                <label class="control radio">
                    <input type="radio" name="availability" value="no" />
                    <span class="control-indicator"></span>
                    <span class="control-label">No</span>
                </label>
            </div>
        </div>

        <div class="field">
            <button type="submit" class="button button-primary">Submit</button>
        </div>
    </form>
</TurretLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Turret from 'formvalidation/dist/es6/plugins/Turret';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Turret.programmatic';
import TurretLayout from '../../../../../components/demo/TurretLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The name is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The name must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The name can only consist of alphabetical, number and underscore'
                    }
                }
            },
            price: {
                validators: {
                    notEmpty: {
                        message: 'The price is required'
                    },
                    numeric: {
                        message: 'The price must be a number'
                    }
                }
            },
            'size[]': {
                validators: {
                    notEmpty: {
                        message: 'The size is required'
                    }
                }
            },
            availability: {
                validators: {
                    notEmpty: {
                        message: 'The availability option is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            turret: new Turret(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/turret/stacked-form/Turret',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

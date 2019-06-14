<MilligramLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="row">
            <div class="column column-25">
                <label>Product name</label>
            </div>
            <div class="column column-40">
                <input type="text" name="name" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Price ($)</label>
            </div>
            <div class="column column-40">
                <input type="text" name="price" />
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Size</label>
            </div>
            <div class="column column-40">
                <div>
                    <input type="checkbox" name="size[]" value="s" id="sizeS" />
                    <label class="label-inline" for="sizeS">S</label>
                </div>
                <div>
                    <input type="checkbox" name="size[]" value="m" id="sizeM" />
                    <label class="label-inline" for="sizeM">M</label>
                </div>
                <div>
                    <input type="checkbox" name="size[]" value="l" id="sizeL" />
                    <label class="label-inline" for="sizeL">L</label>
                </div>
                <div>
                    <input type="checkbox" name="size[]" value="xl" id="sizeXL" />
                    <label class="label-inline" for="sizeXL">XL</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="column column-25">
                <label>Available in store</label>
            </div>
            <div class="column column-40">
                <div>
                    <input type="radio" name="availability" value="yes" id="yesAvailable" />
                    <label class="label-inline" for="yesAvailable">Yes</label>
                </div>
                <div>
                    <input type="radio" name="availability" value="no" id="noAvailable" />
                    <label class="label-inline" for="noAvailable">No</label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="column column-25"></div>
            <div class="column column-75">
                <button type="submit" class="button-primary">Submit</button>
            </div>
        </div>
    </form>
</MilligramLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Milligram from 'formvalidation/dist/es6/plugins/Milligram';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './milligram.programmatic';
import MilligramLayout from '../../../../../components/demo/MilligramLayout.svelte';

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
            milligram: new Milligram(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/milligram/horizontal-form/milligram',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

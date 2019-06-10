<MiniLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" style="background: #FFF; border: none; margin: 0; padding: 0;">
        <div class="row">
            <div class="col-sm-3">
                <label>Product name</label>
            </div>
            <div class="col-sm-6">
                <input type="text" name="name" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Price ($)</label>
            </div>
            <div class="col-sm-4">
                <input type="text" name="price" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Size</label>
            </div>
            <div class="col-sm-9">
                <div><input type="checkbox" name="size[]" value="s" /> S</div>
                <div><input type="checkbox" name="size[]" value="m" /> M</div>
                <div><input type="checkbox" name="size[]" value="l" /> L</div>
                <div><input type="checkbox" name="size[]" value="xl" /> XL</div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-3">
                <label>Available in store</label>
            </div>
            <div class="col-sm-9">
                <div><input type="radio" name="availability" value="yes" /> Yes</div>
                <div><input type="radio" name="availability" value="no" /> No</div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-9 col-sm-offset-3">
                <button type="submit" class="primary">Submit</button>
            </div>
        </div>
    </form>
</MiniLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Mini from 'formvalidation/dist/es6/plugins/Mini';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Mini.programmatic';
import MiniLayout from '../../../../../components/demo/MiniLayout.svelte';

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
            mini: new Mini(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/mini/horizontal-form/Mini',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

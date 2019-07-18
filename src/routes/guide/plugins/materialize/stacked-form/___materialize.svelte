<MaterializeLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="row">
            <div class="input-field col s12">
                <input type="text" name="name" />
                <label>Product name</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <input type="text" name="price" />
                <label>Price ($)</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <label>Size</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="s" />
                        <span>S</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="m" />
                        <span>M</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="l" />
                        <span>L</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="xl" />
                        <span>XL</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <label>Available in store</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <div>
                    <label>
                        <input type="radio" name="availability" value="yes" />
                        <span>Yes</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="availability" value="no" />
                        <span>No</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <button type="submit" class="btn waves-effect waves-light">Submit</button>
            </div>
        </div>
    </form>
</MaterializeLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Materialize from 'formvalidation/dist/es6/plugins/Materialize';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './materialize.programmatic';
import MaterializeLayout from '../../../../../components/demo/MaterializeLayout.svelte';

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
            materialize: new Materialize(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/materialize/stacked-form/materialize',
                sampleCode: sampleCode,
            }),
        },
    });    
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

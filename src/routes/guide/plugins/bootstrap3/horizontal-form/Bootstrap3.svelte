<Bootstrap3Layout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="form-horizontal">
        <div class="form-group">
            <label class="col-xs-3 control-label">Product name</label>
            <div class="col-xs-4">
                <input type="text" class="form-control" name="name" />
            </div>
        </div>
    
        <div class="form-group">
            <label class="col-xs-3 control-label">Price</label>
            <div class="col-xs-5">
                <div class="input-group">
                    <div class="input-group-addon">$</div>
                    <input type="text" class="form-control" name="price" />
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <label class="col-xs-3 control-label">Size</label>
            <div class="col-xs-6">
                <div class="checkbox">
                    <label><input type="checkbox" name="size[]" value="s" /> S</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="size[]" value="m" /> M</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="size[]" value="l" /> L</label>
                </div>
                <div class="checkbox">
                    <label><input type="checkbox" name="size[]" value="xl" /> XL</label>
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <label class="col-xs-3 control-label">Available in store</label>
            <div class="col-xs-6">
                <div class="radio">
                    <label><input type="radio" name="availability" value="yes" /> Yes</label>
                </div>
                <div class="radio">
                    <label><input type="radio" name="availability" value="no" /> No</label>
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-xs-9 col-xs-offset-3">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Add product</button>
            </div>
        </div>
    </form>
</Bootstrap3Layout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Bootstrap3 from 'formvalidation/dist/es6/plugins/Bootstrap3';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Bootstrap3.programmatic';
import Bootstrap3Layout from '../../../../../components/demo/Bootstrap3Layout.svelte';

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
            bootstrap3: new Bootstrap3(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bootstrap3/horizontal-form/Bootstrap3',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

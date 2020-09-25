<Bootstrap3Layout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group">
            <label>Product name</label>
            <input type="text" class="form-control" name="name" />
        </div>
    
        <div class="form-group">
            <label>Price</label>
            <div class="input-group">
                <div class="input-group-addon">$</div>
                <input type="text" class="form-control" name="price" />
            </div>
        </div>
    
        <div class="form-group">
            <label>Size</label>
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
    
        <div class="form-group">
            <label>Available in store</label>
            <div class="radio">
                <label><input type="radio" name="availability" value="yes" /> Yes</label>
            </div>
            <div class="radio">
                <label><input type="radio" name="availability" value="no" /> No</label>
            </div>
        </div>
    
        <div class="form-group">
            <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
            <button type="submit" class="btn btn-primary">Add product</button>
        </div>
    </form>
</Bootstrap3Layout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap3 from 'formvalidation/plugins/Bootstrap3';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './bootstrap3.programmatic';
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
                sender: '/guide/plugins/bootstrap3/stacked-form/bootstrap3',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

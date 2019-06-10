<PureLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="pure-form pure-form-aligned">
        <div class="pure-control-group">
            <label>Product name</label>
            <input type="text" name="name" />
        </div>
    
        <div class="pure-control-group">
            <label>Price ($)</label>
            <input type="text" name="price" />
        </div>
    
        <div class="pure-control-group">
            <label>Size</label>
            <input type="checkbox" name="size[]" value="s" /> S<br />
            <label></label>
            <input type="checkbox" name="size[]" value="m" /> M<br />
            <label></label>
            <input type="checkbox" name="size[]" value="l" /> L<br />
            <label></label>
            <input type="checkbox" name="size[]" value="xl" /> XL
        </div>
    
        <div class="pure-control-group">
            <label>Available in store</label>
            <input type="radio" name="availability" value="yes" /> Yes<br />
            <label></label>
            <input type="radio" name="availability" value="no" /> No
        </div>
    
        <div class="pure-control-group">
            <label></label>
            <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
            <button type="submit" class="pure-button pure-button-primary">Add product</button>
        </div>
    </form>
</PureLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Pure from 'formvalidation/dist/es6/plugins/Pure';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Pure.programmatic';
import PureLayout from '../../../../../components/demo/PureLayout.svelte';

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
            pure: new Pure(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/pure/horizontal-form/Pure',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

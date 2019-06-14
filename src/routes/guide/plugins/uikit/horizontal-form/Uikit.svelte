<style>
:global(.uk-form-horizontal .uk-form-label) {
    width: 200px;
    margin-top: 7px;
    float: left;
}

:global(.uk-form-horizontal .uk-form-controls) {
    margin-left: 215px;
}
</style>

<UikitLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="uk-form-horizontal">
        <div class="uk-margin">
            <label class="uk-form-label">Product name</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-input" name="name" />
            </div>
        </div>
    
        <div class="uk-margin">
            <label class="uk-form-label">Price ($)</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-input" name="price" />
            </div>
        </div>
    
        <div class="uk-margin">
            <label class="uk-form-label">Size</label>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="s" /> S</label>
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="m" /> M</label>
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="l" /> L</label>
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="xl" /> XL</label>
            </div>
        </div>
    
        <div class="uk-margin">
            <label class="uk-form-label">Available in store</label>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input class="uk-radio" name="availability" type="radio" value="yes" /> Yes</label>
                <label><input class="uk-radio" name="availability" type="radio" value="no" /> No</label>
            </div>
        </div>
    
        <div class="uk-margin">
            <label class="uk-form-label"></label>
            <div class="uk-form-controls">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="uk-button uk-button-primary">Add product</button>
            </div>
        </div>
    </form>
</UikitLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Uikit from 'formvalidation/dist/es6/plugins/Uikit';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './uikit.programmatic';
import UikitLayout from '../../../../../components/demo/UikitLayout.svelte';

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
            uikit: new Uikit(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/uikit/horizontal-form/uikit',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

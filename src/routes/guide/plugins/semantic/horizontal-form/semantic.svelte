<style>
:global(.ui.form .fields) {
    margin: 0 -.5em 1em;
}
:global(.ui.form:not(.unstackable) .fields:not(.unstackable)>.four.wide.field) {
    width: 25%!important;
}
:global(.ui.form:not(.unstackable) .fields:not(.unstackable)>.six.wide.field) {
    width: 37.5%!important;
}
</style>

<SemanticLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST" class="ui form">
        <div class="fields">
            <label class="four wide field">Product name</label>
            <div class="six wide field">
                <!--
                When using feedback icon, the input must place inside 'ui input icon' element
                <div class="ui input icon">
                    <input type="text" />
                </div>
                See http://semantic-ui.com/elements/input.html#icon
                -->
                <div class="ui input icon">
                    <input type="text" name="name" />
                </div>
            </div>
        </div>
    
        <div class="fields">
            <label class="four wide field">Price</label>
            <div class="six wide field">
                <div class="ui labeled input icon">
                    <div class="ui label">$</div>
                    <input type="text" name="price" />
                </div>
            </div>
        </div>
    
        <div class="fields">
            <label class="four wide field">Size</label>
            <div class="six wide field">
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" name="size[]" value="s" />
                        <label>S</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" name="size[]" value="m" />
                        <label>M</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" name="size[]" value="l" />
                        <label>L</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui checkbox">
                        <input type="checkbox" name="size[]" value="xl" />
                        <label>XL</label>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="fields">
            <label class="four wide field">Available in store</label>
            <div class="six wide field">
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" name="availability" value="yes" />
                        <label>Yes</label>
                    </div>
                </div>
                <div class="field">
                    <div class="ui radio checkbox">
                        <input type="radio" name="availability" value="no" />
                        <label>No</label>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="fields">
            <label class="four wide field"></label>
            <div class="six wide field">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="ui primary button">Submit</button>
            </div>
        </div>
    </form>
</SemanticLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Semantic from 'formvalidation/dist/es6/plugins/Semantic';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './semantic.programmatic';
import SemanticLayout from '../../../../../components/demo/SemanticLayout.svelte';

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
            semantic: new Semantic(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'checkmark icon',
                invalid: 'remove icon',
                validating: 'refresh icon'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/semantic/horizontal-form/semantic',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

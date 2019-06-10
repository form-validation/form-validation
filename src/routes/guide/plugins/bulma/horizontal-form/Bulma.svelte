<style>
:global(.field.is-horizontal) {
    display: flex;
}
:global(.field-label) {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 1.5rem;
    text-align: right;
}
:global(.field-body) {
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;
}
</style>

<BulmaLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Product name</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input type="text" class="input" name="name" />
                    </div>
                </div>
            </div>
        </div>
    
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Price</label>
            </div>
            <div class="field-body">
                <div class="field has-addons">
                    <div class="control">
                        <span class="button is-static">$</span>
                    </div>
                    <div class="control">
                        <input type="text" class="input" name="price" />
                    </div>
                </div>
            </div>
        </div>
    
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Size</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="checkbox"><input name="size[]" type="checkbox" value="s" /> S</label>
                        <label class="checkbox"><input name="size[]" type="checkbox" value="m" /> M</label>
                        <label class="checkbox"><input name="size[]" type="checkbox" value="l" /> L</label>
                        <label class="checkbox"><input name="size[]" type="checkbox" value="xl" /> XL</label>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Available in store</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <label class="radio"><input name="availability" type="radio" value="yes" /> Yes</label>
                        <label class="radio"><input name="availability" type="radio" value="no" /> No</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="field is-horizontal">
            <div class="field-label"></div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <button class="button is-primary" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </form>
</BulmaLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Bulma from 'formvalidation/dist/es6/plugins/Bulma';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Bulma.programmatic';
import BulmaLayout from '../../../../../components/demo/BulmaLayout.svelte';

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
            bulma: new Bulma(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bulma/horizontal-form/Bulma',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

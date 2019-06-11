<style>
:global(.material-icons.valid-icon:after) {
    content: 'check';
    font-size: 24px;
}
:global(.material-icons.invalid-icon:after) {
    content: 'clear';
    font-size: 24px;
}
:global(.material-icons.validating-icon:after) {
    content: 'graphic_eq';
    font-size: 24px;
}
</style>

<TachyonsLayout>
    <ResourceLoader urls={['https://fonts.googleapis.com/icon?family=Material+Icons']} onLoaded={onLoaded}>
        <form id="demoForm" method="POST">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Product name</div>
                    <div class="fl w-75">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
                    </div>
                </div>
            </div>
        
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Price ($)</div>
                    <div class="fl w-75">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="price" />
                    </div>
                </div>
            </div>
        
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Size</div>
                    <div class="fl w-75">
                        <div class="mb2">
                            <label><input type="checkbox" name="size[]" value="s" /> S</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="size[]" value="m" /> M</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="size[]" value="l" /> L</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="size[]" value="xl" /> XL</label>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Available in store</div>
                    <div class="fl w-75">
                        <div class="mb2">
                            <label><input type="radio" name="availability" value="yes" /> Yes</label>
                        </div>
                        <div class="mb2">
                            <label><input type="radio" name="availability" value="no" /> No</label>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2"></div>
                    <div class="fl w-50">
                        <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                        <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Add product</button>
                    </div>
                </div>
            </div>
        </form>
    </ResourceLoader>
</TachyonsLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';

import sampleCode from './Tachyons.programmatic';
import ResourceLoader from '../../../../../components/ResourceLoader.svelte';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

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
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'material-icons valid-icon',
                invalid: 'material-icons invalid-icon',
                validating: 'material-icons validating-icon',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/using-material-design-icons/material-design/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

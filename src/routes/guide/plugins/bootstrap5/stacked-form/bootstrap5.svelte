<Bootstrap5Layout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="mb-3">
            <label class="form-label">Product name</label>
            <input type="text" class="form-control" name="name" />
        </div>

        <div class="mb-3">
            <label class="form-label">Price</label>
            <div class="input-group">
                <span class="input-group-text">$</span>
                <input type="text" class="form-control" name="price" />
            </div>
        </div>

        <div class="mb-3">
            <label class="form-label">Size</label>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="s" />
                <label class="form-check-label">S</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="m" />
                <label class="form-check-label">M</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="l" />
                <label class="form-check-label">L</label>
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" name="size[]" value="xl" />
                <label class="form-check-label">XL</label>
            </div>
        </div>

        <div class="mb-3">
            <label class="form-label">Available in store</label>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="availability" value="yes" />
                <label class="form-check-label">Yes</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="availability" value="no" />
                <label class="form-check-label">No</label>
            </div>
        </div>

        <div class="mb-3">
            <button type="submit" class="btn btn-primary">Add product</button>
        </div>
    </form>
</Bootstrap5Layout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap5 from 'formvalidation/plugins/Bootstrap5';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './bootstrap5.programmatic';
import Bootstrap5Layout from '../../../../../components/demo/Bootstrap5Layout.svelte';

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
            bootstrap5: new Bootstrap5({
                rowSelector: '.mb-3',
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/bootstrap5/stacked-form/bootstrap5',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

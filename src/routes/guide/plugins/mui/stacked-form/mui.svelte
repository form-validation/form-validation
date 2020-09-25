<MuiLayout onLoaded={onLoaded}>
    <div class="mui-container-fluid">
        <form id="demoForm" method="POST">
            <div class="mui-row">
                <div class="mui-col-md-12 mui-textfield">
                    <input type="text" name="name" />
                    <label>Product name</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12 mui-textfield">
                    <input type="text" name="price" />
                    <label>Price ($)</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <label>Size</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <div class="mui-checkbox">
                        <label>
                            <input type="checkbox" name="size[]" value="s" /> S
                        </label>
                    </div>
                    <div class="mui-checkbox">
                        <label>
                            <input type="checkbox" name="size[]" value="m" /> M
                        </label>
                    </div>
                    <div class="mui-checkbox">
                        <label>
                            <input type="checkbox" name="size[]" value="l" /> L
                        </label>
                    </div>
                    <div class="mui-checkbox">
                        <label>
                            <input type="checkbox" name="size[]" value="xl" /> XL
                        </label>
                    </div>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <label>Available in store</label>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <div class="mui-radio">
                        <label>
                            <input type="radio" name="availability" value="yes" /> Yes
                        </label>
                    </div>
                    <div class="mui-radio">
                        <label>
                            <input type="radio" name="availability" value="no" /> No
                        </label>
                    </div>
                </div>
            </div>

            <div class="mui-row">
                <div class="mui-col-md-12">
                    <button type="submit" class="mui-btn mui-btn--primary">Submit</button>
                </div>
            </div>
        </form>
    </div>
</MuiLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Mui from 'formvalidation/plugins/Mui';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './mui.programmatic';
import MuiLayout from '../../../../../components/demo/MuiLayout.svelte';

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
            mui: new Mui(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/mui/stacked-form/mui',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

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
                <label class="label">Full name</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input type="text" class="input" name="firstName" placeholder="First name" />
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input type="text" class="input" name="lastName" placeholder="Last name" />
                    </div>
                </div>
            </div>
        </div>
    
        <div class="field is-horizontal">
            <div class="field-label">
                <label class="label">Address</label>
            </div>
            <div class="field-body">
                <div class="field">
                    <div class="control">
                        <input type="text" class="input" name="city" placeholder="City" />
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input type="text" class="input" name="state" placeholder="State" />
                    </div>
                </div>
                <div class="field">
                    <div class="control">
                        <input type="text" class="input" name="zipcode" placeholder="Zipcode" />
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

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bulma from 'formvalidation/plugins/Bulma';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './bulma.programmatic';
import BulmaLayout from '../../../../../components/demo/BulmaLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'The first name can only consist of alphabetical and space'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z\s]+$/,
                        message: 'The last name can only consist of alphabetical and space'
                    }
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: 'The city is required'
                    }
                }
            },
            state: {
                validators: {
                    notEmpty: {
                        message: 'The state is required'
                    }
                }
            },
            zipcode: {
                validators: {
                    notEmpty: {
                        message: 'The zipcode is required'
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
                sender: '/guide/plugins/bulma/multiple-fields/bulma',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

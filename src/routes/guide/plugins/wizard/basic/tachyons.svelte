<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="js-step">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Quantity</div>
                    <div class="fl w-40">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="quantity" />
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Size</div>
                    <div class="fl w-50">
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
                    <div class="fl w-25 pa2">Color</div>
                    <div class="fl w-50">
                        <div class="mb2">
                            <label><input type="checkbox" name="color[]" value="white" /> White</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="color[]" value="black" /> Black</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="color[]" value="red" /> Red</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="color[]" value="yellow" /> Yellow</label>
                        </div>
                        <div class="mb2">
                            <label><input type="checkbox" name="color[]" value="green" /> Green</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="js-step">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Full name</div>
                    <div class="fl w-30 mr2">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="firstName" placeholder="First name" />
                    </div>
                    <div class="fl w-30">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="lastName" placeholder="Last name" />
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Phone number</div>
                    <div class="fl w-40">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="cellPhone" />
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Street</div>
                    <div class="fl w-75">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="street" />
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">City</div>
                    <div class="fl w-40">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="city" />
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Zipcode</div>
                    <div class="fl w-40">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="zipCode" />
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="button" class="ba b--black-20 bg-blue white ph3 pv2 br2" id="prevButton">Prev</button>
                    <button type="button" class="ba b--black-20 bg-blue white ph3 pv2 br2" id="nextButton">Next</button>
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';
import Wizard from 'formvalidation/dist/es6/plugins/Wizard';

import phone from 'formvalidation/dist/es6/validators/phone';
import zipCode from 'formvalidation/dist/es6/validators/zipCode';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            quantity: {
                validators: {
                    notEmpty: {
                        message: 'The quantity is required'
                    },
                    greaterThan: {
                        min: 1,
                        message: 'The quantity must be greater than 0'
                    },
                    integer: {
                        message: 'The quantity must be a number'
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
            'color[]': {
                validators: {
                    notEmpty: {
                        message: 'The color is required'
                    }
                }
            },
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
            cellPhone: {
                validators: {
                    notEmpty: {
                        message: 'The phone number is required'
                    },
                    phone: {
                        country: 'US',
                        message: 'The value is not valid US phone number'
                    }
                }
            },
            street: {
                validators: {
                    notEmpty: {
                        message: 'The street is required'
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
            zipCode: {
                validators: {
                    notEmpty: {
                        message: 'The zip code is required'
                    },
                    zipCode: {
                        country: 'US',
                        message: 'The value is not valid US zip code'
                    },
                }
            }
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            wizard: new Wizard({
                stepSelector: '.js-step',
                prevButton: '#prevButton',
                nextButton: '#nextButton',
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/wizard/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('plugins.wizard.step.active', (e) => {
        document.getElementById('nextButton').innerHTML = (e.step === e.numSteps - 1) ? 'Purchase' : 'Next';
    })
    .on('plugins.wizard.valid', (e) => {
        document.getElementById('nextButton').innerHTML = 'Done';
    })
    .registerValidator('phone', phone)
    .registerValidator('zipCode', zipCode);

    return () => {
        fv.destroy();
    };
});
</script>

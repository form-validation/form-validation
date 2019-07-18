export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
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

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<!-- 
You have to include the full version of FormValidation which contains all validators
including the phone and zipCode validators
-->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Wizard.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation
        .formValidation(
            document.getElementById('demoForm'),
            {
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
                    },
                },
                plugins: {
                    trigger: new FormValidation.plugins.Trigger(),
                    tachyons: new FormValidation.plugins.Tachyons(),
                    wizard: new FormValidation.plugins.Wizard({
                        stepSelector: '.js-step',
                        prevButton: '#prevButton',
                        nextButton: '#nextButton',
                    }),
                    submitButton: new FormValidation.plugins.SubmitButton(),
                    icon: new FormValidation.plugins.Icon({
                        valid: 'fa fa-check',
                        invalid: 'fa fa-times',
                        validating: 'fa fa-refresh',
                    }),
                },
            }
        )
        // Update the label of Next button
        .on('plugins.wizard.step.active', function(e) {
            document.getElementById('nextButton').innerHTML = (e.step === e.numSteps - 1) ? 'Purchase' : 'Next';
        })
        .on('plugins.wizard.valid', function(e) {
            document.getElementById('nextButton').innerHTML = 'Done';
        });
});
</script-tag>
</body>
</html>
`;
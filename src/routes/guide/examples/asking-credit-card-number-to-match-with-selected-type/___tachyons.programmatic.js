export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Credit card type</div>
                <div class="fl w-50">
                    <select name="cardType" class="input-reset ba b--black-20 pa2 mb2 db w-100">
                        <option value="">Select a type</option>
                        <option value="Ae">American Express</option>
                        <option value="Master">Master</option>
                        <option value="Visa">Visa</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Credit card number</div>
                <div class="fl w-50">
                    <input type="text" name="cc" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                cardType: {
                    validators: {
                        notEmpty: {
                            message: 'The type is required'
                        }
                    }
                },
                cc: {
                    validators: {
                        notEmpty: {
                            message: 'The credit card number is required'
                        },
                        callback: {
                            message: 'The credit card number is not valid',
                            callback: function(input) {
                                const value = input.value;
                                if (value === '') {
                                    return true;
                                }    
    
                                // Check if the input is valid credit card number
                                const result = FormValidation.validators.creditCard().validate({
                                    value: value,
                                });
                                if (!result.valid) {
                                    return false;
                                } else {
                                    let currentType = null;
                                    // result.meta.type can be one of
                                    // AMERICAN_EXPRESS, DINERS_CLUB, DINERS_CLUB_US, DISCOVER, JCB, LASER,
                                    // MAESTRO, MASTERCARD, SOLO, UNIONPAY, VISA
                                    switch (result.meta.type) {
                                        case 'AMERICAN_EXPRESS':
                                            // Ae is the value of American Express card in the select box
                                            currentType = 'Ae';
                                            break;
    
                                        case 'MASTERCARD':
                                        case 'DINERS_CLUB_US':
                                            // Master is the value of Master card in the select box
                                            currentType = 'Master';
                                            break;
    
                                        case 'VISA':
                                            // Visa is the value of Visa card in the select box
                                            currentType = 'Visa';
                                            break;
    
                                        default:
                                            currentType = null;
                                            break;
                                    }
    
                                    // Get the selected type
                                    const selectedType = form.querySelector('[name="cardType"]').value;
                                    if (currentType == null || currentType !== selectedType) {
                                        return {
                                            valid: false,
                                            message: 'The credit card number does not match with selected type'
                                        }
                                    }
                                }
    
                                return true;
                            }
                        },
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );

    form.querySelector('[name="cardType"]').addEventListener('change', function() {
        // Whenever user changes the card type,
        // we need to revalidate the credit card number
        fv.revalidateField('cc');
    });
});
</script-tag>
</body>
</html>
`;
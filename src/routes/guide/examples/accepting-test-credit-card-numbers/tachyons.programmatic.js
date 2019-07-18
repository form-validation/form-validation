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
<script-tag src="/vendors/formvalidation/dist/js/plugins/Transformer.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    // List of test credit card numbers that you want it to be passed
    // although they can be invalid one
    const TEST_CARD_NUMBERS = ['3333222233332222', '30030008444444'];
    
    // We will transform those test card numbers into a valid one as below
    const VALID_CARD_NUMBER = '4444111144441111';

    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                cc: {
                    validators: {
                        creditCard: {
                            message: 'The credit card number is not valid'
                        },
                    }
                }
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
                transformer: new FormValidation.plugins.Transformer({
                    cc: {
                        creditCard: function(field, element, validator) {
                            // Get the field value
                            const value = element.value;
        
                            // Check if it's one of test card numbers
                            if (value !== '' && TEST_CARD_NUMBERS.indexOf(value) !== -1) {
                                // then turn it to be a valid one defined by VALID_CARD_NUMBER
                                return VALID_CARD_NUMBER;
                            } else {
                                // Otherwise, just return the initial value
                                return value;
                            }
                        }
                    }
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;
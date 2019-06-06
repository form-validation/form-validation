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
                <div class="fl w-25 pa2">Product name</div>
                <div class="fl w-40">
                    <input type="text" name="productName" value="T-Shirt" readonly="readonly" class="input-reset ba b--black-20 pa2 mb2 db w-100 bg-black-10" />
                </div>
                <div class="fl w-20 pa2">(readonly)</div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Price ($)</div>
                <div class="fl w-40">
                    <input type="text" name="price" value="25" readonly="readonly" class="input-reset ba b--black-20 pa2 mb2 db w-100 bg-black-10" />
                </div>
                <div class="fl w-20 pa2">(readonly)</div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Your full name</div>
                <div class="fl w-50 mr2">
                    <input type="text" name="fullName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Credit card number</div>
                <div class="fl w-40 mr2">
                    <input type="text" data-stripe="number" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Expiration</div>
                <div class="fl w-20">
                    <input type="text" placeholder="Month" data-stripe="exp-month" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
                <div class="fl w-20">
                    <input type="text" placeholder="Year" data-stripe="exp-year" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">CVV</div>
                <div class="fl w-20">
                    <input type="text" data-stripe="cvc" autocomplete="off" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Purchase</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const currentYear = new Date().getFullYear();
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                fullName: {
                    validators: {
                        notEmpty: {
                            message: 'The full name is required'
                        }
                    }
                },
                ccNumber: {
                    selector: '[data-stripe="number"]',
                    validators: {
                        notEmpty: {
                            message: 'The credit card number is required'
                        },
                        creditCard: {
                            message: 'The credit card number is not valid'
                        },
                    },
                },
                expMonth: {
                    selector: '[data-stripe="exp-month"]',
                    validators: {
                        notEmpty: {
                            message: 'The expiration month is required'
                        },
                        digits: {
                            message: 'The expiration month can contain digits only'
                        },
                        between: {
                            min: 1,
                            max: 12,
                            message: 'The expiration month must be between 1 and 12',
                        },
                    },
                },
                expYear: {
                    selector: '[data-stripe="exp-year"]',
                    validators: {
                        notEmpty: {
                            message: 'The expiration year is required'
                        },
                        digits: {
                            message: 'The expiration year can contain digits only'
                        },
                        between: {
                            min: currentYear,
                            // A simple rule to limit the range of expiration year
                            max: currentYear + 20,
                            message: 'The expiration year is not valid',
                        },
                    },
                },
                cvvNumber: {
                    selector: '[data-stripe="cvc"]',
                    validators: {
                        notEmpty: {
                            message: 'The CVV number is required'
                        },
                        stringLength: {
                            min: 3,
                            max: 3,
                            message: 'The CVV number is not valid',
                        },
                    },
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;
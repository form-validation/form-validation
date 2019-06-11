export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Expiration</div>
                <div class="fl w-30 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder="Month" name="expMonth" />
                </div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" placeholder="Year" name="expYear" />
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
                expMonth: {
                    validators: {
                        notEmpty: {
                            message: 'The expiration month is required'
                        },
                        digits: {
                            message: 'The expiration month can contain digits only'
                        },
                        callback: {
                            message: 'Expired',
                            callback: function(input) {
                                const value = parseInt(input.value, 10);
                                const year  = form.querySelector('[name="expYear"]').value;
                                const currentMonth = new Date().getMonth() + 1;
                                const currentYear  = new Date().getFullYear();
                                if (value < 0 || value > 12) {
                                    return false;
                                }
                                if (year === '') {
                                    return true;
                                }
                                const expYear = parseInt(year, 10);
                                if (expYear > currentYear || (expYear === currentYear && value >= currentMonth)) {
                                    fv.updateFieldStatus('expYear', 'Valid');
                                    return true;
                                } else {
                                    return false;
                                }
                            },
                        },
                    },
                },
                expYear: {
                    validators: {
                        notEmpty: {
                            message: 'The expiration year is required'
                        },
                        digits: {
                            message: 'The expiration year can contain digits only'
                        },
                        callback: {
                            message: 'Expired',
                            callback: function(input) {
                                const value = parseInt(input.value, 10);
                                const month = form.querySelector('[name="expMonth"]').value;
                                const currentMonth = new Date().getMonth() + 1;
                                const currentYear  = new Date().getFullYear();
                                if (value < currentYear || value > currentYear + 10) {
                                    return false;
                                }
                                if (month == '') {
                                    return false;
                                }
                                const expMonth = parseInt(month, 10);
                                if (value > currentYear || (value == currentYear && expMonth >= currentMonth)) {
                                    fv.updateFieldStatus('expMonth', 'Valid');
                                    return true;
                                } else {
                                    return false;
                                }
                            },
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
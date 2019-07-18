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
                <div class="fl w-25 pa2">Country</div>
                <div class="fl w-50">
                    <select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="country">
                        <option value="">Choose a country</option>
                        <option value="en_US">United States</option>
                        <option value="fr_FR">France</option>
                        <option value="it_IT">Italy</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Type a number</div>
                <div class="fl w-50">
                    <input type="text" name="number" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
                number: {
                    validators: {
                        integer: {
                            message: 'The value is not a valid integer number',
                            // The default separators
                            thousandsSeparator: '',
                            decimalSeparator: '.'
                        }
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

    form.querySelector('[name="country"]').addEventListener('change', function(e) {
        let thousandsSeparator = '';
        let decimalSeparator = '.';

        switch (e.target.value) {
            case 'en_US':
                thousandsSeparator = ',';
                decimalSeparator = '.';
                break;

            case 'fr_FR':
                thousandsSeparator = ' ';
                decimalSeparator = ',';
                break;

            case 'it_IT':
                thousandsSeparator = '.';
                decimalSeparator = ',';
                break;

            case '':
            default:
                thousandsSeparator = '';
                decimalSeparator   = '.';
                break;
        }

        fv
            // Update the options
            .updateValidatorOption('number', 'integer', 'thousandsSeparator', thousandsSeparator)
            .updateValidatorOption('number', 'integer', 'decimalSeparator', decimalSeparator)
            // and revalidate the number
            .revalidateField('number');
    });
});
</script-tag>
</body>
</html>
`;
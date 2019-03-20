export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Country</label>
            <div class="col-sm-5">
                <select class="form-control" name="country">
                    <option value="">Choose a country</option>
                    <option value="en_US">United States</option>
                    <option value="fr_FR">France</option>
                    <option value="it_IT">Italy</option>
                </select>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Type a number</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="number" />
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                number: {
                    validators: {
                        numeric: {
                            message: 'The value is not a number',
                            // The default separators
                            thousandsSeparator: '',
                            decimalSeparator: '.'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap(),
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
            .updateValidatorOption('number', 'numeric', 'thousandsSeparator', thousandsSeparator)
            .updateValidatorOption('number', 'numeric', 'decimalSeparator', decimalSeparator)
            // and revalidate the number
            .revalidateField('number');
    });
});
</script-tag>
</body>
</html>
`;
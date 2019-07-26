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
                <div class="fl w-25 pa2">ISBN type</div>
                <div class="fl w-50">
                    <select name="isbnType">
                        <option value="isbn10">ISBN 10</option>
                        <option value="isbn13">ISBN 13</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">ISBN</div>
                <div class="fl w-50">
                    <input type="text" name="isbn" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
    const ISBN10_REGEXP = "^[0-9]{9}[0-9X]$";
    const ISBN13_REGEXP = "^(978|979)[0-9]{9}[0-9X]$";

    const demoForm = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(demoForm, {
        fields: {
            isbnType: {
                validators: {
                    notEmpty: {
                        message: 'The ISBN type is required'
                    }
                }
            },
            isbn: {
                validators: {
                    notEmpty: {
                        message: 'The ISBN is required'
                    },
                    regexp: {
                        regexp: ISBN10_REGEXP,
                        message: 'The input is not a valid ISBN',
                    }
                },
            },
        },
        plugins: {
            submitButton: new FormValidation.plugins.SubmitButton(),
            trigger: new FormValidation.plugins.Trigger(),
            tachyons: new FormValidation.plugins.Tachyons(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        },
    });

    demoForm.querySelector('[name="isbnType"]').addEventListener('change', function(e) {
        const isbnType = e.target.value;
        if (isbnType === '') {
            return;
        }

        let regexp, message;
        switch (isbnType) {
            case 'isbn13':
                regexp  = ISBN13_REGEXP;
                message = 'The input is not a valid ISBN 13';
                break;

            case 'isbn10':
            default:
                regexp  = ISBN10_REGEXP;
                message = 'The input is not a valid ISBN 10';
                break;
        }

        fv
            // Update options
            .updateValidatorOption('isbn', 'regexp', 'regexp', regexp)            
            // Update message
            .updateValidatorOption('isbn', 'regexp', 'message', message)
            // You might need to revalidate field
            .revalidateField('isbn');
    });
});
</script-tag>
</body>
</html>
`;
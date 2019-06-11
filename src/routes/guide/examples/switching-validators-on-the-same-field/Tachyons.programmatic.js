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
                <div class="fl w-50 pa2">Brazilian ID or VAT number</div>
                <div class="fl w-40 mr2">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="yourId" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-50 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<!-- 
You have to include the full version of FormValidation which contains all validators
including the vat validator
-->    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm'); 
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                yourId: {
                    validators: {
                        notEmpty: {
                            message: 'The ID is required and cannot be empty'
                        },
                        id: {
                            // The id validator is enabled by default
                            enabled: true,
                            country: 'BR',
                            message: 'Please enter a valid Brazilian ID number',
                        },
                        vat: {
                            // The vat validator is disabled initially
                            enabled: false,
                            country: 'BR',
                            message: 'Please enter a valid Brazilian VAT number',
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

    form.querySelector('[name="yourId"]').addEventListener('keyup', function(e) {
        switch (e.target.value.length) {
            // User is trying to put a VAT number
            case 14:
                fv
                    // Disable the id validator
                    .disableValidator('yourId', 'id')
                    // Enable the vat one
                    .enableValidator('yourId', 'vat')
                    // Revalidate field
                    .revalidateField('yourId');
                break;

            // User is trying to put an ID number
            case 11:
            default:
                fv
                    .enableValidator('yourId', 'id')
                    .disableValidator('yourId', 'vat')
                    .revalidateField('yourId');
                break;
        }
    });
});
</script-tag>
</body>
</html>
`;
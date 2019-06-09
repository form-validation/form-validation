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
                <div class="fl w-25 pa2">Password</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="password" />
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
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                password: {
                    validators: {
                        required: {
                            message: 'The password is required'
                        },
                        checkStrength: {
                            message: 'It must be more than 8 characters long',
                            callback: function(input) {
                                return input.value.length >= 8;
                            },
                        },
                        checkUppercase: {
                            message: 'It must contain at least one uppercase character',
                            callback: function(input) {
                                return input.value != input.value.toLowerCase();
                            },
                        },
                        checkLowercase: {
                            message: 'It must contain at least one lowercase character',
                            callback: function(input) {
                                return input.value != input.value.toUpperCase();
                            },
                        },
                        checkDigit: {
                            message: 'It must contain at least one digit',
                            callback: function(input) {
                                return input.value.search(/[0-9]/) >= 0;
                            },
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
                    validating: 'fa fa-refresh',
                }),
                alias: new FormValidation.plugins.Alias({
                    required: 'notEmpty',
                    checkStrength: 'callback',
                    checkUppercase: 'callback',
                    checkLowercase: 'callback',
                    checkDigit: 'callback',
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;
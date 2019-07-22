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
                    <input type="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="pwd" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50 ba b--black-10 h1" style="height: 0.25rem">
                    <div id="passwordMeter" class="h-100"></div>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    

<!-- Include zxcvbn library -->
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script-tag>

<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/PasswordStrength.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const passwordMeter = document.getElementById('passwordMeter');

    const randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                pwd: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        },
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh',
                }),
                passwordStrength: new FormValidation.plugins.PasswordStrength({
                    field: 'pwd',
                    message: 'The password is weak',
                    minimalScore: 3,
                    onValidated: function(valid, message, score) {
                        switch (score) {
                            case 0:
                                passwordMeter.style.width = randomNumber(1, 20) + '%';
                                passwordMeter.style.backgroundColor = '#ff4136';
                            case 1:
                                passwordMeter.style.width = randomNumber(20, 40) + '%';
                                passwordMeter.style.backgroundColor = '#ff4136';
                                break;
                            case 2:
                                passwordMeter.style.width = randomNumber(40, 60) + '%';
                                passwordMeter.style.backgroundColor = '#ff4136';
                                break;
                            case 3:
                                passwordMeter.style.width = randomNumber(60, 80) + '%';
                                passwordMeter.style.backgroundColor = '#ffb700';
                                break;
                            case 4:
                                passwordMeter.style.width = '100%';
                                passwordMeter.style.backgroundColor = '#19a974';
                                break;
                            default:
                                break;
                        }
                    },
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;
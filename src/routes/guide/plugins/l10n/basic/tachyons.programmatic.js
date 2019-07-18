export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <div class="mb2 pa2">
        Choose language
        <button type="button" class="ba b--black-20 ph3 pv2 br2 setLocaleButton" data-locale="en_US">English</button>
        <button type="button" class="ba b--black-20 ph3 pv2 br2 setLocaleButton" data-locale="vi_VN">Tiếng Việt</button>
    </div>

    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Username</div>
                <div class="fl w-50">
                    <input type="text" name="username" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Email</div>
                <div class="fl w-50">
                    <input type="text" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Password</div>
                <div class="fl w-50">
                    <input type="password" name="password" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Gender</div>
                <div class="fl w-50">
                    <label for="genderMale" class="lh-copy mr4"><input class="mr2" type="radio" name="gender" id="genderMale" value="male" /> Male</label>
                    <label for="genderFemale" class="lh-copy mr4"><input class="mr2" type="radio" name="gender" id="genderFemale" value="female" /> Female</label>
                    <label for="genderOther" class="lh-copy"><input class="mr2" type="radio" name="gender" id="genderOther" value="other" /> Other</label>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Date of birth</div>
                <div class="fl w-50">
                    <input type="text" name="birthday" placeholder="YYYY/MM/DD" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
<script-tag src="/vendors/formvalidation/dist/js/plugins/L10n.min.js"></script-tag>

<script-tag src="/vendors/formvalidation/dist/js/locales/en_US.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/locales/vi_VN.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            // Set the default locale
            locale: 'en_US',
            localization: FormValidation.locales.en_US,
            fields: {
                // Since the messages of notEmpty, stringLength, regexp are not set here,
                // they will be taken from language package
                username: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9]+$/
                        },
                    }
                },
                // Messages are taken from language package
                email: {
                    validators: {
                        notEmpty: {
                        },
                        emailAddress: {
                        }
                    }
                },
                // Messages of notEmpty and stringLength validators
                // are taken from language package
                password: {
                    validators: {
                        notEmpty: {
                        },
                        stringLength: {
                            min: 8
                        },
                        different: {
                            compare: function() {
                                return form.querySelector('[name="username"]').value;
                            },
                        }
                    }
                },
                birthday: {
                    validators: {
                        notEmpty: {
                        },
                        date: {
                            format: 'YYYY/MM/DD'
                        }
                    }
                },
                gender: {
                    validators: {
                        notEmpty: {
                        }
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
                    validating: 'fa fa-refresh',
                }),
                l10n: new FormValidation.plugins.L10n({
                    username: {
                        stringLength: {
                            // Method 2: Use a literal object to define messages
                            en_US: 'The username must be between %s and %s characters long',
                            vi_VN: 'Tên đăng nhập phải có ít nhất %s và nhiều nhất %s ký tự',
                        },
                    },
                    password: {
                        // Method 3: Use a callback to determine message in particular language
                        different: function(field, validator) {
                            return {
                                en_US: 'The password can not be same as username',
                                vi_VN: 'Mật khẩu phải khác tên đăng nhập',
                            };
                        },
                    },
                }),
            },
        }
    );

    // Switch locale
    const localeButtons = Array.from(document.querySelectorAll('.setLocaleButton'));
    localeButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const locale = btn.getAttribute('data-locale');
            fv.setLocale(locale, FormValidation.locales[locale])
              .resetForm();
        });
    });
});
</script-tag>
</body>
</html>
`;
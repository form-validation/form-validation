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
                <div class="fl w-25 pa2">Password</div>
                <div class="fl w-50">
                    <div>
                        <input type="password" name="pwd" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    </div>

                    <!-- The message container -->
                    <ul id="messageContainer" class="red pa0 ma3"></ul>
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
    // The rules that a secure password need to follow
    const PASSWORD_RULES = [
        {
            name: 'length',
            message: 'It must be more than 8 characters long',
            check: function(value) {
                return value.length >= 8;
            }
        },
        {
            name: 'upperCase',
            message: 'It must contain at least one upper case character',
            check: function(value) {
                return value !== value.toLowerCase();
            }
        },
        {
            name: 'lowerCase',
            message: 'It must contain at least one lower case character',
            check: function(value) {
                return value !== value.toUpperCase();
            }
        },
        {
            name: 'digit',
            message: 'It must contain at least one digit',
            check: function(value) {
                return value.search(/[0-9]/) >= 0;
            }
        }
    ];

    // Populate the message to given container
    // The container will contain the message for each rule as following
    //  <ul id="messageContainer">
    //      <li data-rule="rule name">... message ...</li>
    //  </ul>
    for (const rule in PASSWORD_RULES) {
        const ele = document.createElement('li');
        ele.setAttribute('data-rule', rule.name);
        ele.innerHTML = rule.message;

        document.getElementById('messageContainer').appendChild(ele);
    }

    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                pwd: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required and cannot be empty'
                        },
                        callback: {
                            message: 'The password is not valid',
                            callback: function(input) {
                                const value = input.value;
                                if (value === '') {
                                    return true;
                                }

                                const passedRules = [];

                                // Loop over the rules
                                for (let i = 0; i < PASSWORD_RULES.length; i++) {
                                    if (PASSWORD_RULES[i].check(value)) {
                                        passedRules.push(PASSWORD_RULES[i].name);
                                    }
                                }

                                if (passedRules.length < PASSWORD_RULES.length) {
                                    return {
                                        valid: false,
                                        meta: {
                                            passedRules: passedRules,
                                        },
                                    }
                                }

                                return true;
                            }
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
                    validating: 'fa fa-refresh'
                }),
            },
        }
    )
    .on('plugins.message.displayed', function(e) {
        if (e.field === 'pwd' && e.validator === 'callback') {
            // Hide the default message
            FormValidation.utils.classSet(e.messageElement, {
                'dn': true,
            });
        }
    })
    .on('core.validator.validated', function(e) {
        if (e.field === 'pwd' && e.validator === 'callback') {
            const result = e.result;
            const container = document.getElementById('messageContainer');

            if (result.valid) {
                // The password passes all checks
                // Hide all error messages
                Array.from(container.querySelectorAll('[data-rule]')).forEach(function(ele) {
                    ele.setAttribute('class', 'dn');
                });
            } else {
                const passedRules = result.meta.passedRules;
                PASSWORD_RULES.forEach(function(r) {
                    const ele = container.querySelector('[data-rule="' + r.name + '"]');
                    ele.setAttribute('class', passedRules.indexOf(r.name) === -1 ? '' : 'dn');
                });
            }
        }
    });
});
</script-tag>
</body>
</html>
`;
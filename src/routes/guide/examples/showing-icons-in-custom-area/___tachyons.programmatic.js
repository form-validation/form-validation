export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
    <style>
    .fv-plugins-icon[data-field="username"],
    .fv-plugins-icon[data-field="email"] {
        display: inline-block;
        position: static;
        height: auto;
        line-height: normal;
    }
    </style>
</head>
<body>
    <form id="demoForm" method="POST" class="fv-stacked-form">
        <div class="row mb2">
            <label class="db pv2">Username</label>
            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-50" name="username" />
        </div>

        <div class="row mb2">
            <label class="db pv2">Email address</label>
            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-50" name="email" />
        </div>

        <div class="row mb2">
            <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
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
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required and cannot be empty'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The username can only consist of alphabetical, number and underscore'
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email is required and cannot be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'material-icons valid-icon',
                    invalid: 'material-icons invalid-icon',
                    validating: 'material-icons validating-icon',
                    onPlaced: function(e) {
                        if (e.field === 'username' || e.field === 'email') {
                            const parent = e.iconElement.parentNode;
                            const label = parent.querySelector('label');
                            label.appendChild(e.iconElement);
                        }
                    }
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;
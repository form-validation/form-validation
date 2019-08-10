export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
    <style>
    td .fv-plugins-icon {
        right: 16px;
        top: 8px;
    }
    </style>
</head>
<body>
    <form id="demoForm" method="POST">
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Project</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Role</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">URL</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="project[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="role[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="url[]" /></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="project[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="role[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="url[]" /></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="project[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="role[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="url[]" /></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="project[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="role[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="url[]" /></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="project[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="role[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="url[]" /></td>
            </tr>
        </table>

        <div class="mb2">
            <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    FormValidation.formValidation(
        form,
        {
            fields: {
                'project[]': {
                    validators: {
                        notEmpty: {
                            message: 'The project name is required'
                        }
                    }
                },
                'role[]': {
                    validators: {
                        notEmpty: {
                            message: 'The role is required'
                        }
                    }
                },
                'url[]': {
                    validators: {
                        notEmpty: {
                            message: 'The URL is required'
                        },
                        uri: {
                            message: 'The URL is invalid'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons({
                    rowSelector: function(field, ele) {
                        return 'td';
                    },
                }),
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
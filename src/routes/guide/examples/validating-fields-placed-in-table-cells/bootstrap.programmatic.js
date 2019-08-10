export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
    <style>
    td .fv-plugins-icon {
        right: 10px;
        top: 10px;
    }
    </style>
</head>
<body>
    <form id="demoForm" method="POST">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Role</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" class="form-control" name="project[]" /></td>
                    <td><input type="text" class="form-control" name="role[]" /></td>
                    <td><input type="text" class="form-control" name="url[]" /></td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" name="project[]" /></td>
                    <td><input type="text" class="form-control" name="role[]" /></td>
                    <td><input type="text" class="form-control" name="url[]" /></td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" name="project[]" /></td>
                    <td><input type="text" class="form-control" name="role[]" /></td>
                    <td><input type="text" class="form-control" name="url[]" /></td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" name="project[]" /></td>
                    <td><input type="text" class="form-control" name="role[]" /></td>
                    <td><input type="text" class="form-control" name="url[]" /></td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" name="project[]" /></td>
                    <td><input type="text" class="form-control" name="role[]" /></td>
                    <td><input type="text" class="form-control" name="url[]" /></td>
                </tr>
            </tbody>
        </table>

        <div class="form-group row">
            <div class="col-sm-9">
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
                bootstrap: new FormValidation.plugins.Bootstrap({
                    rowSelector: function(field, ele) {
                        return 'td'';
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
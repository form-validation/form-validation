export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bigfishtv-turret/5.1.3/turretcss.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="fv-stacked-form">
        <div class="field">
            <label>Product name</label>
            <input type="text" name="name" />
        </div>

        <div class="field">
            <label>Price ($)</label>
            <input type="text" name="price" />
        </div>            

        <div class="field">
            <label>Size</label>
            <div>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="s" />
                    <span class="control-indicator"></span>
                    <span class="control-label">S</span>
                </label>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="m" />
                    <span class="control-indicator"></span>
                    <span class="control-label">M</span>
                </label>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="l" />
                    <span class="control-indicator"></span>
                    <span class="control-label">L</span>
                </label>
                <label class="control checkbox">
                    <input type="checkbox" name="size[]" value="xl" />
                    <span class="control-indicator"></span>
                    <span class="control-label">XL</span>
                </label>
            </div>
        </div>

        <div class="field">
            <label>Available in store</label>
            <div>
                <label class="control radio">
                    <input type="radio" name="availability" value="yes" />
                    <span class="control-indicator"></span>
                    <span class="control-label">Yes</span>
                </label>
                <label class="control radio">
                    <input type="radio" name="availability" value="no" />
                    <span class="control-indicator"></span>
                    <span class="control-label">No</span>
                </label>
            </div>
        </div>

        <div class="field">
            <button type="submit" class="button button-primary">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Turret.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: 'The name is required'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The name must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The name can only consist of alphabetical, number and underscore'
                        }
                    }
                },
                price: {
                    validators: {
                        notEmpty: {
                            message: 'The price is required'
                        },
                        numeric: {
                            message: 'The price must be a number'
                        }
                    }
                },
                'size[]': {
                    validators: {
                        notEmpty: {
                            message: 'The size is required'
                        }
                    }
                },
                availability: {
                    validators: {
                        notEmpty: {
                            message: 'The availability option is required'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                turret: new FormValidation.plugins.Turret(),
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
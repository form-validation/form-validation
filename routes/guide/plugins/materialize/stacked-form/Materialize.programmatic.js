export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/css/materialize.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="row">
            <div class="input-field col s12">
                <input type="text" name="name" />
                <label>Product name</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <input type="text" name="price" />
                <label>Price ($)</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <label>Size</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="s" />
                        <span>S</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="m" />
                        <span>M</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="l" />
                        <span>L</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="checkbox" name="size[]" value="xl" />
                        <span>XL</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <label>Available in store</label>
            </div>
        </div>

        <div class="row">
            <div class="input-field col s12">
                <div>
                    <label>
                        <input type="radio" name="availability" value="yes" />
                        <span>Yes</span>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="radio" name="availability" value="no" />
                        <span>No</span>
                    </label>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col s12">
                <button type="submit" class="btn waves-effect waves-light">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-rc.2/js/materialize.min.js"></script>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Materialize.min.js"></script-tag>

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
                materialize: new FormValidation.plugins.Materialize(),
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
export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Product name</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="name" />
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Price</label>
            <div class="col-sm-5">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                    </div>
                    <input type="text" class="form-control" name="price" />
                </div>
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Size</label>
            <div class="col-sm-6">
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="size[]" value="s" />
                    <label class="form-check-label">S</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="size[]" value="m" />
                    <label class="form-check-label">M</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="size[]" value="l" />
                    <label class="form-check-label">L</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="size[]" value="xl" />
                    <label class="form-check-label">XL</label>
                </div>
            </div>
        </div>

        <div class="mb-3 row">
            <label class="col-sm-3 col-form-label">Available in store</label>
            <div class="col-sm-6">
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="availability" value="yes" />
                    <label class="form-check-label">Yes</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="radio" class="form-check-input" name="availability" value="no" />
                    <label class="form-check-label">No</label>
                </div>
            </div>
        </div>

        <div class="mb-3 row">
            <div class="col-sm-9 offset-sm-3">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Add product</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap5.min.js"></script-tag>

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
                bootstrap5: new FormValidation.plugins.Bootstrap5(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;
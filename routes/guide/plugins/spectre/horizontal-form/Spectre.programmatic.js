export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.3/spectre.min.css">
    <!-- To use with the Icon plugin -->
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/spectre.css/0.5.3/spectre-icons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="form-horizontal">
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Product name</label>
            </div>
            <div class="col-5">
                <div class="has-icon-right">
                    <input type="text" class="form-input" name="name" />
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Price</label>
            </div>
            <div class="col-5">
                <div class="input-group has-icon-right">
                    <span class="input-group-addon">$</span>
                    <input type="text" class="form-input" name="price" />
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Size</label>
            </div>
            <div class="col-6">
                <div>
                    <label class="form-checkbox">
                        <input type="checkbox" name="size[]" value="s" />
                        <i class="form-icon"></i> S
                    </label>
                </div>
                <div>
                    <label class="form-checkbox">
                        <input type="checkbox" name="size[]" value="m" />
                        <i class="form-icon"></i> M
                    </label>
                </div>
                <div>
                    <label class="form-checkbox">
                        <input type="checkbox" name="size[]" value="l" />
                        <i class="form-icon"></i> L
                    </label>
                </div>
                <div>
                    <label class="form-checkbox">
                        <input type="checkbox" name="size[]" value="xl" />
                        <i class="form-icon"></i> XL
                    </label>
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3">
                <label class="form-label">Available in store</label>
            </div>
            <div class="col-6">
                <div>
                    <label class="form-radio">
                        <input type="radio" name="availability" value="yes" />
                        <i class="form-icon"></i> Yes
                    </label>
                </div>
                <div>
                    <label class="form-radio">
                        <input type="radio" name="availability" value="no" />
                        <i class="form-icon"></i> No
                    </label>
                </div>
            </div>
        </div>
    
        <div class="form-group">
            <div class="col-3"></div>
            <div class="col-9">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Spectre.min.js"></script-tag>

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
                spectre: new FormValidation.plugins.Spectre(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'form-icon icon icon-check',
                    invalid: 'form-icon icon icon-cross',
                    validating: 'form-icon loading',
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;
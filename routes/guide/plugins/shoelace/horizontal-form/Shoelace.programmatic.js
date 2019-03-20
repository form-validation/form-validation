export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/shoelace-css/1.0.0-beta24/shoelace.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="row input-field">
            <label class="col-3 control-label">Product name</label>
            <div class="col-5">
                <input type="text" name="name" />
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label">Price</label>
            <div class="col-5">
                <div class="input-group">
                    <span class="input-addon">$</span>
                    <input type="text" name="price" />
                </div>
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label">Size</label>
            <div class="col-6">
                <div>
                    <label><input type="checkbox" name="size[]" value="s" /> S</label>
                </div>
                <div>
                    <label><input type="checkbox" name="size[]" value="m" /> M</label>
                </div>
                <div>
                    <label><input type="checkbox" name="size[]" value="l" /> L</label>
                </div>
                <div>
                    <label><input type="checkbox" name="size[]" value="xl" /> XL</label>
                </div>
            </div>
        </div>

        <div class="row input-field">
            <label class="col-3 control-label">Available in store</label>
            <div class="col-6">
                <div>
                    <label><input type="radio" name="availability" value="yes" /> Yes</label>
                </div>
                <div>
                    <label><input type="radio" name="availability" value="no" /> No</label>
                </div>
            </div>
        </div>

        <div class="row input-field">
            <div class="col-9 offset-3">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="btn btn-primary">Add product</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Shoelace.min.js"></script-tag>

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
                shoelace: new FormValidation.plugins.Shoelace(),
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
export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.0/mini-default.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="fv-stacked-form">
        <div class="row">
            <div class="col-sm-12">
                <label>Product name</label>
            </div>
            <div class="col-sm-6">
                <input type="text" name="name" style="width: 100%" />
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <label>Price ($)</label>
            </div>
            <div class="col-sm-4">
                <input type="text" name="price" style="width: 100%" />
            </div>
        </div>


        <div class="row">
            <div class="col-sm-12">
                <label>Size</label>
            </div>
            <div class="col-sm-9">
                <div><input type="checkbox" name="size[]" value="s" /> S</div>
                <div><input type="checkbox" name="size[]" value="m" /> M</div>
                <div><input type="checkbox" name="size[]" value="l" /> L</div>
                <div><input type="checkbox" name="size[]" value="xl" /> XL</div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12">
                <label>Available in store</label>
            </div>
            <div class="col-sm-9">
                <div><input type="radio" name="availability" value="yes" /> Yes</div>
                <div><input type="radio" name="availability" value="no" /> No</div>
            </div>
        </div>

        <div class="row">
            <button type="submit" class="primary">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Mini.min.js"></script-tag>

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
                mini: new FormValidation.plugins.Mini(),
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
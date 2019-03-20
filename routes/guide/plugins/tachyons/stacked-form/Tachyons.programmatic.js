export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="fv-stacked-form">
        <div class="row mb2">
            <label class="db pv2">Product name</label>
            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
        </div>

        <div class="row mb2">
            <label class="db pv2">Price ($)</label>
            <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="price" />
        </div>

        <div class="row mb2">
            <label class="db pv2">Size</label>
            <div class="mb2">
                <label><input type="checkbox" name="size[]" value="s" /> S</label>
            </div>
            <div class="mb2">
                <label><input type="checkbox" name="size[]" value="m" /> M</label>
            </div>
            <div class="mb2">
                <label><input type="checkbox" name="size[]" value="l" /> L</label>
            </div>
            <div class="mb2">
                <label><input type="checkbox" name="size[]" value="xl" /> XL</label>
            </div>
        </div>

        <div class="row mb2">
            <label class="db pv2">Available in store</label>
            <div class="mb2">
                <label><input type="radio" name="availability" value="yes" /> Yes</label>
            </div>
            <div class="mb2">
                <label><input type="radio" name="availability" value="no" /> No</label>
            </div>
        </div>

        <div class="row mb2">
            <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
            <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Add product</button>
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
                tachyons: new FormValidation.plugins.Tachyons({
                    rowSelector: '.row',
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
export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.3.0/milligram.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="fv-stacked-form">
        <div class="fv-row">
            <label>Product name</label>
            <input type="text" name="name" />
        </div>

        <div class="fv-row">
            <label>Price ($)</label>
            <input type="text" name="price" />
        </div>

        <div class="fv-row">
            <label>Size</label>
            <div>
                <input type="checkbox" name="size[]" value="s" id="sizeS" />
                <label class="label-inline" for="sizeS">S</label>
            </div>
            <div>
                <input type="checkbox" name="size[]" value="m" id="sizeM" />
                <label class="label-inline" for="sizeM">M</label>
            </div>
            <div>
                <input type="checkbox" name="size[]" value="l" id="sizeL" />
                <label class="label-inline" for="sizeL">L</label>
            </div>
            <div>
                <input type="checkbox" name="size[]" value="xl" id="sizeXL" />
                <label class="label-inline" for="sizeXL">XL</label>
            </div>
        </div>

        <div class="fv-row">
            <label>Available in store</label>
            <div>
                <input type="radio" name="availability" value="yes" id="yesAvailable" />
                <label class="label-inline" for="yesAvailable">Yes</label>
            </div>
            <div>
                <input type="radio" name="availability" value="no" id="noAvailable" />
                <label class="label-inline" for="noAvailable">No</label>
            </div>
        </div>

        <div class="fv-row">
            <button type="submit" class="button-primary">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Milligram.min.js"></script-tag>

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
                milligram: new FormValidation.plugins.Milligram({
                    rowSelector: '.fv-row',
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
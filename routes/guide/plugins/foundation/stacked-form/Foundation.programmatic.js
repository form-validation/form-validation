export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/foundation/6.4.3/css/foundation.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" class="fv-stacked-form">
        <div class="grid-x grid-padding-x">
            <label>
                Product name
                <input type="text" name="name" />
            </label>
        </div>

        <div class="grid-x grid-padding-x">
            <label>Price
                <div class="input-group">
                    <span class="input-group-label">$</span>
                    <input class="input-group-field" type="text" name="price" />
                </div>
            </label>
        </div>

        <div class="grid-x grid-padding-x">
            <fieldset>
                <legend>Size</legend>
                <input type="checkbox" id="sCheckbox" name="size[]" value="s" /><label for="sCheckbox">S</label>
                <input type="checkbox" id="mCheckbox" name="size[]" value="m" /><label for="mCheckbox">M</label>
                <input type="checkbox" id="lCheckbox" name="size[]" value="l" /><label for="lCheckbox">L</label>
                <input type="checkbox" id="xlCheckbox" name="size[]" value="xl" /><label for="xlCheckbox">XL</label>
            </fieldset>
        </div>

        <div class="grid-x grid-padding-x">
            <fieldset>
                <legend>Available in store</legend>
                <input type="radio" id="yesRadio" name="availability" value="yes" /><label for="yesRadio">Yes</label>
                <input type="radio" id="noRadio" name="availability" value="no" /><label for="noRadio">No</label>
            </fieldset>
        </div>

        <div class="grid-x grid-padding-x">
            <button type="submit" class="button" name="signup" value="Sign up">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Foundation.min.js"></script-tag>

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
                foundation: new FormValidation.plugins.Foundation(),
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
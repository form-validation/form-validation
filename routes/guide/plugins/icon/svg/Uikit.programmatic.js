export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.8/css/uikit.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="uk-form-horizontal">
        <div class="uk-margin">
            <label class="uk-form-label">Product name</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-input" name="name" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Price ($)</label>
            <div class="uk-form-controls">
                <input type="text" class="uk-input" name="price" />
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Size</label>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="s" /> S</label>
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="m" /> M</label>
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="l" /> L</label>
                <label><input class="uk-checkbox" name="size[]" type="checkbox" value="xl" /> XL</label>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label">Available in store</label>
            <div class="uk-form-controls uk-form-controls-text">
                <label><input class="uk-radio" name="availability" type="radio" value="yes" /> Yes</label>
                <label><input class="uk-radio" name="availability" type="radio" value="no" /> No</label>
            </div>
        </div>

        <div class="uk-margin">
            <label class="uk-form-label"></label>
            <div class="uk-form-controls">
                <!-- Do NOT use name="submit" or id="submit" for the Submit button -->
                <button type="submit" class="uk-button uk-button-primary">Add product</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Uikit.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation
        .formValidation(document.getElementById('demoForm'), {
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
                uikit: new FormValidation.plugins.Uikit(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon(),
            },
        }
    )
    .on('plugins.icon.set', function(e) {
        if (e.iconElement) {
            switch (e.status) {
                case 'Validating':
                    e.iconElement.innerHTML = '...';
                    break;

                case 'Invalid':
                    e.iconElement.innerHTML = '...';
                    break;

                case 'Valid':
                    e.iconElement.innerHTML = '...';
                    break;

                default:
                    e.iconElement.innerHTML = '';
                    break;
            }
        }
    });
});
</script-tag>
</body>
</html>
`;
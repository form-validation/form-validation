export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST" class="ui form">
        <div class="fields">
            <label class="four wide field">Full name</label>
            <div class="five wide field">
                <!--
                When using feedback icon, the input must place inside 'ui input icon' element
                <div class="ui input icon">
                    <input type="text" />
                </div>
                See http://semantic-ui.com/elements/input.html#icon
                -->
                <div class="ui input icon">
                    <input type="text" name="firstName" placeholder="First name" />
                </div>
            </div>
            <div class="five wide field">
                <div class="ui input icon">
                    <input type="text" name="lastName" placeholder="Last name" />
                </div>
            </div>
        </div>

        <div class="fields">
            <label class="four wide field">Address</label>
            <div class="four wide field">
                <div class="ui input icon">
                    <input type="text" name="city" placeholder="City" />
                </div>
            </div>
            <div class="four wide field">
                <div class="ui input icon">
                    <input type="text" name="state" placeholder="State" />
                </div>
            </div>
            <div class="four wide field">
                <div class="ui input icon">
                    <input type="text" name="zipcode" placeholder="Zipcode" />
                </div>
            </div>
        </div>

        <div class="fields">
            <label class="four wide field"></label>
            <div class="four wide field">
                <button type="submit" class="ui primary button">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

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
                semantic: new FormValidation.plugins.Semantic({
                    rowSelector: function(field, ele) {
                        // field is the field name
                        // ele is the field element
                        switch (field) {
                            case 'firstName':
                            case 'lastName':
                                return '.five.field';
                            
                            case 'city':
                            case 'state':
                            case 'zipcode':
                                return '.four.field';
                            
                            default:
                                return '.fields';
                        }
                    }
                }),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new Icon({
                    valid: 'checkmark icon',
                    invalid: 'remove icon',
                    validating: 'refresh icon'
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`;
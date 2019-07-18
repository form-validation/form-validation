export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/css/select2.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Favorite color</div>
                <div class="fl w-50">
                    <select name="colors" class="input-reset ba b--black-20 pa2 mb2 db w-100" multiple data-placeholder="Choose 2-4 colors" style="width: 100%">
                        <option value="black">Black</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="orange">Orange</option>
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="white">White</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Favorite colors using tags</div>
                <div class="fl w-50">
                    <select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="colors-tags" multiple data-placeholder="Choose 2-4 colors" style="width: 100%"></select>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script-tag>    
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js"></script-tag>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>  
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const demoForm = document.getElementById('demoForm');

    const colorField = jQuery(demoForm.querySelector('[name="colors"]'));
    const colorTagField = jQuery(demoForm.querySelector('[name="colors-tags"]'));

    const fv = FormValidation.formValidation(demoForm, {
        fields: {
            colors: {
                validators: {
                    callback: {
                        message: 'Please choose 2-4 color you like most',
                        callback: function(input) {
                            // Get the selected options
                            const options = colorField.select2('data');
                            return (options != null && options.length >= 2 && options.length <= 4);
                        }
                    }
                }
            },
            'colors-tags': {
                validators: {
                    callback: {
                        message: 'Please choose 2-4 color you like most',
                        callback: function(input) {
                            // Get the selected options
                            const options = colorTagField.select2('data');
                            return (options !== null && options.length >= 2 && options.length <= 4);
                        }
                    }
                }
            }
        },
        plugins: {
            trigger: new FormValidation.plugins.Trigger(),
            tachyons: new FormValidation.plugins.Tachyons(),
            icon: new FormValidation.plugins.Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
        }
    });

    colorField
        .select2()
        .on('change.select2', function() {
            // Revalidate the color field when an option is chosen
            fv.revalidateField('colors');
        });

    colorTagField
        .select2({
            tags: ['Black', 'Blue', 'Green', 'Orange', 'Red', 'Yellow', 'White']
        })
        .on('change.select2', function() {
            // Revalidate the color-tags field when a tag is selected
            fv.revalidateField('colors-tags');
        });
});
</script-tag>
</body>
</html>
`;
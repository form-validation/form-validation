export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group">
            <label>Which Javascript framework you like most?</label>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="framework" value="angular" /> <label>Angular</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="framework" value="ember" /> <label>Ember</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="framework" value="react" /> <label>React</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="framework" value="vue" /> <label>Vue</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="framework" value="other" /> <label>Other</label>
            </div>
        </div>

        <div class="form-group" id="otherOptionContainer">
            <label>Please specify the framework:</label>
            <input type="text" class="form-control" name="otherFramework" />
        </div>

        <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm'); 
    FormValidation.formValidation(
        form,
        {
            fields: {
                framework: {
                    validators: {
                        notEmpty: {
                            message: 'Please select a framework'
                        }
                    }
                },
                otherFramework: {
                    validators: {
                        notEmpty: {
                            message: 'Please specific the framework',
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                excluded: new FormValidation.plugins.Excluded({
                    excluded: function(field, ele, eles) {
                        const selectedCheckbox = form.querySelector('[name="framework"]:checked');
                        const framework = selectedCheckbox ? selectedCheckbox.value : '';
                        return (field === 'otherFramework' && framework !== 'other') || (field === 'framework' && framework === 'other');
                    },
                }),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );

    Array.from(form.querySelectorAll('[name="framework"]')).forEach(function(ele) {
        // Revalidate the otherFramework field when user picks any available framework
        ele.addEventListener('change', function(e) {
            fv.revalidateField('otherFramework');
        });
    });
});
</script-tag>
</body>
</html>
`;
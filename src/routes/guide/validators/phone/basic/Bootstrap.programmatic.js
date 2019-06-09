export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Country</label>
            <div class="col-sm-5">
                <select class="form-control" name="country">
                    <option value="US">United States</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BR">Brazil</option>
                    <option value="CN">China</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                    <option value="IN">India</option>
                    <option value="MA">Morocco</option>
                    <option value="NL">Netherlands</option>
                    <option value="PK">Pakistan</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russia</option>
                    <option value="SK">Slovakia</option>
                    <option value="ES">Spain</option>
                    <option value="TH">Thailand</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="VE">Venezuela</option>
                </select>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Phone number</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="phoneNumber" />
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<!-- 
You have to include the full version of FormValidation which contains all validators
including the phone validator 
-->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Bootstrap.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                phoneNumber: {
                    validators: {
                        phone: {
                            country: function() {
                                return form.querySelector('[name="country"]').value;
                            },
                            message: 'The value is not a valid phone number'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                bootstrap: new FormValidation.plugins.Bootstrap(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    );

    form.querySelector('[name="country"]').addEventListener('change', function() {
        // Revalidate the phone number field whenever user changes the country
        fv.revalidateField('phoneNumber');
    });
});
</script-tag>
</body>
</html>
`;
export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Country</div>
                <div class="fl w-50">
                    <select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="country">
                        <option value="AR">Argentina</option>
                        <option value="AT">Austria</option>
                        <option value="BE">Belgium</option>
                        <option value="BR">Brazil</option>
                        <option value="BG">Bulgaria</option>
                        <option value="HR">Croatia</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="DK">Denmark</option>
                        <option value="EE">Estonia</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="GR">Greece</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IE">Ireland</option>
                        <option value="IT">Italy</option>
                        <option value="LV">Latvia</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MT">Malta</option>
                        <option value="NL">Netherlands</option>
                        <option value="NO">Norway</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russia</option>
                        <option value="RS">Serbia</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="ZA">South Africa</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="GB">United Kingdom</option>
                        <option value="VE">Venezuela</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">VAT number</div>
                <div class="fl w-50">
                    <input type="text" name="vatNumber" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<!-- 
You have to include the full version of FormValidation which contains all validators
including the vat validator
-->
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.full.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const form = document.getElementById('demoForm');
    const fv = FormValidation.formValidation(
        form,
        {
            fields: {
                vatNumber: {
                    validators: {
                        vat: {
                            country: function() {
                                return form.querySelector('[name="country"]').value;
                            },
                            message: 'The value is not a valid VAT number'
                        }
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
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
        // Revalidate the VAT field whenever user changes the country
        fv.revalidateField('vatNumber');
    });
});
</script-tag>
</body>
</html>
`;
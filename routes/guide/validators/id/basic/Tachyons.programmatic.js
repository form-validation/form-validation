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
                        <option value="AR">Argentinia</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BR">Brazil</option>
                        <option value="BG">Bulgari</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CO">Colombia</option>
                        <option value="HR">Croatia</option>
                        <option value="CZ">Czech</option>
                        <option value="DK">Denmark</option>
                        <option value="EE">Estonia</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="HK">Hong Kong</option>
                        <option value="IS">Iceland</option>
                        <option value="ID">India</option>
                        <option value="IE">Ireland</option>
                        <option value="KR">Korea</option>
                        <option value="LV">Latvia</option>
                        <option value="LT">Lithuania</option>
                        <option value="MK">Macedonia</option>
                        <option value="MY">Malaysia</option>
                        <option value="MX">Mexico</option>
                        <option value="ME">Montenegro</option>
                        <option value="NL">Netherlands</option>
                        <option value="NO">Norway</option>
                        <option value="PE">Peru</option>
                        <option value="PL">Poland</option>
                        <option value="RO">Romania</option>
                        <option value="SM">San Marino</option>
                        <option value="RS">Serbia</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="ZA">South Africa</option>
                        <option value="ES">Spain</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="TW">Taiwan</option>
                        <option value="TH">Thailand</option>
                        <option value="UY">Uruguay</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">ID number</div>
                <div class="fl w-50">
                    <input type="text" name="idNumber" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
including the id validator
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
                idNumber: {
                    validators: {
                        id: {
                            country: function() {
                                return form.querySelector('[name="country"]').value;
                            },
                            message: 'The value is not a valid ID'
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
        // Revalidate the ID field whenever user changes the country
        fv.revalidateField('idNumber');
    });
});
</script-tag>
</body>
</html>
`;
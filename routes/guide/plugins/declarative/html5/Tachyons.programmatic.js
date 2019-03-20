export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Username</div>
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="username"
                        required
                        data-fv-not-empty___message="The username is required"
                        
                        pattern="^[a-zA-Z0-9]+$"
                        data-fv-regexp___message="The username can only consist of alphabetical, number" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Email address</div>
                <div class="fl w-40">
                    <input class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email"
                        type="email"
                        data-fv-email-address___message="The input is not a valid email address"
                        
                        required
                        data-fv-not-empty___message="The email is required" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Website</div>
                <div class="fl w-40">
                    <input class="input-reset ba b--black-20 pa2 mb2 db w-100" name="website"
                        type="url"
                        data-fv-uri___message="The input is not a valid website address"
                        
                        required
                        data-fv-not-empty___message="The website is required" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Fav color</div>
                <div class="fl w-40">
                    <input class="input-reset ba b--black-20 pa2 mb2 db w-100" name="color"
                        type="color"
                        data-fv-color___message="The input is not a valid color code"
                        
                        required
                        data-fv-not-empty___message="The color is required" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Age</div>
                <div class="fl w-20">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="age"
                        min="10"
                        data-fv-greater-than___inclusive="true"
                        data-fv-greater-than___message="The input must be greater than or equal to 10"

                        max="100"
                        data-fv-less-than___inclusive="false"
                        data-fv-less-than___message="The input must be less than 100"
                        
                        required
                        data-fv-not-empty___message="The age is required" />
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
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            plugins: {
                declarative: new FormValidation.plugins.Declarative({
                    html5Input: true,
                }),
                trigger: new FormValidation.plugins.Trigger(),
                tachyons: new FormValidation.plugins.Tachyons(),
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
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
                <div class="fl w-third pa2">Programming Languages</div>
                <div class="fl w-two-thirds">
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="net" /> .Net
                    </label>
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="java" /> Java
                    </label>
                    <label class="db h-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="php" /> PHP
                    </label>
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="perl" /> Perl
                    </label>
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="ruby" /> Ruby
                    </label>
                    <label class="db h-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="python" /> Python
                    </label>
                    <label class="db h-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="javascript" /> JavaScript
                    </label>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-third pa2">Editors</div>
                <div class="fl w-two-thirds">
                    <select name="editors[]" multiple="multiple" class="input-reset ba b--black-20 pa2 mb2" style="height: 200px;">
                        <option value="" disabled="disabled">Choose 2 - 3 editors</option>
                        <option value="atom">Atom</option>
                        <option value="eclipse">Eclipse</option>
                        <option value="netbeen">NetBean</option>
                        <option value="nodepadplusplus">Nodepad++</option>
                        <option value="phpstorm">PHP Storm</option>
                        <option value="sublime">Sublime</option>
                        <option value="webstorm">Web Storm</option>
                    </select>
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
            fields: {
                'languages[]': {
                    validators: {
                        choice: {
                            min: 2,
                            max: 4,
                            message: 'Please choose 2 - 4 programming languages you are good at'
                        }
                    }
                },
                'editors[]': {
                    validators: {
                        choice: {
                            min: 2,
                            max: 3,
                            message: 'Please choose 2 - 3 editors you use most'
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
});
</script-tag>
</body>
</html>
`;
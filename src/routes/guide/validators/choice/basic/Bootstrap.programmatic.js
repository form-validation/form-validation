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
            <label class="col-sm-4 col-form-label">Programming Languages</label>
            <div class="col-sm-6">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="net" />
                    <label class="form-check-label">.Net</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="java" />
                    <label class="form-check-label">Java</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="php" />
                    <label class="form-check-label">PHP</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="perl" />
                    <label class="form-check-label">Perl</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="ruby" />
                    <label class="form-check-label">Ruby</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="python" />
                    <label class="form-check-label">Python</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="javascript" />
                    <label class="form-check-label">JavaScript</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-4 col-form-label">Editors</label>
            <div class="col-sm-6">
                <select name="editors[]" multiple="multiple" class="form-control" style="height: 200px;">
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

        <div class="form-group row">
            <div class="col-sm-8 offset-sm-4">
                <button type="submit" class="btn btn-primary">Submit</button>
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
});
</script-tag>
</body>
</html>
`;
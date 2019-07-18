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
                <div class="fl w-25 pa2">Bug title</div>
                <div class="fl w-75">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="title" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Description</div>
                <div class="fl w-75">
                    <textarea class="input-reset ba b--black-20 pa2 mb2 db w-100" rows="5" name="description"></textarea>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Operating system</div>
                <div class="fl w-50">
                    <div class="mb2">
                        <label><input type="radio" name="os" value="window" /> Window</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="centos" /> Centos</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="fedora" /> Fedora</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="ubuntu" /> Ubuntu</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="macos" /> Mac OS X</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Browser(s)</div>
                <div class="fl w-50">
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="ie" /> IE</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="chrome" /> Chrome</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="firefox" /> Firefox</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="safari" /> Safari</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="opera" /> Opera</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Priority</div>
                <div class="fl w-50">
                    <select class="input-reset ba b--black-20 pa2" name="priority">
                        <option value="">Choose the priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Report issue</button>
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
                title: {
                    validators: {
                        notEmpty: {
                            message: 'The title is required'
                        }
                    }
                },
                description: {
                    validators: {
                        notEmpty: {
                            message: 'The abstract is required'
                        }
                    }
                },
                os: {
                    validators: {
                        notEmpty: {
                            message: 'The operating system is required'
                        }
                    }
                },
                'browser[]': {
                    validators: {
                        notEmpty: {
                            message: 'Choose at least one browser'
                        }
                    }
                },
                priority: {
                    validators: {
                        notEmpty: {
                            message: 'The priority is required'
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
                    validating: 'fa fa-refresh',
                }),
            },
        }
    )
    .on('plugins.message.displayed', function(e) {
        // e.messageElement presents the error message element
        e.messageElement.style.display = 'none';
    });
});
</script-tag>
</body>
</html>
`;
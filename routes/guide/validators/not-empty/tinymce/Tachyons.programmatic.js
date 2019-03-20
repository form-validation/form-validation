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
                <div class="fl w-20 pa2">Comment</div>
                <div class="fl w-75">
                    <textarea style="height: 200px;"name="comment" class="input-reset ba b--black-20 pa2 mb2 db w-100"></textarea>
                </div>
            </div>
        </div>
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-20 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.13/tinymce.min.js"></script-tag>
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Tachyons.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    const fv = FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                comment: {
                    validators: {
                        callback: {
                            message: 'The comment must be between 5 and 200 characters long',
                            callback: function(value) {
                                // Get the plain text without HTML
                                const text = tinyMCE.activeEditor.getContent({
                                    format: 'text'
                                });

                                return text.length <= 200 && text.length >= 5;
                            }
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

    // See https://www.tinymce.com/docs/configure/editor-appearance/
    tinymce.init({
        selector: 'textarea',
        branding: false,
        menubar: false,
        setup: function(editor) {
            editor.on('keyup', function() {
                // Revalidate the comment field
                fv.revalidateField('comment');
            });
        }
    });
});
</script-tag>
</body>
</html>
`;
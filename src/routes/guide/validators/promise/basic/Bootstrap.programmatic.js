export default `<!doctype html>
<html>
<head>
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link-tag rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">

    <style>
    .preview {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        border: 1px solid rgba(0,0,0,.2);
        margin: 8px 0;
        width: 300px;
        height: 300px;
    }
    </style>
</head>
<body>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Avatar</label>
            <div class="col-sm-5">
                <input type="file" class="form-control" name="avatar" />
                <div id="avatarPreview" class="preview"></div>
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
                avatar: {
                    validators: {
                        notEmpty: {
                            message: 'The avatar is required'
                        },
                        promise: {
                            promise: function (input) {
                                return new Promise(function(resolve, reject) {
                                    const files = input.element.files
                                    if (!files.length || typeof FileReader === 'undefined') {
                                        resolve({
                                            valid: true
                                        });
                                    }
    
                                    const img = new Image();
                                    img.addEventListener('load', function() {
                                        const w = this.width;
                                        const h = this.height;
    
                                        resolve({
                                            valid: (w <= 300 && h <= 300),
                                            message: 'The avatar width and height must be less than 300 px',
                                            meta: {
                                                source: img.src,    // We will use it later to show the preview
                                                width: w,
                                                height: h,
                                            },
                                        });
                                    });
                                    img.addEventListener('error', function() {
                                        reject({
                                            valid: false,
                                            message: 'Please choose an image',
                                        });
                                    });
    
                                    const reader = new FileReader();
                                    reader.readAsDataURL(files[0]);
                                    reader.addEventListener('loadend', function(e) {
                                        img.src = e.target.result;
                                    });
                                });
                            }
                        },
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
    ).on('core.validator.validated', function(e) {
        if (e.field === 'avatar' && e.validator === 'promise') {
            const preview = document.getElementById('avatarPreview');
            if (e.result.valid && e.result.meta && e.result.meta.source) {
                // Preview the avatar
                const img = document.createElement('img');
                img.setAttribute('src', e.result.meta.source);
                img.setAttribute('style', 'max-width: 100%; height: auto;');

                preview.innerHTML = '';
                preview.appendChild(img);
            } else if (!e.result.valid) {
                preview.innerHTML = 'Preview';
            }
        }
    });
});
</script-tag>
</body>
</html>
`;
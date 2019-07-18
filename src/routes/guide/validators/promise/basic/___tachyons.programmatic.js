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
                <div class="fl w-25 pa2">Avatar</div>
                <div class="fl w-50">
                    <input type="file" name="avatar" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                    <div id="avatarPreview" class="flex items-center justify-center br2 ba b--black-20 mb2" style="width: 300px; height: 300px;">
                        Preview
                    </div>
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
                                            valid: true,
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
                tachyons: new FormValidation.plugins.Tachyons(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        }
    )
    .on('core.validator.validated', function(e) {
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
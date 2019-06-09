<TachyonsLayout>
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
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            avatar: {
                validators: {
                    notEmpty: {
                        message: 'The avatar is required'
                    },
                    promise: {
                        promise: (input) => {
                            return new Promise((resolve, reject) => {
                                const files = input.element.files;
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
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/promise/basic/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('core.validator.validated', (e) => {
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

    return () => {
        fv.destroy();
    };
});
</script>

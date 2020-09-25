<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Full name</div>
                <div class="fl w-50">
                    <input type="text" name="fullName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Email</div>
                <div class="fl w-50">
                    <input type="text" name="email" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">File type</div>
                <div class="fl w-50">
                    <select name="fileType" class="input-reset ba b--black-20 pa2 mb2 db w-100">
                        <option value="">Select a file type</option>
                        <option value="pdf">CV (.pdf)</option>
                        <option value="zip">Sample code (.zip)</option>
                        <option value="png">Sample design (.png)</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">File</div>
                <div class="fl w-50">
                    <input type="file" name="fileName" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Apply for job</button>
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import SubmitButton from 'formvalidation/plugins/SubmitButton';
import Trigger from 'formvalidation/plugins/Trigger';
import Tachyons from 'formvalidation/plugins/Tachyons';
import Transformer from 'formvalidation/plugins/Transformer';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const demoForm = document.getElementById('demoForm');
    const fv = formValidation(demoForm, {
        fields: {
            fullName: {
                validators: {
                    notEmpty: {
                        message: 'The full name is required'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The email address is not valid'
                    }
                }
            },
            fileType: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a file type'
                    }
                }
            },
            fileName: {
                validators: {
                    notEmpty: {
                        message: 'Please choose a file to upload'
                    },
                    file: {
                        extension: 'pdf',
                        type: 'application/pdf',
                        maxSize: 2 * 1024 * 1024,
                        message: 'The file must be in .pdf format and must not exceed 2MB in size'
                    }
                }
            },
        },
        plugins: {
            submitButton: new SubmitButton(),
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/updating-validator-options/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    demoForm.querySelector('[name="fileType"]').addEventListener('change', (e) => {
        const fileType = e.target.value;
        if (fileType === '') {
            return;
        }

        let maxSize, extension, type, message;
        switch (fileType) {
            case 'png':
                type      = 'image/png';
                extension = 'png';
                maxSize   = 10 * 1024 * 1024;
                message   = 'The file must be in .png format and must not exceed 10MB in size';
                break;

            case 'zip':
                type      = 'application/zip';
                extension = 'zip';
                maxSize   = 5 * 1024 * 1024;
                message   = 'The file must be in .zip format and must not exceed 5MB in size';
                break;

            case 'pdf':
            default:
                type      = 'application/pdf';
                extension = 'pdf';
                maxSize   = 2 * 1024 * 1024;
                message   = 'The file must be in .pdf format and must not exceed 2MB in size';
                break;
        }

        fv
            // Update options
            .updateValidatorOption('fileName', 'file', 'type', type)
            .updateValidatorOption('fileName', 'file', 'extension', extension)
            
            // Update message
            .updateValidatorOption('fileName', 'file', 'message', message)
            
            // You might need to revalidate field
            .revalidateField('fileName');
    });

    return () => {
        fv.destroy();
    };
});
</script>

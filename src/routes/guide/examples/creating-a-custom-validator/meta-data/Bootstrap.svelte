<BootstrapLayout>
    <ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js']} onLoaded={onLoaded}>
        <form id="demoForm" method="POST" style="height: 85px;">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">New password</label>
                <div class="col-sm-6">
                    <input type="password" class="form-control" name="pwd" autocomplete="off" />
                    
                    <!-- The progress bar is hidden initially -->
                    <div class="progress mt-2" id="progressBar" style="opacity: 0;">
                        <div class="progress-bar progress-bar-striped progress-bar-animate" style="width: 100%"></div>
                    </div>
                </div>
            </div>
        </form>
    </ResourceLoader>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Bootstrap from 'formvalidation/dist/es6/plugins/Bootstrap';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';
import ResourceLoader from '../../../../../components/ResourceLoader.svelte';

let fv;

const onLoaded = () => {
    const strongPassword = () => {
        return {
            validate: (input) => {
                // input.value is the field value
                // input.options are the validator options

                const value = input.value;
                if (value === '') {
                    return {
                        valid: true,
                    };
                }

                const result = zxcvbn(value);
                const score = result.score;
                const message = result.feedback.warning || 'The password is weak';

                // By default, the password is treat as invalid if the score is smaller than 3
                // We allow user to change this number via options.minimalScore
                const minimalScore = input.options && input.options.minimalScore
                                    ? input.options.minimalScore
                                    : 3;

                if (score < minimalScore) {
                    return {
                        valid: false,
                        // Yeah, this will be set as error message
                        message: message,
                        meta: {
                            // This meta data will be used later
                            score: score,
                        },
                    }
                }
            },
        };
    };

    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            pwd: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    checkPassword: {
                        message: 'The password is too weak',
                        minimalScore: 3,
                    },
                }
            }
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/creating-a-custom-validator/meta-data/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    })
    .registerValidator('checkPassword', strongPassword)
    .on('core.validator.validating', function(e) {
        if (e.field === 'pwd' && e.validator === 'checkPassword') {
            document.getElementById('progressBar').style.opacity = '1';
        }
    })
    .on('core.validator.validated', (e) => {
        if (e.field === 'pwd' && e.validator === 'checkPassword') {
            const progressBar = document.getElementById('progressBar');

            if (e.result.meta) {
                // Get the score which is a number between 0 and 4
                const score = e.result.meta.score;
                
                // Update the width of progress bar
                const width = (score == 0) ? '1%' : `${score * 25}%`;
                progressBar.style.opacity = 1;
                progressBar.style.width = width;
            } else {
                progressBar.style.opacity = 0;
                progressBar.style.width = '0%';
            }
        }
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

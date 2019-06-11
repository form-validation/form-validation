<TachyonsLayout>
    <form id="demoForm" method="POST" style="height: 280px;">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Full name</div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="firstName" placeholder="First name" />
                </div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="lastName" placeholder="Last name" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Company</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="company" />
                </div>
                <div class="fl w-25 pl2">
                    <button class="bn pa3 pv2" type="button" id="moreInfoButton">More info</button>
                </div>
            </div>
        </div>

        <div class="cf" id="moreInfoFields" style="display: none;">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Job title</div>
                    <div class="fl w-50">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="job" />
                    </div>
                </div>
            </div>
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Department</div>
                    <div class="fl w-50">
                        <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="department" />
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
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Excluded from 'formvalidation/dist/es6/plugins/Excluded';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            firstName: {
                validators: {
                    notEmpty: {
                        message: 'The first name is required'
                    }
                }
            },
            lastName: {
                validators: {
                    notEmpty: {
                        message: 'The last name is required'
                    }
                }
            },
            company: {
                validators: {
                    notEmpty: {
                        message: 'The company name is required'
                    }
                }
            },
            // These fields will be validated when being visible
            job: {
                validators: {
                    notEmpty: {
                        message: 'The job title is required'
                    }
                }
            },
            department: {
                validators: {
                    notEmpty: {
                        message: 'The department name is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            excluded: new Excluded(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/excluded/basic/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    // Toogle the container that contains the Job title and Department fields
    // when click the moreInfoButton button
    document.getElementById('moreInfoButton').addEventListener('click', () => {
        const container = document.getElementById('moreInfoFields');
        container.style.display = container.style.display === 'none' ? 'block' : 'none';
    });

    return () => {
        fv.destroy();
    };
});
</script>

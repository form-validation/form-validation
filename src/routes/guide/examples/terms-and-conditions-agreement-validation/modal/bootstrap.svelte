<BootstrapLayout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.15.0/umd/popper.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js',
    ]} onLoaded={onLoaded}>
        <form id="demoForm" method="POST">
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Full name</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="firstName" placeholder="First name" />
                </div>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="lastName" placeholder="Last name" />
                </div>
            </div>
        
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Username</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" name="username" />
                </div>
            </div>
        
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Email address</label>
                <div class="col-sm-5">
                    <input type="text" class="form-control" name="email" />
                </div>
            </div>
        
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Password</label>
                <div class="col-sm-5">
                    <input type="password" class="form-control" name="password" />
                </div>
            </div>
        
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Gender</label>
                <div class="col-sm-6">
                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-check-input" name="gender" value="male" />
                        <label class="form-check-label">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-check-input" name="gender" value="female" />
                        <label class="form-check-label">Female</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-check-input" name="gender" value="other" />
                        <label class="form-check-label">Other</label>
                    </div>
                </div>
            </div>
        
            <div class="form-group row">
                <div class="col-sm-9 offset-sm-3">
                    <button type="button" class="btn btn-secondary" data-toggle="modal" data-target="#termsModal">Agree with the terms and conditions</button>
                    <input type="hidden" name="agree" value="no" />
                </div>
            </div>
        
            <div class="form-group row">
                <div class="col-sm-9 offset-sm-3">
                    <button type="submit" class="btn btn-primary" name="signup" value="Sign up">Submit</button>
                </div>
            </div>
        </form>

        <!-- Terms and conditions modal -->
        <div class="modal fade" id="termsModal" tabindex="-1" role="dialog" aria-labelledby="Terms and conditions" aria-hidden="true">
            <div class="modal-dialog modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title">Terms and conditions</h3>
                    </div>

                    <div class="modal-body" style="max-height: 200px;">
                        <p>Lorem ipsum dolor sit amet, veniam numquam has te. No suas nonumes recusabo mea, est ut graeci definitiones. His ne melius vituperata scriptorem, cum paulo copiosae conclusionemque at. Facer inermis ius in, ad brute nominati referrentur vis. Dicat erant sit ex. Phaedrum imperdiet scribentur vix no, ad latine similique forensibus vel.</p>
                        <p>Dolore populo vivendum vis eu, mei quaestio liberavisse ex. Electram necessitatibus ut vel, quo at probatus oportere, molestie conclusionemque pri cu. Brute augue tincidunt vim id, ne munere fierent rationibus mei. Ut pro volutpat praesent qualisque, an iisque scripta intellegebat eam.</p>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="agreeButton" data-dismiss="modal">Agree</button>
                        <button type="button" class="btn btn-default" id="disagreeButton" data-dismiss="modal">Disagree</button>
                    </div>
                </div>
            </div>
        </div>
    </ResourceLoader>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap from 'formvalidation/plugins/Bootstrap';
import SubmitButton from 'formvalidation/plugins/SubmitButton';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';
import ResourceLoader from '../../../../../components/ResourceLoader.svelte';

let fv;

const onLoaded = () => {
    const demoForm = document.getElementById('demoForm');
    fv = formValidation(demoForm, {
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
            username: {
                validators: {
                    notEmpty: {
                        message: 'The username is required'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: 'The username can only consist of alphabetical, number and underscore'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The input is not a valid email address'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    },
                    different: {
                        message: 'The password cannot be the same as username',
                        compare: () => {
                            return form.querySelector('[name="username"]').value;
                        }
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'The gender is required'
                    }
                }
            },
            agree: {
                validators: {
                    callback: {
                        message: 'You must agree with the terms and conditions',
                        callback: function(input) {
                            return input.value === 'yes';
                        }
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/terms-and-conditions-agreement-validation/modal/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });

    // Update the value of "agree" input when clicking the Agree/Disagree button
    const agreeInput = demoForm.querySelector('[name="agree"]');
    document.getElementById('agreeButton').addEventListener('click', () => {
        agreeInput.value = 'yes';
        fv.revalidateField('agree');
    });

    document.getElementById('disagreeButton').addEventListener('click', () => {
        agreeInput.value = 'no';
        fv.revalidateField('agree');
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

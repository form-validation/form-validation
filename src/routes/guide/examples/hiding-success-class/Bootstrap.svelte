<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Proposal title</label>
            <div class="col-sm-5">
                <input type="text" class="form-control" name="title" />
            </div>
        </div>
    
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Abstract</label>
            <div class="col-sm-9">
                <textarea class="form-control" name="abstract" style="height: 400px;"></textarea>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Topics</label>
            <div class="col-sm-6">
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="angular" />
                    <label class="form-check-label">Angular</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="ember" />
                    <label class="form-check-label">Ember</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="react" />
                    <label class="form-check-label">React</label>
                </div>
                <div class="form-check form-check-inline">
                    <input type="checkbox" class="form-check-input" name="topics[]" value="vue" />
                    <label class="form-check-label">Vue</label>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Session type</label>
            <div class="col-sm-6">
                <select class="form-control" name="sessionType" style="width: 250px;">
                    <option value="">Choose the session type</option>
                    <option value="presentation">Presentation</option>
                    <option value="panel">Panel</option>
                    <option value="workshop">Workshop</option>
                </select>
            </div>
        </div>
    
        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Bootstrap from 'formvalidation/dist/es6/plugins/Bootstrap';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import classSet from 'formvalidation/dist/es6/utils/classSet';
import closest from 'formvalidation/dist/es6/utils/closest';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../components/demo/BootstrapLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            title: {
                validators: {
                    notEmpty: {
                        message: 'The title is required'
                    }
                }
            },
            abstract: {
                validators: {
                    notEmpty: {
                        message: 'The abstract is required'
                    },
                    stringLength: {
                        max: 400,
                        message: 'The abstract must be less than 400 characters'
                    }
                }
            },
            'topics[]': {
                validators: {
                    notEmpty: {
                        message: 'The topic is required'
                    },
                    choice: {
                        min: 2,
                        max: 3,
                        message: 'Please choose 2 - 3 topics'
                    }
                }
            },
            sessionType: {
                validators: {
                    notEmpty: {
                        message: 'The session type is required'
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
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/hiding-success-class/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('core.element.validated', (e) => {
        // e.element presents the field element
        // e.valid indicates the field is valid or not
        if (e.valid) {
            const groupEle = closest(e.element, '.form-group');
            if (groupEle) {
                classSet(groupEle, {
                    'has-success': false,
                });
            }

            classSet(e.element, {
                'is-valid': false,
            });
        }
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

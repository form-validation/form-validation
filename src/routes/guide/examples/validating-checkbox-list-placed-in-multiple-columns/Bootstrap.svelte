<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Event name</label>
            <div class="col-sm-4">
                <input type="text" class="form-control" name="name" />
            </div>
        </div>
    
        <div class="form-group row">
            <label class="col-sm-3 col-form-label">Alert on</label>
            <div class="col-sm-9">
                <div class="row js-alert-field-container">
                    <div class="col-sm-6">
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="0" />
                            <label class="form-check-label">On event day</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="1" />
                            <label class="form-check-label">1 day before</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="2" />
                            <label class="form-check-label">2 days before</label>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="3" />
                            <label class="form-check-label">3 days before</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="7" />
                            <label class="form-check-label">1 week before</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input type="checkbox" class="form-check-input" name="alertDay" value="14" />
                            <label class="form-check-label">2 weeks before</label>
                        </div>
                    </div>
                    <div id="alertDayIcon"></div>
                </div>
            </div>
        </div>

        <div class="form-group row">
            <div class="col-sm-9 offset-sm-3">
                <!-- The container to place the error of checkboxes -->
                <div id="alertDayMessage"></div>
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
import Message from 'formvalidation/dist/es6/plugins/Message';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './Bootstrap.programmatic';
import BootstrapLayout from '../../../../components/demo/BootstrapLayout.svelte';

let fv;

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: 'The event name is required'
                    }
                }
            },
            alertDay: {
                validators: {
                    notEmpty: {
                        message: 'Please choose at least one checkbox'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap({
                defaultMessageContainer: false,
                rowSelector: (field, ele) => {
                    return field === 'alertDay' ? '.js-alert-field-container' : '.form-group';
                },
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
                onPlaced: (e) => {
                    if (e.field === 'alertDay') {
                        document.getElementById('alertDayIcon').appendChild(e.iconElement);
                    }
                },
            }),
            message: new Message({
                clazz: 'fv-help-block',
                container: (field, ele) => {
                    return field === 'alertDay' ? document.getElementById('alertDayMessage') : Message.getClosestContainer(ele, form, /^(.*)(col|offset)-(xs|sm|md|lg)-[0-9]+(.*)$/);
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/validating-checkbox-list-placed-in-multiple-columns/Bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

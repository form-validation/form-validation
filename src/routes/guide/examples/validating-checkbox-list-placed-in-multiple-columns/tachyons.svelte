<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Event name</div>
                <div class="fl w-50">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="name" />
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Alert on</div>
                <div class="fl w-75">
                    <div class="w-100 js-alert-field-container">
                        <div class="fl w-50">
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="0" /> On event day</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="1" /> 1 day before</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="2" /> 2 days before</label>
                            </div>
                        </div>
                        <div class="fl w-50">
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="3" /> 3 days before</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="7" /> 1 week before</label>
                            </div>
                            <div class="mb2">
                                <label><input type="checkbox" name="alertDay" value="14" /> 2 weeks before</label>
                            </div>
                        </div>
                        <div id="alertDayIcon"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-75">
                    <!-- The container to place the error of checkboxes -->
                    <div id="alertDayMessage"></div>
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
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Message from 'formvalidation/dist/es6/plugins/Message';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
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
            tachyons: new Tachyons({
                defaultMessageContainer: false,
                rowSelector: (field, ele) => {
                    return field === 'alertDay' ? '.js-alert-field-container' : '.fl';
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
                clazz: 'red lh-copy',
                container: (field, ele) => {
                    return field === 'alertDay' ? document.getElementById('alertDayMessage') : Message.getClosestContainer(ele, form, /^(.*)fl(.*)$/);
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/validating-checkbox-list-placed-in-multiple-columns/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

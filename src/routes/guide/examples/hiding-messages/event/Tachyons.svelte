<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Bug title</div>
                <div class="fl w-75">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="title" />
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Description</div>
                <div class="fl w-75">
                    <textarea class="input-reset ba b--black-20 pa2 mb2 db w-100" rows="5" name="description"></textarea>
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Operating system</div>
                <div class="fl w-50">
                    <div class="mb2">
                        <label><input type="radio" name="os" value="window" /> Window</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="centos" /> Centos</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="fedora" /> Fedora</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="ubuntu" /> Ubuntu</label>
                    </div>
                    <div class="mb2">
                        <label><input type="radio" name="os" value="macos" /> Mac OS X</label>
                    </div>
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Browser(s)</div>
                <div class="fl w-50">
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="ie" /> IE</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="chrome" /> Chrome</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="firefox" /> Firefox</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="safari" /> Safari</label>
                    </div>
                    <div class="mb2">
                        <label><input type="checkbox" name="browser[]" value="opera" /> Opera</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Priority</div>
                <div class="fl w-50">
                    <select class="input-reset ba b--black-20 pa2" name="priority">
                        <option value="">Choose the priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Report issue</button>
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
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            title: {
                validators: {
                    notEmpty: {
                        message: 'The title is required'
                    }
                }
            },
            description: {
                validators: {
                    notEmpty: {
                        message: 'The abstract is required'
                    }
                }
            },
            os: {
                validators: {
                    notEmpty: {
                        message: 'The operating system is required'
                    }
                }
            },
            'browser[]': {
                validators: {
                    notEmpty: {
                        message: 'Choose at least one browser'
                    }
                }
            },
            priority: {
                validators: {
                    notEmpty: {
                        message: 'The priority is required'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/hiding-messages/event/tachyons',
                sampleCode: sampleCode,
            }),
        },
    })
    .on('plugins.message.displayed', (e) => {
        // e.messageElement presents the error message element
        // We can hide the message easily
        e.messageElement.style.display = 'none';
    });

    return () => {
        fv.destroy();
    };
});
</script>

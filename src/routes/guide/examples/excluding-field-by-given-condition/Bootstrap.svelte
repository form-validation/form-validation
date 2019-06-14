<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group">
            <label>Which Javascript framework you like most?</label>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="framework" value="angular" /> <label>Angular</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="framework" value="ember" /> <label>Ember</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="framework" value="react" /> <label>React</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="framework" value="vue" /> <label>Vue</label>
            </div>
            <div class="form-check">
                <input type="radio" class="form-check-input" name="framework" value="other" /> <label>Other</label>
            </div>
        </div>
    
        <div class="form-group" id="otherOptionContainer">
            <label>Please specify the framework:</label>
            <input type="text" class="form-control" name="otherFramework" />
        </div>
    
        <div class="form-group">
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    </form>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Excluded from 'formvalidation/dist/es6/plugins/Excluded';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Bootstrap from 'formvalidation/dist/es6/plugins/Bootstrap';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../components/demo/BootstrapLayout.svelte';

let fv;

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            framework: {
                validators: {
                    notEmpty: {
                        message: 'Please select a framework'
                    }
                }
            },
            otherFramework: {
                validators: {
                    notEmpty: {
                        message: 'Please specific the framework',
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            submitButton: new SubmitButton(),
            excluded: new Excluded({
                excluded: (field, ele, eles) => {
                    const selectedCheckbox = form.querySelector('[name="framework"]:checked');
                    const framework = selectedCheckbox ? selectedCheckbox.value : '';
                    return (field === 'otherFramework' && framework !== 'other') || (field === 'framework' && framework === 'other');
                },
            }),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/excluding-field-by-given-condition/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });

    Array.from(form.querySelectorAll('[name="framework"]')).forEach((ele) => {
        ele.addEventListener('change', (e) => {
            fv.revalidateField('otherFramework');
        });
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

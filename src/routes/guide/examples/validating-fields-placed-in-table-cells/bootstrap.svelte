<style>
:global(td .fv-plugins-icon) {
    right: 10px;
    top: 10px;
}
</style>

<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Role</th>
                    <th>URL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="text" class="form-control" name="project[]" /></td>
                    <td><input type="text" class="form-control" name="role[]" /></td>
                    <td><input type="text" class="form-control" name="url[]" /></td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" name="project[]" /></td>
                    <td><input type="text" class="form-control" name="role[]" /></td>
                    <td><input type="text" class="form-control" name="url[]" /></td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" name="project[]" /></td>
                    <td><input type="text" class="form-control" name="role[]" /></td>
                    <td><input type="text" class="form-control" name="url[]" /></td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" name="project[]" /></td>
                    <td><input type="text" class="form-control" name="role[]" /></td>
                    <td><input type="text" class="form-control" name="url[]" /></td>
                </tr>
                <tr>
                    <td><input type="text" class="form-control" name="project[]" /></td>
                    <td><input type="text" class="form-control" name="role[]" /></td>
                    <td><input type="text" class="form-control" name="url[]" /></td>
                </tr>
            </tbody>
        </table>
    
        <div class="form-group row">
            <div class="col-sm-9">
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

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../components/demo/BootstrapLayout.svelte';

let fv;

const onLoaded = () => {
    const form = document.getElementById('demoForm');
    fv = formValidation(form, {
        fields: {
            'project[]': {
                validators: {
                    notEmpty: {
                        message: 'The project name is required'
                    }
                }
            },
            'role[]': {
                validators: {
                    notEmpty: {
                        message: 'The role is required'
                    }
                }
            },
            'url[]': {
                validators: {
                    notEmpty: {
                        message: 'The URL is required'
                    },
                    uri: {
                        message: 'The URL is invalid'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap({
                rowSelector: (field, ele) => {
                    return 'td';
                },
            }),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/validating-fields-placed-in-table-cells/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

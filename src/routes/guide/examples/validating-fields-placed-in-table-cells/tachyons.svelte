<style>
:global(td .fv-plugins-icon) {
    right: 16px;
    top: 8px;
}
</style>

<TachyonsLayout>
    <form id="demoForm" method="POST">
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Project</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Role</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">URL</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="project[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="role[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="url[]" /></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="project[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="role[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="url[]" /></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="project[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="role[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="url[]" /></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="project[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="role[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="url[]" /></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="project[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="role[]" /></td>
                <td class="pv2 ph3 v-top"><input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="url[]" /></td>
            </tr>
        </table>

        <div class="mb2">
            <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
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
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const form = document.getElementById('demoForm');
    const fv = formValidation(form, {
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
            tachyons: new Tachyons({
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
                sender: '/guide/examples/validating-fields-placed-in-table-cells/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

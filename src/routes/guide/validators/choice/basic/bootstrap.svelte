<BootstrapLayout onLoaded={onLoaded}>
    <form id="demoForm" method="POST">
        <div class="form-group row">
            <label class="col-sm-4 col-form-label">Programming Languages</label>
            <div class="col-sm-6">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="net" />
                    <label class="form-check-label">.Net</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="java" />
                    <label class="form-check-label">Java</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="php" />
                    <label class="form-check-label">PHP</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="perl" />
                    <label class="form-check-label">Perl</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="ruby" />
                    <label class="form-check-label">Ruby</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="python" />
                    <label class="form-check-label">Python</label>
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" name="languages[]" value="javascript" />
                    <label class="form-check-label">JavaScript</label>
                </div>
            </div>
        </div>
    
        <div class="form-group row">
            <label class="col-sm-4 col-form-label">Editors</label>
            <div class="col-sm-6">
                <select name="editors[]" multiple="multiple" class="form-control" style="height: 200px;">
                    <option value="" disabled="disabled">Choose 2 - 3 editors</option>
                    <option value="atom">Atom</option>
                    <option value="eclipse">Eclipse</option>
                    <option value="netbeen">NetBean</option>
                    <option value="nodepadplusplus">Nodepad++</option>
                    <option value="phpstorm">PHP Storm</option>
                    <option value="sublime">Sublime</option>
                    <option value="webstorm">Web Storm</option>
                </select>
            </div>
        </div>
    </form>
</BootstrapLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap from 'formvalidation/plugins/Bootstrap';

import sampleCode from './bootstrap.programmatic';
import BootstrapLayout from '../../../../../components/demo/BootstrapLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            'languages[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 4,
                        message: 'Please choose 2 - 4 programming languages you are good at'
                    }
                }
            },
            'editors[]': {
                validators: {
                    choice: {
                        min: 2,
                        max: 3,
                        message: 'Please choose 2 - 3 editors you use most'
                    }
                }
            },
        },
        plugins: {
            trigger: new Trigger(),
            bootstrap: new Bootstrap(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/choice/basic/bootstrap',
                sampleCode: sampleCode,
            }),
        },
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

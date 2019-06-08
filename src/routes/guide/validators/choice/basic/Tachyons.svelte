<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-30 pa2">Programming Languages</div>
                <div class="fl w-70">
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="net" /> .Net
                    </label>
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="java" /> Java
                    </label>
                    <label class="db h-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="php" /> PHP
                    </label>
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="perl" /> Perl
                    </label>
                    <label class="db lh-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="ruby" /> Ruby
                    </label>
                    <label class="db h-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="python" /> Python
                    </label>
                    <label class="db h-copy">
                        <input class="mr2" type="checkbox" name="languages[]" value="javascript" /> JavaScript
                    </label>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-30 pa2">Editors</div>
                <div class="fl w-70">
                    <select name="editors[]" multiple="multiple" class="input-reset ba b--black-20 pa2 mb2" style="height: 200px;">
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

import sampleCode from './Tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
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
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/validators/callback/basic/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

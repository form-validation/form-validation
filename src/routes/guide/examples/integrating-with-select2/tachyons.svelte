<TachyonsLayout>
    <ResourceLoader urls={[
        'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/css/select2.min.css',
        'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.7/js/select2.min.js',
    ]} onLoaded={onLoaded}>
        <form id="demoForm" method="post" style="height: 380px;">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Favorite color</div>
                    <div class="fl w-50">
                        <select name="colors" class="input-reset ba b--black-20 pa2 mb2 db w-100" multiple data-placeholder="Choose 2-4 colors" style="width: 100%">
                            <option value="black">Black</option>
                            <option value="blue">Blue</option>
                            <option value="green">Green</option>
                            <option value="orange">Orange</option>
                            <option value="red">Red</option>
                            <option value="yellow">Yellow</option>
                            <option value="white">White</option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-25 pa2">Favorite colors using tags</div>
                    <div class="fl w-50">
                        <select class="input-reset ba b--black-20 pa2 mb2 db w-100" name="colors-tags" multiple data-placeholder="Choose 2-4 colors" style="width: 100%"></select>
                    </div>
                </div>
            </div>
        </form>
    </ResourceLoader>
</TachyonsLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Tachyons from 'formvalidation/plugins/Tachyons';

import sampleCode from './tachyons.programmatic';
import ResourceLoader from '../../../../components/ResourceLoader.svelte';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

let fv;

const onLoaded = () => {
    const demoForm = document.getElementById('demoForm');

    const colorField = jQuery(demoForm.querySelector('[name="colors"]'));
    const colorTagField = jQuery(demoForm.querySelector('[name="colors-tags"]'));

    const fv = formValidation(demoForm, {
        fields: {
            colors: {
                validators: {
                    callback: {
                        message: 'Please choose 2-4 color you like most',
                        callback: function(input) {
                            // Get the selected options
                            const options = colorField.select2('data');
                            return (options != null && options.length >= 2 && options.length <= 4);
                        }
                    }
                }
            },
            'colors-tags': {
                validators: {
                    callback: {
                        message: 'Please choose 2-4 color you like most',
                        callback: function(input) {
                            // Get the selected options
                            const options = colorTagField.select2('data');
                            return (options !== null && options.length >= 2 && options.length <= 4);
                        }
                    }
                }
            }
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
                sender: '/guide/examples/integrating-with-select2/tachyons',
                sampleCode: sampleCode,
            }),
        }
    });

    colorField
        .select2()
        .on('change.select2', function() {
            // Revalidate the `color` field when an option is chosen
            fv.revalidateField('colors');
        });

    colorTagField
        .select2({
            tags: ['Black', 'Blue', 'Green', 'Orange', 'Red', 'Yellow', 'White']
        })
        .on('change.select2', function() {
            // Revalidate the `color-tags` field when a tag is selected
            fv.revalidateField('colors-tags');
        });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

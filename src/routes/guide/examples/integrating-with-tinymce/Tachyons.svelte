<TachyonsLayout>
    <ResourceLoader urls={['https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.7.13/tinymce.min.js']} onLoaded={onLoaded}>
        <form id="demoForm" method="post" style="height: 290px;">
            <div class="cf mb2">
                <div class="fl w-100">
                    <div class="fl w-20 pa2">Comment</div>
                    <div class="fl w-75">
                        <textarea style="height: 200px;"name="comment" class="input-reset ba b--black-20 pa2 mb2 db w-100"></textarea>
                    </div>
                </div>
            </div>
        </form>
    </ResourceLoader>
</TachyonsLayout>

<script>
import { onDestroy } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';

import sampleCode from './Tachyons.programmatic';
import ResourceLoader from '../../../../components/ResourceLoader.svelte';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

let fv;

const onLoaded = () => {
    fv = formValidation(document.getElementById('demoForm'), {
        fields: {
            comment: {
                validators: {
                    callback: {
                        message: 'The comment must be between 5 and 200 characters long',
                        callback: (value) => {
                            // Get the plain text without HTML
                            const text = tinyMCE.activeEditor.getContent({
                                format: 'text'
                            });

                            return text.length <= 200 && text.length >= 5;
                        }
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
                sender: '/guide/examples/integrating-with-tinymce/Tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    // See https://www.tinymce.com/docs/configure/editor-appearance/
    tinymce.init({
        selector: 'textarea',
        branding: false,
        menubar: false,
        setup: (editor) => {
            editor.on('keyup', () => {
                // Revalidate the comment field
                fv.revalidateField('comment');
            });
        }
    });
};

onDestroy(() => {
    fv && fv.destroy();
});
</script>

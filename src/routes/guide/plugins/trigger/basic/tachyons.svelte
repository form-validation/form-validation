<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Title</div>
                <div class="fl w-30">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="title" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Summary</div>
                <div class="fl w-75">
                    <textarea rows="5" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="summary"></textarea>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Description</div>
                <div class="fl w-75">
                    <textarea rows="5" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="description"></textarea>
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/core/Core';
import DemoFrame from 'formvalidation/plugins/DemoFrame';
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Tachyons from 'formvalidation/plugins/Tachyons';

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
            summary: {
                validators: {
                    notEmpty: {
                        message: 'The summary is required'
                    }
                }
            },
            description: {
                validators: {
                    notEmpty: {
                        message: 'The description is required'
                    }
                }
            },
        },
        plugins: {
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            trigger: new Trigger({
                event: {
                    title: 'keyup',
                    summary: 'blur',
                },
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/plugins/trigger/basic/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

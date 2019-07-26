<TachyonsLayout>
    <form id="demoForm" method="post">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">ISBN type</div>
                <div class="fl w-50">
                    <select name="isbnType">
                        <option value="isbn10">ISBN 10</option>
                        <option value="isbn13">ISBN 13</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">ISBN</div>
                <div class="fl w-50">
                    <input type="text" name="isbn" class="input-reset ba b--black-20 pa2 mb2 db w-100" />
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
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';
import Transformer from 'formvalidation/dist/es6/plugins/Transformer';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const ISBN10_REGEXP = "^[0-9]{9}[0-9X]$";
    const ISBN13_REGEXP = "^(978|979)[0-9]{9}[0-9X]$";

    const demoForm = document.getElementById('demoForm');
    const fv = formValidation(demoForm, {
        fields: {
            isbnType: {
                validators: {
                    notEmpty: {
                        message: 'The ISBN type is required'
                    }
                }
            },
            isbn: {
                validators: {
                    notEmpty: {
                        message: 'The ISBN is required'
                    },
                    regexp: {
                        regexp: ISBN10_REGEXP,
                        message: 'The input is not a valid ISBN',
                    }
                },
            },
        },
        plugins: {
            submitButton: new SubmitButton(),
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/setting-dynamic-regular-expression/update-option/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    demoForm.querySelector('[name="isbnType"]').addEventListener('change', (e) => {
        const isbnType = e.target.value;
        if (isbnType === '') {
            return;
        }

        let regexp, message;
        switch (isbnType) {
            case 'isbn13':
                regexp  = ISBN13_REGEXP;
                message = 'The input is not a valid ISBN 13';
                break;

            case 'isbn10':
            default:
                regexp  = ISBN10_REGEXP;
                message = 'The input is not a valid ISBN 10';
                break;
        }

        fv
            // Update options
            .updateValidatorOption('isbn', 'regexp', 'regexp', regexp)            
            // Update message
            .updateValidatorOption('isbn', 'regexp', 'message', message)
            // You might need to revalidate field
            .revalidateField('isbn');
    });

    return () => {
        fv.destroy();
    };
});
</script>

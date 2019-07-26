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
import Alias from 'formvalidation/dist/es6/plugins/Alias';
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
                    isbn10: {
                        enabled: true,
                        regexp: ISBN10_REGEXP,
                        message: 'The input is not a valid ISBN 10',
                    },
                    isbn13: {
                        enabled: false,
                        regexp: ISBN13_REGEXP,
                        message: 'The input is not a valid ISBN 13',
                    },
                },
            },
        },
        plugins: {
            alias: new Alias({
                // The following validators are treated as regexp validator
                isbn10: 'regexp',
                isbn13: 'regexp',
            }),
            submitButton: new SubmitButton(),
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh'
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/setting-dynamic-regular-expression/toggle-validator/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    demoForm.querySelector('[name="isbnType"]').addEventListener('change', (e) => {
        const isbnType = e.target.value;
        if (isbnType === '') {
            return;
        }

        // Toggle the validator based on selected type
        switch (isbnType) {
            case 'isbn13':
                fv.enableValidator('isbn', 'isbn13').disableValidator('isbn', 'isbn10');
                break;

            case 'isbn10':
            default:
                fv.enableValidator('isbn', 'isbn10').disableValidator('isbn', 'isbn13');
                break;
        }

        // Revalidate the field
        fv.revalidateField('isbn');
    });

    return () => {
        fv.destroy();
    };
});
</script>

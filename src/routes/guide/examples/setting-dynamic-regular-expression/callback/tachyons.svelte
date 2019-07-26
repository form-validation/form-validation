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
import regexp from 'formvalidation/dist/es6/validators/regexp';

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
                    callback: {
                        message: 'The input is not a valid ISBN',
                        callback: function(input) {
                            // Get the input value
                            const value = input.value;
                            
                            // Ignore if the input is empty
                            if (value === '') {
                                return {
                                    valid: true,
                                };
                            }

                            // Get the selected ISBN type
                            const isbnType = demoForm.querySelector('[name="isbnType"]').value;
                            const pattern = isbnType === 'isbn10' ? ISBN10_REGEXP : ISBN13_REGEXP;
                            const message = isbnType === 'isbn10' ? 'The input is not a valid ISBN 10' : 'The input is not a valid ISBN 13';

                            // Use the regexp validator
                            const result = regexp().validate({
                                value: value,
                                options: {
                                    regexp: pattern,
                                    message: message,
                                },
                            });
                            return {
                                valid: result.valid,
                                message: message,
                            };
                        },
                    },
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
                sender: '/guide/examples/setting-dynamic-regular-expression/callback/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    demoForm.querySelector('[name="isbnType"]').addEventListener('change', (e) => {
        fv.revalidateField('isbn');
    });

    return () => {
        fv.destroy();
    };
});
</script>

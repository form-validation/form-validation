<svelte:head>
	<title>FormValidation • Regenerating captcha when the form is invalid</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Regenerating captcha when the form is invalid</h1>
    
    <section class="mv5">
        <p class="lh-copy">In the following form, click the <span class="i">Submit</span> button to see the new captcha is generated.</p>
<SampleCode lang="javascript" code={`
const captchaEle = document.getElementById('captchaOperation');

const generateCaptcha = function() {
    const random = [randomNumber(1, 100), randomNumber(1, 200)];
    captchaEle.innerHTML = [random[0], '+', random[1], '='].join(' ');
};

generateCaptcha();

FormValidation
    .formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                captcha: {
                    validators: {
                        callback: {
                            message: 'Wrong answer',
                            callback: function(input) {
                                const items = captchaEle.innerHTML.split(' ');
                                const sum = parseInt(items[0]) + parseInt(items[2]);
                                return input.value == sum;
                            }
                        }
                    }
                }
            },
            plugins: {
                submitButton: new FormValidation.plugins.SubmitButton(),
                ...
            },
        }
    )
    .on('core.form.invalid', function() {
        // Regenerate captcha
        generateCaptcha();
    });
`} />
        <Tip>
            The example uses a very simple captcha generation which is a sum operation of two random numbers. In reality, it's recommended to use the popular Google's <a href="/guide/plugins/recaptcha" class="blue dim link">reCaptcha</a> service
        </Tip>
        <Demo prefix="/guide/examples/regenerating-captcha-when-the-form-is-invalid" frameworks={['tachyons']} />
    </section>

    <RelatedValidators validators={['callback']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

<svelte:head>
	<title>FormValidation • Enabling validators on the fly</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Enabling validators on the fly</h1>
    
    <section class="mv5">
        <p class="lh-copy">In the following form, the new password is not required. Its validators are disabled. When user set the password, the validators will be enabled.</p>
        <p class="lh-copy">Initially, all validators of new password and confirmation password are disabled:</p>
<SampleCode lang="javascript" code={`
const form = document.getElementById('demoForm');
const fv = FormValidation.formValidation(form, {
    fields: {
        password: {
            validators: {
                notEmpty: {
                    enabled: false,
                    ...,
                }
            }
        },
        confirmPassword: {
            validators: {
                notEmpty: {
                    enabled: false,
                    ...,
                },
                identical: {
                    enabled: false,
                    ...,
                }
            }
        },
    },
});
`} />
        <p class="lh-copy">Then enable them if the new password is not empty:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
let enabled = false;
form.querySelector('[name="password"]').addEventListener('input', function(e) {
    const password = e.target.value;
    if (password === '' && enabled) {
        enabled = false;
        fv.disableValidator('password').disableValidator('confirmPassword');
    } else if (password != '' && !enabled) {
        enabled = true;
        fv.enableValidator('password').enableValidator('confirmPassword');
    }
    
    // Revalidate the confirmation password when the new password is changed
    if (password != '' && enabled) {
        fv.revalidateField('confirmPassword');
    }
});
`} />
        </div>
        <Demo prefix="/guide/examples/enabling-validators-on-the-fly" frameworks={['tachyons']} />
    </section>

    <Examples examples={[
        'Enabling validators on the fly',
        'Switching validators on the same field',
    ]} />

    <RelatedValidators validators={['identical']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

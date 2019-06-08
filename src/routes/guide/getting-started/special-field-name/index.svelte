<svelte:head>
	<title>FormValidation • Special field name</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Special field name</h1>
    <h2 class="f4 fw4 tc">Validating field with special name</h2>

    <section class="mv5">
        <p class="lh-copy">When using FormValidation with some server-side frameworks such as <a href="http://cakephp.org/" class="blue dim link">CakePHP</a>,
            <a href="http://symfony.com/" class="blue dim link">Symfony</a>, <a href="http://rubyonrails.org/" class="blue dim link">Rails</a>,
            <a href="http://projects.spring.io/spring-framework/" class="blue dim link">Spring</a>, etc, there is a relationship between
            the model name and the <code>name</code> attribute of input.</p>
        <p class="lh-copy">For example, assuming that an user is modeled by <code>User</code> class with <code>firstName</code>, <code>lastName</code>, <code>username</code>, <code>emails[]</code> properties.</p>
        <p class="lh-copy">Following the naming convention defined by these frameworks, the inputs in the form of adding new user might have the name attribute such as:</p>
<SampleCode lang="html" code={`
<input type="text" name="user[firstName]" />
<input type="text" name="user[lastName]" />
<input type="text" name="user[emails][]" />

<!-- or -->
<input type="text" name="user.lastName" />
<input type="text" name="user.firstName" />
<input type="text" name="user.emails[]" />
`} />  
        <p class="lh-copy">When using FormValidation to validate these kind of fields, you must wrap the field name between single or double quote as following:</p>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(
    form,
    {
        fields: {
            'user[firstName]': {
                validators: {
                    ...
                }
            },
            'user[lastName]': {
                validators: {
                    ...
                }
            },
            'user[emails][]': {
                validators: {
                    ...
                }
            },
        },
    }
);
`} />
        <p class="lh-copy">Below is a sample example:</p>
        <Demo prefix="/guide/getting-started/special-field-name/basic" frameworks={['Tachyons']} />
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/getting-started/localization/">Localization</PrevButton>
            <NextButton href="/guide/getting-started/field-selector/">Field selector</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

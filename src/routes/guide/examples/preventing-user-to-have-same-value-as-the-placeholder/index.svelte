<svelte:head>
	<title>FormValidation • Preventing user to have same value as the placeholder</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Preventing user to have same value as the placeholder</h1>
    
    <section class="mv5">
        <p class="lh-copy">For instance, we could show an error message when someone enters <span class="i">First name</span> or <span class="i">Last name</span> for the text fields named <code>firstName</code> and <code>lastName</code>, respectively.</p>
        <p class="lh-copy">To do that, we create a custom validator following the signature as below:</p>
<SampleCode lang="javascript" code={`
const checkPlaceholder = function() {
    return {
        validate: function(input) {
            // input.element presents the field element
            // input.elements presents all field elements
            // input.field is the field name
            // input.value is the field value

            // Has to return an object containing valid key
            return {
                valid: input.value != input.element.getAttribute('placeholder'),
            };
        },
    };
};
`} />
        <p class="lh-copy">Now, you can apply the created validator with multiple fields:</p>
<SampleCode lang="javascript" code={`
FormValidation
    .formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                firstName: {
                    validators: {
                        ...
                        placeholder: {
                            message: 'The value cannot be the same as placeholder'
                        },
                    }
                },
                lastName: {
                    validators: {
                        ...
                        placeholder: {
                            message: 'The value cannot be the same as placeholder'
                        },
                    }
                },
            },
            plugins: {
                ...
            },
        }
    )
    .registerValidator('placeholder', checkPlaceholder);
`} />
        <p class="lh-copy">For this specific requirement, we also can use the <a href="/guide/validators/callback" class="blue dim link">callback</a> validator:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
callback: {
    message: 'The value cannot be the same as placeholder',
    callback: function(input) {
        return {
            valid: input.value != input.element.getAttribute('placeholder'),
        };
    },
}
`} />
        </div>
        <Demo prefix="/guide/examples/preventing-user-to-have-same-value-as-the-placeholder" frameworks={['Tachyons']} />
    </section>

    <RelatedValidators validators={['callback']} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

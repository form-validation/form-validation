<svelte:head>
	<title>FormValidation • Excluding field by given condition</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Examples</h1>
    <h2 class="f4 fw4 tc">Excluding field by given condition</h2>
    
    <section class="mv5">
        <p class="lh-copy">Consider the following example. It asks you about the Javascript framework you like most. You can choose one from the list of popular Javascript frameworks such as Angular, Ember, React, Vue.</p>
        <p class="lh-copy">If your favorite framework is not in the list, you must fill its name in a text box. You can use the
        <a href="/guide/validators/callback/" class="blue dim link">callback</a> validator to validate this input:</p>
<SampleCode lang="Javascript" code={`
FormValidation.formValidation(
    form,
    {
        fields: {
            framework: {
                validators: {
                    notEmpty: {
                        message: 'Please select a framework'
                    }
                }
            },
            otherFramework: {
                validators: {
                    callback: {
                        message: 'Please specific the framework',
                        callback: function(input) {
                            const selectedCheckbox = form.querySelector('[name="framework"]:checked');
                            const framework = selectedCheckbox ? selectedCheckbox.value : '';
    
                            return (framework !== 'other')
                                    // The field is valid if user picks 
                                    // a given framework from the list
                                    ? true
                                    // Otherwise, the field value is required
                                    : (input.value !== '');
                        }
                    }
                }
            },
        },
        plugins: {
            ...
        },
    }
);
`} />
        <p class="lh-copy">The logic inside the <code>callback</code> function is quite simple and easy to understand. The problem comes when you submit the form, the
        <code>otherFramework</code> field is marked as valid with a valid icon even if you choose a framework from the list.
        In that case, the <code>otherFramework</code> field should be completely ignored.</p>
        <p class="lh-copy">In order to fix that, we can use the <code>excluded</code> option provided by the <a href="/guide/plugins/excluded/" class="blue dim link">Excluded plugin</a> as following:</p>
<SampleCode lang="Javascript" code={`
FormValidation.formValidation(
    form,
    {
        fields: {
            framework: {
                validators: {
                    notEmpty: {
                        message: 'Please select a framework'
                    }
                }
            },
            otherFramework: {
                validators: {
                    notEmpty: {
                        message: 'Please specific the framework',
                    }
                }
            },
        },
        plugins: {
            excluded: new FormValidation.plugins.Excluded({
                excluded: function(field, ele, eles) {
                    const selectedCheckbox = form.querySelector('[name="framework"]:checked');
                    const framework = selectedCheckbox ? selectedCheckbox.value : '';
                    return (field === 'otherFramework' && framework !== 'other')
                            || (field === 'framework' && framework === 'other');
                },
            }),
        },
    }
);
`} />
        <Tip>When the field validation is ignored, its container will not have the success class, and the associated <a href="/guide/plugins/icon/" class="blue dim link">icon</a> isn't shown.</Tip>
        <Demo prefix="/guide/examples/excluding-field-by-given-condition" frameworks={['Bootstrap']} />
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

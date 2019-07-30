<svelte:head>
	<title>FormValidation • Changing success and error colors</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Changing success and error colors</h1>

    <section class="mv5">
        <p class="lh-copy">We can distinguish a valid and invalid field by colors. The label, message and <a href="/guide/plugins/icon" class="blue dim link">feedback icon</a> associated with a
        valid field usually have a color which looks like green. When the field is not valid, these elements have a red-like color.</p>
        <p class="lh-copy">This example shows two approaches for changing these colors.</p>
    </section>

    <section class="mv5">
        <Heading>Overriding the colors</Heading>
        <p class="lh-copy">If your form uses the <a href="/guide/plugins/bootstrap" class="blue dim link">Bootstrap</a> framework, FormValidation adds <code>.has-success</code>
            or <code>.has-danger</code> class to the field container based on the field validity. The field element will be added <code>.is-valid</code> or <code>.is-invalid</code> class.</p>
        <p class="lh-copy">The label, field, message and feedback icon elements will receive the associated validation styles:</p>
<SampleCode lang="css" code={`
/* The color of error message */
.fv-help-block {
    color: #dc3545;
}

/* The color of valid icon */
.has-danger .fv-plugins-icon {
    color: #dc3545;
}

/* The color of invalid icon */
.has-success .fv-plugins-icon {
    color: #28a745;
}
`} />
        <p class="lh-copy">So, it's quite easy for you to override these colors for all forms or particular form as below:</p>
        <div class="mb4">
<SampleCode lang="css" code={`
.my-form.fv-plugins-bootstrap .fv-help-block {
    color: #f39c12;
}
.my-form.fv-plugins-bootstrap .has-danger .fv-plugins-icon {
    color: #f39c12;
}
.my-form.fv-plugins-bootstrap .has-success .fv-plugins-icon {
    color: #18bc9c;
}
`} />
        </div>        
        <Demo prefix="/guide/examples/changing-success-and-error-colors/override-colors" frameworks={['bootstrap']} />
    </section>

    <section class="mv5">
        <Heading>Overriding row classes</Heading>
        <p class="lh-copy">As mentioned in the previous section, based on the field validity, the plugin will adds different classes for the field container.</p>
        <p class="lh-copy">The valid and invalid classes can be defined via the <code>rowValidClass</code> and <code>rowInvalidClass</code> options which take the following default values:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Plugin</th>
                <th class="pv2 ph3 tl f6 fw6">rowValidClass</th>
                <th class="pv2 ph3 tl f6 fw6">rowInvalidClass</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/bootstrap" class="blue dim link">Bootstrap</a></td>
                <td class="pv2 ph3"><code>has-success</code></td>
                <td class="pv2 ph3"><code>has-danger</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/bootstrap3" class="blue dim link">Bootstrap3</a></td>
                <td class="pv2 ph3"><code>has-success</code></td>
                <td class="pv2 ph3"><code>has-error</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/bulma" class="blue dim link">Bulma</a></td>
                <td class="pv2 ph3"><code>fv-has-success</code></td>
                <td class="pv2 ph3"><code>fv-has-error</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/foundation" class="blue dim link">Foundation</a></td>
                <td class="pv2 ph3"><code>fv-row__success</code></td>
                <td class="pv2 ph3"><code>fv-row__error</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/materialize" class="blue dim link">Materialize</a></td>
                <td class="pv2 ph3"><code>fv-valid-row</code></td>
                <td class="pv2 ph3"><code>fv-invalid-row</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/milligram" class="blue dim link">Milligram</a></td>
                <td class="pv2 ph3"><code>fv-valid-row</code></td>
                <td class="pv2 ph3"><code>fv-invalid-row</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/mini" class="blue dim link">Mini</a></td>
                <td class="pv2 ph3"><code>fv-valid-row</code></td>
                <td class="pv2 ph3"><code>fv-invalid-row</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/mui" class="blue dim link">Mui</a></td>
                <td class="pv2 ph3"><code>fv-valid-row</code></td>
                <td class="pv2 ph3"><code>fv-invalid-row</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/pure" class="blue dim link">Pure</a></td>
                <td class="pv2 ph3"><code>fv-has-success</code></td>
                <td class="pv2 ph3"><code>fv-has-error</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/semantic" class="blue dim link">Semantic</a></td>
                <td class="pv2 ph3"><code>fv-has-success</code></td>
                <td class="pv2 ph3"><code>error</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/shoelace" class="blue dim link">Shoelace</a></td>
                <td class="pv2 ph3"><code>input-valid</code></td>
                <td class="pv2 ph3"><code>input-invalid</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/spectre" class="blue dim link">Spectre</a></td>
                <td class="pv2 ph3"><code>has-success</code></td>
                <td class="pv2 ph3"><code>has-error</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/tachyons" class="blue dim link">Tachyons</a></td>
                <td class="pv2 ph3"><code>green</code></td>
                <td class="pv2 ph3"><code>red</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/turret" class="blue dim link">Turret</a></td>
                <td class="pv2 ph3"><code>fv-valid-row</code></td>
                <td class="pv2 ph3"><code>fv-invalid-row</code></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/uikit" class="blue dim link">Uikit</a></td>
                <td class="pv2 ph3"><code>uk-form-success</code></td>
                <td class="pv2 ph3"><code>uk-form-danger</code></td>
            </tr>
        </table>
        <p class="lh-copy">By using your own classes for these options, you can easily customize the look and feel of valid and invalid fields:</p>
<SampleCode lang="css" code={`
.my-field-error .fv-plugins-message-container,
.my-field-error .fv-plugins-icon {
    color: #ff0039;
}

.my-field-success .fv-plugins-message-container,
.my-field-success .fv-plugins-icon {
    color: #2780e3;
}
`} />
        <p class="lh-copy">The last step is to use the new options:</p>
        <div class="mb4">
<SampleCode lang="javascript" code={`
FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            ...
        },
        plugins: {
            tachyons: new FormValidation.plugins.Tachyons({
                rowInvalidClass: 'my-field-error',
                rowValidClass: 'my-field-success',
            }),
        },
    }
);
`} />
        </div>
        <Demo prefix="/guide/examples/changing-success-and-error-colors/row-options" frameworks={['tachyons']} />
    </section>

    <Examples examples={[
        'Changing success and error colors',
        'Hiding success class',
        'Hiding success class and icon for optional field',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

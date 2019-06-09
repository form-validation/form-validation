<svelte:head>
	<title>FormValidation • promise validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">promise validator</h1>
    <h2 class="f4 fw4 tc">Use Promise to validate value</h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i"><sup>*</sup> presents a required option. The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative/" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-promise___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>promise</code><sup>*</sup></td>
                <td class="pv2 ph3"><code>data-fv-promise___promise</code></td>
                <td class="pv2 ph3">String or Function</td>
                <td class="pv2 ph3">The callback returns promise instance</td>
            </tr>
        </table>

        <p class="lh-copy">The <code>promise</code> option must be a function or the name of function which returns a Promise as following:</p>
        <SampleCode lang="javascript" code={`
promise: function(input) {
    // input.value is the value of field
    // input.element is the field element
    return new Promise(function(resolve, reject) {
        // Do something ...

        // Resolve when particular task is done
        resolve({
            valid: true, // or false,   // Required
            message: 'Other message',   // Optional
            // You can attach more data to reuse later
            meta: {
                key: value
            },
        });

        // You can reject if there is error
        reject({
            valid: false,               // Required
            message: 'Other message',   // Optional
            // You can attach more data to reuse later
            meta: {
                key: value
            },
        });
    });
}
`} />
    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>

        <p class="lh-copy">The following form asks user to upload an avatar which both width and height must be less than 300px.</p>
        <Tip>Use the <a href="/guide/validators/file/" class="blue dim link">file</a> validator if you want to validate size of an image</Tip>
        <p class="lh-copy">They can be determined using Promise as seen in the following snippet:</p>

        <div class="mb4">
            <SampleCode lang="javascript" code={`
promise: function(input) {
    return new Promise(function(resolve, reject) {
        const files = input.element.files
        if (!files.length || typeof FileReader === 'undefined') {
            resolve({
                valid: true,
            });
        }

        const img = new Image();
        img.addEventListener('load', function() {
            const w = this.width;
            const h = this.height;

            resolve({
                valid: (w <= 300 && h <= 300),
                message: 'The avatar width and height must be less than 300 px',
                meta: {
                    // We will use it later to show the preview
                    source: img.src,
                    width: w,
                    height: h,
                },
            });
        });
        img.addEventListener('error', function() {
            reject({
                valid: false,
                message: 'Please choose an image',
            });
        });

        const reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.addEventListener('loadend', function(e) {
            img.src = e.target.result;
        });
    });
}
`} />
        </div>
        <p class="lh-copy">When the field is validated completely, we can get the custom data stored in the result's <code>meta</code>:</p>
        <div class="mb4">
            <SampleCode lang="javascript" code={`
formValidationInstance.on('core.validator.validated', function(e) {
    if (e.field === 'avatar' && e.validator === 'promise') {
        if (e.result.valid && e.result.meta && e.result.meta.source) {
            // Get the source of selected image
            const source = e.result.meta.source;

            // Display the avatar in the preview area
            ...
        } else if (!e.result.valid) {
            // Remove the preview
            ...
        }
    }
});
`} />                
        </div>

        <Demo prefix="/guide/validators/promise/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <RelatedValidators validators={['callback', 'remote']} />

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/phone/">phone validator</PrevButton>
            <NextButton href="/guide/validators/regexp/">regexp validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import RelatedValidators from '../../../../components/RelatedValidators.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

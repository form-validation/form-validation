<svelte:head>
	<title>FormValidation • file validator</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">file validator</h1>
    <h2 class="f4 fw4 tc">Validate a file</h2>

    <section class="mv5">
        <Heading>Options</Heading>

        <h3>Using with form field</h3>
        <p class="lh-copy i">The HTML attributes are used to set the validator options via the <a href="/guide/plugins/declarative/" class="blue dim link">Declarative</a> plugin</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Name</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">HTML attribute</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>extension</code></td>
                <td class="pv2 ph3"><code>data-fv-file___extension</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The allowed extensions, separated by a comma</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>maxFiles</code></td>
                <td class="pv2 ph3"><code>data-fv-file___max-files</code></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3">The maximum number of files</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>maxSize</code></td>
                <td class="pv2 ph3"><code>data-fv-file___max-size</code></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3">The maximum file size in bytes</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>maxTotalSize</code></td>
                <td class="pv2 ph3"><code>data-fv-file___max-total-size</code></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3">The maximum size in bytes for all files</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>minFiles</code></td>
                <td class="pv2 ph3"><code>data-fv-file___min-files</code></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3">The minimum number of files</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>minSize</code></td>
                <td class="pv2 ph3"><code>data-fv-file___min-size</code></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3">The minimum file size in bytes</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>minTotalSize</code></td>
                <td class="pv2 ph3"><code>data-fv-file___min-total-size</code></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3">The minimum size in bytes for all files</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3"><code>data-fv-file___message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The error message</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>type</code></td>
                <td class="pv2 ph3"><code>data-fv-file___type</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">The allowed MIME type, separated by a comma.</p>
                    <p class="lh-copy">For example: Setting <code>image/jpeg,image/png,application/pdf</code> only allows to upload JPEG, PNG image and PDF document.</p>
                    <p class="lh-copy">See popular MIME types listed below.</p>
                </td>
            </tr>
        </table>
        <p class="lh-copy">The <code>maxSize</code> and <code>type</code> are only used if the browser supports HTML 5 File API.</p>
    </section>

    <section class="mv5">
        <Heading>Popular MIME types</Heading>
        <p class="lh-copy">The following table shows popular MIME types. For other MIME type, you can refer to the <a href="https://www.sitepoint.com/web-foundations/mime-types-complete-list/" class="blue dim link">complete list</a>.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">MIME type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">File extensions</th>
            </tr>
            {#each Object.entries(_mimeTypes) as [type, ext]}
            <tr class="striped--light-gray">
                <td class="pv2 ph3">{type}</td>
                <td class="pv2 ph3">{ext}</td>
            </tr>
            {/each}
        </table>
    </section>

    <section class="mv5">
        <Heading>Supporting multiple MIME types</Heading>
        <p class="lh-copy">The MIME type of given extension might be different on browsers. For example, MIME type of mp3 file is <code>audio/mpeg</code> on the Firefox, Opera, IE 7+ browsers. Meanwhile, at the time of writing, Google Chrome 42 returns <code>audio/mp3</code> for mp3 file.</p>
        <p class="lh-copy">In this case, you should pass all the possible values separated by a comma to the <code>type</code> option as following:</p>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(
    form,
    {
        fields: {
            fileInput: {
                validators: {
                    file: {
                        extension: 'mp3',
                        type: 'audio/mpeg,audio/mp3',
                        message: 'Please choose a MP3 file'
                    }
                }
            }
        }
    }
);
`} />
    </section>

    <section class="mv5">
        <Heading>Basic Example</Heading>

        <p class="lh-copy">The following form allows to upload JPEG, PNG image which is smaller than 2 MB in size.</p>
        <Tip>Use the <a href="/guide/validators/promise/" class="blue dim link">promise</a> validator if you want to validate the width and height of an image</Tip>
        <Demo prefix="/guide/validators/file/basic" frameworks={['Bootstrap', 'Tachyons']} />
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton href="/guide/validators/email-address/">emailAddress validator</PrevButton>
            <NextButton href="/guide/validators/greater-than/">greaterThan validator</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';

const _mimeTypes = {
    doc: 'application/msword',
    pdf: 'application/pdf',
    rtf: 'application/rtf',
    xls: 'application/vnd.ms-excel',
    ppt: 'application/vnd.ms-powerpoint',
    rar: 'application/x-rar-compressed',
    swf: 'application/x-shockwave-flash',
    zip: 'application/zip',
    'mid midi kar': 'audio/midi',
    mp3: 'audio/mpeg,audio/mp3',
    ogg: 'audio/ogg',
    m4a: 'audio/x-m4a',
    ra: 'audio/x-realaudio',
    gif: 'image/gif',
    'jpeg jpg': 'image/jpeg',
    png: 'image/png',
    'tif tiff': 'image/tiff',
    wbmp: 'image/vnd.wap.wbmp',
    ico: 'image/x-icon',
    jng: 'image/x-jng',
    bmp: 'image/x-ms-bmp',
    'svg svgz': 'image/svg+xml',
    webp: 'image/webp',
    css: 'text/css',
    'html htm shtml': 'text/html',
    txt: 'text/plain',
    xml: 'text/xml',
    '3gpp 3gp': 'video/3gpp',
    mp4: 'video/mp4',
    'mpeg mpg': 'video/mpeg',
    mov: 'video/quicktime',
    webm: 'video/webm',
    flv: 'video/x-flv',
    m4v: 'video/x-m4v',
    wmv: 'video/x-ms-wmv',
    avi: 'video/x-msvideo',
};
</script>

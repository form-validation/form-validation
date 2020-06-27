<svelte:head>
	<title>FormValidation • Recaptcha3 plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">Recaptcha3 plugin</h1>
    <h2 class="f4 fw4 tc">Shows and validates a Google reCAPTCHA v3</h2>

    <Tip>Use the <a href="/guide/plugins/recaptcha" class="blue dim link">Recaptcha</a> plugin if you are still using Google reCAPTCHA v2</Tip>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">To use it, you need to register a site and secret keys at <a href="https://www.google.com/recaptcha/admin" class="blue dim link">https://www.google.com/recaptcha/admin</a>.</p>
        <p class="lh-copy">The following piece of code is the starting point to use the Recaptcha3 plugin:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        ...

        <!-- Prepare a container to show the captcha -->
        <div id="captchaContainer"></div>
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>    
<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/Recaptcha3.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                ...,
                recaptcha3: new FormValidation.plugins.Recaptcha3({
                    action: ...,
                    backendVerificationUrl: ...,
                    element: 'captchaContainer',
                    language: ...,
                    message: ...,
                    siteKey: ...,
                }),
            },
        }
    );
});
</script-tag>
</body>
</html>
`} />
        <p class="lh-copy">The sample code above assumes that the FormValidation files are placed inside the <code>vendors</code> directory. You might need to change the path depending on where you place them on the server.</p>
    </section>

    <section class="mv5">
        <Heading>Options</Heading>
        <p class="lh-copy i"><sup>*</sup> presents a required parameter</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Option</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Type</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>action</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The page action</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>backendVerificationUrl</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The URL of your back-end that verifies the captcha via reCAPTCHA API</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>element</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The ID of element showing the captcha</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>language</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The <a href="https://developers.google.com/recaptcha/docs/language" class="blue dim link">language code</a> defined by reCAPTCHA</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The invalid message that will be shown in case the captcha is not valid</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>minimumScore</code></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3 lh-copy">
                    <p class="lh-copy">
                        A minimum score, between 0 and 1. By default, it's set as 0. The backend verification will be treated as invalid if the returned score doesn't exceed this option.
                    </p>
                    <p class="lh-copy">
                        For more information, see this <a href="https://developers.google.com/recaptcha/docs/v3#interpreting_the_score" class="blue dim link">page</a>.
                    </p>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>siteKey</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3">The site key provided by Google</td>
            </tr>
        </table>
    </section>

    <section class="mv5">
        <Heading>Basic example</Heading>
        <p class="lh-copy">For testing purpose, the back-end verification always indicates that the captcha is valid.</p>
        <Demo prefix="/guide/plugins/recaptcha3/invisible" frameworks={['tachyons']} />
    </section>
    
    <section class="mv5">
        <Heading>Back-end verification</Heading>
        <p class="lh-copy">The plugin also requires verification on the server side. You need to point the <code>backendVerificationUrl</code> option to your back-end URL:</p>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(
    document.getElementById('demoForm'),
    {
        fields: {
            ...
        },
        plugins: {
            ...
            recaptcha3: new FormValidation.plugins.Recaptcha3({
                backendVerificationUrl: '/path/to/your/back-end/',
            }),
        },
    }
);
`} />
        <p class="lh-copy">When click the Submit button, the plugin will send an Ajax request with the value for <code>___g-recaptcha-token___</code> parameter which is generated by reCAPTCHA. With the value of captcha token and the reCAPTCHA secret key, you can connect to
            <a href="https://developers.google.com/recaptcha/docs/verify#api-request" class="blue dim link">reCAPTCGA verification URL</a> to verify the captcha.</p>
        <p class="lh-copy">In order to inform user in case the captcha is valid or invalid, the back-end has to return a JSON encoded version of</p>
<SampleCode lang="javascript" code={`
{
    "score": ...,
    "success": "true"
}
// or
{
    "score": ...,
    "success": "false"
}
`} />
        <p class="lh-copy">The <code>score</code> and <code>success</code> can be taken from the response of Google reCAPTCHA v3 API.</p>
        <p class="lh-copy">The following code demonstrates how to do it in PHP, but you can do it with your favorite language.</p>
<SampleCode lang="php" code={`
&lt;?php
// Replace it with your reCAPTCHA secret key
$secretKey = 'YOUR_SECRET_KEY_HERE';

// See https://developers.google.com/recaptcha/docs/verify#api-request
$fields = array(
    'secret'   => $secretKey,
    'response' => $_POST['___g-recaptcha-token___']
);

$postVars = '';
$sep = '';
foreach ($fields as $key => $value) {
    $postVars .= $sep . urlencode($key) . '=' . urlencode($value);
    $sep = '&';
}

$ch = curl_init();

curl_setopt($ch,CURLOPT_URL, 'https://www.google.com/recaptcha/api/siteverify');
curl_setopt($ch,CURLOPT_POST, count($fields));
curl_setopt($ch,CURLOPT_POSTFIELDS, $postVars);
curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);

// IMPORTANT: $return has to include the "score" property
// In this case, the "score" is included from Google reCaptcha service

$return = json_decode($result, true);
// You can customize the error message based on the score ($return["score"]) such as
// $return["message"] = "The captcha is NOT valid";

curl_close($ch);

header('Content-Type: application/json');
echo json_encode($return);
`} />
    </section>

    <section class="mv5">
        <Heading>Using with the Excluded plugin</Heading>
        <p class="lh-copy">
            If you use the Recaptcha3 plugin with the <a href="/guide/plugins/excluded" class="blue dim link">Excluded plugin</a>, you have to
            include the hidden Recaptcha3 field that has name of <code>___g-recaptcha-token___</code>.
        </p>
        <p class="lh-copy">
            You can access the name via <code>FormValidation.plugins.Recaptcha3.CAPTCHA_FIELD</code> as well.
        </p>
        <p class="lh-copy">
            In the sample code below, we use the <code>excluded</code> option provided by the Excluded plugin to check if the field
            is the Recaptcha3 token field or not.
        </p>
<SampleCode lang="javascript" code={`
plugins: {
    excluded: new FormValidation.plugins.Excluded({
        excluded: function(field, ele, eles) {
            // Don't excluded the reCaptcha3 field
            if (field === FormValidation.plugins.Recaptcha3.CAPTCHA_FIELD) {
                return false;
            }
            // You can add more logics here to exclude or include other fields
            return false;
        }
    }),
    recaptcha3: new FormValidation.plugins.Recaptcha3({
        ...
    }),
    ...
}
`} />
    </section>
    
    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.6.0: Add new <code>minimumScore</code> option. The plugin can return an error message from the backend verification.</li>
            <li>v1.5.0: First release. It means that the Recaptcha3 plugin requires FormValidation v1.5.0 or newer.</li>
        </ul>
    </section>

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/recaptcha">Recaptcha plugin</PrevButton>
            <NextButton target="/guide/plugins/semantic">Semantic plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import Tip from '../../../../components/Tip.svelte';
</script>

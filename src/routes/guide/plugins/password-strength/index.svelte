<svelte:head>
	<title>FormValidation • PasswordStrength plugin</title>
</svelte:head>

<GuideLayout>
    <h1 class="f3 f2-m f1-l tc">PasswordStrength plugin</h1>
    <h2 class="f4 fw4 tc">Check the strength of a password</h2>

    <section class="mv5">
        <Heading>Usage</Heading>
        <p class="lh-copy">The PasswordStrength plugin uses the popular <a href="https://github.com/dropbox/zxcvbn" class="blue dim link" target="_blank">zxcvbn library</a> to estimate the strength of a password.</p>
        <p class="lh-copy">The following piece of code is the starting point to use it:</p>
<SampleCode lang="html" code={`
<html>
<head>
    <link-tag rel="stylesheet" href="/vendors/formvalidation/dist/css/formValidation.min.css">
</head>
<body>
    <form id="demoForm" method="POST">
        <input type="password" name="pwd" />
    </form>

<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/es6-shim/0.35.3/es6-shim.min.js"></script-tag>

<!-- Include zxcvbn library -->
<script-tag src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script-tag>

<script-tag src="/vendors/formvalidation/dist/js/FormValidation.min.js"></script-tag>
<script-tag src="/vendors/formvalidation/dist/js/plugins/PasswordStrength.min.js"></script-tag>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    FormValidation.formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                ...
            },
            plugins: {
                passwordStrength: new FormValidation.plugins.PasswordStrength({
                    field: 'pwd',
                    message: 'The password is weak',
                    minimalScore: 3,
                    onValidated: function(valid, message, score) {
                        ...
                    }
                }),
                ...
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
                <td class="pv2 ph3"><code>field</code> <sup>*</sup></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The field name</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>message</code></td>
                <td class="pv2 ph3">String</td>
                <td class="pv2 ph3 lh-copy">The default error message which will be shown to let user know that the password is weak. It then will be replaced with the warning message of zxcvbn library to indicate the specific reason why the password is weak</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>minimalScore</code></td>
                <td class="pv2 ph3">Number</td>
                <td class="pv2 ph3">
                    <p class="lh-copy">For a given password, the zxcvbn library will calculate its strength and the score can be one of 0, 1, 2, 3, 4. The password will be treated as invalid if the scroce if less than <code>minimalScore</code>.</p>
                    <p class="lh-copy">The default value is 3</p>
                </td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><code>onValidated</code></td>
                <td class="pv2 ph3">Function</td>
                <td class="pv2 ph3 lh-copy">
                    <p class="lh-copy">The callback function that will be triggered after validating the password. The function takes three parameters:</p>
                    <ul class="ma0 pl3 lh-copy">
                        <li><code>valid</code> (Boolean): Can be <code>true</code> or <code>false</code> depending on the field is valid or not</li>
                        <li><code>message</code> (String): The error message returned by the zxcvbn library</li>
                        <li><code>score</code> (Number): The score returned by the zxcvbn library. Can be one of 0, 1, 2, 3, 4</li>
                    </ul>
                    <p class="lh-copy">By using this callback, we can display a progress bar based on the score to let user know how strong the password is.</p>
                </td>
            </tr>
        </table>
    </section>
    
    <section class="mv5">
        <Heading>Basic example</Heading>

        <p class="lh-copy">You can click on the sample password below to see the result.</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100 mb4">
            {#each _groups as group}
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">{group.name}</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Is valid?</th>
            </tr>
            {#each group.samples as sample}
            <tr class="striped--light-gray">
                <SampleData sample={sample} sender="/guide/plugins/password-strength/basic" />
            </tr>
            {/each}
            {/each}
        </table>

        <Demo prefix="/guide/plugins/password-strength/basic" frameworks={['tachyons']} />
    </section>

    <section class="mv5">
        <Heading>Changelog</Heading>
        <ul class="pa0 ma0 ml3 lh-copy">
            <li>v1.5.0: First release. It means that the PasswordStrength plugin requires FormValidation v1.5.0 or newer.</li>
        </ul>
    </section>

     <Examples examples={[
        'Building a password strength meter',
    ]} />

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/mui">Mui plugin</PrevButton>
            <NextButton target="/guide/plugins/pure">Pure plugin</NextButton>
        </div>
    </section>
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import Heading from '../../../../components/Heading.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import NextButton from '../../../../components/NextButton.svelte';
import PrevButton from '../../../../components/PrevButton.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
import SampleData from '../../../../components/SampleData.svelte';

const _groups = [
    {
        name: 'Common password',
        samples: ['12345678', 'admin', 'abcdef', 'password', 'qwerty']
    },
    {
        name: 'Female names',
        samples: ['mary', 'patricia', 'linda', 'barbara', 'elizabeth']
    },
    {
        name: 'Male names',
        samples: ['james', 'john', 'robert', 'michael', 'william']
    },
    {
        name: 'Surnames',
        samples: ['smith', 'johnson', 'williams', 'jones', 'brown']
    },
    {
        name: 'English words on Wikipedia',
        samples: ['national', 'university', 'people', 'history', 'county']
    },
];
</script>

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
        ...
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

    <section class="mv5">
        <div class="flex">
            <PrevButton target="/guide/plugins/mui">Mui plugin</PrevButton>
            <NextButton target="/guide/plugins/pure">Pure plugin</NextButton>
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

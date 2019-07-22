<svelte:head>
	<title>FormValidation • Building a password strength meter</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Building a password strength meter</h1>

    <section class="mv5">
        <p class="lh-copy">In this example, we will use the <a href="/guide/plugins/password-strength" class="blue dim link">PasswordStrength plugin</a> to build a password strength meter. It is powered by the Dropbox's <a href="https://github.com/dropbox/zxcvbn" class="blue dim link" target="_blank">zxcvbn library</a>.</p>
        <p class="lh-copy">For anyone who haven't known about zxcvbn library, it's a password strength estimator inspired by password crackers developed by Dropbox. It can recognize and weighs 30k common passwords. For more information about this library, you can refer to <a href="https://github.com/dropbox/zxcvbn" class="blue dim link" target="_blank">its official page</a>.</p>
        <p class="lh-copy">Using the PasswordStrength plugin, it's quite easy for us to see how strong a given password is:</p>

<SampleCode lang="javascript" code={`
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
`} />
        <p class="lh-copy">The <code>onValidated</code> callback is executed after zxcvbn calculates the password's score which is passed as <code>score</code> parameter.</p>
        <p class="lh-copy">It is an integer number between 0 and 4 indicating the strength level:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Score</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Description</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">0</td>
                <td class="pv2 ph3">Too guessable: risky password</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">1</td>
                <td class="pv2 ph3">Very guessable: protection from throttled online attacks</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">2</td>
                <td class="pv2 ph3">Somewhat guessable: protection from unthrottled online attacks</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">3</td>
                <td class="pv2 ph3">Safely unguessable: moderate protection from offline slow-hash scenario</td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3">4</td>
                <td class="pv2 ph3">Very unguessable: strong protection from offline slow-hash scenario</td>
            </tr>
        </table>
        <p class="lh-copy">Using the <code>score</code> value, we can show a meter to let user know how strong password is.</p>

        <div class="mb4">
<SampleCode lang="html" code={`
<div class="fl w-50 ba b--black-10 h1">
    <div id="passwordMeter" class="h-100"></div>
</div>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    // The password meter element
    const passwordMeter = document.getElementById('passwordMeter');

    const randomNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

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
                        // Set the styles for password meter element
                        // based on the score
                        switch (score) {
                            case 0:
                                passwordMeter.style.width = randomNumber(1, 20) + '%';
                                passwordMeter.style.backgroundColor = '#ff4136';
                            case 1:
                                passwordMeter.style.width = randomNumber(20, 40) + '%';
                                passwordMeter.style.backgroundColor = '#ff4136';
                                break;
                            case 2:
                                passwordMeter.style.width = randomNumber(40, 60) + '%';
                                passwordMeter.style.backgroundColor = '#ff4136';
                                break;
                            case 3:
                                passwordMeter.style.width = randomNumber(60, 80) + '%';
                                passwordMeter.style.backgroundColor = '#ffb700';
                                break;
                            case 4:
                                passwordMeter.style.width = '100%';
                                passwordMeter.style.backgroundColor = '#19a974';
                                break;
                            default:
                                break;
                        }
                    },
                }),
                ...
            },
        }
    );
});
</script-tag>
`} />
        </div>

        <Demo prefix="/guide/examples/building-a-password-strength-meter" frameworks={['tachyons']} />

        <p class="lh-copy">If your form uses one of the following plugin, you can use the framework progress bar component as listed in the table below:</p>
        <table class="collapse ba br2 b--black-10 pv2 ph3 w-100">
            <tr class="striped--light-gray">
                <th class="pv2 ph3 tl f6 fw6 ttu">Plugin</th>
                <th class="pv2 ph3 tl f6 fw6 ttu">Progress bar component</th>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/bootstrap" class="blue dim link">Bootstrap plugin</a></td>
                <td class="pv2 ph3"><a href="https://getbootstrap.com/docs/4.3/components/progress/" target="_blank" class="blue dim link">https://getbootstrap.com/docs/4.3/components/progress/</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/bootstrap3" class="blue dim link">Bootstrap3 plugin</a></td>
                <td class="pv2 ph3"><a href="https://getbootstrap.com/docs/3.4/components/#progress" target="_blank" class="blue dim link">https://getbootstrap.com/docs/3.4/components/#progress</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/bulma" class="blue dim link">Bulma plugin</a></td>
                <td class="pv2 ph3"><a href="https://bulma.io/documentation/elements/progress/" target="_blank" class="blue dim link">https://bulma.io/documentation/elements/progress/</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/foundation" class="blue dim link">Foundation plugin</a></td>
                <td class="pv2 ph3"><a href="https://foundation.zurb.com/sites/docs/progress-bar.html" target="_blank" class="blue dim link">https://foundation.zurb.com/sites/docs/progress-bar.html</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/mini" class="blue dim link">Mini plugin</a></td>
                <td class="pv2 ph3"><a href="https://minicss.org/docs#progress-bars" target="_blank" class="blue dim link">https://minicss.org/docs#progress-bars</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/semantic" class="blue dim link">Semantic plugin</a></td>
                <td class="pv2 ph3"><a href="https://semantic-ui.com/modules/progress.html" target="_blank" class="blue dim link">https://semantic-ui.com/modules/progress.html</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/shoelace" class="blue dim link">Shoelace plugin</a></td>
                <td class="pv2 ph3"><a href="https://www.shoelace.style/docs/progress-bars.html" target="_blank" class="blue dim link">https://www.shoelace.style/docs/progress-bars.html</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/spectre" class="blue dim link">Spectre plugin</a></td>
                <td class="pv2 ph3"><a href="https://picturepan2.github.io/spectre/experimentals/progress.html" target="_blank" class="blue dim link">https://picturepan2.github.io/spectre/experimentals/progress.html</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/turret" class="blue dim link">Turret plugin</a></td>
                <td class="pv2 ph3"><a href="https://turretcss.com/form/progress/" target="_blank" class="blue dim link">https://turretcss.com/form/progress/</a></td>
            </tr>
            <tr class="striped--light-gray">
                <td class="pv2 ph3"><a href="/guide/plugins/uikit" class="blue dim link">UIKit plugin</a></td>
                <td class="pv2 ph3"><a href="https://getuikit.com/docs/progress" target="_blank" class="blue dim link">https://getuikit.com/docs/progress</a></td>
            </tr>
        </table>
    </section>

    <Examples examples={[
        'Creating a custom validator',
        'Building a password strength meter',
    ]} />
</GuideLayout>

<script>
import Demo from '../../../../components/Demo.svelte';
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>
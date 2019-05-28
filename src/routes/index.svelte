<style>
.hero-bg {
    transform: skewY(-10deg);
    transform-origin: top left;
}
.headline:before {
    background: #001B44;
    border-radius: 9999px;
    content: '';
    display: block;
    margin-bottom: 8px;
    height: 8px;
    width: 72px;
}
.logo-mini {
    background-color: #f22f21;
}
.logo-mui {
    background-color: #FF80AB;
}
.logo-pure {
    background-color: #1E8DD6;
}
</style>

<svelte:head>
	<title>FormValidation • The best validation library for JavaScript</title>
</svelte:head>

<div class="absolute top-0 left-0 h-75 w-100 hero-bg bg-dark-blue"></div>

<section class="w-100 vh-100 tc">
    <div class="mw9 center pv6 relative near-white">
        <h1 class="f1 fw9 lh-copy ma0 lh-title f-headline-l">all new FormValidation</h1>
        <h2 class="f2 mv5">best validation library for JavaScript. zero dependencies.</h2>
        <div class="f3 center mv5"><span class="bg-gold br-pill pa2 near-black">v1.4.0</span></div>
    </div>

    <div class="w-100 center mw7"><Typed /></div>
</section>

<section class="bt bw2 b--light-gray pv5">
    <div class="mw8 center">
        <DotDotDot />
        <h2 class="f1">Scalable, well tested code base</h2>
    </div>

    <div class="mw8 center flex">
        <div class="w-60">
            <ul class="list pa0 lh-copy">
                <li>• Completely rewrite in ES6.</li>
                <li>• Type safety. Entire code are made in TypeScript.</li>
                <li>• High code quality via popular analysis tools such as TSLint.</li>
                <li>• Zero dependencies. No jQuery.</li>
                <li>• All validators, algorithms, and APIs are tested carefully with +400 Mocha unit tests.</li>
                <li>• Cover hundreds of end-to-end test cases against Selenium server with Nightwatch.js framework.</li>
            </ul>
        </div>
        <div class="w-40">
            <ul class="list pa0 flex flex-wrap">
                <li class="w-50 pa3 tc">
                    <img alt="ES6" class="w3 h3 mb1" src="/branches/es6.svg" />
                    <div>ES6</div>
                </li>
                <li class="w-50 pa3 tc">
                    <img alt="TypeScript" class="w3 h3 mb1" src="/branches/typescript.svg" />
                    <div>TypeScript</div>
                </li>
                <li class="w-50 pa3 tc">
                    <img alt="Mocha" class="w3 h3 mb1" src="/branches/mocha.svg" />
                    <div>Mocha</div>
                </li>
                <li class="w-50 pa3 tc">
                    <img alt="Nightwatch" class="w3 h3 mb1" src="/branches/nightwatch.svg" />
                    <div>Nightwatch</div>
                </li>
            </ul>
        </div>
    </div>

    <div class="mw7 center">   
        <Tabs titles={["Unit tests", "End-to-end tests"]}>
            <div>
<SampleCode lang="javascript" code={`
import { expect } from 'chai';
import isbn from '../../src/js/validators/isbn';

describe('Test isbn validator', () => {
    it('isbn10 hyphen', () => {
        const samples = [
            '99921-58-10-7', '9971-5-0210-0',
            '960-425-059-0', '80-902734-1-6',
        ];
        samples.forEach(sample => {
            const result = isbn().validate({ value: sample });
            expect(result.valid).to.be.true;
        });
    });
});
`} />            
            </div>
            <div>
<SampleCode lang="javascript" code={`
module.exports = {
    'Test Alias plugin': (browser) => {
        browser
            .url(
                browser.launchUrl + '/demo/plugins/alias.html'
            )
            .setValue(
                'input[name="email"]',
                ['invalid.email', '\u0008']
            )
            .waitForElementVisible(
                '[data-validator][data-field="email"]', 100
            )
            .assert.containsText(
                '[data-validator][data-field="email"]',
                'The email address is not valid'
            )
            .end();
    }
};
`} />            
            </div>
        </Tabs>
    </div>
</section>

<section class="pv5">
    <div class="mw8 center">
        <DotDotDot />
        <h2 class="f1">Rich set of validators</h2>
        <ul class="list pa0 lh-copy">
            <li>• More than 50 built-in validators to cover most various types of form field.</li>
            <li>• Easily to develop and reuse your own validator.</li>
            <li>• All validators can be used independently. Inspried by functional programming paradigm, all built in validators are just functions. So you can use it in browser or with ES6 module, server side frameworks such as <a class="blue link" href="https://expressjs.com/">Express</a>:</li>
        </ul>
    </div>

    <div class="mw7 center">   
        <Tabs titles={["Browser", "ES6 module"]}>
            <div>
<SampleCode lang="javascript" code={`
const result = FormValidation.validators.creditCard().validate({
    value: '340653705597107',
    options: {
        message: 'The credit card number is not valid',
    },
});

// result.valid === true
// result.meta.type === 'AMERICAN_EXPRESS'
`} />
            </div>
            <div>
<SampleCode lang="javascript" code={`
// You might need to change the importing path
import creditCard from 'formvalidation/es6/validators/creditCard';

const result = creditCard().validate({
    value: '340653705597107',
    options: {
        message: 'The credit card number is not valid',
    },
});
// result.valid === true
// result.meta.type === 'AMERICAN_EXPRESS'
`} />
            </div>
        </Tabs>
    </div>
</section>

<section class="pv5">
    <div class="mw8 center flex">
        <div class="w-70">
            <DotDotDot />
            <h2 class="f1">Plugin architecture</h2>
            <p class="lh-copy">The giant and old jQuery plugin doesn't exist anymore. With the new plugin based architectue, the library has really small core. Everything else is built around as a plugin.</p>            
        </div>
        <div class="w-30"></div>
    </div>

    <div class="mw7 center">   
        <Tabs titles={["Browser", "ES6 module"]}>
            <div>
<SampleCode lang="javascript" code={`
FormValidation.formValidation(formElement, {
    fields: {
        ...
    },
    plugins: {
        trigger: new FormValidation.plugins.Trigger(),
        submit: new FormValidation.plugins.SubmitButton(),
        bootstrap: new FormValidation.plugins.Bootstrap(),
        icon: new FormValidation.plugins.Icon({
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh',
        }),
    },
});
`} />
            </div>
            <div>
<SampleCode lang="javascript" code={`
import formValidation from 'formvalidation/es6/core/Core';

import Bootstrap from 'formvalidation/es6/plugins/Bootstrap';
import Icon from 'formvalidation/es6/plugins/Icon';
import SubmitButton from 'formvalidation/es6/plugins/SubmitButton';
import Trigger from 'formvalidation/es6/plugins/Trigger';

formValidation(formElement, {
    fields: {
        ...
    },
    plugins: {
        trigger: new Trigger(),
        submit: new SubmitButton(),
        bootstrap: new Bootstrap(),
        icon: new Icon({
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh',
        }),
    },
});
`} />
            </div>
        </Tabs>
    </div>
</section>

<section class="pv5">
    <div class="mw8 center">
        <DotDotDot />
        <h2 class="f1">Support any form, CSS framework</h2>
        <p class="lh-copy">FormValidation is designed to support validating any form that uses or doesn't use with CSS framework. In addition to that, the library provides many built-in plugins which you can plug to use with popular CSS frameworks:</p>            
    </div>

    <div class="mw7 center">
        <ul class="list pa0 flex flex-wrap">
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/bootstrap3/" class="link">
                    <img alt="Bootstrap 3" class="w3 h3 mb1" src="/branches/bootstrap.svg" />
                    <div>Bootstrap 3</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/bootstrap/" class="link">
                    <img alt="Bootstrap 4" class="w3 h3 mb1" src="/branches/bootstrap.svg" />
                    <div>Bootstrap 4</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/bulma/" class="link">
                    <img alt="Bulma" class="w3 h3 mb1" src="/branches/bulma.svg" />
                    <div>Bulma</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/foundation/" class="link">
                    <img alt="Foundation" class="w3 h3 mb1" src="/branches/foundation.svg" />
                    <div>Foundation</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/materialize/" class="link">
                    <img alt="Materialize CSS" class="w3 h3 mb1" src="/branches/materialize.svg" />
                    <div>Materialize CSS</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/milligram/" class="link">
                    <img alt="milligram" class="w3 h3 mb1" src="/branches/milligram.svg" />
                    <div>milligram</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/mini/" class="link flex flex-column items-center">
                    <div class="w3 h3 flex items-center justify-center mb1 f1 white br2 logo-mini">m</div>
                    <div>mini.css</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/mui/" class="link flex flex-column items-center">
                    <div class="w3 h3 flex items-center justify-center br-pill mb1 f3 white logo-mui">MUI</div>
                    <div>Mui CSS</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/pure/" class="link flex flex-column items-center">
                    <div class="w3 h3 flex items-center justify-center mb1 f1 white br2 logo-pure">P</div>
                    <div>Pure CSS</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/semantic/" class="link">
                    <img alt="Semantic" class="w3 h3 mb1" src="/branches/semantic.svg" />
                    <div>Semantic UI</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/shoelace/" class="link">
                    <img alt="Shoelace" class="w3 h3 mb1" src="/branches/shoelace.svg" />
                    <div>Shoelace</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/spectre/" class="link">
                    <img alt="Spectre" class="w3 h3 mb1" src="/branches/spectre.svg" />
                    <div>Spectre</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/tachyons/" class="link flex flex-column items-center">
                    <div class="w3 h3 flex items-center justify-center mb1 f1 white br2 bg-blue">T</div>
                    <div>Tachyons</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/turret/" class="link">
                    <img alt="Turret CSS" class="w3 h3 mb1" src="/branches/turret.svg" />
                    <div>Turret CSS</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="/guide/plugins/uikit/" class="link">
                    <img alt="UIKit" class="w3 h3 mb1" src="/branches/uikit.svg" />
                    <div>UIKit</div>
                </a>
            </li>
        </ul>
        <p class="lh-copy tc">and more landing soon.</p>
    </div>
</section>

<section class="pv5">
    <div class="mw8 center flex">
        <div class="w-70">
            <DotDotDot />
            <h2 class="f1">Integrate with UI libraries</h2>
            <p class="lh-copy">Play nicely with other libraries. It has useful APIs to integrate with another libraries.</p>
        </div>
        <div class="w-30"></div>
    </div>
</section>

<section class="pv5">
    <div class="mw8 center flex">
        <div class="w-30"></div>
        <div class="w-70">
            <DotDotDot />
            <h2 class="f1">Compatible with frameworks</h2>
            <p class="lh-copy">FormValidation can be used with popular frameworks such as React, Preact, Vue, Svelte, etc.</p>
        </div>
    </div>

    <div class="mw7 center">
        <ul class="list pa0 flex flex-wrap">
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Angular" class="w3 h3 mb1" src="/branches/angular.svg" />
                    <div>Angular</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Aurelia" class="w3 h3 mb1" src="/branches/aurelia.svg" />
                    <div>Aurelia</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Backbone" class="w3 h3 mb1" src="/branches/backbone.svg" />
                    <div>Backbone</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Ember" class="w3 h3 mb1" src="/branches/ember.svg" />
                    <div>Ember</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Inferno" class="w3 h3 mb1" src="/branches/inferno.svg" />
                    <div>Inferno</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="jQuery" class="w3 h3 mb1" src="/branches/jquery.svg" />
                    <div>jQuery</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Knockout" class="w3 h3 mb1" src="/branches/knockout.svg" />
                    <div>Knockout</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Hyperapp" class="w3 h3 mb1" src="/branches/hyperapp.svg" />
                    <div>Hyperapp</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Marko" class="w3 h3 mb1" src="/branches/marko.svg" />
                    <div>Marko</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Mithril" class="w3 h3 mb1" src="/branches/mithril.svg" />
                    <div>Mithril</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Preact" class="w3 h3 mb1" src="/branches/preact.svg" />
                    <div>Preact</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="RE:DOM" class="w3 h3 mb1" src="/branches/redom.svg" />
                    <div>RE:DOM</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="React" class="w3 h3 mb1" src="/branches/react.svg" />
                    <div>React</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Riot" class="w3 h3 mb1" src="/branches/riot.svg" />
                    <div>Riot</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Stimulus" class="w3 h3 mb1" src="/branches/stimulus.svg" />
                    <div>Stimulus</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Svelte" class="w3 h3 mb1" src="/branches/svelte.svg" />
                    <div>Svelte</div>
                </a>
            </li>
            <li class="w-20 pa3 tc">
                <a href="javascript: void(0);" class="link">
                    <img alt="Vue" class="w3 h3 mb1" src="/branches/vue.svg" />
                    <div>Vue</div>
                </a>
            </li>
        </ul>
    </div>
</section>

<section class="pv5">
    <div class="mw8 center flex">
        <div class="w-60">
            <DotDotDot />
            <h2 class="f1">Supported browsers</h2>
            <p class="lh-copy">FormValidation works with the latest version of Chrome, Firefox, Safari, Opera, and Edge. Internet Explorer 11 is supported as well.</p>
        </div>
        <div class="w-40">
            <ul class="list flex flex-wrap">
                <li class="w-33 pa3 tc">
                    <img alt="Chrome" class="w3 h3 mb1" src="/branches/chrome.svg" />
                    <div>latest</div>
                </li>
                <li class="w-33 pa3 tc">
                    <img alt="Firefox" class="w3 h3 mb1" src="/branches/firefox.svg" />
                    <div>latest</div>
                </li>
                <li class="w-33 pa3 tc">
                    <img alt="Safari" class="w3 h3 mb1" src="/branches/safari.svg" />
                    <div>latest</div>
                </li>
                <li class="w-33 pa3 tc">
                    <img alt="Opera" class="w3 h3 mb1" src="/branches/opera.svg" />
                    <div>latest</div>
                </li>
                <li class="w-33 pa3 tc">
                    <img alt="Edge" class="w3 h3 mb1" src="/branches/edge.svg" />
                    <div>latest</div>
                </li>
                <li class="w-33 pa3 tc">
                    <img alt="Internet Explorer 11" class="w3 h3 mb1" src="/branches/ie.svg" />
                    <div>11</div>
                </li>
            </ul>
        </div>
    </div>
</section>

<section class="bt bw2 b--light-gray pv5">
    <div class="mw8 center">
        <DotDotDot />
        <h2 class="f1 lh-copy">Used by thousand developers and designers like you</h2>

        <div class="cf ph2-ns">
            <Testimonial user="CreativeTim" avatar="CreativeTim.jpg">Validation plugin for Bootstrap from @formvalidation. Give it a try, looks great!</Testimonial>
            <Testimonial user="scokmen" avatar="scokmen.jpg">You saved my day @formvalidation</Testimonial>
            <Testimonial user="CurtStaubach" avatar="CurtStaubach.jpeg">Be sure to check out Bootstrap Validator. It's the best I've found.</Testimonial>
        </div>

        <div class="cf ph2-ns">
            <Testimonial user="Agarney" avatar="Agarney.jpg">Money well spent. A must have plug-in if you use Bootstrap regularly.</Testimonial>
            <Testimonial user="timkinnane" avatar="timkinnane.jpg">Just grabbed FormValidation license. It's perfect for #bootstrap projects. Very worth.</Testimonial>
            <Testimonial user="RC_Programmers" avatar="RC_Programmers.jpeg">Buy a license for @formvalidation. It's best tool I ever used.</Testimonial>
        </div>

        <div class="cf ph2-ns">
            <Testimonial user="sitesbyjoe" avatar="sitesbyjoe.jpeg">Just bought a copy of <a href="/" class="blue dim link">formvalidation.io</a> - looks extremely well built and is designed to work with bootstrap!</Testimonial>
            <Testimonial user="barrylangdon1" avatar="barrylangdon1.jpg">Awesome jQuery plugin for form validation <a href="/" class="blue dim link">http://formvalidation.io</a> @formvalidation #jquery #FormValidation.</Testimonial>
            <Testimonial user="Mahdixco" avatar="Mahdixco.jpg">Wow, Its Very Awesome for Form Validation I Recommend use it &lt;3 @formvalidation</Testimonial>
        </div>

        <div class="cf ph2-ns">
            <Testimonial user="imagineteamsol" avatar="imagineteamsol.png">Just had a fantastic development experience with @formvalidation using <a href="https://twitter.com/twbootstrap" class="blue dim link">@twbootstrap</a> and <a href="https://twitter.com/jquery" class="blue dim link">@jquery</a>. You're a champion!</Testimonial>
            <Testimonial user="JonStanton" avatar="JonStanton.jpg">Fantastic support from @formvalidation. Several emails back and forth and completely sorted within a couple of hours. #worthpraising</Testimonial>
            <Testimonial user="johnnydriesen" avatar="johnnydriesen.jpg">AMAZING solution and very declarative source code. This is TOP support! Keep on doing the good work. I became a fan!</Testimonial>
        </div>
    </div>
</section>

<script>
import Typed from '../_demo/typed/Tachyons.svelte';
import DotDotDot from '../components/DotDotDot.svelte';
import SampleCode from '../components/SampleCode.svelte';
import Tab from '../components/Tab.svelte';
import Tabs from '../components/Tabs.svelte';
import Testimonial from '../components/Testimonial.svelte';
</script>

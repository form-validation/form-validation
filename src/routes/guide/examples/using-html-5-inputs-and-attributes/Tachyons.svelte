<TachyonsLayout>
    <form id="demoForm" method="POST">
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Username</div>
                <div class="fl w-40">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="username"
                        required
                        data-fv-not-empty___message="The username is required"
                        
                        pattern="^[a-zA-Z0-9]+$"
                        data-fv-regexp___message="The username can only consist of alphabetical, number" />
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Email address</div>
                <div class="fl w-40">
                    <input class="input-reset ba b--black-20 pa2 mb2 db w-100" name="email"
                        type="email"
                        data-fv-email-address___message="The input is not a valid email address"
                        
                        required
                        data-fv-not-empty___message="The email is required" />
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Website</div>
                <div class="fl w-40">
                    <input class="input-reset ba b--black-20 pa2 mb2 db w-100" name="website"
                        type="url"
                        data-fv-uri___message="The input is not a valid website address"
                        
                        required
                        data-fv-not-empty___message="The website is required" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Fav color</div>
                <div class="fl w-40">
                    <input class="input-reset ba b--black-20 pa2 mb2 db w-100" name="color"
                        type="color"
                        data-fv-color___message="The input is not a valid color code"
                        
                        required
                        data-fv-not-empty___message="The color is required" />
                </div>
            </div>
        </div>
    
        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2">Age</div>
                <div class="fl w-20">
                    <input type="text" class="input-reset ba b--black-20 pa2 mb2 db w-100" name="age"
                        min="10"
                        data-fv-greater-than___inclusive="true"
                        data-fv-greater-than___message="The input must be greater than or equal to 10"
        
                        max="100"
                        data-fv-less-than___inclusive="false"
                        data-fv-less-than___message="The input must be less than 100"
                        
                        required
                        data-fv-not-empty___message="The age is required" />
                </div>
            </div>
        </div>

        <div class="cf mb2">
            <div class="fl w-100">
                <div class="fl w-25 pa2"></div>
                <div class="fl w-50">
                    <button type="submit" class="ba b--black-20 bg-blue white ph3 pv2 br2">Submit</button>
                </div>
            </div>
        </div>
    </form>
</TachyonsLayout>

<script>
import { onMount } from 'svelte';

import formValidation from 'formvalidation/dist/es6/core/Core';
import Declarative from 'formvalidation/dist/es6/plugins/Declarative';
import DemoFrame from 'formvalidation/dist/es6/plugins/DemoFrame';
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Tachyons from 'formvalidation/dist/es6/plugins/Tachyons';

import sampleCode from './tachyons.programmatic';
import TachyonsLayout from '../../../../components/demo/TachyonsLayout.svelte';

onMount(() => {
    const fv = formValidation(document.getElementById('demoForm'), {
        plugins: {
            declarative: new Declarative({
                html5Input: true,
            }),
            trigger: new Trigger(),
            tachyons: new Tachyons(),
            submitButton: new SubmitButton(),
            icon: new Icon({
                valid: 'fa fa-check',
                invalid: 'fa fa-times',
                validating: 'fa fa-refresh',
            }),
            demoFrame: new DemoFrame({
                sender: '/guide/examples/using-html-5-inputs-and-attributes/tachyons',
                sampleCode: sampleCode,
            }),
        },
    });

    return () => {
        fv.destroy();
    };
});
</script>

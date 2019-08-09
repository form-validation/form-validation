<svelte:head>
	<title>FormValidation • Integrating with Mithril</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Integrating with Mithril</h1>

    <section class="mv5">
        <p class="lh-copy">This page will help you integrate FormValidation with the <a href="https://mithril.js.org" rel="noopener" target="_blank" class="blue dim link">Mithril framework</a>.</p>
        <p class="lh-copy">For the sake of simplicity, we are about to validate a simple login form with just two fields to input the username and password:</p>
<SampleCode lang="html" code={`
<form id="loginForm" method="POST">
    <div class="form-group row">
        <label class="col-sm-3 col-form-label">Username</label>
        <div class="col-sm-4">
            <input type="text" class="form-control" name="username" />
        </div>
    </div>

    <div class="form-group row">
        <label class="col-sm-3 col-form-label">Password</label>
        <div class="col-sm-4">
            <input type="password" class="form-control" name="password" />
        </div>
    </div>

    <div class="form-group row">
        <div class="col-sm-9 offset-sm-3">
            <button type="submit" class="btn btn-primary">Login</button>
        </div>
    </div>
</form>
`} />
        <p class="lh-copy">It's recommened to put the form inside a component:</p>
<SampleCode lang="javascript" code={`
// LoginForm.js
var LoginForm = {
    state: {
        username: '',
        password: '',
    },    
    view: function() {
        return m(
            'form',
            { id: 'loginForm', method: 'POST' },
            m(
                'div', { class: 'form-group row'},
                m('label', { class: 'col-sm-3 col-form-label' }, 'Username'),
                m(
                    'div',
                    { class: 'col-sm-4' }, 
                    m(
                        'input',
                        { class: 'form-control', type: 'text', name: 'username', oninput: (e) => this.state.username = e.target.value, value: this.state.username }
                    )
                )
            ),
            m(
                'div', { class: 'form-group row'},
                m('label', { class: 'col-sm-3 col-form-label' }, 'Password'),
                m(
                    'div',
                    { class: 'col-sm-4' },
                    m(
                        'input',
                        { class: 'form-control', type: 'password', name: 'password', oninput: (e) => this.state.password = e.target.value, value: this.state.password }
                    )
                )
            ),
            m(
                'div', { class: 'form-group row'},
                m(
                    'div',
                    { class: 'col-sm-9 offset-sm-3' },
                    m(
                        'button',
                        { class: 'btn btn-primary', type: 'submit' },
                        'Login'
                    )
                )
            )
        ); 
    },
};    
`} />        
    </section>

    <section class="mv5">
        <Heading>Creating a FormValidation instance</Heading>
        <p class="lh-copy">The best place to initialize a FormValidation instance is inside the component's <a href="https://mithril.js.org/lifecycle-methods.html#oncreate" rel="noopener" target="_blank" class="blue dim link">oncreate event</a>:</p>
<SampleCode lang="javascript" code={`
// LoginForm.js
var LoginForm = {
    oncreate: function(vnode) {
        // Create a FormValidation instance
        this.fv = FormValidation.formValidation(document.getElementById('loginForm'), {
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The username must be more than 6 and less than 30 characters long',
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: 'The username can only consist of alphabetical, number and underscore',
                        },
                    }
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: 'The password is required'
                        },
                        stringLength: {
                            min: 8,
                            message: 'The password must have at least 8 characters',
                        },
                    }
                },
            },
            plugins: {
                trigger: new FormValidation.plugins.Trigger(),
                submitButton: new FormValidation.plugins.SubmitButton(),
                bootstrap: new FormValidation.plugins.Bootstrap(),
                icon: new FormValidation.plugins.Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
            },
        });
    },
};
`} />      
    </section>

    <section class="mv5">
        <Heading>Destroying FormValidation instance</Heading>
        <p class="lh-copy">Mithril component triggers the <a href="https://mithril.js.org/lifecycle-methods.html#onremove" rel="noopener" target="_blank" class="blue dim link">onremove event</a> when it's removed from page or not used anymore. It's the time to destroy our FormValidation instance by using the <a href="/guide/api/destroy" class="blue dim link">destroy() method</a>:</p>
<SampleCode lang="javascript" code={`
var LoginForm = {
    onremove() {
        if (this.fv) {
            this.fv.destroy();
        }
    },
};
`} />     
    </section>

    <Examples examples={[
        'Integrating with Inferno',
        'Integrating with Mithril',
        'Integrating with Preact',
        'Integrating with RE:DOM',
        'Integrating with React',
        'Integrating with Riot',
        'Integrating with Svelte',
        'Integrating with Vue',
    ]} />
</GuideLayout>

<script>
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import Heading from '../../../../components/Heading.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

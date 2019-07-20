<svelte:head>
	<title>FormValidation • Integrating with React</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Integrating with React</h1>

    <section class="mv5">
        <p class="lh-copy">This page will help you integrate FormValidation with the <a href="https://reactjs.org" rel="noopener" target="_blank" class="blue dim link">React library</a>.</p>
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
    </section>

    <section class="mv5">
        <Heading>Bundling the library</Heading>
        <p class="lh-copy">First of all, you need to look at the following guide to see how we can bundle FormValidation with popular bundlers:</p>
        <ul class="lh-copy ma0 pa0 ml3">
            <li><a href="/guide/examples/bundling-with-rollup" class="blue dim link">Bundling with Rollup</a></li>
            <li><a href="/guide/examples/bundling-with-webpack" class="blue dim link">Bundling with Webpack</a></li>
        </ul>
    </section>

    <section class="mv5">
        <Heading>Creating a FormValidation instance</Heading>
        <p class="lh-copy">The best place to initialize a FormValidation instance is inside the component's <a href="https://reactjs.org/docs/react-component.html#componentdidmount" rel="noopener" target="_blank" class="blue dim link">componentDidMount event</a>:</p>
<SampleCode lang="javascript" code={`
import formValidation from 'formvalidation/dist/es6/core/Core';

class LoginForm extends React.Component {
    render() {
        return (
            // Render the form ...
        );
    }

    componentDidMount() {
        // Create a FormValidation instance
        this.fv = formValidation(document.getElementById('loginForm'), {
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
                ...
            },
        });
    }
}
`} />      
    </section>

    <section class="mv5">
        <Heading>Using the plugins</Heading>
        <p class="lh-copy">In order to use the <a href="/guide/plugins" class="blue dim link">plugins</a>, we need to import them:</p>
<SampleCode lang="javascript" code={`
import formValidation from 'formvalidation/dist/es6/core/Core';

// FormValidation plugins
import Icon from 'formvalidation/dist/es6/plugins/Icon';
import Trigger from 'formvalidation/dist/es6/plugins/Trigger';
import Bootstrap from 'formvalidation/dist/es6/plugins/Bootstrap';
import SubmitButton from 'formvalidation/dist/es6/plugins/SubmitButton';

class LoginForm extends React.Component {
    componentDidMount() {
        this.fv = formValidation(document.getElementById('loginForm'), {
            fields: {
                ...
            },
            plugins: {
                trigger: new Trigger(),
                bootstrap: new Bootstrap(),
                icon: new Icon({
                    valid: 'fa fa-check',
                    invalid: 'fa fa-times',
                    validating: 'fa fa-refresh'
                }),
                submitButton: new SubmitButton(),
            },
        });
    }
}
`} />  
        <p class="lh-copy">Now the FormValidation instance is ready, you can listen on the <a href="/guide/events" class="blue dim link">events</a> or call <a href="/guide/api" class="blue dim link">API</a>:</p>

<SampleCode lang="javascript" code={`
// Listen on event
this.fv.on('core.field.invalid', (e) => {
    ...
});

// Call API
this.fv.revalidateField('...');
`} />
    </section>

    <section class="mv5">
        <Heading>Registering validator</Heading>
        <p class="lh-copy">You don't need to follow this section if you are using a <a href="/guide/validators#popular-validators" class="blue dim link">popular validator</a>. The popular validator is ready when you import the FormValidation's core:</p>

<SampleCode lang="javascript" code={`
import formValidation from 'formvalidation/dist/es6/core/Core';
`} />

        <p class="lh-copy">In the other cases, you have to use the <a href="/guide/api/register-validator" class="blue dim link">registerValidator() method</a> to let the library knows where it can find a <a href="/guide/validators#special-validators" class="blue dim link">special</a> or <a href="/guide/examples/creating-a-custom-validator" class="blue dim link">custom validator</a>:</p>

<SampleCode lang="javascript" code={`
// Import an external validator
import phone from 'formvalidation/dist/es6/validators/phone';

// Or import your own validator
import strongPassword from '/path/to/your/strongPassword';

class LoginForm extends React.Component {
    componentDidMount() {
        this.fv = formValidation(document.getElementById('loginForm'), {
            fields: {
                phoneNumber: {
                    validators: {
                        phone: { ... }
                    }
                },
                password: {
                    validators: {
                        checkPassword: { ... }
                    }
                },
            },
        });

        // Register validators
        this.fv.registerValidator('phone', phone)
               .registerValidator('checkPassword', strongPassword);
    }
}
`} />
    </section>

    <section class="mv5">
        <Heading>Destroying FormValidation instance</Heading>
        <p class="lh-copy">React component triggers the <a href="https://reactjs.org/docs/react-component.html#componentwillunmount" rel="noopener" target="_blank" class="blue dim link">componentWillUnmount event</a> when it's removed from page or not used anymore. It's the time to destroy our FormValidation instance by using the <a href="/guide/api/destroy" class="blue dim link">destroy() method</a>:</p>
<SampleCode lang="javascript" code={`
class LoginForm extends React.Component {
    componentWillUnmount() {
        if (this.fv) {
            this.fv.destroy();
        }
    }
}
`} />     
    </section>

    <Examples examples={[
        'Bundling with Rollup',
        'Bundling with Webpack',
        'Integrating with Preact',
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

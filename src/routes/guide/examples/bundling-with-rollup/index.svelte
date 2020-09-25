<svelte:head>
	<title>FormValidation • Bundling with Rollup</title>
</svelte:head>

<GuideLayout>
    <h1 class="tc lh-copy">Bundling with Rollup</h1>

    <section class="mv5">
        <p class="lh-copy">FormValidation was rewritten in ES6 from v1.0.0. It comes with the <code>dist/es6</code> directory that consists of ES6 compatible classes. This guide shows how you can bundle FormValidation with <a href="https://rollupjs.org" target="_blank" rel="noopener" class="blue dim link">Rollup</a>.</p>
        <p class="lh-copy">Assume that your folder has the following structure:</p>

<SampleCode lang="html" code={`
the-root-directory
    |
    ├── node_modules
    ├── vendors
    |   └── formvalidation
    |       └── dist
    |           └── es6
    └── rollup.config.js
`} />
        
        <p class="lh-copy">Now, you can set the alias to FormValidation by installing the <a href="https://github.com/rollup/rollup-plugin-alias" target="_blank" rel="noopener" class="blue dim link">rollup-plugin-alias</a> plugin:</p>
        
<SampleCode lang="html" code={`
// Run this command from the root directory
$ npm install --save-dev rollup-plugin-alias
`} />

        <p class="lh-copy">and using it in <code>rollup.config.js</code>:</p>
<SampleCode lang="javascript" code={`
// rollup.config.js
import alias from 'rollup-plugin-alias';
const path = require('path');

module.exports = {
    plugins: [
        alias({
            formvalidation: path.resolve(__dirname, 'vendors/formvalidation/dist/es6'),
        }),
    ],
    ...
};
`} />

        <p class="lh-copy">From now on, you can import any file from FormValidation ES6 package as following:</p>

<SampleCode lang="javascript" code={`
// Use the algorithms
import luhn from 'formvalidation/algorithms/luhn';

// Use the validators
import creditCard from 'formvalidation/validators/creditCard';

const result = creditCard().validate({
    value: ...,
    options: {
        message: ...,
    },
});

// Use the core library
import formValidation from 'formvalidation/core/Core';

// Use the plugins
import Icon from 'formvalidation/plugins/Icon';
import Trigger from 'formvalidation/plugins/Trigger';
import Bootstrap from 'formvalidation/plugins/Bootstrap';
...
`} />
    </section>

    <Examples examples={[
        'Bundling with Rollup',
        'Bundling with Webpack',
    ]} />
</GuideLayout>

<script>
import Examples from '../../../../components/Examples.svelte';
import GuideLayout from '../../../../components/GuideLayout.svelte';
import SampleCode from '../../../../components/SampleCode.svelte';
</script>

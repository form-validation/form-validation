<svelte:head>
	<title>FormValidation • Download</title>
</svelte:head>

<Layout>
    <h1 class="f3 f2-m f1-l tc">Download</h1>

    <section class="mv5">
        <Heading>Give it a try</Heading>
        <p class="lh-copy">Below is basic working examples of FormValidation using with popular CSS frameworks and a native form.</p>
        <Demo prefix="/download/register" frameworks={['bootstrap', 'bootstrap3', 'bulma', 'foundation', 'materialize', 'milligram', 'mini', 'mui', 'pure', 'semantic', 'shoelace', 'spectre', 'tachyons', 'turret', 'uikit', 'native']} />
    </section>

    <section class="mv5">
        <Heading>Purchase once, upgrade for free</Heading>
        <p class="tc lh-copy i">The latest version, <a href="/updates" class="blue dim link">v{siteData.version}</a>, was released on {siteData.releasedDate}.</p>
        <p class="tc">Choose the right package to purchase</p>
        <div class="w-100 dt tc ba b--light-blue br2">
            <div class="w-50 dtc-ns br b--light-blue">
                <h3>Developer</h3>
                <p class="dib f2 fw6">50$</p>
                <ul class="list ma0 pa0 lh-copy">
                    <li class="b">1 user</li>
                    <li>Free lifetime upgrade</li>
                    <li>Use in multiple websites</li>
                    <li>Full source code</li>
                </ul>
                <p class="lh-copy bt b--light-blue pv4">
                    <a href="https://sellfy.com/p/uitF/" class="w-75 f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" title="Purchase FormValidation developer commercial license">Purchase with Paypal</a>
                </p>
                <p class="lh-copy">
                    <a href="https://gum.co/formvalidation-developer-license" class="w-75 f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" title="Purchase FormValidation developer commercial license">Purchase with credit card<sup>*</sup></a>
                </p>
                <p class="lh-copy"><small>* If you live in a EU country, VAT is charged</small></p>
            </div>

            <div class="w-100 dtc-ns">
                <h3>Organization</h3>
                <p class="dib f2 fw6">200$</p>
                <ul class="list ma0 pa0 lh-copy">
                    <li class="b">Unlimited users</li>
                    <li>Free lifetime upgrade</li>
                    <li>Use in multiple websites</li>
                    <li>Full source code</li>
                </ul>
                <p class="lh-copy bt b--light-blue pv4">
                    <a href="https://sellfy.com/p/eQiZ/" class="w-75 f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" title="Purchase FormValidation organization commercial license">Purchase with Paypal</a>
                </p>
                <p class="lh-copy">
                    <a href="https://gum.co/formvalidation-organization-license" class="w-75 f6 f5-ns fw6 dib ba b--black-20 bg-blue white ph3 ph4-ns pv2 pv3-ns br2 grow no-underline" title="Purchase FormValidation organization commercial license">Purchase with credit card <sup>*</sup></a>
                </p>
                <p class="lh-copy"><small>* If you live in a EU country, VAT is charged</small></p>
            </div>
        </div>

        <p class="tc">
            All transactions are processed on <a href="https://sellfy.com/phuocng/" class="blue dim link">Sellfy</a>, <a href="https://gumroad.com/phuocng/" class="blue dim link">GumRoad</a> through an <strong>encrypted HTTP Secure</strong> connection
        </p>
    </section>

    <section class="mv5">
        <Heading>Questions</Heading>

        <div class="flex">
            <div class="w-third pa2">
                <div>
                    <p class="b">• How do I download the library?</p>
                    <div class="lh-copy">After doing the purchase, you will get an email from <span class="i">Sellfy</span> or <span class="i">Gumroad</span> containing the download link.</div>
                </div>
            </div>
            <div class="w-third pa2">
                <div>
                    <p class="b">• How do I upgrade the library?</p>
                    <div class="lh-copy">You can use the current download link to get the latest version for free. If the link does not work, please send <a href="mailto: {siteData.email}" class="blue dim link">me</a> your email address which you used to purchase.</div>
                </div>
            </div>
            <div class="w-third pa2">
                <div>
                    <p class="b">• I do not receive the download link</p>
                    <div class="lh-copy">Please check your spam or junk folder in your mailbox. If you still do not receive the download link, please drop <a href="mailto: {siteData.email}" class="blue dim link">me</a> a message.</div>
                </div>
            </div>
        </div>
    </section>
</Layout>

<script>
import siteData from '../../components/constants/SiteData';

import Demo from '../../components/Demo.svelte';
import Heading from '../../components/Heading.svelte';
import Layout from '../../components/Layout.svelte';
</script>

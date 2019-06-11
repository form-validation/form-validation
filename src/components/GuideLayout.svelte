<Layout>
    <div class="flex h-100">
        <div class="w-25 pv3 br b--black-30">
            <ul class="list pa0 ma0 f3 lh-copy">
                <li>
                    <a href="/guide/getting-started/" class="mv2 pl3 fw6 db link">Getting Started</a>
                    {#if path.startsWith('/guide/getting-started/')}
                    <ul class="list pa0 ma0 f5 lh-copy">
                        <li><SidebarLinkWithToc url="/guide/getting-started/" title="Overview" content={() => content}>Overview</SidebarLinkWithToc></li>
                        <li><SidebarLinkWithToc url="/guide/getting-started/usage/" title="Usage" content={() => content}>Usage</SidebarLinkWithToc></li>
                        <li><SidebarLinkWithToc url="/guide/getting-started/localization/" title="Localization" content={() => content}>Localization</SidebarLinkWithToc></li>
                        <li><SidebarLinkWithToc url="/guide/getting-started/special-field-name/" title="Special field name" content={() => content}>Special field name</SidebarLinkWithToc></li>
                        <li><SidebarLinkWithToc url="/guide/getting-started/field-selector/" title="Field selector" content={() => content}>Field selector</SidebarLinkWithToc></li>
                    </ul>
                    {/if}
                </li>
                <li>
                    <a href="/guide/validators/" class="mv2 pl3 fw6 db link">Validators ({Object.keys(Validators).length})</a>
                    {#if path.startsWith('/guide/validators/')}
                    <ul class="list pa0 ma0 f5 lh-copy">
                        <li><SidebarLinkWithToc url="/guide/validators/" title="Overview" content={() => content}>Overview</SidebarLinkWithToc></li>
                        {#each Validators as v}
                        <li><SidebarLinkWithToc url="/guide/validators/{camelCaseToDash(v.name)}/" title="{v.description}" content={() => content} isActive={(p, url) => p.startsWith(url)}>{v.name}</SidebarLinkWithToc></li>
                        {/each}
                    </ul>
                    {/if}
                </li>
                <li>
                    <a href="/guide/plugins/" class="mv2 pl3 fw6 db link">Plugins ({Object.keys(Plugins).length})</a>
                    {#if path.startsWith('/guide/plugins/')}
                    <ul class="list pa0 ma0 f5 lh-copy">
                        <li><SidebarLinkWithToc url="/guide/plugins/" title="Overview" content={() => content}>Overview</SidebarLinkWithToc></li>
                        {#each Plugins as p}
                        <li><SidebarLinkWithToc url="/guide/plugins/{camelCaseToDash(p.name)}/" title="{p.desc.replace(/<\/?[^>]+(>|$)/g, "")}" content={() => content}>{p.name}</SidebarLinkWithToc></li>
                        {/each}
                    </ul>
                    {/if}
                </li>
                <li>
                    <a href="/guide/api/" class="mv2 pl3 fw6 db link">API</a>
                    {#if path.startsWith('/guide/api/')}
                    <ul class="list pa0 ma0 f5 lh-copy">
                        <li><li><SidebarLinkWithToc url="/guide/api/" title="Overview" content={() => content}>Overview</SidebarLinkWithToc></li>
                        {#each APIs as name}
                        <li><SidebarLinkWithToc url="/guide/api/{camelCaseToDash(name)}/" title="{name}() method" content={() => content}>{name}</SidebarLinkWithToc></li>
                        {/each}
                    </ul>
                    {/if}
                </li>
                <li>
                    <a href="/guide/events/" class="mv2 pl3 fw6 db link">Events</a>
                    {#if path.startsWith('/guide/events/')}
                    <ul class="list pa0 ma0 f5 lh-copy">
                        <li><SidebarLinkWithToc url="/guide/events/" title="Overview" content={() => content}>Overview</SidebarLinkWithToc></li>
                        {#each Events as name}
                        <li><SidebarLinkWithToc url="/guide/events/{name}/" title="{name}" content={() => content}>{name}</SidebarLinkWithToc></li>
                        {/each}
                    </ul>
                    {/if}
                </li>
                <li><SidebarLink url="/guide/examples/" title="Examples" customClasses="mv2 pl3 fw6" isActive={(p, url) => p.startsWith(url)}>Examples</SidebarLink></li>
            </ul>
        </div>

        <div class="w-75 pv3 ph4" bind:this={content}><slot></slot></div>
    </div>
</Layout>

<script>
import { onMount } from 'svelte';

import Layout from './Layout.svelte';
import SidebarLink from './SidebarLink.svelte';
import SidebarLinkWithToc from './SidebarLinkWithToc.svelte';

import Plugins from './constants/Plugins';
import Validators from './constants/Validators';
import camelCaseToDash from './helpers/camelCaseToDash';

// Private
let path = '';
let content;

let hash = '';
let APIs = [
    'addField',
    'deregisterFilter',
    'deregisterPlugin',
    'destroy',
    'disableValidator',
    'enableValidator',
    'getElements',
    'getElementValue',
    'getFields',
    'getFormElement',
    'getPlugin',
    'off',
    'on',
    'registerFilter',
    'registerPlugin',
    'registerValidator',
    'removeField',
    'resetField',
    'resetForm',
    'revalidateField',
    'setLocale',
    'updateElementStatus',
    'updateFieldStatus',
    'updateValidatorOption',
    'validate',
    'validateElement',
    'validateField',
];
let Events = [
    'core.element.notvalidated',
    'core.element.validated',
    'core.element.validating',
    'core.field.added',
    'core.field.invalid',
    'core.field.removed',
    'core.field.reset',
    'core.field.valid',
    'core.field.validating',
    'core.form.invalid',
    'core.form.notvalidated',
    'core.form.reset',
    'core.form.valid',
    'core.form.validating',
    'core.validator.notvalidated',
    'core.validator.validated',
    'core.validator.validating',
];

onMount(() => {
    path = window.location.pathname;
});
</script>

<Layout>
    <div class="flex">
        <div class="w-25 pv3 br b--black-30">
            <p class="mv2 pl3 f3 fw6">Versions</p>
            <ul class="list pa0 ma0 f5 lh-copy">
                {#each Object.entries(Versions) as [ver, date]}
                <li><SidebarLinkWithToc url="{ver === siteData.version ? '/updates' : `/updates/v${ver}`}" title="v{ver}" content={() => content}>v{ver} - <small>{date}</small>{#if ver === '1.0.0'}<span class="pl3 b">Hooray!</span>{/if}</SidebarLinkWithToc></li>
                {/each}
            </ul>
        </div>

        <div class="w-75 pv3 ph4"  bind:this={content}><slot></slot></div>
    </div>
</Layout>

<script>
import { onMount } from 'svelte';

import Layout from './Layout.svelte';
import SidebarLinkWithToc from './SidebarLinkWithToc.svelte';
import siteData from './constants/SiteData';

let path = '';
let content;

const Versions = {
    '1.6.0': '06 Fab 2020',
    '1.5.0': '10 Jul 2019',
    '1.4.0': '20 Apr 2019',
    '1.3.0': '10 Aug 2018',
    '1.2.0': '15 Jul 2018',
    '1.1.0': '08 Jul 2018',
    '1.0.1': '29 Jun 2018',
    '1.0.0': '10 Jun 2018',
    '0.8.1': '27 Sep 2016',
    '0.8.0': '27 Jun 2016',
    '0.7.1': '01 Feb 2016',
    '0.7.0': '01 Aug 2015',
    '0.6.3': '31 May 2015',
    '0.6.2': '02 Apr 2015',
    '0.6.1': '24 Feb 2015',
    '0.6.0': '06 Jan 2015',
    '0.5.3': '05 Nov 2014',
    '0.5.2': '25 Sep 2014',
    '0.5.1': '22 Aug 2014',
    '0.5.0': '14 Jul 2014',
    '0.4.5': '15 May 2014',
    '0.4.4': '05 May 2014',
    '0.4.3': '26 Apr 2014',
    '0.4.2': '19 Apr 2014',
    '0.4.1': '12 Apr 2014',
    '0.4.0': '03 Apr 2014',
    '0.3.3': '27 Mar 2014',
    '0.3.2': '21 Mar 2014',
    '0.3.1': '17 Mar 2014',
    '0.3.0': '10 Mar 2014',
    '0.2.2': '07 Jan 2014',
    '0.2.1': '08 Nov 2013',
    '0.2.0': '21 Oct 2013',
    '0.1.1': '17 Oct 2013',
    '0.1.0': '14 Oct 2013',
};

onMount(() => {
    path = window.location.pathname;
});
</script>

<ul class="list pl0 mb0 list pa0 ma0 flex items-center justify-center">
    {#each titles as title, i}
    <Tab title={title} isSelected={i === activeIndex} on:active={active(i)}/>
    {/each}
</ul>
<div bind:this={contentEle}>
    <slot></slot>
</div>

<script>
import { onMount } from 'svelte';

import Tab from './Tab.svelte';

let contentEle;
let tabs;
let currentTab;
let activeIndex = 0;

// Public props
let titles = [];

const active = index => e => {
    activeIndex = index;
    currentTab.classList.add('dn');
    currentTab = tabs[index];
    currentTab.classList.remove('dn');
};

onMount(() => {
    tabs = contentEle.children;
    const numTabs = tabs.length;

    // Hide all child nodes except the first one
    for (let i = 0; i < numTabs; i++) {
        (tabs[i].classList) ? tabs[i].classList.add('dn') : tabs[i].className = 'dn';
    }

    currentTab = tabs[0];
    currentTab.classList.remove('dn');
});

export {
    titles,
};
</script>

<div class="overflow-hidden">
    <Tabs titles={["Demo", "Code"]} on:activateTab={onActivateTab}>
        <div>
            <Loader isDone={_loaded}>
                <ReceiveMessage type="DEMO_UPDATE_STATUS" from="{prefix}/{selectedFramework}" on:received={updateHeight}>
                    <iframe class="bn w-100" src="{prefix}/{selectedFramework}" title="Demo" bind:this={_demoFrame} on:load={onDemoLoaded} />
                </ReceiveMessage>
            </Loader>
        </div>

        <div class="dn">
            <ReceiveMessage type="SAMPLE_CODE" from="{prefix}/{selectedFramework}" on:received={onReceiveMessage}>
                {#if _code}<SampleCode lang="html" code={_code} />{/if}
            </ReceiveMessage>
        </div>
    </Tabs>
</div>

<script>
import SupportedFramework from './constants/SupportedFramework';

import Loader from './Loader.svelte';
import Popover from './Popover.svelte';
import SampleCode from './SampleCode.svelte';
import ReceiveMessage from './ReceiveMessage.svelte';
import Tabs from './Tabs.svelte';

let _code = '';
let _loaded = false;
let _demoFrame;
let selectedTab = 0;

// Props
let prefix = '';
let frameworks = ['Tachyons'];
let selected = '';
// Set it to true if the demo supports native form without using any CSS framework
let supportNativeForm = false;

let selectedFramework = selected || (frameworks.indexOf('Tachyons') === -1 ? frameworks[0] : 'Tachyons');
let demos = supportNativeForm ? frameworks.sort().concat(['Native']) : frameworks.sort();

const onActivateTab = (e) => {
    selectedTab = e.detail.index;
};

const updateHeight = () => {
    const frameBody = _demoFrame.contentDocument.body;
    _demoFrame.setAttribute('height', `${frameBody.scrollHeight}px`);
};

const onReceiveMessage = (e) => {
    _code = e.detail.data;
};

const onDemoLoaded = () => {
    if (selectedTab == 0) {
        updateHeight();
    }
    _loaded = true;
};

export {
    prefix,
    frameworks,
    selected,
    supportNativeForm,
};
</script>

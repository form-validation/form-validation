<div class="overflow-hidden">
    <Tabs titles={["Demo", "Code"]} on:activateTab={onActivateTab}>
        <div>
            <div class="br2 ba b--black-20">
                <div class="flex ph2 pv1 bb b--black-20 items-center">
                    <div class="br-100 mr1 w1 h1 bg-red"></div>
                    <div class="br-100 mr1 w1 h1 bg-gold"></div>
                    <div class="br-100 mr1 w1 h1 bg-red"></div>
                    <div class="ml-auto mr1">
                        <select class="input-reset pa1 ba b--black-20 bg-transparent" style="width: 120px;" bind:value={selected} on:change={onChangeFramework}>
                            {#each frameworks as framework}
                            <option value={framework}>{#if (framework === 'Native')}Native form{:else}{SupportedFramework[framework.toLowerCase()].name}{/if}</option>
                            {/each}
                        </select>
                    </div>
                    <div>↓</div>
                </div>
                <div class="pa3">
                    <Loader isDone={_loaded}>
                        <ReceiveMessage channel="DEMO_UPDATE_STATUS" sender="{prefix}/{selected}" on:received={updateHeight}>
                            <iframe class="bn w-100" src="{prefix}/{selected}" title="Demo" bind:this={_demoFrame} on:load={onDemoLoaded} />
                        </ReceiveMessage>
                    </Loader>
                </div>
            </div>
        </div>

        <div class="dn">
            <ReceiveMessage channel="SAMPLE_CODE" sender="{prefix}/{selected}" on:received={onReceiveMessage}>
                {#if _code}<SampleCode lang="html" code={_code} />{/if}
            </ReceiveMessage>
        </div>
    </Tabs>
</div>

<script>
import SupportedFramework from './constants/SupportedFramework';

import Loader from './Loader.svelte';
import SampleCode from './SampleCode.svelte';
import ReceiveMessage from './ReceiveMessage.svelte';
import Tabs from './Tabs.svelte';

let _code = '';
let _loaded = false;
let _demoFrame;
let _selectedTab = 0;

// Props
let prefix = '';
let frameworks = ['Tachyons'];
let selected = 'Tachyons';

const onActivateTab = (e) => {
    _selectedTab = e.detail.index;
};

const updateHeight = () => {
    const frameBody = _demoFrame.contentDocument.body;
    const height = frameBody.scrollHeight;
    if (height > 0) {
        _demoFrame.setAttribute('height', `${height}px`);
    }
};

const onReceiveMessage = (e) => {
    _code = e.detail.data;
};

const onDemoLoaded = () => {
    if (_selectedTab === 0) {
        updateHeight();
    }
    _loaded = true;
};

const onChangeFramework = (e) => {
    selected = e.target.value;
    _loaded = false;
    _code = '';
};

export {
    prefix,
    frameworks,
    selected,
};
</script>

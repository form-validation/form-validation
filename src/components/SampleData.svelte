<td class="pv2 ph3"><span class="link pointer" on:click={click}>{renderSample(sample)}</span></td>
<ReceiveMessage channel="DEMO_VALIDATE_RESULT" on:received={receive} sender={sender}>
<td class="pv2 ph3">
    {#if _result === 'Valid'}
    <i class="fa fa-check"></i>
    {:else if (_result === 'Invalid')}
    <i class="fa fa-times"></i>
    {/if}
</td>
</ReceiveMessage>

<script>
import ReceiveMessage from './ReceiveMessage.svelte';

let _result = '';

// Props
let sender = '';
let sample = '';
let renderSample = (sample) => sample;

const click = () => {
    const frame = document.querySelector(`iframe[src^="${sender}"]`);
    if (frame) {
        // Send sample to demo frame
        frame.contentWindow.postMessage({
            channel: 'SAMPLE_FIELD_VALUE',
            sender: sender,
            data: sample
        }, window.location.origin);
    }
};

const receive = (e) => {
    const data = e.detail.data;
    if (JSON.stringify(data.input) === JSON.stringify(sample)) {
        _result = data.output;
    }
};

export {
    sample,
    sender,
    renderSample,
};
</script>

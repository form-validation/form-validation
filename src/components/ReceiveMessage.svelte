<slot></slot>

<svelte:window on:message={onMessage} />

<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

// Props
let channel;
let sender;

const onMessage = (e) => {
    if (e.data.channel === channel && e.data.sender === sender) {
        dispatch('received', {
            data: e.data.data,
        });
    }
};

export {
    channel,
    sender,
};
</script>

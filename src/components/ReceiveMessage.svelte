<slot></slot>

<script>
import { createEventDispatcher, onMount } from 'svelte';

const dispatch = createEventDispatcher();

// Props
let channel;
let sender;

onMount(() => {
    const onMessage = (e) => {
        if (e.data.channel === channel && e.data.sender === sender) {
            dispatch('received', {
                data: e.data.data,
            });
        }
    };

    window.addEventListener('message', onMessage, false);

    return () => {
        window.removeEventListener('message', onMessage);
    };
});

export {
    channel,
    sender,
};
</script>

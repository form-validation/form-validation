<slot></slot>

<svelte:window on:message={onMessage} />

<script>
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

// Props
let type;
let from;

const onMessage = (e) => {
    if (e.data.type === type && e.data.from === from) {
        dispatch('received', {
            data: e.data.data,
        });
    }
};

export {
    type,
    from,
};
</script>

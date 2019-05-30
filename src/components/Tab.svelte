<style>
.tab-button:focus {
    outline: none;
}
</style>

<li class="dib bt bw2 {isSelected ? 'b--blue ' : 'b--transparent'}">
    <button class="tab-button pointer dark-gray ph3 pv2 dib bn bg-transparent" class:b={isSelected} on:click={select}>{@html title}</button>
</li>

<script>
import { createEventDispatcher } from 'svelte';

// Public props
let isSelected = false;
let title = '';

const dispatch = createEventDispatcher();

const select = () => {
    dispatch('active', {
        title: title,
    });
};

export {
    isSelected,
    title,
};
</script>

<style>
.tab-button:focus {
    outline: none;
}
</style>

<li class="dib bb bw2 {isSelected ? 'b--blue ' : 'b--transparent'}">
    <button class="tab-button pointer dark-gray ph3 pv2 dib bn" class:b={isSelected} on:click={select}>{title}</button>
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

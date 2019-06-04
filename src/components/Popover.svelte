<div bind:this={_target} on:click={toggle} class="z-1">
    <slot name="target"></slot>
</div>
<div bind:this={_content} class="absolute bg-white ba b--gray {_isOpened ? 'z-999' : 'o-0 z-0'}" on:click={close}>
    <slot name="content"></slot>
</div>

<svelte:window on:resize={resizeHandler} />

<script>
import { onMount } from 'svelte';

let _target;
let _content;
let _isOpened = false;

// Props
let xOffset = 0;
let position = 'bottom-left';

const clickHandler = (e) => {
    if (e.target.contains(_content)) {
        // User click outside of popover's content
        _isOpened = false;
    }
};

const resizeHandler = () => {
    setPosition();
};

const close = () => {
    _isOpened = false;
};

const setPosition = () => {
    let top = 0;
    let left = 0;
    switch (position) {
        case 'bottom-right':
            top = _target.offsetTop + _target.clientHeight;
            left = _target.offsetLeft + _target.clientWidth - _content.clientWidth;
            break;

        case 'bottom':
            top = _target.offsetTop + _target.clientHeight;
            left = _target.offsetLeft + 0.5 * _target.clientWidth - 0.5 * _content.clientWidth;
            break;

        case 'bottom-left':
        default:
            top = _target.offsetTop + _target.clientHeight;
            left = _target.offsetLeft;
            break;
    }

    _content.setAttribute('style', `top: ${top + xOffset}px; left: ${left}px`);
};

const toggle = () => {
    if (!_isOpened) {
        setPosition();
    }
    _isOpened = !_isOpened;
};

onMount(() => {
    setPosition();
    return () => {
        document.removeEventListener('click', clickHandler);
    }; 
});

export {
    xOffset,
    position,
};
</script>

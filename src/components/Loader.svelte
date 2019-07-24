<style>
/* We have to declare all styles for Loader because it can be used without any frameworks when loading a demo layout */
.loader {
    height: 40px;
    width: 40px;
}

.bounce1,
.bounce2 {
    animation: bounce 2.0s infinite ease-in-out;
    background-color: #777;
    opacity: 0.6;
}

.bounce2 {
    animation-delay: -1.0s;
}

@keyframes bounce {
    0%, 100% { 
        transform: scale(0.0);
    }
    50% { 
        transform: scale(1.0);
    }
}
</style>

<div class="relative">
    <div class:o-0={!isDone}><slot></slot></div>
    {#if !isDone}
    <div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div class="relative loader">
            <div class="bounce1 absolute top-0 left-0 w-100 h-100 br-pill"></div>
            <div class="bounce2 absolute top-0 left-0 w-100 h-100 br-pill"></div>
        </div>
    </div>
    {/if}
</div>

<script>
let isDone = false;

export {
    isDone,
};
</script>

<style>
/* We have to declare all styles for Loader because it can be used without any frameworks when loading a demo layout */
.loader-container { 
    position: relative;
}
.loader-wrapper {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
}
.loader {
    height: 40px;
    margin: 20px auto;
    position: relative;
    width: 40px;
}
.loading {
    display: none;
    opacity: 0;
}

.bounce1,
.bounce2 {
    animation: bounce 2.0s infinite ease-in-out;
    background-color: #777;
    border-radius: 100%;
    height: 100%;
    left: 0;
    opacity: 0.6;
    position: absolute;
    top: 0;
    width: 100%;
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

<div class="loader-container">
    <div class:loading={!isDone}><slot></slot></div>
    {#if !isDone}
    <div class="loader">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
    </div>
    {/if}
</div>

<script>
let isDone = false;

export {
    isDone,
};
</script>

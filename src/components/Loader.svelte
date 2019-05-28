<style>
.loader {
    width: 40px;
    height: 40px;
}

.bounce1,
.bounce2 {
    animation: bounce 2.0s infinite ease-in-out;
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
    <div class="{isDone ? '' : 'o-0'}"><slot></slot></div>
    <div class="{isDone ? 'dn' : 'absolute top-0 left-0 w-100 h-100 flex items-center justify-center'}">
        <div class="loader relative">
            <div class="bounce1 o-60 w-100 h-100 br-100 absolute top-0 left-0 bg-gray"></div>
            <div class="bounce2 o-60 w-100 h-100 br-100 absolute top-0 left-0 bg-gray"></div>
        </div>
    </div>
</div>

<script>
let isDone = false;

export {
    isDone,
};
</script>

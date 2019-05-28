<style>
.browser-frame {
    background: #2b2b2b;
}
.btn {
    height: 0.8rem;
    width: 0.8rem;
}
.close {
    background: #FF5F57;
}
.min {
    background: #FFBE2D;
}
.full {
    background: #29C93F;
}
</style>

<div class="browser-frame br2">
    <div class="flex pa2">
        <div class="br-100 mr1 btn close"></div>
        <div class="br-100 mr1 btn min"></div>
        <div class="br-100 mr1 btn full"></div>
    </div>
    <div class="pb2"><slot></slot></div>
</div>
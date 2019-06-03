<style>
.header {
    position: -webkit-sticky;
    position: sticky;
}    
</style>

<div  class="flex flex-column" style="min-height: 100vh;">
    <header class="header w-100 bb b--black-30 z-9999 bg-white top-0">
        <Nav />
    </header>

    <main class="w-100">
        <div class="mw8 center w-100">
            <slot></slot>
        </div>
    </main>

    <footer class="bt b--black-30 pv5" style="margin-top: auto;">
        <Footer />
    </footer>
</div>

<script>
import Footer from './Footer.svelte';
import Nav from './Nav.svelte';
</script>
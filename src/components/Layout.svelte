<style>
.layout-container {
    display: grid;
    grid-template-areas: 'header' 'main' 'footer';
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
}

.header {
    grid-area: header;
    position: -webkit-sticky;
    position: sticky;
}

.main {
    grid-area: main;
}

.footer {
    grid-area: footer;
}
</style>

<div class="flex flex-column layout-container">
    <header class="header w-100 bb b--black-30 z-9999 bg-white top-0">
        <Nav />
    </header>

    <main class="main w-100">
        <div class="mw8 center h-100">
            <slot></slot>
        </div>
    </main>

    <footer class="footer bt b--black-30 pv5">
        <Footer />
    </footer>
</div>

<script>
import Footer from './Footer.svelte';
import Nav from './Nav.svelte';
</script>

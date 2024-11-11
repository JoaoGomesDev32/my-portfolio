<!-- Footer Section -->
<template>
    <footer class="footer text-center py-3">
        <div class="container">
            <p>Feito com  e  por Jo o Gomes. &copy; 2024</p>
        </div>
        <div>
            <!-- Bot o Scroll para o Topo -->
            <button style="display: block;" @click="scrollToTop()" id="scrollTopBtn" title="Voltar ao topo">↑</button>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterSection",
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }
}
</script>

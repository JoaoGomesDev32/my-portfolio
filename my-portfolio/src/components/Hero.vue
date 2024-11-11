<!-- Hero.vue -->
<template>
<header class="hero-section text-center text-white d-flex align-items-center justify-content-center">
    <div id="particles-js" class="w-100 h-100 position-absolute"></div>
    <div class="container position-relative">
    <h1>Olá, Eu Sou João Gomes</h1>
    <p>Desenvolvedor Web</p>
    <router-link to="#portfolio" class="btn btn-primary">Veja Meu Trabalho</router-link>
    </div>
</header>
</template>

<script>
import { onMounted } from "vue";
import particlesJS from "particles.js";

export default {
    name: "HeroSection",
setup() {
    onMounted(() => {
    particlesJS("particles-js", {
        particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out" },
        },
        interactivity: {
        detect_on: "canvas",
        events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
        modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } },
        },
        retina_detect: true,
    });
    });
},
};
</script>

<style scoped>
.hero-section {
height: 100vh;
background-color: #121212;
position: relative;
overflow: hidden;
}
</style>

<template>
  <div id="app">
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Portfolio from "./components/Portfolio.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Hero,
    About,
    Skills,
    Portfolio,
    Contact,
    Footer,
  },
};
</script>

<style>
/* Seu estilo global aqui */
body {
    font-family: "Raleway", sans-serif;
    margin: 0;
    padding: 0;
}

#app {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
}

.hero-section {
    height: 100vh;
    background-color: #121212;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    text-align: center;
}

.about-section img {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
    object-position: center top;
}

.skills-section, .contact-section {
    background-color: #000000;
}

.skills-section .progress {
    height: 20px;
    margin-bottom: 15px;
    color: #159e5c;
}

.progress-bar {
    background-color: #159e5c;
}

.card {
    margin-bottom: 20px;
}

/* Adiciona o esquema de cores no seu CSS */
body {
    background-color: #1c1e21;
    color: #ffffff;
}

.navbar, .footer {
    background-color: #222529;
}

.navbar .nav-link:hover {
    border-bottom: 4px solid #18d26e;
}

.btn-primary {
    background-color: #18d26e;
    border-color: #18d26e;
}

.btn-primary:hover {
    background-color: #159e5c;
    border-color: #159e5c;
}

/* Cores para títulos */
h1, h2, h3, h4, h5 {
    color: #18d26e;
}

/* Estilo para o botão de voltar ao topo */
#scrollTopBtn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #18d26e; /* Cor de fundo do botão */
    color: #ffffff;
    border: none;
    padding: 10px;
    font-size: 18px;
    border-radius: 50%;
    cursor: pointer;
    display: none; /* Oculto por padrão */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s;
    height: 50px;
    width: 50px;
}

#scrollTopBtn:hover {
    background-color: #159e5c; /* Cor de fundo ao passar o mouse */
}

</style>


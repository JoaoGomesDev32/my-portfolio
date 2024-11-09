// Seleciona os elementos
const modal = document.getElementById("contactModal");
const contactBtn = document.getElementById("contactBtn");
const closeBtn = document.querySelector(".close-btn");

// Abre o modal ao clicar no botão de contato
contactBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Fecha o modal ao clicar no botão de fechar
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fecha o modal ao clicar fora da caixa de conteúdo
window.addEventListener("click", (event) => {
    if (event.target === modal) {
    modal.style.display = "none";
    }
});


function finalizarPreloader() {
    const preloader = document.getElementById("preloader");
    const conteudo = document.getElementById("mainContent");

    // Adiciona classe de fade-out
    preloader.classList.add("fade-out");

    // Aguarda a transição para esconder de vez
    setTimeout(() => {
        preloader.style.display = "none";
    }, 1000); // corresponde à duração da transição
}

document.addEventListener('DOMContentLoaded', () => {
    
    if (!sessionStorage.getItem("logado") || sessionStorage.getItem("logado") !== "1") {
        window.location.href = "login.html";
    } else {
        finalizarPreloader();
    }
});

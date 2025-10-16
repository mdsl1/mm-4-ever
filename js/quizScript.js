import { perguntas } from "./perguntas.js";

const quizContainer = document.getElementById("quizContainer");

let shuffledQuestions = perguntas; //.sort( () => Math.random() - 0.5)
let i = 0;

export function carregar_jogo() {

    quizContainer.innerHTML = "";

    const alternativasHTML = Object.entries(shuffledQuestions[i].alternativas).map(([key, value]) => {
        // `key` será "A", "B", etc., e `value` será a string da alternativa
        return `<button type="button" class="list-group-item list-group-item-action" data-key="${key}">${value}</button>`;
    }).join('');

    
    quizContainer.innerHTML = `
        <h1 class="fs-2 mt-5">Pergunta Número ${i + 1}</h1>
        <p class="fs-4 my-3">${shuffledQuestions[i].pergunta}</p>
        <div class="list-group fs-4 w-75 mt-3">
            ${alternativasHTML}
        </div>
    `;

    const botoes = quizContainer.querySelectorAll('.list-group-item');
    botoes.forEach((botao, index) => {

        botao.setAttribute("data-id", index);
        
        // Atribui o evento de clique
        botao.addEventListener("click", () => {
            
            validar_acerto(i, index);
        });
    });
}

export function validar_acerto(question, option) {

    if(shuffledQuestions[question].resposta === option && question !== 9) {

        i++;
        carregar_jogo();
        console.log("acertou");
        sessionStorage.setItem("questaoAtual",i)
    }
    else if(shuffledQuestions[question].resposta === option && question === 9) {
        quizContainer.innerHTML = `
            <h1 class="fs-2 mt-5">Parabéns!</h1>
            <p class="fs-4 my-3">Parabéns, querida! Até que tu lembra de uma coisa ou outra KKKKKKKKKKKK</p>
            <img src="./midias/bg2.gif">
        `;
    }
    else {
        console.log("Errou, " + question + ", " + option);
    }
}

document.getElementById("btnStart").addEventListener("click", carregar_jogo);

document.addEventListener('DOMContentLoaded', () => {
    if(sessionStorage.getItem("questaoAtual") && sessionStorage.getItem("questaoAtual") < 10) {
        i = parseInt(sessionStorage.getItem("questaoAtual"));
        carregar_jogo();
    }
    else {
        return;
    }
});
const botoes = document.querySelector(".botao");
const textos = document.querySelectorAll (".aba-conteudo");

for (let i = 0; i <botoes.lenght; i++) {
    botoes [1].onclick = function () {

        for (let j = 0; j <botoes.lenght; j++) {
            botoes[j].classlist.remove("ativo");
            botoes[j].classlist.remove("ativo");
        }

        botoes[i].classlist.add("ativo");
        textos[i].classList.add("ativo");
    };
}

const contadores = document.querySelectorAll ("contador");
const tempoObjetivo1 = new Date ("2025-06-20T00:00:00");
const tempoObjetivo2 = new Date ("2025-06-25T00:00:00");
const tempoObjetivo3 = new Date ("2025-06-30T00:00:00");
const tempoObjetivo4 = new Date ("2025-07-05T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


function calculaTempo (tempoObjetivo) {
    let tempoAtual = new Date ();
    let tempoFinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempoFinal / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor (minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %=60;
    minutos %=60;
    horas %=24;

    return dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos";
}
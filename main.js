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
const tempoObjetivo = new Date ("2025-06-20t00:00:00");
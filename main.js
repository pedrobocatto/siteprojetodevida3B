const botoes = document.querySelector(".botao");

for (let i = 0; i <botoes.lenght; i++) {
    botoes [1].onclick = function () {
        for (let j = 0; j <botoes.lenght; j++) {
            botoes[j].classlist.remove("ativo");
        }

        botoes[i].classlist.add("ativo");
    };
}
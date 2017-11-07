/*
    Programa criado para remoção de linha da tabela. 
    Listener permanece ouvindo os filhos da tabela

    Adicionamos um timeout de meio segundo para remover o item da tabela
*/

var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function (event) {

    event.target.parentNode.classList.add("fadeOut")
    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
})


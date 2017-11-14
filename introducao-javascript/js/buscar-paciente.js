var botaoBuscar = document.querySelector(".busca-pacientes");

botaoBuscar.addEventListener("click", function () {
    
    console.log("Requisitando dados da API...")

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var resposta = xhr.responseText;

        var pacientes = JSON.parse(resposta);
        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    });
    xhr.send();
})
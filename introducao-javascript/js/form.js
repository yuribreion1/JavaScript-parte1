/*
    Este programa le os valores inseridos pelo usuário
    calcula o imc do cliente e imprime na tela.
*/ 
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    //Evitando que a pagina seja recarregada
    event.preventDefault();
    
    var form = document.querySelector("#form-paciente");
    var paciente = obtemPacienteDoFormulario(form);
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    
    //Colocando o TD dentro da tabela
    tabela.appendChild(pacienteTr);
    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }
    form.reset();
    var msgErro = document.querySelector("#mensagens-erro");
    msgErro.innerHTML = "";
});

function obtemPacienteDoFormulario(form) {
    var paciente = {   
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}

function montaTr(paciente) {

    //Criando elemento TR para uma nova linha
    var pacienteTr = document.createElement("tr");   
    pacienteTr.classList.add("paciente");

    //Organizando as TD's dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}
function validaPaciente(paciente) {
    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O campo nome não pode estar vazio");
    }
    if (paciente.gordura.length == 0) {
        erros.push("O campo gordura não pode ser vazio");
    }
    if (paciente.peso.length == 0) {
        erros.push("O campo peso não pode ser vazio");
    }
    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser vazia");
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é invalido");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é invalida");
    }
    return erros;
}

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    }, this);
}
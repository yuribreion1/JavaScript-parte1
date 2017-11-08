var campo = document.querySelector(".campo-filtro");

campo.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");
    
    if (this.value.length > 0) {
        for (var index = 0; index < pacientes.length; index++) {
            var paciente = pacientes[index];
            
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent
            if (nome != this.value) {
                paciente.classList.add("oculta")
            } else {
                paciente.classList.remove("oculta")
            }
        }
    } else {
        for (var index = 0; index < pacientes.length; index++) {
            var paciente = pacientes[index];
            
            paciente.classList.remove("oculta");
        }
    }
})

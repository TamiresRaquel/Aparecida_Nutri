var botaoAdicionar = document.querySelector ("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
// para testar o click: console.log("Fui clicado!");
    var form = document.querySelector("#form-adiciona");
//usando a propriedade value que acessa o conteúdo dos input's
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

//createElement cria tags no html por meio do javascript
    var pacienteTr = document.createElement("tr");
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

//textContent adiciona valores em variáveis nomeadas no javascript.
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = calculaImc(peso,altura);

//appendChild coloca os "td's" (passados como parametro) como filhos do Tr (identificado como pacienteTr)
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

//chamando a tabela do html para o javascript 
    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);
});
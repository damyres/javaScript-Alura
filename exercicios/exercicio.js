const meuBotao = document.getElementById("meuBotao");
meuBotao.addEventListener("click", function() {
  alert("O botão foi clicado!");
});

const meuFormulario = document.querySelector("meuFormulario");
meuFormulario.addEventListener("submit", function(event){
    event.preventDefault;
    const name = event.target.elements.nome.value;
    alert('O formulário foi enciado com sucesso!');

})
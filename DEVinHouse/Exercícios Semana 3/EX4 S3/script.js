document.body.onload = adicionaTexto;

function adicionaTexto() {
  var novoTexto = document.createElement("p");
  var novoConteudo = document.createTextNode(
    "Teste de texto que testa as coisas testadas"
  );
  novoTexto.appendChild(novoConteudo);

  document.appendChild(novoTexto);

  var divsAtuais = document.getElementsByClassName(".div1");
  document.body.insertBefore(novoTexto, divsAtuais);
}

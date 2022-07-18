function quantidadeItensArrayParImpar() {
  let arrayTeste = [],
    contadorPar = 0,
    contadorImpar = 0,
    opcao;

  while (opcao != `sair`) {
    opcao = window.prompt(
      `Escreva um número para o array ou sair para finalizar:`
    );
    arrayTeste.push(opcao);
  }

  arrayTeste.pop();

  console.log(arrayTeste);

  for (let item of arrayTeste) {
    if (item % 2 === 0) {
      contadorPar++;
    } else if (item % 2 === 1) {
      contadorImpar++;
    } else {
    }
  }

  return window.alert(
    `A quantidade de números informada foi ${arrayTeste.length}, já a de valores pares foi ${contadorPar} e, por fim, a de valores ímpares foi ${contadorImpar}`
  );
}

quantidadeItensArrayParImpar();

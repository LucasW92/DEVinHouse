let opcao = 0;
let compras = [0, 0, 0, 0, 0];

do {
  opcao = Number(
    window.prompt(`Bem vindo ao Mercadinho Dev!
Qual produto deseja comprar?
Digite 1 para Hortifruti.
Digite 2 para Laticínios.
Digite 3 para Carnes.
Digite 4 para Peixes.
Digite 5 para Aves.
Digite 6 para fechar o pedido e encerrar.`)
  );

  switch (opcao) {
    case 1:
      let hortifruti = Number(
        window.prompt("Informe a quantidade de hortifrutis:")
      );
      compras[0] = compras[0] + hortifruti;
      break;
    case 2:
      let laticinios = Number(
        window.prompt("Informe a quantidade de laticínios:")
      );
      compras[1] = compras[1] + laticinios;

      break;
    case 3:
      let carnes = Number(window.prompt("Informe a quantidade de carnes:"));
      compras[2] = compras[2] + carnes;
      break;
    case 4:
      let peixes = Number(window.prompt("Informe a quantidade de peixes:"));
      compras[3] = compras[3] + peixes;
      break;
    case 5:
      let aves = Number(window.prompt("Informe a quantidade de aves:"));
      compras[4] = compras[4] + aves;
      break;
    case 6:
      window.alert("Obrigado pelas compras!");
      break;
    default:
      window.alert(
        "Opção incorreta ou inexistente, por gentileza, digite as opções de 1 a 6"
      );
      break;
  }
} while (opcao !== 6);

window.alert(
  `
  Total de hortifruti: ${compras[0]};
  Total de laticinios: ${compras[1]};
  Total de carnes: ${compras[2]};
  Total de peixes: ${compras[3]};
  Total de aves: ${compras[4]};
  `
);

let maior = Math.max(...compras);
let index = compras.indexOf(maior);
let indexNome;

switch (index) {
  case 0:
    indexNome = "Hortifruti";
    break;
  case 1:
    indexNome = "Laticínios";
    break;
  case 2:
    indexNome = "Carnes";
    break;
  case 3:
    indexNome = "Peixes";
    break;
  case 4:
    indexNome = "Aves";
    break;
}

window.alert(`A maior compra foi de ${maior} ${indexNome}`);

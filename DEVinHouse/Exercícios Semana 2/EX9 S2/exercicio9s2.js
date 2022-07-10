let opcao = 0;
let totalHortifruti = 0;
let totalLaticinios = 0;
let totalCarnes = 0;
let totalPeixes = 0;
let totalAves = 0;

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
      totalHortifruti = totalHortifruti + hortifruti;
      break;
    case 2:
      let laticinios = Number(
        window.prompt("Informe a quantidade de laticínios:")
      );
      totalLaticinios = totalLaticinios + laticinios;

      break;
    case 3:
      let carnes = Number(window.prompt("Informe a quantidade de carnes:"));
      totalCarnes = totalCarnes + carnes;
      break;
    case 4:
      let peixes = Number(window.prompt("Informe a quantidade de peixes:"));
      totalPeixes = totalPeixes + peixes;
      break;
    case 5:
      let aves = Number(window.prompt("Informe a quantidade de aves:"));
      totalAves = totalAves + aves;
      break;
    case 6:
      window.alert(`Obrigado pelas compras!
Total de hortifruti: ${totalHortifruti};
Total de laticinios: ${totalLaticinios};
Total de carnes: ${totalCarnes};
Total de peixes: ${totalPeixes};
Total de aves: ${totalAves};
      `);
      break;
    default:
      window.alert(
        "Opção incorreta ou inexistente, por gentileza, digite as opções de 1 a 6"
      );
      break;
  }
} while (opcao !== 6);

let categoriaQuantidades = [
  totalHortifruti,
  totalLaticinios,
  totalCarnes,
  totalPeixes,
  totalAves,
];
let categoriaNomes = ["hortifruti", "laticinios", "carnes", "peixes", "aves"];

let maiorQuantidade = Math.max(...categoriaQuantidades);
let indexMaiorQuantidade = categoriaQuantidades.indexOf(maiorQuantidade);
let indexNome = categoriaNomes[indexMaiorQuantidade];

window.alert(`A maior compra foi de ${maiorQuantidade} de ${indexNome}`);

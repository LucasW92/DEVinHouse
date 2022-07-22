let array = [
  {
    nome: "Rayane",
    sobrenome: "Cristina",
    idade: 21,
  },
  {
    nome: "Carlos",
    sobrenome: "Henrique",
    idade: 17,
  },
  {
    nome: "Julio",
    sobrenome: "Cesar",
    idade: 19,
  },
  {
    nome: "Camila",
    sobrenome: "Fernandes",
    idade: 18,
  },
  {
    nome: "Julia",
    sobrenome: "Fernandes",
    idade: 10,
  },
  {
    nome: "Bruno",
    sobrenome: "Albuquerque",
    idade: 31,
  },
  {
    nome: "Túlio",
    sobrenome: "Bastos",
    idade: 22,
  },
  {
    nome: "Cristiane",
    sobrenome: "Maria",
    idade: 41,
  },
];

let batata = [];

const maiorIgualDezoito = array.filter(function (item) {
  return item.idade >= 18;
});

console.log(maiorIgualDezoito);

let aluno = window.prompt(`Digite o nome do aluno:`);
let arrayNotas = [];
let contador = 0;
let somador = 0;
let resultado;

while (contador < 4) {
  let notaAluno = window.prompt(`Digite a nota:`);
  arrayNotas.push(notaAluno);
  contador++;
}

for (let notaFor of arrayNotas) {
  somador = Number(notaFor) + somador;
}

let mediaAluno = somador / 4;

if (mediaAluno >= 7) {
  resultado = "aprovado(a)";
} else {
  resultado = "reprovado(a)";
}

window.alert(`Aluno(a) ${aluno}, a média para aprovação é 7
seu resultado de média é ${mediaAluno}, portanto, você foi ${resultado}`);

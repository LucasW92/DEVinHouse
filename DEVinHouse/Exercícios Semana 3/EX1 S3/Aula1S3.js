const informarSeNumeroEparImpar = function (numero) {
  let resultado;
  if (numero % 2 === 0) {
    resultado = `Par`;
  } else if (numero % 2 === 1) {
    resultado = `Impar`;
  } else {
    resultado = `Inválido`;
  }
  return resultado;
};

console.log(informarSeNumeroEparImpar(1));
console.log(informarSeNumeroEparImpar(2));
console.log(informarSeNumeroEparImpar(0));
console.log(informarSeNumeroEparImpar(5));

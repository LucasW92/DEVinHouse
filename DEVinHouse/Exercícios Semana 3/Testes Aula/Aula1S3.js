const informarSeNumeroEparImpar = function (numero) {
  let resultado;
  if (numero % 2 === 0) {
    resultado = `Par`;
  } else {
    resultado = `Impar`;
  }
  return resultado;
};

console.log(informarSeNumeroEparImpar(1));
console.log(informarSeNumeroEparImpar(2));
console.log(informarSeNumeroEparImpar(0));
console.log(informarSeNumeroEparImpar(5));

// var informarParImpar = function (num1){
//   var resultado;
//   if(num1 % 2 == 0){
//       resultado = 'Par'
//   } else if(num1 %2 == 1){
//       resultado = 'Ímpar'
//   } else{ resultado = "inválido"}

//   return resultado
// }

// console.log(informarParImpar());

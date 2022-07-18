function elementosQuantidade(array = []) {
  for (let item of array) {
    console.log(item);
  }
  const quantidade = `O resultado é ${array.length}`;
  return quantidade;
}

console.log(elementosQuantidade(["a", "b", "c", 5, 7, 8]));

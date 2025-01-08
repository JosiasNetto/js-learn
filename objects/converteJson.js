const estudante = require('./estudante.json');

//Transforma o JSON em uma string
const stringEstudante = JSON.stringify(estudante)

console.log(stringEstudante);
console.log(typeof stringEstudante);

//Converte a string JSON para um objeto js
const objEstudante = JSON.parse(stringEstudante);

console.log(objEstudante);
console.log(typeof objEstudante)


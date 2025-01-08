//Atribui o json a variavel estudante, ja o convertendo em um objeto js
//Require serve tanto para importar arquivos json, como para importar modulos proprios ou nativos do node
//Podendo também exportalos com module.export() = minhaFuncao
const estudante = require('./estudante.json');

console.log(estudante);
console.log(typeof estudante);

const chaves = Object.keys(estudante);
console.log(chaves);
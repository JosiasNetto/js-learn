//Diferente da clonagem rasa(shallow clone), como quando utilizado o operador ..., que :
/*
O novo objeto copia diretamente as propriedades do objeto original. 
Para os valores primitivos (como números, strings, booleanos), isso funciona como uma cópia independente. 
No entanto, para valores que são referências (como objetos aninhados, arrays ou funções), o novo objeto 
compartilha a mesma referência com o original.
*/

//Temos a clonagem profunda(deep clone)
const objetoOriginal = { chave: 'valor' };
const copiaProfunda = JSON.parse(JSON.stringify(objetoOriginal));

copiaProfunda.chave = 'novoValor';
console.log(objetoOriginal.chave);
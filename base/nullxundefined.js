//Undefined
//Value auto atributed to variables that not have atributed a value in the declaration.
//Can`t do operations with other variables.
let nameStudent;
console.log(nameStudent);
console.log(typeof nameStudent);

//Null
//Specific value atributed when you want to advice the system, that the var does not have a value.
//Helps, when  working with another variable. Because can assume different values in the implicit conversion(Depending on the other variable type).
let numberStudent = null;
console.log(typeof numberStudent);

console.log(numberStudent + 3);
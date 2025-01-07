const  oddNumbers = [1, 3, 5, 7 ,9];
const evenNumbers = [0, 2, 4, 6 , 8];

const numbersLists = [oddNumbers, evenNumbers]; //A matrix
console.log(numbersLists); //[ [ 1, 3, 5, 7, 9 ], [ 0, 2, 4, 6, 8 ] ]

const allNumbers = [...oddNumbers, ...evenNumbers]; //Spread the array elements
console.log(allNumbers); //[1, 3, 5, 7, 9, 0, 2, 4, 6, 8]

const [num1, num2, ...otherNumbers] = [1, 2, 3, 4, 5]; //Desesruct the array and atribute the elements value to each variable, 
//and uses the rest operator
console.log(num1, num2, otherNumbers); //1 2 [ 3, 4, 5 ]

const [name1 = "jo"] = [];  //Declare a default value to the variable
console.log(name1); //jo

const [name2 = "ja"] = ["je"];
console.log(name2); //je

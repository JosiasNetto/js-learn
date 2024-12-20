const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerceiroBi = -2;
const notaQuartoBi = Number.parseInt("5");

const total = (notaPrimeiroBi + notaSegundoBi + notaTerceiroBi + notaQuartoBi) / 4;

console.log(`A média é ${total.toFixed(2)}`)


//NaN
//NaN is the value returned by a arithmetic operation between a number and not a number
console.log(5 * "oi");

console.log(Number.isNaN("oi"))//False, the method isNaN just return true if the value is exactly NaN
console.log(isNaN("oi"))//True, The func return true if in the value can`t be converted to a number
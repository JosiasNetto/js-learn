//Using the var flag, we don`t have a delimited scope, so the second student call changes the value of the student in if statement
if (1 > 0) {
    var student = `Caroline`;  
    console.log(student);
}

student = `Ana`;
console.log(student)

//------------------------------------------------------------------------------------------------------------------------------------
//In this case, the scope of the first teacher, is just in the if statement
if (1 > 0) {
    let teacher = `Ana`;
    console.log(teacher);
}

teacher = `Miriam`; //The js declare a different teacher variable using a hidden var statement
console.log(teacher)

//------------------------------------------------------------------------------------------------------------------------------------
if (1 > 0) {
    let name = `Joao`;
    console.log(nome); // ‘Ana’
  }
  
  // Variable name is not accessible
  console.log(nome); // Error: nome is not defined
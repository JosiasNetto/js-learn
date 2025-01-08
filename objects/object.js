//Syntax
const student = {
    name: "Joca",
    age: 22,
    cpf: "124213421421",
    class: "js",
    relationship: true 
}

//Acess elements
console.log(`The name of the student is ${student.name}`);
console.log(`The 3 first numbers ofd the cpf are ${student.cpf.substring(0, 3)}`);
console.log(`The age of the student is ${student['age']}`)

function showInfoStudent(objStudent, keyStudent) {
    return objStudent[keyStudent];
}

console.log(showInfoStudent(student, `class`));

//Create new key-value
student.telephone = "8172312848912";
console.log(student.telephone);

//Changing value
student.name = "Jair"
console.log(student.name);

//Delete key
delete student.telephone;
console.log(student.telephone);
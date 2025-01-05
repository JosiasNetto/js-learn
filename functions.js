//We have 3 ways to declare a function
//  Function flag
//      Hoisting(First code the program read)
//      Does not follow scope rules
function showStudentName(name, nota) {
    console.log(`THe name is ${name} and the nota is ${nota}`);
}

showStudentName("Caroline", 2);
showStudentName("Jefersson", 9);

//  Function expressions
//  Local Variables that stores a function and follow the scope rules
const studentPass = function (lastNota, faltas){
    if(lastNota < 7 && faltas > 4){
        return true;
    }
    else{
        return false;
    }
}

//  Arrow Function
const studentPassed = (lastNota, faltas) => {
    if(lastNota < 7 && faltas > 4){
        return true;
    }
    else{
        return false;
    }
}

//      When is a inline function, can be redused to this format(return name)
const showName = (name) => name;
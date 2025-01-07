const notes = [2, 8, 4, 10, 7.5, 2.3]

let sumNotes = 0;

//Callback Function : Func that calls another funcs in the execution
notes.forEach(somaNotas)//Call the function by reference

function somaNotas(note) {
    sumNotes += note;
}

const media = sumNotes/notes.length;

console.log(media);

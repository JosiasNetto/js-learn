const notes = [10, 6.5, 7, 2 ];

let media = (notes[0] + notes[1] + notes[2] + notes[3]) / notes.length;

console.log(media);

notes.push(9);  //Add element to thee final of the array

media = (notes[0] + notes[1] + notes[2] + notes[3] + notes[4]) / notes.length;

console.log(media);

console.log(notes.pop());   //Delete a element from the end of the array


const studentsNames = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 
    'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo']

const class1 = studentsNames.slice(0, studentsNames.length/2);  //Return the sliced part defined by the params
const class2 = studentsNames.slice(studentsNames.length/2, studentsNames.length);

console.log(class1)
console.log(class2)

studentsNames.splice(1, 2, "Rodrigo", "Joao")   //Change the array, deleting a x number of elements, from a defined position,
// and can add other element in the place

console.log(studentsNames);

const unitedClases = class1.concat(class2); //Return the concat of the arrays

console.log(unitedClases);

function showStudentName(student){
    if (studentsNames.includes(student)) {  //Return if the student exists in the list
         const index = studentsNames.indexOf(student);//Return the index of the student
         console.log(`O aluno ${studentsNames[index]} está na sala`);
    }
    else{
        console.log("Esse aluno não existe");
    }
}

showStudentName("Rodrigo");
showStudentName("Celton");

const notes = [2, 8, 4, 10, 7.5, 2.3]

//First expression: One time executed
//Second expression: condition of the loop
//Third expression: Executed every time the code block end
for(let index = 0; index < notes.length; index++) {
    console.log(index, notes[index]);
}
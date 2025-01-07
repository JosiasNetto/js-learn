const notes = [2, 8, 4, 10, 7.5, 2.3]

//Return a array wiht the result of the callback function
const updatedNotes = notes.map( (note) => note + 1 >= 10 ? 10 : note + 1);

console.log(updatedNotes);
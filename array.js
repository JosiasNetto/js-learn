const notes = [10, 6.5, 7, 2 ];

let media = (notes[0] + notes[1] + notes[2] + notes[3]) / notes.length;

console.log(media);

notes.push(9);

media = (notes[0] + notes[1] + notes[2] + notes[3] + notes[4]) / notes.length;

console.log(media);

console.log(notes.pop());
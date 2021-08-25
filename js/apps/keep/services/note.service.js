export const noteServices = {
    getNotes,
    filterNotes,
    addNote,
}


var gNotes = [
 {txt: 'hello world' , id: 'Tx845I'},
 {txt:'Niv & Dese programming AppSus', id:'Cfb43m'}
]

function getNotes() {
    return Promise.resolve(gNotes);
}

function filterNotes(key){
    const notes = gNotes.filter(note => note.txt.toLowerCase().includes(key.toLowerCase()))
    console.log(notes);
    return Promise.resolve(notes);
}

function addNote(note){
    console.log(note , 'note)');
    gNotes.push(note);
    console.log(gNotes);
    return Promise.resolve(gNotes);
}

// function updateNote(id, note){
//     const noteIdx = gNotes.findIndex((note)=> note.id === id )
//     if(noteIdx === -1) return addNote(note);
//     gNotes[noteIdx].txt = note[txt]
//     return Promise.resolve()
// }
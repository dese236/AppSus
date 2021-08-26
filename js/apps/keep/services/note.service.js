import { storageService } from "../../../services/storage.service.js";
export const noteServices = {
    getNotes,
    filterNotes,
    addNote,
    deleteNote,
}

const KEY = 'keepDB'
var gNotes = [
    {
        txt: 'hello world',
        id: 'Tx845I',
        noteType: 'txt',
        noteDate: '25-8-21',
    },
    {
        txt: 'hello world',
        id: 'lb6K8d',
        noteType: 'txt',
        noteDate: '25-8-21',
    },
    {
        txt: 'hello world',
        id: 'a7nJKE',
        noteType: 'txt',
        noteDate: '25-8-21',
    },
    {
        src: 'https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        id: 'b6gJDk3',
        noteType : 'img' ,
        noteDate : '15-8-21'
    },
    {
        txt: 'hello world',
        id: 'Co7g56G',
        noteType: 'txt',
        noteDate: '25-8-21',
    },
    {
        txt: 'Niv & Dese programming AppSus',
        id: 'Cfb43m',
        noteType : 'txt' ,
        noteDate : '15-8-21'
    },
    {
        src: 'https://sites.google.com/site/mychetsite/_/rsrc/1468863654615/home/mychetsite/summer2.jpg',
        id: 'bfGDN6',
        noteType : 'img' ,
        noteDate : '15-8-21'
    },
    {
        src : 'https://images.unsplash.com/photo-1533737382843-3279f2054af7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRydXRofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        id: 'm8IHVTY',
        noteType : 'img' ,
        noteDate : '15-8-21'
    },
    {
        txt: 'hello world',
        id: 'he2Z9K',
        noteType: 'txt',
        noteDate: '25-8-21',
    },
    {
        src: 'https://www.youtube.com/watch?v=obkrMiyDrbs&ab_channel=didjitalvibe',
        id: '8Huymk5',
        noteType : 'video' ,
        noteDate : '15-8-21'
    },
    {
        src: 'https://images.unsplash.com/photo-1528502668750-88ba58015b2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxibGFjayUyMHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        id: 'GgjK45',
        noteType : 'img' ,
        noteDate : '15-8-21'
    },
]

storageService.saveToStorage(KEY , gNotes)

function getNotes() {
    gNotes = storageService.loadFromStorage(KEY) || []
    return Promise.resolve(gNotes);
}

function filterNotes(key) {
    const notes = gNotes.filter(note => note.txt.toLowerCase().includes(key.toLowerCase()))
    console.log(notes);
    return Promise.resolve(notes);
}

function addNote(note) {
    console.log(note, 'note)');
    gNotes.push(note);
    console.log(gNotes);
    storageService.saveToStorage(KEY , gNotes);
    return Promise.resolve(gNotes);
}


function deleteNote(noteId){
    var noteIdx = gNotes.findIndex(function (note) {
        return noteId === note.id
    })
    gNotes.splice(noteIdx, 1)
    storageService.saveToStorage(KEY ,gNotes);
    return Promise.resolve()
}
// function updateNote(id, note){
//     const noteIdx = gNotes.findIndex((note)=> note.id === id )
//     if(noteIdx === -1) return addNote(note);
//     gNotes[noteIdx].txt = note[txt]
//     return Promise.resolve()
// }
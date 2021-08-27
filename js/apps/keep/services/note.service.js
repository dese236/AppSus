import { storageService } from "../../../services/storage.service.js";
import { utilService } from "../../../services/util.service.js";
export const noteServices = {
    getNotes,
    searchNotes,
    addNote,
    deleteNote,
    filterNotes,
    duplicateNote,
    pinNote,


    getDeletedNotes,

    getPinedNotes,
}

const KEY = 'keepDB'
var gNotes = [
    {
        txt: 'hello world',
        id: 'Tx845I',
        noteType: 'txt',
        noteDate: '2021-8-24',
        isDeleted: false,
        isPined: false,
    },
    {
        txt: 'hello world',
        id: 'lb6K8d',
        noteType: 'txt',
        noteDate: '2021-8-24',
        isDeleted: false,
        isPined: false,
    },
    {
        txt: 'hello world',
        id: 'a7nJKE',
        noteType: 'txt',
        noteDate: '2021-8-24',
        isDeleted: false,
        isPined: false,
    },
    {
        txt: 'lets see if image note can have txt as well',
        img: 'https://images.unsplash.com/photo-1629831676333-8e33b2d7cdd9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        id: 'b6gJDk3',
        noteType: 'img',
        noteDate: '2021-8-24',
        isDeleted: false,
        isPined: false,
    },
    {
        txt: 'hello world',
        id: 'Co7g56G',
        noteType: 'txt',
        noteDate: '2021-8-23',
        isDeleted: false,
        isPined: false,
    },
    {
        txt: 'Niv & Dese programming AppSus',
        id: 'Cfb43m',
        noteType: 'txt',
        noteDate: '2021-8-17',
        isDeleted: false,
        isPined: false,
    },
    {
        img: 'https://sites.google.com/site/mychetsite/_/rsrc/1468863654615/home/mychetsite/summer2.jpg',
        id: 'bfGDN6',
        noteType: 'img',
        noteDate: '2021-8-17',
        isDeleted: false,
        isPined: false,
    },
    {
        title: 'this is generic title',
        img: 'https://images.unsplash.com/photo-1533737382843-3279f2054af7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRydXRofGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        id: 'm8IHVTY',
        noteType: 'img',
        noteDate: '2021-8-17',
        isDeleted: false,
        isPined: false,
    },
    {
        txt: 'hello world',
        id: 'he2Z9K',
        noteType: 'txt',
        noteDate: '2021-8-17',
        isDeleted: false,
        isPined: false,
    },
    {
        title: 'this is generic title',
        img: 'https://www.youtube.com/watch?v=obkrMiyDrbs&ab_channel=didjitalvibe',
        id: '8Huymk5',
        noteType: 'video',
        noteDate: '2021-7-29',
        isDeleted: false,
        isPined: false,
    },
    {
        title: 'this is generic title',
        img: 'https://images.unsplash.com/photo-1528502668750-88ba58015b2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHxibGFjayUyMHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60',
        id: 'GgjK45',
        noteType: 'img',
        noteDate: '2021-7-29',
        isDeleted: false,
        isPined: false,
    },
    {
        title: 'this is Todo generic title',
        img: '',
        id: 'GgsK45',
        noteType: 'todos',
        noteDate: '2021-7-29',
        todos: [{ tesk: 'go home', id: 'gksm5Y', isDone: false, isEditted: false }, { tesk: 'master css', id: 'DngF67', isDone: false, isEditted: false }, { tesk: 'to do todo list', id: 'Wgj5G8', isDone: false, isEditted: false }],
        isDeleted: false,
        isPined: false,
    }
]

var gDeleted = []
var gPined = []
function getNotes(page) {
    if(page==='trash')return getDeletedNotes()
    // if(page===)
    gNotes = storageService.loadFromStorage(KEY) ? storageService.loadFromStorage(KEY) : gNotes
    return Promise.resolve(gNotes);
}

function searchNotes(key) {
    console.log('this is the key ', key);
    const notes = gNotes.filter(note =>
        
        (note.title && note.title.toLowerCase().includes(key.toLowerCase())) || (note.txt && note.txt.toLowerCase().includes(key.toLowerCase()))
    )
    console.log(notes, 'this are the notes');
    return Promise.resolve(notes);
}

function filterNotes(noteType) {
    if (noteType === 'all') return Promise.resolve(gNotes)
    const notes = gNotes.filter(note => note.noteType === noteType)
    return Promise.resolve(notes);
}

function addNote(note) {
    gNotes.unshift(note);
    storageService.saveToStorage(KEY, gNotes);
    return Promise.resolve(gNotes);
}

function duplicateNote(note) {
    var newNote = { ...note }
    newNote.id = utilService.makeId()
    addNote(newNote)
    return Promise.resolve()
}

// function pinNote(note) {
//     duplicateNote(note)
//     .then(() => {
//         deleteNote(note.id)
//     })
//     return Promise.resolve()
    
// }

// function deleteNote(noteId) {
    //     var noteIdx = gNotes.findIndex(function (note) {
        //         return noteId === note.id
        //     })
        //     gNotes.splice(noteIdx, 1)
        //     storageService.saveToStorage(KEY, gNotes);
        //     return Promise.resolve()
        // }
        
        function pinNote(note) {
            var noteIdx = gNotes.findIndex(function (nt) {
                return nt.id === note.id
            })
            gPined.unshift(gNotes.slice(noteIdx, 1)[0])
            storageService.saveToStorage(KEY, gNotes);
            return Promise.resolve()
        }
        
        function deleteNote(noteId) {
            var noteIdx = gNotes.findIndex(function (note) {
                return noteId === note.id
            })
            // gDeleted.unshift(gNotes.slice(noteIdx, 1)[0])
            gNotes[noteIdx].isDeleted = true ;
            storageService.saveToStorage(KEY, gNotes);
            return Promise.resolve()
        }


        function getDeletedNotes(notes) {
            const deletedNotes = notes.filter((note => note.isDeleted))
            return Promise.resolve(deletedNotes);
        }
        function getPinedNotes() {
            const pinedNotes =getNotes().filter((note => note.isPined))
            return Promise.resolve(pinedNotes);
        }

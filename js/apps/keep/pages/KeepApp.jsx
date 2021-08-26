import { SearchBar } from '../cmps/SearchBar.jsx';
import { noteServices } from '../services/note.service.js'
import {AddNote} from '../cmps/AddNote.jsx'
import { NoteList } from '../cmps/NoteList.jsx';
import {NoteFilter} from '../cmps/NoteFilter.jsx';
export class KeepApp extends React.Component {

  state = {
    searchKey: '',
    notes: []
  }

  componentDidMount() {
    this.onLoadNotes()

  }

  onLoadNotes = () => {
    noteServices.getNotes().then((notes) => {
      this.setState({ notes })
      // console.log(notes);
    })
    console.log(this.state.notes , 'the notes afte load');

  }
  onSearchNotes = (key) => {
    noteServices.searchNotes(key).then((notes)=> {
      this.setState({ notes})

    })
  }

  onSetKey = (searchKey) => {
    this.setState({searchKey})
    this.onSearchNotes(searchKey)
  }

  onAddNote = (note) => {
    console.log('note' ,note);
    noteServices.addNote(note).then((notes) => this.setState({notes}))


  }

  onFilter= (noteType) => {
    noteServices.filterNotes(noteType).then((notes)=> {
      this.setState({ notes})
  })
}

//   onAddNote = () => {
//     const id = this.state.book.id
//     reviewsService.addReview(id).then(()=> {
//         reviewsService.getReviewsById(id).then((reviews=> this.setState({reviews}) ))
//     })

// }

// onUpdateNote = (note) => {
//     const id = note.id
//     noteServices.updateNote(id, note)
// }

  render() {
    const { notes } = this.state
    return (<div>
      <SearchBar onSetKey={this.onSetKey} />
      <AddNote onAddNote={this.onAddNote} onUpdateNote={this.onUpdateNote} />
      <NoteFilter onFilter={this.onFilter}/>
      <NoteList notes={notes} onLoadNotes={this.onLoadNotes}/>

    </div>)

  }
}
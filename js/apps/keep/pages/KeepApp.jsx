import { SearchBar } from '../cmps/SearchBar.jsx';
import { noteServices } from '../services/note.service.js'
// import { AddNote } from '../cmps/AddNote.jsx'
import { NoteList } from '../cmps/NoteList.jsx';
import { NoteFilter } from '../cmps/NoteFilter.jsx';
import { Navigator } from '../cmps/Navigator.jsx';
import {Arcive} from './Arcive.jsx';
import {Edit} from '../cmps/Edit.jsx';
import {Trash} from './Trash.jsx';
import {TrashList} from '../cmps/TrashList.jsx';
import {PinedList} from '../cmps/PinedList.jsx';


const { Route } = ReactRouterDOM;


export class KeepApp extends React.Component {

  state = {
    searchKey: '',
    notes: [] ,
    isNoteContentOpen : false ,
    page : 'notes'

  }

  componentDidMount() {
    this.onLoadNotes('notes')

  }

  onLoadNotes = () => {
    noteServices.getNotes().then((notes) => {
      this.setState({ notes })
      // console.log(notes);
    })
    console.log(this.state.notes, 'the notes afte load');

  }
  onSearchNotes = (key) => {
    noteServices.searchNotes(key).then((notes) => {
      this.setState({ notes })

    })
  }

  onSetKey = (searchKey) => {
    this.setState({ searchKey })
    this.onSearchNotes(searchKey)
  }

  onAddNote = (note) => {
    console.log('note', note);
    note.noteDate = JSON.parse(JSON.stringify(new Date().toISOString().split("T")[0]))
    noteServices.addNote(note).then((notes) => this.setState({ notes }))


  }

  onFilter = (noteType) => {
    noteServices.filterNotes(noteType).then((notes) => {
      this.setState({ notes })
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
  closeContent = () => {
    this.setState({isNoteContentOpen : false})
  }
  openContent = () => {
    this.setState({isNoteContentOpen : true})
    // console.log('isOpen' , isNoteContentOpen);
  }

  setPage= (page) => {
    this.setState({page })
    console.log(this.state.page , 'is the page now');
    this.onLoadNotes()

  }

  render() {
    const { notes , isNoteContentOpen , page } = this.state

    return (<div onClick={this.closeContent}>
      {/* create route for pages */}
      <div className="filter-sort">

      <SearchBar onSetKey={this.onSetKey} />
      <NoteFilter onFilter={this.onFilter} />
      </div>
      <Route path="/keep/edit" component={Edit} />
      <Route path="/keep/arcive" component={Arcive} />
      <Route path="/keep/trash" component={Trash} />
     <Navigator setPage={this.setPage} />
      <Edit isNoteContentOpen={isNoteContentOpen} openContent={this.openContent} onAddNote={this.onAddNote} onUpdateNote={this.onUpdateNote}/>
      {/* <AddNote onAddNote={this.onAddNote} onUpdateNote={this.onUpdateNote} /> */}
     { page ==='notes' && 
     <section>

<PinedList notes={notes} onLoadNotes={this.onLoadNotes} />
<NoteList notes={notes} onLoadNotes={this.onLoadNotes} />
     </section>
 }
     { page ==='trash' && <TrashList notes={notes} onLoadNotes={this.onLoadNotes} />}
     {/* { page==='arcive' &&<NoteList notes={notes} onLoadNotes={this.onLoadNotes} />} */}

    </div>)

  }
}
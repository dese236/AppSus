import { SearchBar } from '../cmps/SearchBar.jsx';
import { noteServices } from '../services/note.service.js'
// import { AddNote } from '../cmps/AddNote.jsx'
import { NoteList } from '../cmps/NoteList.jsx';
import { NoteFilter } from '../cmps/NoteFilter.jsx';
import { Navigator } from '../cmps/Navigator.jsx';
import { Arcive } from './Arcive.jsx';
import { Edit } from '../cmps/Edit.jsx';
import { Trash } from './Trash.jsx';
import { TrashList } from '../cmps/TrashList.jsx';
import { PinedList } from '../cmps/PinedList.jsx';


const { Route } = ReactRouterDOM;


export class KeepApp extends React.Component {
  state = {
    searchKey: '',
    notes: [],
    isNoteContentOpen: false,
    page: 'notes'
  }

  componentDidMount() {
    this.onLoadNotes('notes')
  }

  onLoadNotes = () => {
    noteServices.getNotes().then((notes) => {
      this.setState({ notes })
    })

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
    note.noteDate = JSON.parse(JSON.stringify(new Date().toISOString().split("T")[0]))
    noteServices.addNote(note).then((notes) => this.setState({ notes }))


  }

  onFilter = (noteType) => {
    noteServices.filterNotes(noteType).then((notes) => {
      this.setState({ notes })
    })
  }

  closeContent = () => {
    this.setState({ isNoteContentOpen: false })
  }
  openContent = () => {
    this.setState({ isNoteContentOpen: true })
    // console.log('isOpen' , isNoteContentOpen);
  }

  setPage = (page) => {
    this.setState({ page })
    this.onLoadNotes()

  }

  render() {
    const { notes, isNoteContentOpen, page } = this.state

    return (<div onClick={this.closeContent}>
      <div className="filter-sort">

        <SearchBar onSetKey={this.onSetKey} />
        <NoteFilter onFilter={this.onFilter} />
      </div>
      <Route path="/keep/edit" component={Edit} />
      <Route path="/keep/arcive" component={Arcive} />
      <Route path="/keep/trash" component={Trash} />
      <Navigator setPage={this.setPage} />
      <Edit isNoteContentOpen={isNoteContentOpen} openContent={this.openContent} onAddNote={this.onAddNote} onUpdateNote={this.onUpdateNote} />
      {page === 'notes' &&
        <section className="note-container">

          <PinedList notes={notes} onLoadNotes={this.onLoadNotes} />
          <NoteList notes={notes} onLoadNotes={this.onLoadNotes} />
        </section>
      }
      {page === 'trash' && <TrashList notes={notes} onLoadNotes={this.onLoadNotes} />}

    </div>)

  }
}
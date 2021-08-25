import { utilServices } from '../services/util.services.js'
export class AddNote extends React.Component {
    state = {
        note: {
            txt: '',
            noteTime: '',
            id: utilServices.makeId(),
            noteType: 'txt'
        },

        selectedFile: null
    }



    render() {
        const { txt, id, noteType } = this.state.note
        console.log(id)
        return (

            <section className="add-note">
                      
     

            </section>
        )
    }
}




// onChange = (ev) => {
//     const value = ev.target.value
//     this.setState({ note: { ...this.state.note, [this.state.note.noteType]: value } })
// }

// onSubmit = (ev) => {
//     ev.preventDefault()
//     this.setState({note : {...this.state.note , noteTime : JSON.stringify(new Date().toISOString().split("T")[0])}})
//     const {note} = this.state
//     this.props.onAddNote(note)
//     this.setState({
//         note: {
//             txt: '',
//             src: '',
//             id: utilServices.makeId(),
//             noteType: 'txt'
//         }
//     })
//     console.log('note is :' ,note);
// }

// setNoteType = (ev) => {
//     this.state.note.noteType = 'src';
//     const { noteType } = this.state.note
//     this.setState({ noteType })

// }




{/* <button className="txt">
<div>

<img src="./css/img/edit.png" alt="edit"/>
</div> */}
// </button>
// <button className="image">
//     <div>
//         <img src="./css/img/imgicon.png" alt="edit"/>
//     </div>
// </button>
// <button className="video">
//     <div>
//         <img src="./css/img/video.png" alt="edit"/>
//     </div>
// </button>




{/* 
<form className="note-form" onSubmit={this.onSubmit}>
    <label htmlFor='txt'>Note</label>
    <input
        name='txt'
        type='text'
        placeholder='enter text'
        value={txt}
        onChange={this.onChange}
    />
    <button onClick={this.onSubmit}>Add</button>
</form> */}
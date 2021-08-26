export class Edit extends React.Component {


setClick = () => {
    console.log('whatss up');
    this.props.openContent()
}

    render() {
        const {isNoteContentOpen} = this.props

        return (
            <section className="edit" >
                <div>
                    <input type="text" placeholder="Title" className={`note-title ${isNoteContentOpen && 'clicked'}`} onClick={this.setClick}/>
                    {isNoteContentOpen && <input placeholder="Whats on your mind?" className="note-content" name="content" type="textarea" />}

                </div>
            </section>

        )
    }
}
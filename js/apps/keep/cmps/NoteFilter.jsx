export class NoteFilter extends React.Component {

    setType = (ev) => {
        const filterType = ev.target.name
        this.props.onFilter(filterType)
    }

    render() {
        return (
            <section className="note-filter">
                <input type="button" value="All" name="all" className="filter-box" onClick={this.setType} placeholder="Notes" />
                <input type="button" value="Notes" name="txt" className="filter-box" onClick={this.setType} placeholder="Notes" />
                <input type="button" value="Images" name="img" className="filter-box" onClick={this.setType} placeholder="Images" />
                <input type="button" value="Todos" name="todo" className="filter-box" onClick={this.setType} placeholder="Todos" />
            </section>
        )
    }

}
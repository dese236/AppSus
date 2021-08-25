export class SearchBar extends React.Component {
    state = {
        searchKey : '',
    }

handleChange = (ev) => {
    const searchKey = ev.target.value
    this.setState({ searchKey})
    this.props.onSetKey(searchKey)
}
    render() {
        const {searchKey} = this.state
        return(
                <input type="search" className="search-bar" value={searchKey} placeholder="Search" onChange={this.handleChange}>
                </input>
        )
    }
}
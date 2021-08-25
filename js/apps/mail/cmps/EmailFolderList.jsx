export class EmailFolderList extends React.Component {
  state = {
    filterBy: {
      status: "inbox",
      isRead: "",
      isStared: false,
      lables: "",
    },
  };

  handleChange = (ev) => {
    const field = ev.target.name;
    const value =
      ev.target.type === "button"
        ? ev.target.defaultValue
        : ev.target.defaultValue.toUpperCase();

    this.setState(
      {
        filterBy: {
          status: "inbox",
          isRead: "",
          isStared: false,
          lables: "",
          [field]: value,
        },
      },
      () => {
        this.props.onSetFilter(this.state.filterBy);
      }
    );
  };

  render() {
    const { status, isRead, isStared, lables } = this.state.filterBy;

    return (
      <div className="aside-nav">
        <ul className="aside-nav-list-filter">
          <li>
            <input
              name="status"
              type="button"
              value="inbox"
              onClick={this.handleChange}
            ></input>
          </li>
          <li>
            <input
              name="isStared"
              type="button"
              value="Stared"
              onClick={this.handleChange}
            ></input>
          </li>
          <li>
            <div
              onClick={() => {
                this.onFilter("{status:sent}");
              }}
            >
              Sent Mail
            </div>
          </li>
          <li>
            <div>Drafts</div>
          </li>
        </ul>
      </div>
    );
  }
}

//const criteria = {
//  status: 'inbox/sent/trash/draft',
//  txt: 'puki', // no need to support complex text search
//  isRead: true, // (optional property, if missing: show all)
//  isStared: true, // (optional property, if missing: show all)
//  lables: ['important', 'romantic'] // has any of the labels
// }

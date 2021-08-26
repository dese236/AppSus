import { eventBusService } from "../../../services/event-bus-service.js";

export class EmailFilter extends React.Component {
  handleTxtChange = (ev) => {
    this.removeEventBus = eventBusService.emit("input-txt", ev);
  };

  render() {
    return (
      <form className="search-mail-input">
        <input
          name="txt"
          type="text"
          id="txt"
          onChange={this.handleTxtChange}
          placeholder="Enter Name"
        />
        <select className='filter-is-read' name="isRead" onChange={this.handleTxtChange}>
          <option value="all">all</option>
          <option value="true">read</option>
          <option value="false">unread</option>
        </select>
      </form>
    );
  }
}

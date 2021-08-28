//import { eventBusService } from "../services/event-bus-service.js"

import { NavModal } from "./NavModal.jsx";

const { NavLink, withRouter } = ReactRouterDOM;

class _AppHeader extends React.Component {
  state = {
    isModalOpen: false,
  };
  toggleNavModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <section className="app-header">
        {isModalOpen && <NavModal toggleNavModal ={this.toggleNavModal} />}
        <nav>
          <h1 onClick={() => this.props.history.push("/")}><img src="././css/img/logo-svg.svg"/></h1>
          <img src="./css/img/menu-svg.svg" onClick={this.toggleNavModal} />
        </nav>
      </section>
    );
  }
}
export const AppHeader = withRouter(_AppHeader);

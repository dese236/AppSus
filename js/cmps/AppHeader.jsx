//import { eventBusService } from "../services/event-bus-service.js"

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
        {isModalOpen && <NavModal />}

        <nav>
          <h1 onClick={() => this.props.history.push("/")}>App Logo</h1>
          <img src="./css/img/squares.png" onClick={this.toggleNavModal} />
          {/*<NavLink activeClassName="my-active" exact to="/">
            Home
          </NavLink>*/}
          {/*<NavLink to="/about" >About</NavLink>
          <NavLink to="/car" >Our Cars</NavLink>*/}
        </nav>
      </section>
    );
  }
}
export const AppHeader = withRouter(_AppHeader);

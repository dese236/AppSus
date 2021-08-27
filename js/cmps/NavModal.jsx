const { NavLink, withRouter } = ReactRouterDOM;
//\
//{}
//          {<NavLink to="/about" >About</NavLink>
//          <NavLink to="/car" >Our Cars</NavLink>*/}

export function NavModal({ toggleNavModal }) {
  return (
    <div className="nav-modal">
      <NavLink
        onClick={toggleNavModal}
        activeClassName="my-active"
        exact
        to="/"
      >
        <img src="./css/img/home.png" />
      </NavLink>
      <NavLink onClick={toggleNavModal} to="/book">
        <img src="./css/img/book.png" />
      </NavLink>

      <NavLink onClick={toggleNavModal} to="/mail">
        <img src="./css/img/envelope.png" />
      </NavLink>

      <NavLink onClick={toggleNavModal} to="/keep">
        <img src="./css/img/pin.png" />
      </NavLink>
    </div>
  );
}

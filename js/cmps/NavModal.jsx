const { NavLink, withRouter } = ReactRouterDOM;
//\
//{}
//          {<NavLink to="/about" >About</NavLink>
//          <NavLink to="/car" >Our Cars</NavLink>*/}

export function NavModal() {
  return (
    <div className="nav-modal">
      <NavLink activeClassName="my-active" exact to="/">
        <img src="./css/img/home.png" />
      </NavLink>
      <NavLink exact to="/book">
        <img src="./css/img/book.png" />
      </NavLink>

      <NavLink exact to="/mail">
        <img src="./css/img/envelope.png" />
      </NavLink>

      <NavLink exact to="/keep">
        <img src="./css/img/pin.png" />
      </NavLink>
    </div>
  );
}

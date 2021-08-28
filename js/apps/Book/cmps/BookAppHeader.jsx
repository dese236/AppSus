const { NavLink, withRouter } = ReactRouterDOM;

export class BookAppHeader extends React.Component {
  render() {
    return (
      <div className='book-nav'>
        <NavLink activeClassName="my-active" exact to="/book/home">
          Home
        </NavLink>
        <NavLink to="/book/about">About</NavLink>
        <NavLink exact to="/book">
          Our Books
        </NavLink>
        <NavLink to="/book/search">Search book</NavLink>
      </div>
    );
  }
}
